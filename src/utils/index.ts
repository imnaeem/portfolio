export const hexToRgba = (color: string, opacity: number) => {
	const hex = color.replace('#', '');
	const full = hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex;
	const num = Number.parseInt(full, 16);
	const red = (num >> 16) & 255;
	const green = (num >> 8) & 255;
	const blue = num & 255;
	return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

export const titleCase = (value: string) => {
	return value
		.toLowerCase()
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};
