'use client';
import { Email, Link, Phone } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import Card from '../shared/Card';

const handleLinkClick = (link: string) => {
	window.open(link, '_blank');
};

const contactDetails = [
	{
		title: 'Phone',
		description: (
			<>
				<p style={{ cursor: 'pointer' }}>+&#57;&#50;&#51;&#48;&#48;&#54;&#53;&#49;&#49;&#49;&#55;&#51;</p>
				<Typography
					onClick={() => handleLinkClick('http://wa.me/447849820232')}
					sx={{
						cursor: 'pointer',
						':hover': { textDecoration: 'underline' },
					}}>
					+447849820232
				</Typography>
			</>
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
		<Stack spacing={4} flex={1} width='100%'>
			{contactDetails.map((item) => (
				<Card key={item.title} {...item} />
			))}
		</Stack>
	);
};
