import {
	Bolt as RealtimeIcon,
	Cloud as CloudIcon,
	Code as FrontendIcon,
	CodeOff as BackendIcon,
	SmartToy as AIIcon,
	Storage as DatabaseIcon,
} from '@mui/icons-material';
import { Box, Grid2, Typography } from '@mui/material';
import Card from '../shared/Card';

const services = [
	{
		title: 'Full-Stack Web Apps',
		description: 'End-to-end products with React, Next.js, and TypeScript, from database to deploy.',
		color: '#4F46E5',
		icon: <FrontendIcon />,
	},
	{
		title: 'Backend & APIs',
		description: 'Scalable backends with NestJS, GraphQL, and REST, built as microservices that hold up.',
		color: '#14B8A6',
		icon: <BackendIcon />,
	},
	{
		title: 'AI Agents & Workflows',
		description: 'Production AI with OpenAI and Langfuse: agents, RAG, and automations that actually ship.',
		color: '#F59E0B',
		icon: <AIIcon />,
	},
	{
		title: 'Real-Time Systems',
		description: 'Live features with WebSockets, GraphQL subscriptions, Kafka, and SQS.',
		color: '#8B5CF6',
		icon: <RealtimeIcon />,
	},
	{
		title: 'Cloud & DevOps',
		description: 'AWS (ECS, RDS, Lambda, S3), Docker, and CI/CD pipelines that keep releases boring.',
		color: '#EC4899',
		icon: <CloudIcon />,
	},
	{
		title: 'Databases & Performance',
		description: 'PostgreSQL, Prisma, and MongoDB tuned for speed, including 30% faster GraphQL APIs.',
		color: '#10B981',
		icon: <DatabaseIcon />,
	},
];

const Services = () => {
	return (
		<Box my={5}>
			<Typography
				sx={{
					fontWeight: 600,
					fontSize: { xs: 22, md: 26 },
					color: '#1E293B',
					mb: 3,
				}}>
				What I Do
			</Typography>
			<Grid2 container spacing={2.5}>
				{services.map((item) => (
					<Grid2 key={item.title} size={{ xs: 12, sm: 6, lg: 4 }}>
						<Card {...item} />
					</Grid2>
				))}
			</Grid2>
		</Box>
	);
};

export default Services;
