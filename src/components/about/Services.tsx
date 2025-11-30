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
		color: '#4F46E5',
		icon: <FrontendIcon />,
	},
	{
		title: 'Backend Developer',
		description: 'I develop scalable and efficient backend with Node.js, NestJS, Express and MongoDB.',
		color: '#14B8A6',
		icon: <BackendIcon />,
	},
	{
		title: 'Full Stack Developer',
		description: 'I create end-to-end web solutions using React, Next.js, Node.js, NestJS, MongoDB, and GraphQL.',
		color: '#F59E0B',
		icon: <JavascriptIcon />,
	},
	{
		title: 'WordPress Development',
		description: 'I design and customize WordPress themes, plugins, and WooCommerce stores to enhance functionality.',
		color: '#8B5CF6',
		icon: <WordpressIcon />,
	},
	{
		title: 'Digital Marketing',
		description: 'I help businesses grow online through Facebook Ads, Google Ads, SEO, and SEM strategies.',
		color: '#EC4899',
		icon: <DigitalMarketingIcon />,
	},
	{
		title: 'SEO Optimization',
		description:
			'I optimize websites for search engines with On-Page, Off-Page, Technical, Local, and E-Commerce SEO strategies.',
		color: '#10B981',
		icon: <SeoIcon />,
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
