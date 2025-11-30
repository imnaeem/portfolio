import { Box, Stack, Typography } from '@mui/material';

const Title = ({ title, subtitle }: { title: string; subtitle?: string }) => {
	return (
		<Stack spacing={1} pb={4}>
			<Typography
				variant='h2'
				sx={{
					fontSize: { xs: 32, md: 40 },
					fontWeight: 700,
					color: '#1E293B',
					letterSpacing: '-0.02em',
				}}>
				{title}
				<Box
					component='span'
					sx={{
						display: 'inline-block',
						width: 8,
						height: 8,
						borderRadius: '50%',
						backgroundColor: '#4F46E5',
						ml: 1,
						mb: 1,
					}}
				/>
			</Typography>
			{subtitle && (
				<Typography
					variant='body1'
					sx={{
						color: '#64748B',
						fontSize: { xs: 16, md: 18 },
						maxWidth: '600px',
					}}>
					{subtitle}
				</Typography>
			)}
		</Stack>
	);
};

export default Title;
