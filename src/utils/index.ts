import { hexToRgb } from '@mui/material';

export const hexToRgba = (color: string, opacity: number) => {
	const [red, green, blue] = hexToRgb(color)?.match?.(/\d+/g)?.map(Number) ?? [];
	return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

export const titleCase = (value: string) => {
	return value
		.toLowerCase()
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};
