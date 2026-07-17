import { Box, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';

const legalLinks = [
	{ label: 'About', href: '/' },
	{ label: 'Terms & Conditions', href: '/terms-conditions' },
	{ label: 'Privacy Policy', href: '/privacy-policy' },
	{ label: 'Disclaimer', href: '/disclaimer' },
];

export const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<Box
			component='footer'
			sx={{
				mt: 'auto',
				py: 3.5,
				borderTop: '1px solid #f0f0f0',
				backgroundColor: '#FFFFFF',
			}}>
			<Container maxWidth='lg'>
				<Stack
					direction={{ xs: 'column', md: 'row' }}
					justifyContent='space-between'
					alignItems='center'
					spacing={3}>
					
					{/* Left Side - Copyright */}
					<Typography
						variant='body2'
						sx={{
							color: '#737373',
							fontSize: '14px',
							textAlign: { xs: 'center', md: 'left' },
						}}>
						© {year} <Box component='span' sx={{ fontWeight: 600, color: '#171717' }}>Muhammad Naeem</Box>. All rights reserved.
					</Typography>

					{/* Right Side - Links */}
					<Stack
						direction={{ xs: 'row', sm: 'row' }}
						spacing={3}
						alignItems='center'
						sx={{ 
							flexWrap: 'wrap',
							justifyContent: { xs: 'center', md: 'flex-end' }
						}}>
						{legalLinks.map(({ label, href }) => (
							<Link key={href} href={href}>
								<Typography
									sx={{
										fontSize: '13px',
										color: '#737373',
										transition: 'color 0.2s ease-in-out',
										fontWeight: 500,
										'&:hover': {
											color: '#171717',
										},
									}}>
									{label}
								</Typography>
							</Link>
						))}
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};
