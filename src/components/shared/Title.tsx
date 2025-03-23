import { Box, Divider, Stack, Typography } from '@mui/material';

const Title = ({ title }: { title: string }) => {
	return (
		<Stack direction='row' spacing={3} alignItems='center' pb={4}>
			<Typography variant='h2' fontSize={40} fontWeight={600}>
				{title}
			</Typography>

			<Box className='hidden md:block'>
				<Divider flexItem sx={{ borderWidth: '1.5px', borderColor: 'primary.main', width: '200px' }} />
			</Box>
		</Stack>
	);
};

export default Title;
