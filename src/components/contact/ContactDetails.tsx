'use client';
import { Email, Link, WhatsApp } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import Card from '../shared/Card';

const contactDetails = [
	{
		title: 'Phone',
		description: (
			<Typography
				sx={{
					cursor: 'pointer',
					':hover': { textDecoration: 'underline' },
				}}>
				WhatsApp
			</Typography>
		),
		color: '#075E54',
		icon: <WhatsApp />,
		route: '/whatsapp',
	},
	{
		title: 'Email',
		description: (
			<>
				<Typography
					onClick={() => handleLinkClick('mailto:contact@imnaeem.dev')}
					sx={{
						cursor: 'pointer',
						':hover': { textDecoration: 'underline' },
					}}>
					contact@imnaeem.dev
				</Typography>
				<Typography
					onClick={() => handleLinkClick('mailto:imnaeem.dev@gmail.com')}
					sx={{
						cursor: 'pointer',
						':hover': { textDecoration: 'underline' },
					}}>
					imnaeem.dev@gmail.com
				</Typography>
			</>
		),
		color: '#9bc1ff',
		icon: <Email />,
	},
	{
		title: 'Profile',
		description: (
			<>
				<Typography
					onClick={() => handleLinkClick('https://www.linkedin.com/in/im-naeem/')}
					sx={{
						cursor: 'pointer',
						':hover': { textDecoration: 'underline' },
					}}>
					LinkedIn
				</Typography>
				<Typography
					onClick={() => handleLinkClick('https://github.com/imnaeem/')}
					sx={{
						cursor: 'pointer',
						':hover': { textDecoration: 'underline' },
					}}>
					Github
				</Typography>
			</>
		),
		color: '#FFD166',
		icon: <Link />,
	},
];

export const ContactDetails = () => {
	const handleCardClick = (route?: string) => {
		if (route) {
			window.open(route, '_blank');
		}
	};

	return (
		<Stack spacing={{ xs: 2, md: 6 }} flex={1} width='100%'>
			{contactDetails.map((item) => (
				<Box key={item.title} onClick={() => handleCardClick(item.route)}>
					<Card {...item} />
				</Box>
			))}
		</Stack>
	);
};
