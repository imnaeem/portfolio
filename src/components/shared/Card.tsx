import { SvgIconProps, Typography, Box } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

type Props = {
	title: string;
	description: string | React.ReactElement;
	icon?: React.ReactElement<SvgIconProps>;
	color: string;
};

const Card = ({ title, description, icon, color }: Props) => {
	return (
		<Stack
			direction='row'
			spacing={2}
			alignItems='flex-start'
			sx={{
				p: 3,
				borderRadius: '12px',
				backgroundColor: '#FFFFFF',
				border: '1px solid #f0f0f0',
				transition: 'all 0.2s ease-in-out',
				height: '100%',
				'&:hover': {
					borderColor: color,
					boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
					transform: 'translateY(-2px)',
				},
			}}>
			{icon && (
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: 48,
						height: 48,
						borderRadius: '10px',
						backgroundColor: '#f5f5f5',
						flexShrink: 0,
					}}>
					{React.cloneElement(icon, { sx: { color: '#525252', fontSize: 24 } })}
				</Box>
			)}

			<Stack spacing={1} width='100%'>
				<Typography
					sx={{
						fontSize: 18,
						fontWeight: 600,
						color: '#171717',
					}}>
					{title}
				</Typography>
				{typeof description === 'string' ? (
					<Typography
						sx={{
							fontSize: 14,
							color: '#737373',
							lineHeight: 1.6,
						}}>
						{description}
					</Typography>
				) : (
					description
				)}
			</Stack>
		</Stack>
	);
};

export default Card;
