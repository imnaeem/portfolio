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
				border: '1px solid #E2E8F0',
				transition: 'all 0.2s ease-in-out',
				cursor: link ? 'pointer' : 'default',
				'&:hover': link
					? {
							borderColor: color,
							boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
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
					backgroundColor: `${color}15`,
				}}>
				{icon && React.cloneElement(icon, { sx: { color, fontSize: 22 } })}
			</Box>
			<Box>
				<Typography
					sx={{
						fontSize: 12,
						color: '#64748B',
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
						color: '#1E293B',
						'&:hover': {
							color: link ? color : '#1E293B',
						},
					}}>
					{value}
				</Typography>
			</Box>
		</Stack>
	);
};

export default Info;
