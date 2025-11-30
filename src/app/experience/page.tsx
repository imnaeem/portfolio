import { Education } from '@/components/experience/Education';
import ProfessionalExperiences from '@/components/experience/ProfessionalExperiences';
import { Resume } from '@/components/experience/Resume';
import { Skills } from '@/components/experience/Skills';
import Title from '@/components/shared/Title';
import { Box, Fade, Stack, Typography } from '@mui/material';
import { Metadata } from 'next';

const technologies = [
	'ReactJs',
	'NextJs',
	'VueJs',
	'Redux',
	'React Query',
	'Git',
	'Github',
	'NodeJs',
	'NestJs',
	'Apollo GraphQL',
	'Kafka',
	'Github Actions',
	'CI/CD',
	'Typescript',
	'MongoDB',
	'SQL',
	'AWS Services',
	'Vercel',
	'Docker',
];

export const metadata: Metadata = {
	title: 'Experience | Muhammad Naeem',
	description:
		'Full Stack JavaScript Developer skilled in React, Next.js, Node.js, and GraphQL, building scalable and high-performance web apps.',
};

const Experience = () => {
	return (
		<Fade in timeout={500}>
			<Box>
				<Stack
					direction={{ xs: 'column', md: 'row' }}
					justifyContent='space-between'
					alignItems={{ xs: 'flex-start', md: 'center' }}
					mb={2}>
					<Title title='Experience' subtitle='My professional journey and technical expertise' />
					<Resume />
				</Stack>

				<Box mb={6}>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: { xs: 20, md: 24 },
							color: '#1E293B',
							mb: 3,
						}}>
						Work History
					</Typography>
					<ProfessionalExperiences />
				</Box>

				<Box mb={6}>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: { xs: 20, md: 24 },
							color: '#1E293B',
							mb: 3,
						}}>
						Technical Skills
					</Typography>
					<Skills skills={technologies} />
				</Box>

				<Education />
			</Box>
		</Fade>
	);
};

export default Experience;
