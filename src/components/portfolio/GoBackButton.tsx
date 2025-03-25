'use client';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const GoBackButton = () => {
	const router = useRouter();
	const [canGoBack, setCanGoBack] = useState(false);
	const theme = useTheme();

	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	useEffect(() => {
		const hasHistory = window.history.length > 2;
		setCanGoBack(hasHistory);
	}, []);

	if (!canGoBack) return <></>;

	return (
		<Box>
			{isMobile ? (
				<IconButton
					onClick={() => router.back()}
					sx={{ p: 0.6, border: '1px solid', borderColor: 'primary.main', borderRadius: 1, mt: 0.6 }}>
					<ArrowBackIcon color='primary' />
				</IconButton>
			) : (
				<Button variant='outlined' startIcon={<ArrowBackIcon />} onClick={() => router.back()}>
					Go back
				</Button>
			)}
		</Box>
	);
};

export default GoBackButton;
