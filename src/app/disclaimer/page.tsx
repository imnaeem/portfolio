import { Box, Container, Stack, Typography, Fade } from '@mui/material';
import Title from '@/components/shared/Title';

const Disclaimer = () => {
	return (
		<Fade in timeout={500}>
			<Container maxWidth='lg'>
				<Title title='Disclaimer' subtitle='Important information about the use of this website' />

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
								1. General Information
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								The information provided on imnaeem.dev is for general informational and showcase purposes only. While we
								strive to keep the information accurate and up-to-date, we make no representations or warranties of any
								kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of
								the website or the information, products, services, or related graphics contained on the website.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								2. Portfolio Projects
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569', mb: 2 }}>
								The portfolio section showcases various projects, both professional and personal:
							</Typography>
							<Stack spacing={1} sx={{ pl: 3 }}>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• Professional projects may be subject to confidentiality agreements, and displayed information is
									limited to what is publicly permissible
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• Screenshots and descriptions represent the project at the time of development and may not reflect
									current implementations
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• Project demos, when available, are provided "as-is" and may have limited functionality or
									availability
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• Technology stacks and implementations described are accurate to the best of our knowledge at the time
									of publication
								</Typography>
							</Stack>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								3. Technical Information
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								Technical details, code snippets, and implementation approaches shared on this website are for
								educational and demonstrative purposes. While these represent real-world solutions and best practices at
								the time of implementation, technology evolves rapidly. Always validate and test any approaches for your
								specific use case and requirements.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								4. Professional Experience
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								The experience and skills listed on this website represent a professional summary. While all information
								is truthful and accurate, specific project details from professional work may be generalized to protect
								client confidentiality and proprietary information. References and detailed work history can be provided
								upon request for legitimate employment or collaboration opportunities.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								5. External Links and Resources
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569', mb: 2 }}>
								This website contains links to external websites and resources:
							</Typography>
							<Stack spacing={1} sx={{ pl: 3 }}>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• These links are provided for convenience and informational purposes only
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• We have no control over the nature, content, and availability of external sites
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• The inclusion of any links does not necessarily imply recommendation or endorsement
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• We are not responsible for the content, privacy policies, or practices of external websites
								</Typography>
							</Stack>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								6. Professional Services
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								This website serves as a professional portfolio and does not constitute an offer for services or
								employment. Any professional engagements, consulting arrangements, or employment opportunities will be
								subject to separate agreements with clearly defined terms, scope, deliverables, and compensation. The
								portfolio is meant to showcase capabilities and experience, not to guarantee specific outcomes or
								results.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								7. Limitation of Liability
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								In no event will Muhammad Naeem be liable for any loss or damage including, without limitation, indirect
								or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits
								arising out of, or in connection with, the use of this website. Through this website, you may be able to
								link to other websites which are not under the control of Muhammad Naeem. We have no control over the
								nature, content, and availability of those sites.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								8. Accuracy and Availability
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569', mb: 2 }}>
								Every effort is made to keep the website running smoothly and information current. However:
							</Typography>
							<Stack spacing={1} sx={{ pl: 3 }}>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• The website may be temporarily unavailable due to technical issues or maintenance
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• Information may become outdated and is subject to change without notice
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• We make no warranty that the website will be error-free or uninterrupted
								</Typography>
								<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
									• Technical errors, typos, or inaccuracies may occur despite our best efforts
								</Typography>
							</Stack>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								9. Intellectual Property
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								All content on this website, including text, images, code, and designs, is the intellectual property of
								Muhammad Naeem unless otherwise stated. Some projects may use third-party libraries, frameworks, and
								tools that have their own licenses. The use of company logos, trademarks, or brand names in the
								portfolio section is for identification purposes only and does not imply endorsement or affiliation
								unless explicitly stated.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								10. Contact Form
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								The contact form is provided as a convenience for communication. While we make every effort to respond to
								inquiries in a timely manner, we do not guarantee response times or that all messages will be answered.
								Submission of a message does not create any professional relationship, obligation, or expectation of
								services.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								11. Blog Content
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								Blog articles and technical content are provided for educational purposes and represent opinions and
								experiences. While we strive for accuracy, technical information should be independently verified before
								implementation. Code examples and tutorials are provided without warranty and should be tested thoroughly
								in your specific environment.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								12. Changes to This Disclaimer
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								This disclaimer may be updated from time to time. Any changes will be posted on this page with an updated
								revision date. It is your responsibility to review this disclaimer periodically for changes. Your
								continued use of the website following the posting of changes constitutes acceptance of those changes.
							</Typography>
						</Box>

						<Box>
							<Typography variant='h6' sx={{ fontSize: 18, fontWeight: 700, color: '#1E293B', mb: 2 }}>
								13. Consent
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								By using this website, you hereby consent to this disclaimer and agree to its terms. If you do not agree
								with this disclaimer, please do not use this website.
							</Typography>
						</Box>

						<Box sx={{ mt: 4, p: 3, backgroundColor: '#FEF3C7', borderRadius: '12px', border: '1px solid #FCD34D' }}>
							<Typography variant='h6' sx={{ fontSize: 16, fontWeight: 700, color: '#92400E', mb: 1 }}>
								⚠️ Important Notice
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#78350F' }}>
								This disclaimer is subject to change without notice. Your use of this website following any such changes
								constitutes your agreement to follow and be bound by the disclaimer as changed. For this reason, we
								encourage you to review this disclaimer whenever you use this website.
							</Typography>
						</Box>

						<Box sx={{ mt: 4, p: 3, backgroundColor: '#F8FAFC', borderRadius: '12px' }}>
							<Typography variant='h6' sx={{ fontSize: 16, fontWeight: 700, color: '#1E293B', mb: 1 }}>
								Questions or Concerns?
							</Typography>
							<Typography sx={{ fontSize: 15, lineHeight: 1.8, color: '#475569' }}>
								If you have any questions about this disclaimer or require clarification, please contact us at{' '}
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

export default Disclaimer;

