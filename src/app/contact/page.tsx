import { ContactDetails } from '@/components/contact/ContactDetails';
import { Form } from '@/components/contact/Form';
import Title from '@/components/shared/Title';
import { Box, Divider, Fade, Stack, Typography } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact Me | Muhammad Naeem',
	description: 'Contact me for any queries, partnerships, or product design work.',
};

const Contact = () => {
	return (
		<Fade in timeout={500}>
			<div>
				<Title title='Contact Me' />
				<Stack
					direction={{ xs: 'column-reverse', md: 'row' }}
					spacing={{ xs: 4, md: 8 }}
					alignItems='center'
					mb={4}
					py={{ md: 5, xs: 0 }}>
					<ContactDetails />
					<Divider orientation='horizontal' flexItem sx={{ display: { xs: 'block', md: 'none' } }} />

					<Stack spacing={2} flex={2} width='100%'>
						<Box>
							<Typography variant='body1' fontSize={25}>
								I'm always open to discussing product
							</Typography>
							<Typography fontSize={25} fontWeight={500}>
								design work or partnerships
							</Typography>
						</Box>
						<Form />
					</Stack>
				</Stack>
			</div>
		</Fade>
	);
};

export default Contact;
