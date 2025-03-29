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
			<Box onClick={handleClick} role='presentation' sx={{ position: 'fixed', bottom: 16, right: 16 }}>
				<Fab color='primary' disableRipple size='small' aria-label='scroll back to top'>
					<UpArrow />
				</Fab>
			</Box>
		</Fade>
	);
};

export default ScrollToTopArrow;
