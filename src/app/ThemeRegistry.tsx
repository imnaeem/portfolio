'use client';
import { lightTheme } from '@/theme';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider theme={lightTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
