/**
 * Shared site content — socials, contact info, experience, skills, education.
 * (Project/blog content lives in the read-only API data files.)
 */

export const socials = {
	linkedin: 'https://www.linkedin.com/in/im-naeem/',
	github: 'https://github.com/imnaeem/',
	whatsapp: '/whatsapp',
	email: 'contact@imnaeem.dev',
	emailAlt: 'imnaeem.dev@gmail.com',
	location: 'Lahore, Pakistan',
};

export type ExperienceItem = {
	title: string;
	company: string;
	period: string;
	highlights: string[];
};

export const experience: ExperienceItem[] = [
	{
		title: 'Software Engineer',
		company: 'DevBrains',
		period: 'Dec 2022 - Present',
		highlights: [
			'Developed and optimized full-stack applications using Next.js and Nest.js, building dynamic UI for data visualization and operations.',
			'Enhanced API performance by optimizing using GraphQL, achieving 30% faster response times.',
			'Implemented RBAC with Auth0, ensuring secure and role-based access to application features.',
			'Ensured code reliability and functionality through unit and end-to-end testing.',
			'Worked on a Slack polling app with a React web interface, enhancing Slack interactive modals and contributing to a Kafka and SQS based microservices architecture.',
			'Implemented CI/CD pipelines to streamline project builds, testing, and deployments.',
			'Leading a team of three developers, conducting PR reviews, and ensuring timely delivery.',
			'Effectively utilized AI coding tools (Cursor, Claude) to speed up development and improve code quality.',
			'Collaborated in Agile environments using Jira and GitHub for task tracking and team coordination.',
		],
	},
	{
		title: 'Associate Software Engineer',
		company: 'Kinectro',
		period: 'Aug 2022 - Nov 2022',
		highlights: [
			'Worked on a MERN stack e-commerce platform with GraphQL, integrated store management for WooCommerce and Shopify platforms.',
			'Integrated Facebook and Instagram for direct posting and automated content scheduling, streamlining social media management.',
			'Enabled seamless customer communication via Facebook Messenger, Instagram, and WhatsApp using Facebook APIs.',
		],
	},
];

export type SkillGroup = {
	label: string;
	skills: string[];
};

export const skillGroups: SkillGroup[] = [
	{
		label: 'Frontend',
		skills: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'Redux', 'React Query', 'Tailwind CSS', 'MUI'],
	},
	{
		label: 'Backend',
		skills: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'GraphQL', 'WebSockets'],
	},
	{
		label: 'Databases',
		skills: ['MongoDB', 'Mongoose', 'SQL', 'PostgreSQL', 'Prisma'],
	},
	{
		label: 'Cloud & DevOps',
		skills: [
			'AWS (ECS, EC2, RDS, SQS, Lambda, S3, CodePipeline, CDK)',
			'Docker',
			'CI/CD',
			'Vercel',
		],
	},
	{
		label: 'Tools & Architecture',
		skills: [
			'Kafka',
			'RabbitMQ',
			'Git',
			'GitHub',
			'Stripe',
			'OpenAI APIs',
			'Langfuse',
			'Claude Code',
			'Cursor',
		],
	},
];

export const education = {
	degree: 'Bachelor of Science in Information Technology',
	school: 'Punjab University College of Information Technology | PUCIT',
	period: 'Oct 2018 - Jul 2022',
	note: 'CGPA 3.13/4.0',
};
