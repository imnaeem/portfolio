'use client';
import ContactForm from '@/components/contact/ContactForm';
import Card from '@/components/shared/Card';
import Title from '@/components/shared/Title';
import { Email, Link, Phone } from '@mui/icons-material';
import { Box, Divider, Fade, Stack, Typography } from '@mui/material';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

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

const Contact = () => {
	return (
		<Fade in timeout={500}>
			<div>
				<Title title='Contact Me' />
				<Stack
					direction={{ xs: 'column-reverse', md: 'row' }}
					spacing={{ xs: 4, md: 8 }}
					alignItems='center'
					mb={4}
					py={5}>
					<Stack spacing={4} flex={1} width='100%'>
						{contactDetails.map((item) => (
							<Card key={item.title} {...item} />
						))}
					</Stack>

					<Divider orientation='horizontal' flexItem sx={{ display: { xs: 'block', md: 'none' } }} />

					<Stack spacing={2} flex={2} width='100%'>
						<Box>
							<Typography variant='body1' fontSize={25}>
								I'm always open to discussing product
							</Typography>
							<Typography fontSize={25} fontWeight={500}>
								design work or partnerships
							</Typography>
						</Box>
						<GoogleReCaptchaProvider reCaptchaKey={SITE_KEY ?? ''}>
							<ContactForm />
						</GoogleReCaptchaProvider>
					</Stack>
				</Stack>
			</div>
		</Fade>
	);
};

export default Contact;
