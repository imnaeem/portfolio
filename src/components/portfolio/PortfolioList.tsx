'use client';
import { projectsList } from '@/app/api/projects/data';
import { titleCase } from '@/utils';
import { Box, Grid2, Typography, Chip } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useMemo, useState } from 'react';
import PortfolioCategories from './PortfolioCategories';
import { ArrowForward, Star } from '@mui/icons-material';
import { Project } from '@/types';

// Algorithm to create balanced rows
const createBalancedRows = (projects: Project[]) => {
	const rows: Array<Array<{ project: Project; gridSize: { xs: number; sm: number; md: number } }>> = [];
	let currentRow: Array<{ project: Project; gridSize: { xs: number; sm: number; md: number } }> = [];
	let currentRowColumns = 0;
	const MAX_COLUMNS = 12;

	for (let i = 0; i < projects.length; i++) {
		const project = projects[i];
		const isFeatured = project.featured;
		const nextProject = projects[i + 1];
		const isNextFeatured = nextProject?.featured;

		// Calculate remaining space in current row
		const remainingColumns = MAX_COLUMNS - currentRowColumns;

		if (currentRowColumns === 0) {
			// Starting a new row
			if (isFeatured) {
				// Check if next is also featured
				if (isNextFeatured) {
					// Two featured cards in a row (6 + 6 = 12)
					currentRow.push({ project, gridSize: { xs: 12, sm: 6, md: 6 } });
					currentRowColumns = 6;
				} else if (nextProject && !isNextFeatured) {
					// One featured + one regular (7 + 5 = 12 or 8 + 4 = 12)
					currentRow.push({ project, gridSize: { xs: 12, sm: 6, md: 7 } });
					currentRowColumns = 7;
				} else {
					// Single featured card fills the row
					currentRow.push({ project, gridSize: { xs: 12, sm: 12, md: 12 } });
					currentRowColumns = MAX_COLUMNS;
				}
			} else {
				// Regular card - check how many regulars follow
				let regularCount = 1;
				for (let j = i + 1; j < projects.length && j < i + 3; j++) {
					if (!projects[j].featured) regularCount++;
					else break;
				}

				if (regularCount >= 3) {
					// Three regular cards (4 + 4 + 4 = 12)
					currentRow.push({ project, gridSize: { xs: 12, sm: 6, md: 4 } });
					currentRowColumns = 4;
				} else if (regularCount === 2) {
					// Two regular cards (6 + 6 = 12)
					currentRow.push({ project, gridSize: { xs: 12, sm: 6, md: 6 } });
					currentRowColumns = 6;
				} else {
					// Single regular card
					currentRow.push({ project, gridSize: { xs: 12, sm: 12, md: 12 } });
					currentRowColumns = MAX_COLUMNS;
				}
			}
		} else {
			// Adding to existing row
			if (remainingColumns === 6) {
				// Need exactly 6 columns
				currentRow.push({ project, gridSize: { xs: 12, sm: 6, md: 6 } });
				currentRowColumns = MAX_COLUMNS;
			} else if (remainingColumns === 5) {
				// Need 5 columns (paired with 7-column featured)
				currentRow.push({ project, gridSize: { xs: 12, sm: 6, md: 5 } });
				currentRowColumns = MAX_COLUMNS;
			} else if (remainingColumns === 4) {
				// Need 4 columns
				currentRow.push({ project, gridSize: { xs: 12, sm: 6, md: 4 } });
				currentRowColumns += 4;
			} else if (remainingColumns === 8) {
				// 8 columns remaining - could fit 2 regular (4+4) or 1 card
				const nextRegular = nextProject && !nextProject.featured;
				if (nextRegular) {
					currentRow.push({ project, gridSize: { xs: 12, sm: 6, md: 4 } });
					currentRowColumns += 4;
				} else {
					currentRow.push({ project, gridSize: { xs: 12, sm: 6, md: 8 } });
					currentRowColumns = MAX_COLUMNS;
				}
			}
		}

		// If row is complete or last item, push to rows
		if (currentRowColumns === MAX_COLUMNS || i === projects.length - 1) {
			rows.push([...currentRow]);
			currentRow = [];
			currentRowColumns = 0;
		}
	}

	return rows.flat();
};

const PortfolioList = () => {
	const [category, setCategory] = useState('all');

	const filteredProjects = useMemo(() => {
		if (category === 'all') return projectsList;
		return projectsList.filter(({ type }) => type === category);
	}, [category]);

	const balancedProjects = useMemo(() => createBalancedRows(filteredProjects), [filteredProjects]);

	return (
		<>
			<Suspense fallback={<p>Loading...</p>}>
				<PortfolioCategories category={category} setCategory={setCategory} />
			</Suspense>
			<Grid2 
				container 
				spacing={{ xs: 2, sm: 2.5, md: 3 }} 
				my={4}
				sx={{
					'& > *': {
						animation: 'fadeInUp 0.6s ease-out forwards',
						opacity: 0,
					},
					'& > *:nth-of-type(1)': { animationDelay: '0.1s' },
					'& > *:nth-of-type(2)': { animationDelay: '0.15s' },
					'& > *:nth-of-type(3)': { animationDelay: '0.2s' },
					'& > *:nth-of-type(4)': { animationDelay: '0.25s' },
					'& > *:nth-of-type(5)': { animationDelay: '0.3s' },
					'& > *:nth-of-type(6)': { animationDelay: '0.35s' },
					'@keyframes fadeInUp': {
						'0%': {
							opacity: 0,
							transform: 'translateY(30px)',
						},
						'100%': {
							opacity: 1,
							transform: 'translateY(0)',
						},
					},
				}}
			>
				{balancedProjects.map(({ project: item, gridSize }) => {
					const isFeatured = item.featured;
					
					return (
						<Grid2 key={item.key} size={gridSize}>
							<Link href={`/portfolio/${item.key}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										height: '100%',
										borderRadius: '12px',
										backgroundColor: '#FFFFFF',
										border: '1px solid #E5E7EB',
										cursor: 'pointer',
										textAlign: 'left',
										transition: 'all 0.3s ease',
										overflow: 'hidden',
										position: 'relative',
										'&:hover': {
											borderColor: item.type === 'professional' ? '#4F46E5' : '#14B8A6',
											boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
											transform: 'translateY(-4px)',
											'& .project-image': {
												transform: 'scale(1.05)',
											},
											'& .project-arrow': {
												opacity: 1,
												transform: 'translateX(4px)',
											},
										},
									}}>
									<Box
										sx={{
											position: 'relative',
											overflow: 'hidden',
											height: '200px',
											backgroundColor: '#F9FAFB',
										}}>
										<Image
											className='project-image'
											style={{
												height: '100%',
												width: '100%',
												objectFit: 'cover',
												transition: 'transform 0.4s ease',
											}}
											src={item.thumbnail}
											alt={item.key}
											width={500}
											height={200}
										/>
										{isFeatured && (
											<Chip
												icon={<Star sx={{ fontSize: 16 }} />}
												label="Featured"
												size="small"
												sx={{
													position: 'absolute',
													top: 12,
													left: 12,
													backgroundColor: 'rgba(255, 255, 255, 0.95)',
													backdropFilter: 'blur(8px)',
													fontWeight: 600,
													fontSize: 11,
													color: '#F59E0B',
													border: '1px solid rgba(245, 158, 11, 0.2)',
													'& .MuiChip-icon': {
														color: '#F59E0B',
													},
												}}
											/>
										)}
									</Box>
									<Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
										<Box
											sx={{
												display: 'inline-flex',
												alignSelf: 'flex-start',
												alignItems: 'center',
												px: 2,
												py: 0.5,
												borderRadius: '6px',
												backgroundColor: item.type === 'professional' ? '#EEF2FF' : '#F0FDFA',
												mb: 1.5,
											}}>
											<Typography
												sx={{
													fontSize: 11,
													fontWeight: 600,
													color: item.type === 'professional' ? '#4F46E5' : '#14B8A6',
													letterSpacing: '0.5px',
													textTransform: 'uppercase',
												}}>
												{titleCase(item.type)}
											</Typography>
										</Box>
										<Box sx={{ flexGrow: 1 }}>
											<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, mb: 1 }}>
												<Typography
													sx={{
														fontWeight: 600,
														fontSize: 17,
														color: '#111827',
														lineHeight: 1.3,
													}}>
													{item.title}
												</Typography>
												<ArrowForward
													className='project-arrow'
													sx={{
														color: item.type === 'professional' ? '#4F46E5' : '#14B8A6',
														fontSize: 20,
														opacity: 0,
														flexShrink: 0,
														transition: 'all 0.3s ease',
													}}
												/>
											</Box>
											<Typography
												sx={{
													fontSize: 14,
													color: '#6B7280',
													lineHeight: 1.6,
													display: '-webkit-box',
													WebkitLineClamp: 2,
													WebkitBoxOrient: 'vertical',
													overflow: 'hidden',
													textOverflow: 'ellipsis',
												}}>
												{item.metadata.description}
											</Typography>
										</Box>
									</Box>
								</Box>
							</Link>
						</Grid2>
					);
				})}
			</Grid2>
		</>
	);
};

export default PortfolioList;
