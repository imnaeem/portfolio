import PersonalInfo from '@/components/about/PersonalInfo';
import Services from '@/components/about/Services';
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
									FULL STACK DEVELOPER
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
									Software Engineer with 4+ years of experience in building scalable JavaScript applications. Skilled
									in React, Next.js, Node.js, and NestJS.
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
								alt='Muhammad Naeem - Full Stack Developer'
								fill
								priority
								placeholder='empty'
							/>
						</Box>
					</Stack>
				</Box>

				{/* About Section */}
				<Title title='About Me' subtitle='Passionate about building impactful digital solutions' />
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
						I bring a problem-solving mindset, strong collaboration skills, and a focus on building maintainable,
						high-performance solutions. I specialize in designing efficient architectures, optimizing performance, and
						delivering seamless user experiences in Agile environments.
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: 15, md: 16 },
							lineHeight: 1.8,
							color: '#475569',
						}}>
						Passionate about improving workflows and mentoring developers, I help drive projects that create real
						impact while continuously learning and adapting to new technologies.
					</Typography>
				</Box>

				<PersonalInfo />
				<Services />
			</div>
		</Fade>
	);
};

export default About;
