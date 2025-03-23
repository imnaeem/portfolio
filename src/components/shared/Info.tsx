'use client';
import { Box, Stack, SvgIconProps, Typography } from '@mui/material';
import React from 'react';

type Props = {
	title: string;
	value: string;
	link?: string;
	color: string;
	icon: React.ReactElement<SvgIconProps>;
};

const Info = ({ title, value, icon, link, color }: Props) => {
	const handleLinkClick = () => {
		if (link) window.open(link, '_blank');
	};

	return (
		<Stack direction='row' spacing={1.5} alignItems='center'>
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
