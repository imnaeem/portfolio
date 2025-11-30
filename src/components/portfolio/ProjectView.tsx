'use client';
import { GitHub, Link } from '@mui/icons-material';
import { Box, Fade, Grid2, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { notFound } from 'next/navigation';
import { useMemo } from 'react';
import Carousel from 'react-multi-carousel';
import { Skills } from '../experience/Skills';
import Info from '../shared/Info';
import 'react-multi-carousel/lib/styles.css';
import { projectsList } from '@/app/api/projects/data';
import HideImageIcon from '@mui/icons-material/HideImage';
import NextLink from 'next/link';

type Props = { projectKey: string };

const ProjectView = ({ projectKey }: Props) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	const currentProject = useMemo(() => {
		return projectsList.find((project) => project.key === projectKey);
	}, [projectKey]);

	const currentIndex = useMemo(() => {
		return projectsList.findIndex((project) => project.key === projectKey);
	}, [projectKey]);

	const prevProject = currentIndex > 0 ? projectsList[currentIndex - 1] : null;
	const nextProject = currentIndex < projectsList.length - 1 ? projectsList[currentIndex + 1] : null;

	if (!currentProject?.details) return notFound();

	const { description, github, preview, techStack, images } = currentProject.details;

	return (
		<Fade in timeout={500}>
			<div>
				<Box
					sx={{
						p: { xs: 3, md: 4 },
						borderRadius: '16px',
						backgroundColor: '#FFFFFF',
						border: '1px solid #E2E8F0',
						mb: 4,
					}}>
					<Typography
						sx={{
							fontSize: { xs: 15, md: 16 },
							lineHeight: 1.8,
							color: '#475569',
						}}>
						{description}
					</Typography>
				</Box>

				{(github || preview) && (
					<Box mb={4}>
						<Typography
							sx={{
								fontWeight: 600,
								fontSize: { xs: 20, md: 24 },
								color: '#1E293B',
								mb: 3,
							}}>
							Project Links
						</Typography>
						<Stack gap={2} direction={{ xs: 'column', sm: 'row' }} flexWrap='wrap'>
							{github && (
								<Info
									title='Github'
									value='View Source Code'
									link={github}
									color='#1E293B'
									icon={<GitHub />}
									sx={{ width: isMobile ? '100%' : 'fit-content', minWidth: 220 }}
								/>
							)}
							{preview && (
								<Info
									title='Live Preview'
									value='Visit Website'
									link={preview}
									color='#4F46E5'
									icon={<Link />}
									sx={{ width: isMobile ? '100%' : 'fit-content', minWidth: 220 }}
								/>
							)}
						</Stack>
					</Box>
				)}

				<Box mb={4}>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: { xs: 20, md: 24 },
							color: '#1E293B',
							mb: 3,
						}}>
						Technologies Used
					</Typography>
					<Skills skills={techStack} />
				</Box>

				<Box mb={4}>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: { xs: 20, md: 24 },
							color: '#1E293B',
							mb: 3,
						}}>
						Project Preview
					</Typography>
					{images.length === 0 && (
						<Box
							sx={{
								height: '40vh',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								flexDirection: 'column',
								backgroundColor: '#F8FAFC',
								borderRadius: '16px',
								border: '1px solid #E2E8F0',
							}}>
							<HideImageIcon sx={{ fontSize: 80, color: '#CBD5E1', mb: 2 }} />
							<Typography
								sx={{
									fontSize: 16,
									color: '#64748B',
								}}>
								Preview not available for this project.
							</Typography>
						</Box>
					)}
					{images.length > 0 && (
						<Box
							sx={{
								borderRadius: '16px',
								overflow: 'hidden',
								border: '1px solid #E2E8F0',
								'& .react-multi-carousel-dot button': {
									borderColor: '#CBD5E1',
								},
								'& .react-multi-carousel-dot--active button': {
									backgroundColor: '#4F46E5',
									borderColor: '#4F46E5',
								},
							}}>
							<Carousel
								additionalTransfrom={0}
								arrows
								autoPlaySpeed={3000}
								centerMode={false}
								containerClass='container'
								draggable
								focusOnSelect={false}
								infinite
								keyBoardControl
								minimumTouchDrag={80}
								pauseOnHover
								renderArrowsWhenDisabled={false}
								renderButtonGroupOutside={false}
								renderDotsOutside={false}
								responsive={{
									desktop: {
										breakpoint: {
											max: 3000,
											min: 1024,
										},
										items: 1,
									},
									mobile: {
										breakpoint: {
											max: 464,
											min: 0,
										},
										items: 1,
									},
									tablet: {
										breakpoint: {
											max: 1024,
											min: 464,
										},
										items: 1,
									},
								}}
								rewind={false}
								rewindWithAnimation={false}
								rtl={false}
								shouldResetAutoplay
								showDots
								slidesToSlide={1}
								swipeable>
								{images.map((image) => (
									<img
										key={image.key}
										src={image.url}
										alt={image.key}
										style={{
											display: 'block',
											height: '100%',
											margin: 'auto',
											width: '100%',
										}}
									/>
								))}
							</Carousel>
						</Box>
					)}
				</Box>

				{/* Next/Previous Navigation */}
				<Box sx={{ mt: 6 }}>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: { xs: 20, md: 24 },
							color: '#1E293B',
							mb: 3,
						}}>
						More Projects
					</Typography>
					<Grid2 container spacing={3}>
						{prevProject && (
							<Grid2 size={{ xs: 12, md: 6 }}>
								<NextLink href={`/portfolio/${prevProject.key}`} style={{ textDecoration: 'none' }}>
									<Box
										sx={{
											position: 'relative',
											height: 140,
											borderRadius: '12px',
											overflow: 'hidden',
											cursor: 'pointer',
											transition: 'transform 0.3s ease',
											'&:hover': {
												transform: 'translateY(-4px)',
												'& .nav-overlay': {
													background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2))',
												},
											},
										}}>
										<img
											src={prevProject.thumbnail}
											alt={prevProject.title}
											style={{
												width: '100%',
												height: '100%',
												objectFit: 'cover',
											}}
										/>
										<Box
											className='nav-overlay'
											sx={{
												position: 'absolute',
												inset: 0,
												background: 'linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.3))',
												display: 'flex',
												flexDirection: 'column',
												justifyContent: 'flex-end',
												p: 2.5,
												transition: 'background 0.3s ease',
											}}>
											<Box
												sx={{
													display: 'inline-flex',
													alignItems: 'center',
													gap: 1,
													mb: 1.5,
													backgroundColor: 'rgba(255, 255, 255, 0.2)',
													backdropFilter: 'blur(8px)',
													px: 1.5,
													py: 0.75,
													borderRadius: '6px',
													width: 'fit-content',
												}}>
												<Typography
													sx={{
														fontSize: 12,
														fontWeight: 700,
														color: '#FFFFFF',
														textTransform: 'uppercase',
														letterSpacing: '0.5px',
													}}>
													← Previous
												</Typography>
											</Box>
											<Typography
												sx={{
													fontSize: 16,
													fontWeight: 700,
													color: '#FFFFFF',
													lineHeight: 1.3,
													display: '-webkit-box',
													WebkitLineClamp: 2,
													WebkitBoxOrient: 'vertical',
													overflow: 'hidden',
												}}>
												{prevProject.title}
											</Typography>
										</Box>
									</Box>
								</NextLink>
							</Grid2>
						)}

						{nextProject && (
							<Grid2 size={{ xs: 12, md: 6 }}>
								<NextLink href={`/portfolio/${nextProject.key}`} style={{ textDecoration: 'none' }}>
									<Box
										sx={{
											position: 'relative',
											height: 140,
											borderRadius: '12px',
											overflow: 'hidden',
											cursor: 'pointer',
											transition: 'transform 0.3s ease',
											'&:hover': {
												transform: 'translateY(-4px)',
												'& .nav-overlay': {
													background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2))',
												},
											},
										}}>
										<img
											src={nextProject.thumbnail}
											alt={nextProject.title}
											style={{
												width: '100%',
												height: '100%',
												objectFit: 'cover',
											}}
										/>
										<Box
											className='nav-overlay'
											sx={{
												position: 'absolute',
												inset: 0,
												background: 'linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.3))',
												display: 'flex',
												flexDirection: 'column',
												justifyContent: 'flex-end',
												alignItems: 'flex-end',
												p: 2.5,
												transition: 'background 0.3s ease',
											}}>
											<Box
												sx={{
													display: 'inline-flex',
													alignItems: 'center',
													gap: 1,
													mb: 1.5,
													backgroundColor: 'rgba(255, 255, 255, 0.2)',
													backdropFilter: 'blur(8px)',
													px: 1.5,
													py: 0.75,
													borderRadius: '6px',
													width: 'fit-content',
												}}>
												<Typography
													sx={{
														fontSize: 12,
														fontWeight: 700,
														color: '#FFFFFF',
														textTransform: 'uppercase',
														letterSpacing: '0.5px',
													}}>
													Next →
												</Typography>
											</Box>
											<Typography
												sx={{
													fontSize: 16,
													fontWeight: 700,
													color: '#FFFFFF',
													lineHeight: 1.3,
													textAlign: 'right',
													display: '-webkit-box',
													WebkitLineClamp: 2,
													WebkitBoxOrient: 'vertical',
													overflow: 'hidden',
												}}>
												{nextProject.title}
											</Typography>
										</Box>
									</Box>
								</NextLink>
							</Grid2>
						)}
					</Grid2>
				</Box>
			</div>
		</Fade>
	);
};

export default ProjectView;
