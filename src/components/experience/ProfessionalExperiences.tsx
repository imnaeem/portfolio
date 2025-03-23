import { Stack, Typography } from '@mui/material';
import Card from '../shared/Card';

const experience = [
	{
		title: 'Software Engineer',
		description: (
			<>
				<Stack direction='row' justifyContent='space-between'>
					<Typography fontSize={14} fontWeight={500}>
						DevBrains
					</Typography>
					<Typography fontSize={14} fontWeight={500} variant='h6'>
						Dec 2022 - Present
					</Typography>
				</Stack>
				<ul style={{ paddingLeft: '25px', listStyleType: 'disc' }}>
					<li>
						Developed and optimized full-stack applications using Next.js and Nest.js, building dynamic UI for data
						visualization and operations.
					</li>
					<li>Enhanced API performance by efficiently using GraphQL, achieving 30% faster response times.</li>
					<li>Implemented RBAC with Auth0, ensuring secure and role-based access to application features.</li>
					<li>Ensured code reliability and functionality through unit and end-to-end testing.</li>
					<li>
						Worked on a Slack Polling app with a web interface, building interactive modals for Slack and implementing a
						microservices architecture using Kafka and Amazon SQS for scalable and efficient event processing.
					</li>
					<li>
						Integrated CI/CD pipelines to automate builds, testing, and deployments for a seamless development workflow.
					</li>
					<li>Led a team of three developers, conducted PR reviews, and ensured timely delivery.</li>
					<li>Collaborated in Agile environments using Jira and GitHub for task tracking and team coordination.</li>
				</ul>
			</>
		),
		color: '#FF6F61',
	},
	{
		title: 'Associate Software Engineer',
		description: (
			<>
				<Stack direction='row' justifyContent='space-between'>
					<Typography fontSize={14} fontWeight={500}>
						Kinectro
					</Typography>
					<Typography fontSize={14} fontWeight={500} variant='h6'>
						Aug 2022 - Nov 2022
					</Typography>
				</Stack>
				<ul style={{ paddingLeft: '25px', listStyleType: 'disc' }}>
					<li>
						Worked on a MERN stack e-commerce platform with GraphQL, integrated store management for WooCommerce and
						Shopify platforms.
					</li>
					<li>
						Integrated Facebook and Instagram for direct posting and automated content scheduling, streamlining social
						media management.
					</li>
					<li>
						Enabled seamless customer communication via Facebook Messenger, Instagram, and WhatsApp using Facebook APIs.
					</li>
				</ul>
			</>
		),
		color: '#FFD166',
	},
];

const ProfessionalExperiences = () => {
	return (
		<Stack spacing={3} width='100%'>
			{experience.map((item) => (
				<Card key={item.title} {...item} />
			))}
		</Stack>
	);
};

export default ProfessionalExperiences;
