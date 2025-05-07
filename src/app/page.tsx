import PersonalInfo from '@/components/about/PersonalInfo';
import Services from '@/components/about/Services';
import Title from '@/components/shared/Title';
import { Box, Fade, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const About = () => {
	return (
		<Fade in timeout={500}>
			<div>
				<Title title='About Me' />
				<Stack direction={{ xs: 'column', md: 'row' }} spacing={4} mb={4} alignItems='center'>
					<Image
						className='drop-shadow-lg'
						style={{ borderRadius: '50%', border: '4px solid #1877F2' }}
						src='/profile-picture.jpg'
						alt='profile-picture'
						height={300}
						width={260}
						priority
						placeholder='empty'
					/>
					<Stack spacing={2}>
						<Typography fontWeight={500} fontSize={25}>
							Who am I?
						</Typography>
						<Box>
							<Typography fontSize={16} lineHeight={2}>
								Software Engineer with 3 years of experience in building scalable JavaScript applications. Skilled in
								React, Next.js, Node.js, and NestJS, I specialize in designing efficient architectures, optimizing
								performance, and delivering seamless user experiences in Agile environments.
							</Typography>

							<Typography fontSize={16} lineHeight={2} mt={2}>
								I bring a problem-solving mindset, strong collaboration skills, and a focus on building maintainable,
								high-performance solutions. Passionate about improving workflows and mentoring developers, I help drive
								projects that create real impact while continuously learning and adapting to new technologies.
							</Typography>
						</Box>
					</Stack>
				</Stack>

				<PersonalInfo />
				<Services />
			</div>
		</Fade>
	);
};

export default About;
