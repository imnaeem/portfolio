import { Box, Stack, Typography } from '@mui/material';
import { School } from '@mui/icons-material';

export const Education = () => {
	return (
		<Box mb={4}>
			<Typography
				sx={{
					fontWeight: 600,
					fontSize: { xs: 20, md: 24 },
					color: '#171717',
					mb: 3,
				}}>
				Education
			</Typography>
			<Box
				sx={{
					p: { xs: 3, md: 4 },
					borderRadius: '12px',
					backgroundColor: '#FFFFFF',
					border: '1px solid #f0f0f0',
					transition: 'all 0.2s ease-in-out',
					boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
					'&:hover': {
						borderColor: '#d4d4d4',
						boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
					},
				}}>
				<Stack direction={{ xs: 'column', sm: 'row' }} justifyContent='space-between' alignItems='flex-start'>
					<Box>
						<Stack direction='row' alignItems='center' spacing={1.5} mb={0.5}>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: 36,
									height: 36,
									borderRadius: '8px',
									backgroundColor: '#f5f5f5',
								}}>
								<School sx={{ color: '#525252', fontSize: 18 }} />
							</Box>
							<Typography
								sx={{
									fontSize: { xs: 18, md: 20 },
									fontWeight: 600,
									color: '#171717',
								}}>
								Bachelor of Science in Information Technology
							</Typography>
						</Stack>
						<Typography
							sx={{
								fontSize: 15,
								fontWeight: 500,
								color: '#525252',
								ml: 6,
							}}>
							Punjab University College of Information Technology | PUCIT
						</Typography>
					</Box>
				</Stack>
				<Box sx={{ mt: 2, ml: 6 }}>
					<Typography
						sx={{
							fontSize: 14,
							color: '#737373',
						}}>
						CGPA: 3.13/4.0
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};
