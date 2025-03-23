import { SvgIconProps, Typography, hexToRgb } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useMemo } from 'react';

type Props = {
	title: string;
	description: string | React.ReactElement;
	icon?: React.ReactElement<SvgIconProps>;
	color: string;
	backgroundOpacity?: number;
};

const Card = ({ title, description, icon, color, backgroundOpacity = 0.1 }: Props) => {
	const backgroundColor = useMemo(() => {
		const [red, green, blue] = hexToRgb(color)?.match?.(/\d+/g)?.map(Number) ?? [];
		return `rgba(${red}, ${green}, ${blue}, ${backgroundOpacity})`;
	}, [color]);

	return (
		<Stack
			direction='row'
			spacing={1.5}
			alignItems='flex-start'
			sx={{ py: 3, px: 2, borderRadius: 2, backgroundColor }}>
			{icon && React.cloneElement(icon, { sx: { color, fontSize: 40 } })}

			<Stack spacing={1} width='100%'>
				<Typography fontSize={20} fontWeight={500}>
					{title}
				</Typography>
				{typeof description === 'string' ? <Typography>{description}</Typography> : description}
			</Stack>
		</Stack>
	);
};

export default Card;
