'use client';
import { Box, Stack, SvgIconProps, SxProps, Typography } from '@mui/material';
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
	const handleLinkClick = () => {
		if (link) {
			window.open(link, '_blank');
		}
	};

	return (
		<Stack
			direction='row'
			spacing={2}
			alignItems='center'
			sx={{
				...sx,
				borderRadius: '12px',
				p: 1.5,
				backgroundColor: '#FFFFFF',
				border: '1px solid #f0f0f0',
				transition: 'all 0.2s ease-in-out',
				cursor: link ? 'pointer' : 'default',
				'&:hover': link
					? {
							borderColor: color,
							boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
							backgroundColor: '#fafafa',
						}
					: {},
			}}
			onClick={handleLinkClick}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: 44,
					height: 44,
					borderRadius: '10px',
					backgroundColor: '#f5f5f5',
				}}>
				{icon && React.cloneElement(icon, { sx: { color: '#525252', fontSize: 22 } })}
			</Box>
			<Box>
				<Typography
					sx={{
						fontSize: 12,
						color: '#737373',
						fontWeight: 500,
						textTransform: 'uppercase',
						letterSpacing: '0.5px',
					}}>
					{title}
				</Typography>
				<Typography
					sx={{
						fontSize: 15,
						fontWeight: 600,
						color: '#171717',
						'&:hover': {
							color: link ? color : '#171717',
						},
					}}>
					{value}
				</Typography>
			</Box>
		</Stack>
	);
};

export default Info;
