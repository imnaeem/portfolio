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
	const handleDialogOpen = () => {
		setDownloadResumeDialog(true);
	};

	const handleClose = () => {
		setDownloadResumeDialog(false);
	};
	return (
		<>
			<Box>
				<Button
					size='small'
					sx={{ mb: isMobile ? 2 : 0 }}
					variant='outlined'
					color='primary'
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
							sx: { overflowX: 'hidden' },
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
					<DialogTitle>Download Resume</DialogTitle>
					<DialogContent>
						<DialogContentText>Please fill the details below to download my resume.</DialogContentText>
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
						<Button variant='outlined' onClick={handleClose}>
							Cancel
						</Button>
						<Button disableElevation variant='contained' type='submit'>
							Download
						</Button>
					</DialogActions>
				</Dialog>
			</Box>
		</>
	);
};
