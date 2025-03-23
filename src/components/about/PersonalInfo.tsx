import { Email, GitHub, LinkedIn, LocationCity, WhatsApp } from '@mui/icons-material';
import { Box, Grid2, Typography } from '@mui/material';
import Info from '../shared/Info';

const info = [
	{
		title: 'Phone',
		value: '03006511173',
		link: 'tel:03006511173',
		icon: <WhatsApp />,
		color: '#075E54',
	},
	{
		title: 'Email',
		value: 'contact@muhammadnaeem.me',
		link: 'mailto:contact@muhammadnaeem.me',
		icon: <Email />,
		color: '#9bc1ff',
	},
	{
		title: 'Location',
		value: 'Lahore, Pakistan',
		icon: <LocationCity />,
		color: '#fc9132',
	},
	{
		title: 'LinkedIn',
		value: 'linkedin.com/in/im-naeem',
		link: 'https://www.linkedin.com/in/im-naeem/',
		icon: <LinkedIn />,
		color: '#0a66c2',
	},
	{
		title: 'GitHub',
		value: 'github.com/imnaeem',
		link: 'https://github.com/imnaeem/',
		icon: <GitHub />,
		color: '#24292e',
	},
];

const PersonalInfo = () => {
	return (
		<Box my={3}>
			<Typography fontWeight={500} fontSize={25} my={3}>
				Personal Info
			</Typography>
			<Grid2 container spacing={2}>
				{info.map((item) => (
					<Grid2
						key={item.title}
						className='shadow-sm'
						sx={{ borderRadius: 1.5, p: 0.8 }}
						size={{ xs: 12, sm: 6, md: 4 }}>
						<Info {...item} />
					</Grid2>
				))}
			</Grid2>
		</Box>
	);
};

export default PersonalInfo;
