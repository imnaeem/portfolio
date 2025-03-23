import { Box, Stack, Typography } from '@mui/material';
import Card from '../shared/Card';

export const Education = () => {
	return (
		<>
			<Typography fontWeight={600} fontSize={30} my={3}>
				Education
			</Typography>
			<Box mb='32px'>
				<Card
					title='Bachelor of Science in Information Technology'
					description={
						<>
							<Stack direction='row' justifyContent='space-between'>
								<Typography fontSize={14} fontWeight={600}>
									Punjab University College of Information Technology | PUCIT
								</Typography>
								<Typography fontSize={14} fontWeight={600} variant='h6'>
									Oct 2018 - Jul 2022
								</Typography>
							</Stack>
							<ul style={{ paddingLeft: '25px', listStyleType: 'disc' }}>
								<li>CGPA: 3.13/4.0</li>
							</ul>
						</>
					}
					color='#d461ff'
				/>
			</Box>
		</>
	);
};
