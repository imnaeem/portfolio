import { Box, Stack, Typography } from '@mui/material';

const Title = ({ title, subtitle }: { title: string; subtitle?: string }) => {
	return (
		<Stack spacing={0.5} pb={3} mb={2}>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
				<Box
					sx={{
						width: 4,
						height: 28,
						backgroundColor: '#4F46E5',
						borderRadius: '4px',
					}}
				/>
				<Typography
					variant='h2'
					sx={{
						fontSize: { xs: 26, md: 32 },
						fontWeight: 700,
						color: '#1E293B',
						letterSpacing: '-0.02em',
						lineHeight: 1.2,
					}}>
					{title}
				</Typography>
			</Box>
			{subtitle && (
				<Typography
					variant='body1'
					sx={{
						color: '#64748B',
						fontSize: { xs: 14, md: 15 },
						maxWidth: '600px',
						ml: 3.5,
						lineHeight: 1.6,
					}}>
					{subtitle}
				</Typography>
			)}
		</Stack>
	);
};

export default Title;
