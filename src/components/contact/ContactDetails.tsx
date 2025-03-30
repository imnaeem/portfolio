'use client';
import { Email, Link, Phone } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import Card from '../shared/Card';

const handleLinkClick = (link: string) => {
	window.open(link, '_blank');
};

const contactDetails = [
	{
		title: 'Phone',
		description: (
			<Box aria-hidden='true' onClick={() => handleLinkClick('https://wa.me/447849820232')}>
				<p style={{ cursor: 'pointer' }}>+{String.fromCharCode(52, 52, 55, 56, 52, 57, 56, 50, 48, 50, 51, 50)}</p>
			</Box>
		),
		color: '#FF6F61',
		icon: <Phone />,
	},
	{
		title: 'Email',
		description: (
			<>
				<Typography
					onClick={() => handleLinkClick('mailto:contact@muhammadnaeem.me')}
					sx={{
						cursor: 'pointer',
						':hover': { textDecoration: 'underline' },
					}}>
					contact@muhammadnaeem.me
				</Typography>
				<Typography
					onClick={() => handleLinkClick('mailto:ceinfo.pk@gmail.com')}
					sx={{
						cursor: 'pointer',
						':hover': { textDecoration: 'underline' },
					}}>
					ceinfo.pk@gmail.com
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
	return (
		<Stack spacing={{ xs: 2, md: 6 }} flex={1} width='100%'>
			{contactDetails.map((item) => (
				<Card key={item.title} {...item} />
			))}
		</Stack>
	);
};
