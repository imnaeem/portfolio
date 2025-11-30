import { Box, Container, Stack, Typography, Fade } from '@mui/material';
import Title from '@/components/shared/Title';

const TermsConditions = () => {
	return (
		<Fade in timeout={500}>
			<Container maxWidth='lg'>
				<Title title='Terms & Conditions' subtitle='Please read these terms carefully before using this website' />

				<Box
					sx={{
						p: { xs: 3, md: 4 },
						borderRadius: '20px',
						backgroundColor: '#FFFFFF',
						border: '1px solid #E2E8F0',
					}}>
					<Stack spacing={4}>
						<Box>
							<Typography variant='body2' sx={{ color: '#64748B', fontSize: 14, mb: 3 }}>
								Last Updated: November 30, 2025
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								1. Acceptance of Terms
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								By accessing and using this portfolio website (imnaeem.dev), you accept and agree to be bound by the
								terms and provisions of this agreement. If you do not agree to these terms, please do not use this
								website.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								2. Use License
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569', mb: 2 }}>
								Permission is granted to temporarily view and download one copy of the materials on this website for
								personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
								title, and under this license you may not:
							</Typography>
							<Stack spacing={1} sx={{ pl: 3 }}>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• Modify or copy the materials
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• Use the materials for any commercial purpose or public display
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• Attempt to reverse engineer any software contained on the website
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• Remove any copyright or other proprietary notations from the materials
								</Typography>
							</Stack>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								3. Intellectual Property
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								All content on this website, including but not limited to text, graphics, logos, images, code, and
								software, is the property of Muhammad Naeem and is protected by international copyright laws. The
								projects displayed in the portfolio section may be subject to their own respective licenses and terms.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								4. Contact Form and Communications
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								By submitting information through the contact form, you grant permission for Muhammad Naeem to use this
								information to respond to your inquiry. Your contact information will be handled in accordance with our
								Privacy Policy and will not be shared with third parties without your consent.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								5. External Links
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								This website may contain links to external websites, including project demos and GitHub repositories.
								These external sites have their own terms and conditions, and Muhammad Naeem has no control over their
								content or availability. The inclusion of any links does not necessarily imply a recommendation or
								endorsement.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								6. Disclaimer of Warranties
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								The materials on this website are provided on an 'as is' basis. Muhammad Naeem makes no warranties,
								expressed or implied, and hereby disclaims and negates all other warranties including, without
								limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
								non-infringement of intellectual property or other violation of rights.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								7. Limitations of Liability
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								In no event shall Muhammad Naeem or his suppliers be liable for any damages (including, without
								limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
								or inability to use the materials on this website, even if Muhammad Naeem or an authorized
								representative has been notified orally or in writing of the possibility of such damage.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								8. Revisions and Errata
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								The materials appearing on this website could include technical, typographical, or photographic errors.
								Muhammad Naeem does not warrant that any of the materials on the website are accurate, complete, or
								current. Updates may be made periodically to the materials, and Muhammad Naeem may make changes at any
								time without notice.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								9. Professional Services Disclaimer
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								While this website showcases professional work and technical expertise, it does not constitute an offer
								for employment or services. Any professional engagements will be subject to separate agreements and
								terms.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								10. Modifications to Terms
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								Muhammad Naeem may revise these terms of service at any time without notice. By using this website, you
								are agreeing to be bound by the current version of these terms and conditions.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								11. Governing Law
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								These terms and conditions are governed by and construed in accordance with applicable international
								laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
							</Typography>
						</Box>

						<Box sx={{ mt: 4, p: 3, backgroundColor: '#F8FAFC', borderRadius: '12px' }}>
							<Typography variant='h6' sx={{ fontSize: 16, fontWeight: 700, color: '#1E293B', mb: 1 }}>
								Contact Information
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								If you have any questions about these Terms & Conditions, please contact us at{' '}
								<a href='mailto:contact@imnaeem.dev' style={{ color: '#4F46E5', textDecoration: 'none' }}>
									contact@imnaeem.dev
								</a>
							</Typography>
						</Box>
					</Stack>
				</Box>
			</Container>
		</Fade>
	);
};

export default TermsConditions;

