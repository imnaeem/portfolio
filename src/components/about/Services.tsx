import {
	CodeOff as BackendIcon,
	BusinessCenter as DigitalMarketingIcon,
	Code as FrontendIcon,
	Dashboard as JavascriptIcon,
	ScreenSearchDesktop as SeoIcon,
	Language as WordpressIcon,
} from '@mui/icons-material';
import { Box, Grid2, Typography } from '@mui/material';
import Card from '../shared/Card';

const services = [
	{
		title: 'Frontend Developer',
		description: 'I build modern responsive web interfaces using React, Next.js, Tailwind CSS, and Material-UI.',
		color: '#FF6F61',
		icon: <FrontendIcon />,
	},
	{
		title: 'Backend Developer',
		description: 'I develop scalable and efficient backend with Node.js, NestJS, Express, MongoDB, and PostgreSQL.',
		color: '#4A90E2',
		icon: <BackendIcon />,
	},
	{
		title: 'Full Stack Developer',
		description: 'I create end-to-end web solutions using React, Next.js, Node.js, NestJS, MongoDB, and GraphQL.',
		color: '#F5A623',
		icon: <JavascriptIcon />,
	},
	{
		title: 'WordPress Development',
		description: 'I design and customize WordPress themes, plugins, and WooCommerce stores to enhance functionality.',
		color: '#7B61FF',
		icon: <WordpressIcon />,
	},
	{
		title: 'Digital Marketing',
		description: 'I help businesses grow online through Facebook Ads, Google Ads, SEO, and SEM strategies.',
		color: '#FF4081',
		icon: <DigitalMarketingIcon />,
	},
	{
		title: 'SEO',
		description:
			'I optimize websites for search engines with On-Page, Off-Page, Technical, Local, and E-Commerce SEO strategies.',
		color: '#2ECC71',
		icon: <SeoIcon />,
	},
];

const Services = () => {
	return (
		<Box my={3}>
			<Typography fontWeight={500} fontSize={30} my={3}>
				What I do!
			</Typography>
			<Grid2 container spacing={2}>
				{services.map((item) => (
					<Grid2 key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
						<Card {...item} />
					</Grid2>
				))}
			</Grid2>
		</Box>
	);
};

export default Services;
