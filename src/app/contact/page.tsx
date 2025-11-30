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
				<Title title='Contact Me' subtitle="Let's work together on your next project" />
				<Stack direction={{ xs: 'column-reverse', md: 'row' }} spacing={{ xs: 4, md: 6 }} mb={4}>
					<ContactDetails />
					<Divider orientation='horizontal' flexItem sx={{ display: { xs: 'block', md: 'none' } }} />

					<Stack spacing={3} flex={2} width='100%'>
						<Box
							sx={{
								p: { xs: 3, md: 4 },
								borderRadius: '20px',
								backgroundColor: '#FFFFFF',
								border: '1px solid #E2E8F0',
							}}>
							<Box mb={3}>
								<Typography
									sx={{
										fontSize: { xs: 20, md: 24 },
										fontWeight: 600,
										color: '#1E293B',
										mb: 1,
									}}>
									Send a Message
								</Typography>
								<Typography
									sx={{
										fontSize: 15,
										color: '#64748B',
									}}>
									I'm always open to discussing product design work or partnerships.
								</Typography>
							</Box>
							<Form />
						</Box>
					</Stack>
				</Stack>
			</div>
		</Fade>
	);
};

export default Contact;
