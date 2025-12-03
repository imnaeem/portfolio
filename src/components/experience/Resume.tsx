'use client';
import DownloadIcon from '@mui/icons-material/Download';
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { useState } from 'react';

export const Resume = () => {
	const [downloadResumeDialog, setDownloadResumeDialog] = useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	console.log(isMobile);
	const handleDialogOpen = () => {
		setDownloadResumeDialog(true);
	};

	const handleClose = () => {
		setDownloadResumeDialog(false);
	};
	return (
		<Box sx={{ width: isMobile ? '100%' : 'auto' }}>
			<Button
				size='small'
				sx={{
					height: 32,
					borderColor: '#4F46E5',
					color: '#4F46E5',
					'&:hover': {
						borderColor: '#4338CA',
						backgroundColor: 'rgba(79, 70, 229, 0.04)',
					},
				}}
				variant='outlined'
				fullWidth={isMobile}
				startIcon={<DownloadIcon />}
				onClick={handleDialogOpen}>
				Download Resume
			</Button>
			<Dialog
				open={downloadResumeDialog}
				onClose={handleClose}
				slotProps={{
					paper: {
						sx: {
							overflowX: 'hidden',
							borderRadius: '16px',
							p: 1,
						},
						component: 'form',
						onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
							event.preventDefault();
							const formData = new FormData(event.currentTarget);
							const formJson = Object.fromEntries(formData.entries());
							fetch('/api/resume', {
								method: 'POST',
								headers: { 'Content-Type': 'application/json' },
								body: JSON.stringify(formJson),
							});
							window.open('/assets/muhammad-naeem-resume.pdf', '_black');
							handleClose();
						},
					},
				}}>
				<DialogTitle sx={{ fontWeight: 600, color: '#1E293B' }}>Download Resume</DialogTitle>
				<DialogContent>
					<DialogContentText sx={{ color: '#64748B', mb: 2 }}>
						Please fill in the details below to download my resume.
					</DialogContentText>
					<TextField
						required
						size='small'
						margin='dense'
						id='name'
						name='name'
						label='Full Name'
						fullWidth
						variant='filled'
					/>
					<TextField
						required
						size='small'
						margin='dense'
						id='email'
						name='email'
						label='Email Address'
						type='email'
						fullWidth
						variant='filled'
					/>
					<TextField
						required
						size='small'
						margin='dense'
						id='companyName'
						name='companyName'
						label='Company Name'
						fullWidth
						variant='filled'
					/>
					<TextField
						required
						size='small'
						margin='dense'
						id='reason'
						name='reason'
						label='Reason to download'
						multiline
						rows={3}
						fullWidth
						variant='filled'
					/>
				</DialogContent>
				<DialogActions sx={{ px: 3, pb: 2 }}>
					<Button
						variant='outlined'
						onClick={handleClose}
						sx={{
							borderColor: '#E2E8F0',
							color: '#64748B',
							'&:hover': {
								borderColor: '#CBD5E1',
								backgroundColor: '#F8FAFC',
							},
						}}>
						Cancel
					</Button>
					<Button
						disableElevation
						variant='contained'
						type='submit'
						sx={{
							backgroundColor: '#4F46E5',
							'&:hover': {
								backgroundColor: '#4338CA',
							},
						}}>
						Download
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
};
