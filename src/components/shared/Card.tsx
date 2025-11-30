import { SvgIconProps, Typography, Box } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

type Props = {
	title: string;
	description: string | React.ReactElement;
	icon?: React.ReactElement<SvgIconProps>;
	color: string;
	backgroundOpacity?: number;
};

const Card = ({ title, description, icon, color }: Props) => {
	return (
		<Stack
			direction='row'
			spacing={2}
			alignItems='flex-start'
			sx={{
				p: 3,
				borderRadius: '16px',
				backgroundColor: '#FFFFFF',
				border: '1px solid #E2E8F0',
				transition: 'all 0.2s ease-in-out',
				height: '100%',
				'&:hover': {
					borderColor: color,
					boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
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
						borderRadius: '12px',
						backgroundColor: `${color}15`,
						flexShrink: 0,
					}}>
					{React.cloneElement(icon, { sx: { color, fontSize: 24 } })}
				</Box>
			)}

			<Stack spacing={1} width='100%'>
				<Typography
					sx={{
						fontSize: 18,
						fontWeight: 600,
						color: '#1E293B',
					}}>
					{title}
				</Typography>
				{typeof description === 'string' ? (
					<Typography
						sx={{
							fontSize: 14,
							color: '#64748B',
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
