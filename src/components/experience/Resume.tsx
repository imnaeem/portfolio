'use client';
import DownloadIcon from '@mui/icons-material/Download';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';

export const Resume = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<Box>
			<Button
				size='small'
				sx={{ mb: isMobile ? 2 : 0 }}
				variant='outlined'
				color='primary'
				fullWidth={isMobile}
				startIcon={<DownloadIcon />}
				onClick={() => window.open('/assets/muhammad-naeem-resume.pdf')}>
				Download Resume
			</Button>
		</Box>
	);
};
