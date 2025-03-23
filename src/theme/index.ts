import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme();

const lightTheme = createTheme({
	...baseTheme,
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
