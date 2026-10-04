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
	'Tailwind CSS',
	'Typescript',
	'NodeJs',
	'Express.js',
	'NestJs',
	'Apollo GraphQL',
	'REST APIs',
	'WebSockets',
	'Prisma',
	'MongoDB',
	'PostgreSQL',
	'SQL',
	'Kafka',
	'RabbitMQ',
	'AWS Services',
	'Docker',
	'CI/CD',
	'Vercel',
	'OpenAI APIs',
	'Langfuse',
	'Stripe',
	'Git',
	'Github',
	'Github Actions',
];

export const metadata: Metadata = {
	title: 'Experience | Muhammad Naeem',
	description:
		'Senior Full-Stack Engineer building scalable web apps and backend systems with Next.js, NestJS, AWS, and AI-native workflows.',
};

const Experience = () => {
	return (
		<Fade in timeout={500}>
			<Box>
			<Stack
				direction={{ xs: 'column', md: 'row' }}
				justifyContent='space-between'
				alignItems={{ xs: 'flex-start', md: 'center' }}
				mb={2}
				spacing={{ xs: 2, md: 0 }}>
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
