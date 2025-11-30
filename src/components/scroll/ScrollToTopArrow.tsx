'use client';
import UpArrow from '@mui/icons-material/KeyboardArrowUp';
import { Box, Fab, Fade } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const ScrollToTopArrow = () => {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<Fade in={trigger}>
			<Box onClick={handleClick} role='presentation' sx={{ position: 'fixed', bottom: 24, right: 24 }}>
				<Fab
					disableRipple
					size='medium'
					aria-label='scroll back to top'
					sx={{
						backgroundColor: '#4F46E5',
						color: '#FFFFFF',
						boxShadow: '0 4px 14px rgba(79, 70, 229, 0.3)',
						'&:hover': {
							backgroundColor: '#4338CA',
						},
					}}>
					<UpArrow />
				</Fab>
			</Box>
		</Fade>
	);
};

export default ScrollToTopArrow;
