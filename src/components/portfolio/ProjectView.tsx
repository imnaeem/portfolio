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
	const primaryColor = theme.palette.primary.main;

	const currentProject = useMemo(() => {
		return projectsList.find((project) => project.key === projectKey);
	}, [projectKey]);

	if (!currentProject?.details) return notFound();

	const { description, github, preview, techStack, images } = currentProject.details;

	return (
		<Fade in timeout={500}>
			<div>
				<Typography>{description}</Typography>
				{(github || preview) && (
					<>
						<Typography fontWeight={500} fontSize={30} my={3}>
							Links
						</Typography>
						<Stack gap={1.5} direction='row' flexWrap='wrap' my={3}>
							{github && (
								<Info
									title='Github'
									value={github}
									link={github}
									color='#24292e'
									icon={<GitHub />}
									sx={{ width: isMobile ? '100%' : 'fit-content' }}
								/>
							)}
							{preview && (
								<Info
									title='Live Preview'
									value={preview}
									link={preview}
									color={primaryColor}
									icon={<Link />}
									sx={{ width: isMobile ? '100%' : 'fit-content' }}
								/>
							)}
						</Stack>
					</>
				)}

				<Typography fontWeight={500} fontSize={30} my={3}>
					Technologies Used
				</Typography>
				<Skills skills={techStack} />
				<Typography fontWeight={500} fontSize={30} my={3}>
					Preview
				</Typography>
				<Box mb={4}>
					{images.length === 0 && (
						<Box
							sx={{
								height: '40vh',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								flexDirection: 'column',
							}}>
							<HideImageIcon sx={{ fontSize: '100px', color: 'grey' }} />
							<Typography fontSize={16} lineHeight={2} mt={2} textAlign='center'>
								Preview not available for this project.
							</Typography>
						</Box>
					)}
					<Carousel
						additionalTransfrom={0}
						arrows
						autoPlaySpeed={3000}
						centerMode={false}
						className=''
						containerClass='container'
						dotListClass=''
						draggable
						focusOnSelect={false}
						infinite
						itemClass=''
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
						sliderClass=''
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
			</div>
		</Fade>
	);
};

export default ProjectView;
