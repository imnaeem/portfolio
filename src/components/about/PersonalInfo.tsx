import { Email, GitHub, LinkedIn, LocationCity, WhatsApp } from '@mui/icons-material';
import { Box, Grid2, Typography } from '@mui/material';
import Info from '../shared/Info';

const info = [
	{
		title: 'Phone',
		value: 'WhatsApp',
		link: '/whatsapp',
		icon: <WhatsApp />,
		color: '#171717',
	},
	{
		title: 'Email',
		value: 'contact@imnaeem.dev',
		link: 'mailto:contact@imnaeem.dev',
		icon: <Email />,
		color: '#171717',
	},
	{
		title: 'Location',
		value: 'Lahore, Pakistan',
		icon: <LocationCity />,
		color: '#171717',
	},
	{
		title: 'LinkedIn',
		value: 'linkedin.com/in/im-naeem',
		link: 'https://www.linkedin.com/in/im-naeem/',
		icon: <LinkedIn />,
		color: '#171717',
	},
	{
		title: 'GitHub',
		value: 'github.com/imnaeem',
		link: 'https://github.com/imnaeem/',
		icon: <GitHub />,
		color: '#171717',
	},
];

const PersonalInfo = () => {
	return (
		<Box my={5}>
			<Typography
				sx={{
					fontWeight: 600,
					fontSize: { xs: 22, md: 26 },
					color: '#171717',
					mb: 3,
				}}>
				Get In Touch
			</Typography>
			<Grid2 container spacing={2}>
				{info.map((item) => (
					<Grid2 key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
						<Info {...item} />
					</Grid2>
				))}
			</Grid2>
		</Box>
	);
};

export default PersonalInfo;
