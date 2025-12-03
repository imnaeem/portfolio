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

	const handleGoBack = () => {
		if (canGoBack) router.back();
		else router.replace('/portfolio');
	};

	return (
		<Box>
			{isMobile ? (
				<IconButton
					onClick={handleGoBack}
					sx={{
						p: 1,
						py: 0.8,
						mb: 2,
						border: '1px solid #E2E8F0',
						borderRadius: '10px',
						mt: 0.6,
						color: '#4F46E5',
						'&:hover': {
							borderColor: '#4F46E5',
							backgroundColor: 'rgba(79, 70, 229, 0.04)',
						},
					}}>
					<ArrowBackIcon />
				</IconButton>
			) : (
				<Button
					variant='outlined'
					startIcon={<ArrowBackIcon />}
					onClick={handleGoBack}
					sx={{
						borderColor: '#E2E8F0',
						color: '#475569',
						'&:hover': {
							borderColor: '#4F46E5',
							color: '#4F46E5',
							backgroundColor: 'rgba(79, 70, 229, 0.04)',
						},
					}}>
					Go back
				</Button>
			)}
		</Box>
	);
};

export default GoBackButton;
