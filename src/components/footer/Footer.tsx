import { Box } from '@mui/material';

export const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer>
			<Box sx={{ textAlign: 'center' }}>© {year} Muhammad Naeem. All rights reserved.</Box>
		</footer>
	);
};
