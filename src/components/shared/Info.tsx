'use client';
import { Box, Stack, SvgIconProps, SxProps, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
	title: string;
	value: string;
	link?: string;
	color: string;
	icon: React.ReactElement<SvgIconProps>;
	sx?: SxProps;
};

const Info = ({ title, value, icon, link, color, sx = {} }: Props) => {
	const router = useRouter();

	const handleLinkClick = () => {
		if (link) {
			if (link.startsWith('/')) {
				window.open(link, '_blank');
			} else {
				window.open(link, '_blank');
			}
		}
	};

	return (
		<Stack
			direction='row'
			spacing={1.5}
			alignItems='center'
			className='shadow-sm'
			sx={{ ...sx, borderRadius: 1.5, p: 0.8 }}>
			<Box className='shadow-sm' sx={{ borderRadius: 1.5, border: 1, borderColor: color, p: 0.8 }}>
				{icon && React.cloneElement(icon, { sx: { color } })}
			</Box>
			<Box>
				<Typography fontSize={12} variant='body2'>
					{title}
				</Typography>

				<Typography
					sx={{
						cursor: link ? 'pointer' : 'default',
						':hover': {
							textDecoration: link ? 'underline' : 'none',
						},
					}}
					onClick={handleLinkClick}
					fontSize={16}
					fontWeight={500}>
					{value}
				</Typography>
			</Box>
		</Stack>
	);
};

export default Info;
