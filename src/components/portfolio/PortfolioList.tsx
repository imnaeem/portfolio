'use client';
import { projectsList } from '@/app/api/projects/data';
import { titleCase } from '@/utils';
import { Box, Grid2, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useMemo, useState } from 'react';
import PortfolioCategories from './PortfolioCategories';
import { ArrowForward } from '@mui/icons-material';

const PortfolioList = () => {
	const [category, setCategory] = useState('all');

	const filteredProjects = useMemo(() => {
		if (category === 'all') return projectsList;
		return projectsList.filter(({ type }) => type === category);
	}, [category]);

	return (
		<>
			<Suspense fallback={<p>Loading...</p>}>
				<PortfolioCategories category={category} setCategory={setCategory} />
			</Suspense>
			<Grid2 container spacing={3} my={4}>
				{filteredProjects.map((item) => (
					<Grid2 key={item.key} size={{ xs: 12, sm: 6, lg: 4 }}>
						<Link href={`/portfolio/${item.key}`}>
							<Box
								sx={{
									p: 2,
									display: 'block',
									width: '100%',
									borderRadius: '16px',
									backgroundColor: '#FFFFFF',
									border: '1px solid #E2E8F0',
									cursor: 'pointer',
									textAlign: 'left',
									transition: 'all 0.25s ease-in-out',
									overflow: 'hidden',
									'&:hover': {
										borderColor: '#4F46E5',
										boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)',
										transform: 'translateY(-4px)',
										'& .project-arrow': {
											transform: 'translateX(4px)',
											opacity: 1,
										},
									},
								}}>
								<Box
									sx={{
										position: 'relative',
										overflow: 'hidden',
										borderRadius: '12px',
										mb: 2,
									}}>
									<Image
										style={{
											height: '200px',
											width: '100%',
											objectFit: 'cover',
										}}
										src={item.thumbnail}
										alt={item.key}
										width={500}
										height={200}
									/>
								</Box>
								<Box
									sx={{
										display: 'inline-block',
										px: 1.5,
										py: 0.5,
										borderRadius: '6px',
										backgroundColor:
											item.type === 'professional' ? 'rgba(79, 70, 229, 0.1)' : 'rgba(20, 184, 166, 0.1)',
										mb: 1.5,
									}}>
									<Typography
										sx={{
											fontSize: 12,
											fontWeight: 600,
											color: item.type === 'professional' ? '#4F46E5' : '#14B8A6',
											letterSpacing: '0.5px',
											textTransform: 'uppercase',
										}}>
										{titleCase(item.type)}
									</Typography>
								</Box>
								<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
									<Typography
										sx={{
											fontWeight: 600,
											fontSize: { xs: 18, md: 20 },
											color: '#1E293B',
											lineHeight: 1.3,
										}}>
										{item.title}
									</Typography>
									<ArrowForward
										className='project-arrow'
										sx={{
											color: '#4F46E5',
											fontSize: 18,
											opacity: 0.5,
											transition: 'all 0.2s ease-in-out',
										}}
									/>
								</Box>
							</Box>
						</Link>
					</Grid2>
				))}
			</Grid2>
		</>
	);
};

export default PortfolioList;
