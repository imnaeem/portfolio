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
				borderTop: '1px solid rgba(226, 232, 240, 0.8)',
				backgroundColor: 'rgba(255, 255, 255, 0.7)',
				backdropFilter: 'blur(8px)',
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
							color: '#64748B',
							fontSize: '14px',
							textAlign: { xs: 'center', md: 'left' },
						}}>
						© {year} <Box component='span' sx={{ fontWeight: 600, color: '#475569' }}>Muhammad Naeem</Box>. All rights reserved.
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
										color: '#64748B',
										transition: 'all 0.2s ease-in-out',
										fontWeight: 500,
										'&:hover': {
											color: '#4F46E5',
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
