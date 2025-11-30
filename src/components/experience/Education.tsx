import { Box, Stack, Typography } from '@mui/material';
import { School, CalendarToday } from '@mui/icons-material';

export const Education = () => {
	return (
		<Box mb={4}>
			<Typography
				sx={{
					fontWeight: 600,
					fontSize: { xs: 20, md: 24 },
					color: '#1E293B',
					mb: 3,
				}}>
				Education
			</Typography>
			<Box
				sx={{
					p: { xs: 3, md: 4 },
					borderRadius: '16px',
					backgroundColor: '#FFFFFF',
					border: '1px solid #E2E8F0',
					transition: 'all 0.2s ease-in-out',
					'&:hover': {
						borderColor: '#8B5CF6',
						boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
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
									borderRadius: '10px',
									backgroundColor: 'rgba(139, 92, 246, 0.1)',
								}}>
								<School sx={{ color: '#8B5CF6', fontSize: 18 }} />
							</Box>
							<Typography
								sx={{
									fontSize: { xs: 18, md: 20 },
									fontWeight: 600,
									color: '#1E293B',
								}}>
								Bachelor of Science in Information Technology
							</Typography>
						</Stack>
						<Typography
							sx={{
								fontSize: 15,
								fontWeight: 500,
								color: '#8B5CF6',
								ml: 6,
							}}>
							Punjab University College of Information Technology | PUCIT
						</Typography>
					</Box>
					<Stack direction='row' alignItems='center' spacing={0.5} sx={{ mt: { xs: 1, sm: 0 } }}>
						<CalendarToday sx={{ color: '#64748B', fontSize: 14 }} />
						<Typography
							sx={{
								fontSize: 13,
								fontWeight: 500,
								color: '#64748B',
							}}>
							Oct 2018 - Jul 2022
						</Typography>
					</Stack>
				</Stack>
				<Box sx={{ mt: 2, ml: 6 }}>
					<Typography
						sx={{
							fontSize: 14,
							color: '#475569',
						}}>
						CGPA: 3.13/4.0
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};
