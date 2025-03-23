import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme();

const lightTheme = createTheme({
	...baseTheme,
	typography: {
		fontFamily: 'var(--font-roboto), sans-serif',
		button: { textTransform: 'none' },
	},
	palette: {
		...baseTheme.palette,
		primary: {
			main: '#1877F2',
			light: '#42B0FF',
		},
		mode: 'light',
	},
});

export { lightTheme };
