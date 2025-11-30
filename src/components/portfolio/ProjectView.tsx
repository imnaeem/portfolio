'use client';
import { GitHub, Link } from '@mui/icons-material';
import { Box, Fade, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { notFound } from 'next/navigation';
import { useMemo } from 'react';
import Carousel from 'react-multi-carousel';
import { Skills } from '../experience/Skills';
import Info from '../shared/Info';
import 'react-multi-carousel/lib/styles.css';
import { projectsList } from '@/app/api/projects/data';
import HideImageIcon from '@mui/icons-material/HideImage';

type Props = { projectKey: string };

const ProjectView = ({ projectKey }: Props) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	const currentProject = useMemo(() => {
		return projectsList.find((project) => project.key === projectKey);
	}, [projectKey]);

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
			</div>
		</Fade>
	);
};

export default ProjectView;
