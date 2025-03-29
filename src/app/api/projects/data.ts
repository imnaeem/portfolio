import { Project } from '@/types';

export const projectsList: Project[] = [
	{
		title: 'Platforms Inspection',
		key: 'platform-inspection',
		type: 'professional',
		color: '#000000',
		thumbnail: '/images/projects/platform-inspection/thumbnail.jpeg',
		metadata: {
			description: 'A web application for platforms inspection and management.',
		},
		details: {
			github: '',
			techStack: ['React.js', 'Next.js', 'Node.js', 'Nest.js', 'GraphQL', 'MongoDB', 'MUI', 'Recoil.js'],
			preview: '',
			description:
				'This project facilitates comprehensive inspection, analysis, and management for Marine Terminal & Offshore Platform infrastructure. It enables inspectors and engineers to assess conditions, identify issues, and take necessary actions to ensure safety, compliance, and operational efficiency.',
			images: [],
		},
	},
	{
		title: 'Poll App',
		key: 'poll-app',
		type: 'professional',
		color: '#008FF5',
		thumbnail: '/images/projects/poll-app/thumbnail.png',
		metadata: {
			description: 'A web and slack application for creating and managing polls.',
		},
		details: {
			github: '',
			techStack: [
				'React.js',
				'Node.js',
				'Express.js',
				'Meteor',
				'GraphQL',
				'MongoDB',
				'MUI',
				'Kafka',
				'AWS',
				'Slack APIs',
			],
			preview: '',
			description:
				'This project is a polling application that seamlessly integrates with Slack while providing a web-based interface for managing and analyzing polls. The Slack app enables users to create, share, and participate in polls directly within Slack channels, while the interactive modals enhance the user experience by allowing structured and intuitive poll creation. The web interface offers comprehensive poll management, real-time results visualization, and detailed analytics, making it easy to track responses and gain insights. Designed for teams and organizations, this solution streamlines decision-making and feedback collection within Slack.',
			images: [],
		},
	},
	{
		title: 'Shuttle Pro',
		key: 'shuttle-pro',
		type: 'professional',
		color: '#187355',
		thumbnail: '/images/projects/shuttle-pro/thumbnail.png',
		metadata: {
			description:
				'MERN E-Commerce Platform with GraphQL, WooCommerce & Shopify Integration, and Automated Social Media Management.',
		},
		details: {
			github: '',
			techStack: [
				'React.js',
				'Node.js',
				'Express.js',
				'GraphQL',
				'MongoDB',
				'Tailwind CSS',
				'MUI',
				'Redux',
				'React Query',
				'Facebook APIs',
			],
			preview: '',
			description:
				'This project is a MERN stack e-commerce platform that integrates WooCommerce and Shopify, allowing seamless store management from a single interface. It provides merchants with powerful tools to manage products, orders, and inventory across multiple platforms. The system also features GraphQL API integration, ensuring efficient data retrieval and real-time updates. Additionally, it streamlines social media management by enabling direct posting and automated content scheduling on Facebook and Instagram. For enhanced customer engagement, the platform integrates Facebook Messenger, Instagram, and WhatsApp, enabling businesses to communicate directly with customers through Facebook APIs.',
			images: [],
		},
	},
	{
		title: 'GOC Installers',
		key: 'goc-installers',
		type: 'professional',
		color: '#044a20',
		thumbnail: '/images/projects/goc-installers/thumbnail.png',
		metadata: {
			description:
				'Home Repair Service System with Lead Management, Appointment Scheduling, and Automated Survey Reports.',
		},
		details: {
			github: '',
			techStack: [
				'React.js',
				'Node.js',
				'Express.js',
				'MongoDB',
				'MUI',
				'Tailwind CSS',
				'Redux',
				'Redux Toolkit',
				'React Query',
				'Vercel',
			],
			preview: 'https://goc.techshiner.com/',
			description:
				'This project is a comprehensive home repair service system designed to efficiently manage leads, schedule appointments, and collect structured survey data. It features a multi-step home assessment survey, enabling service providers to gather detailed information about customer needs. The platform also includes an appointment booking system, allowing customers to schedule visits with professionals easily. Additionally, it automates PDF report generation, compiling survey responses and images into structured documents. This ensures organized data management, enhances service efficiency, and improves customer communication.',
			images: [
				{
					url: '/images/projects/goc-installers/img1.jpg',
					key: 'img1',
				},
				{
					url: '/images/projects/goc-installers/img2.jpg',
					key: 'img2',
				},
				{
					url: '/images/projects/goc-installers/img3.jpg',
					key: 'img3',
				},
				{
					url: '/images/projects/goc-installers/img4.jpg',
					key: 'img4',
				},
				{
					url: '/images/projects/goc-installers/img5.jpg',
					key: 'img5',
				},
			],
		},
	},
	{
		title: 'Construction Solutions',
		key: 'construction-solutions',
		type: 'personal',
		color: '#008FF5',
		thumbnail: '/images/projects/construction-solutions/thumbnail.png',
		metadata: {
			description: 'Construction Marketplace Web App with User Registration, Project Bidding, and Review System.',
		},
		details: {
			github: 'https://github.com/imnaeem/ConsSols',
			techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MUI'],
			preview: 'https://conssols.muhammadnaeem.me/',
			description:
				'This project is a full-stack web application that connects individuals with construction companies and professionals. It provides a marketplace for project listings, where users can post construction projects and receive bids from registered contractors. The system includes user and company registration, enabling professionals to showcase their services and customers to find the right expertise. Additionally, the platform features a bidding system, allowing contractors to submit proposals for projects, and a review system, ensuring trust and transparency between users and service providers.',
			images: [
				{
					url: '/images/projects/construction-solutions/img1.png',
					key: 'img1',
				},
				{
					url: '/images/projects/construction-solutions/img2.png',
					key: 'img2',
				},
				{
					url: '/images/projects/construction-solutions/img3.png',
					key: 'img3',
				},
				{
					url: '/images/projects/construction-solutions/img4.png',
					key: 'img4',
				},
				{
					url: '/images/projects/construction-solutions/img5.png',
					key: 'img5',
				},
				{
					url: '/images/projects/construction-solutions/img6.png',
					key: 'img6',
				},
			],
		},
	},
	{
		title: 'Personal Portfolio',
		key: 'personal-portfolio',
		type: 'personal',
		color: '#008FF5',
		thumbnail: '/images/projects/personal-portfolio/thumbnail.png',
		metadata: {
			description: 'A personal portfolio website showcasing my skills and projects.',
		},
		details: {
			github: 'https://github.com/imnaeem/portfolio',
			techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MUI', 'Vercel'],
			preview: 'https://www.muhammadnaeem.me/',
			description:
				'This project is a personal portfolio website built with Next.js and TypeScript, showcasing my skills and projects. It features a responsive design, smooth animations, and a user-friendly interface. The website is hosted on Vercel for optimal performance and reliability. The code is available on GitHub for reference and collaboration.',
			images: [
				{
					url: '/images/projects/personal-portfolio/img1.png',
					key: 'img1',
				},
				{
					url: '/images/projects/personal-portfolio/img2.png',
					key: 'img2',
				},
				{
					url: '/images/projects/personal-portfolio/img3.png',
					key: 'img3',
				},
				{
					url: '/images/projects/personal-portfolio/img4.png',
					key: 'img4',
				},
				{
					url: '/images/projects/personal-portfolio/img5.png',
					key: 'img5',
				},
			],
		},
	},
];
