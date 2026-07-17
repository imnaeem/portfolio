import { createTheme } from '@mui/material';

const baseTheme = createTheme();

// Minimalistic modern light theme
// Primary: Near black for high contrast - #171717
// Secondary: Neutral gray - #737373
// Background: Clean white
const lightTheme = createTheme({
	...baseTheme,
	typography: {
		fontFamily: 'var(--font-roboto), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
		button: { textTransform: 'none', fontWeight: 500 },
		h1: { fontWeight: 700, letterSpacing: '-0.02em', color: '#171717' },
		h2: { fontWeight: 600, letterSpacing: '-0.01em', color: '#171717' },
		h3: { fontWeight: 600, color: '#171717' },
		h4: { fontWeight: 600, color: '#171717' },
		h5: { fontWeight: 500, color: '#171717' },
		h6: { fontWeight: 500, color: '#171717' },
	},
	palette: {
		...baseTheme.palette,
		primary: {
			main: '#171717',
			light: '#404040',
			dark: '#0a0a0a',
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#737373',
			light: '#a3a3a3',
			dark: '#525252',
			contrastText: '#FFFFFF',
		},
		background: {
			default: '#FFFFFF',
			paper: '#FFFFFF',
		},
		text: {
			primary: '#171717',
			secondary: '#525252',
		},
		grey: {
			50: '#fafafa',
			100: '#f5f5f5',
			200: '#e5e5e5',
			300: '#d4d4d4',
			400: '#a3a3a3',
			500: '#737373',
			600: '#525252',
			700: '#404040',
			800: '#262626',
			900: '#171717',
		},
		mode: 'light',
	},
	shape: {
		borderRadius: 8,
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 6,
					padding: '10px 24px',
					fontWeight: 500,
				},
				contained: {
					boxShadow: 'none',
					backgroundColor: '#171717',
					color: '#FFFFFF',
					'&:hover': {
						boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
						backgroundColor: '#262626',
					},
				},
				outlined: {
					borderColor: '#e5e5e5',
					color: '#171717',
					'&:hover': {
						backgroundColor: '#fafafa',
						borderColor: '#d4d4d4',
					},
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: '0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.04)',
					border: '1px solid #f0f0f0',
					borderRadius: 12,
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiFilledInput-root': {
						borderRadius: 6,
						backgroundColor: '#fafafa',
						border: '1px solid #f0f0f0',
						'&:hover': {
							backgroundColor: '#f5f5f5',
						},
						'&.Mui-focused': {
							backgroundColor: '#ffffff',
							borderColor: '#171717',
						},
						'&::before': { display: 'none' },
						'&::after': { display: 'none' },
					},
					'& .MuiOutlinedInput-root': {
						borderRadius: 6,
						'& fieldset': {
							borderColor: '#e5e5e5',
						},
						'&:hover fieldset': {
							borderColor: '#a3a3a3',
						},
						'&.Mui-focused fieldset': {
							borderColor: '#171717',
						},
					},
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					borderRadius: 6,
					backgroundColor: '#f5f5f5',
					color: '#525252',
					fontWeight: 500,
				},
			},
		},
	},
});

export { lightTheme };
