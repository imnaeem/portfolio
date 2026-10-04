import { Box, Stack, Typography } from '@mui/material';
import { Work, CalendarToday } from '@mui/icons-material';

const experience = [
	{
		title: 'Freelance Full-Stack Engineer',
		company: 'Ralliy',
		period: 'Jun 2026 - Sep 2026',
		color: '#F59E0B',
		highlights: [
			'Built a freelance marketplace backend with NestJS, schema-first GraphQL/Apollo, PostgreSQL/Prisma, and Redis/BullMQ for background jobs.',
			'Shipped AI job creation and freelancer onboarding from raw text and uploaded files, using OpenAI APIs with Langfuse for prompt management and tracing.',
			'Implemented real-time chat over Socket.IO and GraphQL subscriptions, with Clerk authentication.',
			'Integrated Stripe Connect with fiat and USDC escrow payments.',
			'Deployed on AWS ECS with RDS, ElastiCache, S3, and SES; Next.js 16 frontend with shadcn and Apollo.',
			'Built a home-repair services flow with lead management, appointment scheduling, multi-step surveys, and automated PDF reports.',
		],
	},
	{
		title: 'Software Engineer',
		company: 'DevBrains',
		period: 'Dec 2022 - Present',
		color: '#4F46E5',
		highlights: [
			'Developed and optimized full-stack applications using Next.js and NestJS, with MongoDB and PostgreSQL powering scalable backend systems.',
			'Enhanced API performance by optimizing GraphQL data fetching, achieving 30% faster response times.',
			'Implemented RBAC with Auth0, ensuring secure and role-based access to application features.',
			'Ensured code reliability and functionality through unit and end-to-end testing.',
			'Worked on a Slack polling app with a React web interface, enhancing Slack interactive modals and contributing to a Kafka and SQS based microservices architecture.',
			'Implemented CI/CD pipelines to streamline project builds, testing, and deployments.',
			'Leading multiple projects, conducting PR reviews, and ensuring timely delivery across different teams.',
			'Contributed to technical decisions and solution architecture across multiple projects.',
			'Effectively utilized AI coding tools (Cursor, Claude) to speed up development and improve code quality.',
			'Collaborated in Agile environments using Jira and GitHub for task tracking and team coordination.',
		],
	},
	{
		title: 'Associate Software Engineer',
		company: 'Kinectro',
		period: 'Aug 2022 - Nov 2022',
		color: '#14B8A6',
		highlights: [
			'Worked on a MERN stack e-commerce platform with GraphQL, integrated store management for WooCommerce and Shopify platforms.',
			'Integrated Facebook and Instagram for direct posting and automated content scheduling, streamlining social media management.',
			'Enabled seamless customer communication via Facebook Messenger, Instagram, and WhatsApp using Facebook APIs.',
		],
	},
];

const ProfessionalExperiences = () => {
	return (
		<Stack spacing={3} width='100%'>
			{experience.map((item) => (
				<Box
					key={item.title}
					sx={{
						p: { xs: 3, md: 4 },
						borderRadius: '16px',
						backgroundColor: '#FFFFFF',
						border: '1px solid #E2E8F0',
						transition: 'all 0.2s ease-in-out',
						'&:hover': {
							borderColor: item.color,
							boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
						},
					}}>
					<Stack direction={{ xs: 'column', sm: 'row' }} justifyContent='space-between' alignItems='flex-start' mb={2}>
						<Box>
							<Stack direction='row' alignItems='center' spacing={1.5} mb={0.5}>
								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										width: 36,
										height: 36,
										borderRadius: '10px',
										backgroundColor: `${item.color}15`,
									}}>
									<Work sx={{ color: item.color, fontSize: 18 }} />
								</Box>
								<Typography
									sx={{
										fontSize: { xs: 18, md: 20 },
										fontWeight: 600,
										color: '#1E293B',
									}}>
									{item.title}
								</Typography>
							</Stack>
							<Typography
								sx={{
									fontSize: 15,
									fontWeight: 500,
									color: item.color,
									ml: 6,
								}}>
								{item.company}
							</Typography>
						</Box>
						<Stack direction='row' alignItems='center' spacing={0.5} sx={{ mt: { xs: 1, sm: 0 } }}>
							<CalendarToday sx={{ color: '#64748B', fontSize: 14 }} />
							<Typography
								sx={{
									fontSize: 13,
									fontWeight: 500,
									color: '#64748B',
								}}>
								{item.period}
							</Typography>
						</Stack>
					</Stack>
					<Box
						component='ul'
						sx={{
							pl: 3,
							m: 0,
							'& li': {
								color: '#475569',
								fontSize: 14,
								lineHeight: 1.7,
								mb: 1,
								'&::marker': {
									color: item.color,
								},
							},
						}}>
						{item.highlights.map((highlight, index) => (
							<li key={index}>{highlight}</li>
						))}
					</Box>
				</Box>
			))}
		</Stack>
	);
};

export default ProfessionalExperiences;
