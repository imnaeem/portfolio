import { Education } from '@/components/experience/Education';
import ProfessionalExperiences from '@/components/experience/ProfessionalExperiences';
import { Resume } from '@/components/experience/Resume';
import { Skills } from '@/components/experience/Skills';
import Title from '@/components/shared/Title';
import { Box, Fade, Stack, Typography } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Experience | Muhammad Naeem',
	description:
		'Full Stack JavaScript Developer skilled in React, Next.js, Node.js, and GraphQL, building scalable and high-performance web apps.',
};

const Experience = () => {
	return (
		<Fade in timeout={500}>
			<Box>
				<Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between'>
					<Title title='Professional Experience' />
					<Resume />
				</Stack>
				<ProfessionalExperiences />
				<Typography fontWeight={500} fontSize={30} my={3}>
					Technical Skills
				</Typography>
				<Skills />
				<Education />
			</Box>
		</Fade>
	);
};

export default Experience;
