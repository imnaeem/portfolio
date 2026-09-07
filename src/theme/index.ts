import { createTheme } from '@mui/material';

const baseTheme = createTheme();

const lightTheme = createTheme({
	...baseTheme,
	typography: {
		fontFamily: 'var(--font-roboto), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
		button: { textTransform: 'none', fontWeight: 600, fontSize: '0.875rem' },
		h1: { fontWeight: 700, letterSpacing: '-0.02em', color: '#18181B' },
		h2: { fontWeight: 700, letterSpacing: '-0.01em', color: '#18181B' },
		h3: { fontWeight: 600, letterSpacing: '-0.01em', color: '#18181B' },
		h4: { fontWeight: 650, color: '#18181B' },
		h5: { fontWeight: 600, color: '#18181B' },
		h6: { fontWeight: 600, color: '#18181B' },
	},
	palette: {
		...baseTheme.palette,
		primary: {
			main: '#18181B', // Zinc 900
			light: '#3F3F46', // Zinc 700
			dark: '#09090B', // Zinc 950
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#52525B', // Zinc 600
			light: '#71717A', // Zinc 500
			dark: '#27272A', // Zinc 800
			contrastText: '#FFFFFF',
		},
		background: {
			default: '#FAFAFA', // Soft off-white
			paper: '#FFFFFF',
		},
		text: {
			primary: '#18181B', // Zinc 900
			secondary: '#52525B', // Zinc 600
		},
		grey: {
			50: '#FAFAFA',
			100: '#F4F4F5',
			200: '#E4E4E7',
			300: '#D4D4D8',
			400: '#A1A1AA',
			500: '#71717A',
			600: '#52525B',
			700: '#3F3F46',
			800: '#27272A',
			900: '#18181B',
		},
		mode: 'light',
	},
	shape: {
		borderRadius: 12, // Increased border-radius for modern cards
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 10,
					padding: '8px 16px',
					fontWeight: 600,
					boxShadow: 'none',
					textTransform: 'none',
					transition: 'all 0.2s ease-in-out',
				},
				contained: {
					backgroundColor: '#18181B',
					color: '#FFFFFF',
					boxShadow: 'none',
					'&:hover': {
						backgroundColor: '#27272A',
						boxShadow: 'none',
					},
				},
				outlined: {
					borderColor: '#E4E4E7',
					color: '#18181B',
					'&:hover': {
						backgroundColor: '#F4F4F5',
						borderColor: '#D4D4D8',
					},
				},
				text: {
					color: '#52525B',
					'&:hover': {
						backgroundColor: '#F4F4F5',
						color: '#18181B',
					},
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: 'none',
					border: '1px solid #E4E4E7',
					borderRadius: 12,
					backgroundColor: '#FFFFFF',
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					fontWeight: 500,
					fontSize: '0.8125rem',
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiOutlinedInput-root': {
						borderRadius: 10,
						backgroundColor: '#FFFFFF',
						'& fieldset': {
							borderColor: '#E4E4E7',
						},
						'&:hover fieldset': {
							borderColor: '#D4D4D8',
						},
						'&.Mui-focused fieldset': {
							borderColor: '#18181B',
							borderWidth: '1.5px',
						},
					},
					'& .MuiFilledInput-root': {
						borderRadius: 10,
						backgroundColor: '#F4F4F5',
						border: '1px solid #E4E4E7',
						'&::before, &::after': {
							display: 'none',
						},
						'&:hover': {
							backgroundColor: '#E4E4E7',
						},
						'&.Mui-focused': {
							backgroundColor: '#FFFFFF',
							borderColor: '#18181B',
						},
					},
				},
			},
		},
	},
});

export { lightTheme };
