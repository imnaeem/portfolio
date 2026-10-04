import PersonalInfo from '@/components/about/PersonalInfo';
import Services from '@/components/about/Services';
import FeaturedWork from '@/components/about/FeaturedWork';
import Title from '@/components/shared/Title';
import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Fade, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
	return (
		<Fade in timeout={500}>
			<div>
				{/* Hero Section */}
				<Box
					sx={{
						p: 4,
						mb: 6,
						borderRadius: '24px',
						background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.04) 0%, rgba(20, 184, 166, 0.04) 100%)',
					}}>
					<Stack direction={{ xs: 'column-reverse', md: 'row' }} spacing={4} alignItems='center'>
						<Stack spacing={3} flex={1}>
							<Box>
								<Typography
									variant='body2'
									sx={{
										color: '#4F46E5',
										fontWeight: 600,
										fontSize: 14,
										mb: 1,
										letterSpacing: '0.5px',
									}}>
									SENIOR FULL-STACK ENGINEER
								</Typography>
								<Typography
									variant='h1'
									sx={{
										fontSize: { xs: 36, md: 48 },
										fontWeight: 700,
										color: '#1E293B',
										lineHeight: 1.2,
										mb: 2,
									}}>
									Hi, I'm Muhammad
									<Box component='span' sx={{ color: '#4F46E5' }}>
										{' '}
										Naeem
									</Box>
								</Typography>
								<Typography
									sx={{
										fontSize: { xs: 16, md: 18 },
										color: '#64748B',
										lineHeight: 1.7,
										maxWidth: '500px',
									}}>
									Everyone demos AI. I ship it. Senior Full-Stack Engineer with 4+ years of experience
									building scalable web apps and backend systems with Next.js, NestJS, GraphQL, and
									AWS, including production AI agents and LLM workflows.
								</Typography>
							</Box>
							<Stack direction='row' spacing={2}>
								<Link href='/contact'>
									<Button
										variant='contained'
										endIcon={<ArrowForward />}
										sx={{
											backgroundColor: '#4F46E5',
											'&:hover': {
												backgroundColor: '#4338CA',
											},
										}}>
										Get in Touch
									</Button>
								</Link>
								<Link href='/portfolio'>
									<Button
										variant='outlined'
										sx={{
											borderColor: '#E2E8F0',
											color: '#475569',
											'&:hover': {
												borderColor: '#4F46E5',
												backgroundColor: 'rgba(79, 70, 229, 0.04)',
											},
										}}>
										View Projects
									</Button>
								</Link>
							</Stack>
						</Stack>
						<Box
							sx={{
								position: 'relative',
								width: { xs: 200, md: 280 },
								height: { xs: 200, md: 280 },
							}}>
							<Box
								sx={{
									position: 'absolute',
									inset: -8,
									background: 'linear-gradient(135deg, #4F46E5 0%, #14B8A6 100%)',
									borderRadius: '50%',
									opacity: 0.15,
								}}
							/>
							<Image
								style={{
									borderRadius: '50%',
									objectFit: 'cover',
									border: '4px solid #FFFFFF',
									boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
								}}
								src='/profile-image.jpg'
								alt='Muhammad Naeem - Senior Full-Stack Engineer'
								fill
								priority
								placeholder='empty'
							/>
						</Box>
					</Stack>
				</Box>

				{/* About Section */}
				<Title title='About Me' subtitle='Engineer who takes products from idea to production' />
				<Box
					sx={{
						p: { xs: 3, md: 4 },
						borderRadius: '20px',
						backgroundColor: '#FFFFFF',
						border: '1px solid #E2E8F0',
						mb: 6,
					}}>
					<Typography
						sx={{
							fontSize: { xs: 15, md: 16 },
							lineHeight: 1.8,
							color: '#475569',
							mb: 2,
						}}>
						I'm a Software Engineer with 4+ years of experience building scalable full-stack applications
						with React, Next.js, Node.js, NestJS, MongoDB, PostgreSQL, and GraphQL. I focus on solving
						hard technical problems, taking ownership, and growing into technical leadership.
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: 15, md: 16 },
							lineHeight: 1.8,
							color: '#475569',
						}}>
						These days most of my work lives where AI meets production: AI agents and LLM workflows with
						OpenAI and Langfuse, real-time systems over WebSockets, and backends that survive real users.
						I lead projects, review code, and help teams ship.
					</Typography>
				</Box>

				<FeaturedWork />
				<PersonalInfo />
				<Services />
			</div>
		</Fade>
	);
};

export default About;
