import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { Box, Container, IconButton, Stack, Typography } from '@mui/material';
import Link from 'next/link';

const socialLinks = [
	{ icon: <GitHub />, href: 'https://github.com/imnaeem/', label: 'GitHub' },
	{ icon: <LinkedIn />, href: 'https://www.linkedin.com/in/im-naeem/', label: 'LinkedIn' },
	{ icon: <Email />, href: 'mailto:contact@imnaeem.dev', label: 'Email' },
];

export const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<Box
			component='footer'
			sx={{
				mt: 'auto',
				py: 4,
				borderTop: '1px solid #E2E8F0',
				backgroundColor: '#FFFFFF',
			}}>
			<Container maxWidth='lg'>
				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					justifyContent='space-between'
					alignItems='center'
					spacing={2}>
					<Typography
						variant='body2'
						sx={{
							color: '#64748B',
							fontSize: '14px',
						}}>
						© {year} Muhammad Naeem. All rights reserved.
					</Typography>

					<Stack direction='row' spacing={1}>
						{socialLinks.map(({ icon, href, label }) => (
							<Link key={label} href={href} target='_blank' rel='noopener noreferrer'>
								<IconButton
									size='small'
									sx={{
										color: '#64748B',
										transition: 'all 0.2s ease-in-out',
										'&:hover': {
											color: '#4F46E5',
											backgroundColor: 'rgba(79, 70, 229, 0.08)',
										},
									}}
									aria-label={label}>
									{icon}
								</IconButton>
							</Link>
						))}
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};
