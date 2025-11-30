import { Box, Container, Stack, Typography, Fade } from '@mui/material';
import Title from '@/components/shared/Title';

const PrivacyPolicy = () => {
	return (
		<Fade in timeout={500}>
			<Container maxWidth='lg'>
				<Title title='Privacy Policy' subtitle='Your privacy is important to us' />

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
								1. Introduction
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								Muhammad Naeem ("we," "our," or "us") operates the imnaeem.dev website. This Privacy Policy explains how
								we collect, use, disclose, and safeguard your information when you visit our portfolio website. Please
								read this policy carefully to understand our practices regarding your personal data.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								2. Information We Collect
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569', mb: 2 }}>
								We may collect and process the following types of information:
							</Typography>

							<Stack spacing={2}>
								<Box>
									<Typography sx={{ fontSize: 15, fontWeight: 600, color: '#1E293B', mb: 1 }}>
										2.1 Personal Information
									</Typography>
									<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
										When you use the contact form, we collect your name, email address, and any message content you
										provide. This information is voluntarily submitted by you.
									</Typography>
								</Box>

								<Box>
									<Typography sx={{ fontSize: 15, fontWeight: 600, color: '#1E293B', mb: 1 }}>
										2.2 Automatically Collected Information
									</Typography>
									<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569', mb: 1 }}>
										We may automatically collect certain information about your device and usage patterns, including:
									</Typography>
									<Stack spacing={1} sx={{ pl: 3 }}>
										<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
											• Browser type and version
										</Typography>
										<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
											• Operating system
										</Typography>
										<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
											• IP address (anonymized)
										</Typography>
										<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
											• Pages visited and time spent on pages
										</Typography>
										<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
											• Referral source
										</Typography>
									</Stack>
								</Box>
							</Stack>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								3. How We Use Your Information
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569', mb: 1 }}>
								We use the collected information for the following purposes:
							</Typography>
							<Stack spacing={1} sx={{ pl: 3 }}>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• To respond to your inquiries and communications
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• To improve website functionality and user experience
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• To analyze website traffic and usage patterns
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• To maintain website security and prevent fraud
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• To comply with legal obligations
								</Typography>
							</Stack>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								4. Data Storage and Security
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								We implement appropriate technical and organizational security measures to protect your personal
								information against unauthorized access, alteration, disclosure, or destruction. However, no method of
								transmission over the internet or electronic storage is 100% secure. While we strive to protect your
								data, we cannot guarantee absolute security.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								5. Third-Party Services
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569', mb: 2 }}>
								This website may use third-party services for hosting, analytics, and other functionalities:
							</Typography>
							<Stack spacing={2}>
								<Box>
									<Typography sx={{ fontSize: 15, fontWeight: 600, color: '#1E293B', mb: 1 }}>
										5.1 Hosting Services
									</Typography>
									<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
										This website is hosted on Vercel, which may collect and process data according to their own privacy
										policies.
									</Typography>
								</Box>

								<Box>
									<Typography sx={{ fontSize: 15, fontWeight: 600, color: '#1E293B', mb: 1 }}>
										5.2 External Links
									</Typography>
									<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
										Our website contains links to external websites (such as GitHub, LinkedIn, and project demos). We
										are not responsible for the privacy practices of these third-party sites.
									</Typography>
								</Box>
							</Stack>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								6. Cookies and Tracking Technologies
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								This website may use cookies and similar tracking technologies to enhance user experience and analyze
								website traffic. You can control cookie preferences through your browser settings. Disabling cookies may
								affect the functionality of certain features.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								7. Data Retention
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								We retain personal information only for as long as necessary to fulfill the purposes outlined in this
								Privacy Policy, unless a longer retention period is required by law. Contact form submissions are
								typically retained for a reasonable period to respond to inquiries and maintain communication records.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								8. Your Rights
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569', mb: 1 }}>
								Depending on your location, you may have the following rights regarding your personal data:
							</Typography>
							<Stack spacing={1} sx={{ pl: 3 }}>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• Right to access your personal data
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• Right to rectification of inaccurate data
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• Right to erasure ("right to be forgotten")
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• Right to restrict processing
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• Right to data portability
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• Right to object to processing
								</Typography>
							</Stack>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569', mt: 2 }}>
								To exercise these rights, please contact us using the information provided at the end of this policy.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								9. Children's Privacy
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								This website is not intended for individuals under the age of 13. We do not knowingly collect personal
								information from children. If you believe we have inadvertently collected information from a child,
								please contact us immediately.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								10. International Data Transfers
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								Your information may be transferred to and processed in countries other than your own. These countries
								may have different data protection laws. By using this website, you consent to such transfers.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								11. Changes to This Privacy Policy
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
								updated "Last Updated" date. We encourage you to review this policy periodically for any updates.
								Continued use of the website after changes constitutes acceptance of the updated policy.
							</Typography>
						</Box>

						<Box sx={{ mt: 4, p: 3, backgroundColor: '#F8FAFC', borderRadius: '12px' }}>
							<Typography variant='h6' sx={{ fontSize: 16, fontWeight: 700, color: '#1E293B', mb: 1 }}>
								Contact Information
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569', mb: 2 }}>
								If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data,
								please contact us:
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								Email:{' '}
								<a href='mailto:contact@imnaeem.dev' style={{ color: '#4F46E5', textDecoration: 'none' }}>
									contact@imnaeem.dev
								</a>
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								Website:{' '}
								<a href='https://imnaeem.dev' style={{ color: '#4F46E5', textDecoration: 'none' }}>
									https://imnaeem.dev
								</a>
							</Typography>
						</Box>
					</Stack>
				</Box>
			</Container>
		</Fade>
	);
};

export default PrivacyPolicy;

