import { createTheme } from '@mui/material';

const baseTheme = createTheme();

// Modern minimalistic theme with primary and secondary colors
// Primary: Deep Indigo - #4F46E5
// Secondary: Teal accent - #14B8A6
// Background cards: Light gray tones
const lightTheme = createTheme({
	...baseTheme,
	typography: {
		fontFamily: 'var(--font-roboto), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
		button: { textTransform: 'none', fontWeight: 500 },
		h1: { fontWeight: 700, letterSpacing: '-0.02em' },
		h2: { fontWeight: 600, letterSpacing: '-0.01em' },
		h3: { fontWeight: 600 },
		h4: { fontWeight: 600 },
		h5: { fontWeight: 500 },
		h6: { fontWeight: 500 },
	},
	palette: {
		...baseTheme.palette,
		primary: {
			main: '#4F46E5',
			light: '#818CF8',
			dark: '#3730A3',
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#14B8A6',
			light: '#5EEAD4',
			dark: '#0D9488',
			contrastText: '#FFFFFF',
		},
		background: {
			default: '#F8FAFC',
			paper: '#FFFFFF',
		},
		text: {
			primary: '#1E293B',
			secondary: '#64748B',
		},
		grey: {
			50: '#F8FAFC',
			100: '#F1F5F9',
			200: '#E2E8F0',
			300: '#CBD5E1',
			400: '#94A3B8',
			500: '#64748B',
			600: '#475569',
			700: '#334155',
			800: '#1E293B',
			900: '#0F172A',
		},
		mode: 'light',
	},
	shape: {
		borderRadius: 12,
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					padding: '10px 24px',
					fontWeight: 500,
				},
				contained: {
					boxShadow: 'none',
					'&:hover': {
						boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
					},
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
					border: '1px solid #E2E8F0',
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiFilledInput-root': {
						borderRadius: 8,
						backgroundColor: '#F8FAFC',
						'&:hover': {
							backgroundColor: '#F1F5F9',
						},
						'&.Mui-focused': {
							backgroundColor: '#F8FAFC',
						},
					},
				},
			},
		},
	},
});

export { lightTheme };
