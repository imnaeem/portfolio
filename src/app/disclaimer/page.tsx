import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';

export const metadata: Metadata = {
	title: 'Disclaimer | Muhammad Naeem',
	description: 'Important information about the use of the imnaeem.dev portfolio website.',
};

export default function DisclaimerPage() {
	return (
		<LegalPage
			eyebrow='Legal'
			title='Disclaimer'
			subtitle='Important information about the use of this website.'
			updated='November 30, 2025'>
			<h2>1. General Information</h2>
			<p>
				The information provided on imnaeem.dev is for general informational and showcase purposes only. While we
				strive to keep the information accurate and up-to-date, we make no representations or warranties of any
				kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of
				the website or the information, products, services, or related graphics contained on the website.
			</p>

			<h2>2. Portfolio Projects</h2>
			<p>The portfolio section showcases various projects, both professional and personal:</p>
			<ul>
				<li>
					Professional projects may be subject to confidentiality agreements, and displayed information is
					limited to what is publicly permissible
				</li>
				<li>
					Screenshots and descriptions represent the project at the time of development and may not reflect
					current implementations
				</li>
				<li>
					Project demos, when available, are provided &ldquo;as-is&rdquo; and may have limited functionality
					or availability
				</li>
				<li>
					Technology stacks and implementations described are accurate to the best of our knowledge at the time
					of publication
				</li>
			</ul>

			<h2>3. Technical Information</h2>
			<p>
				Technical details, code snippets, and implementation approaches shared on this website are for
				educational and demonstrative purposes. While these represent real-world solutions and best practices at
				the time of implementation, technology evolves rapidly. Always validate and test any approaches for your
				specific use case and requirements.
			</p>

			<h2>4. Professional Experience</h2>
			<p>
				The experience and skills listed on this website represent a professional summary. While all information
				is truthful and accurate, specific project details from professional work may be generalized to protect
				client confidentiality and proprietary information. References and detailed work history can be provided
				upon request for legitimate employment or collaboration opportunities.
			</p>

			<h2>5. External Links and Resources</h2>
			<p>This website contains links to external websites and resources:</p>
			<ul>
				<li>These links are provided for convenience and informational purposes only</li>
				<li>We have no control over the nature, content, and availability of external sites</li>
				<li>The inclusion of any links does not necessarily imply recommendation or endorsement</li>
				<li>We are not responsible for the content, privacy policies, or practices of external websites</li>
			</ul>

			<h2>6. Professional Services</h2>
			<p>
				This website serves as a professional portfolio and does not constitute an offer for services or
				employment. Any professional engagements, consulting arrangements, or employment opportunities will be
				subject to separate agreements with clearly defined terms, scope, deliverables, and compensation. The
				portfolio is meant to showcase capabilities and experience, not to guarantee specific outcomes or
				results.
			</p>

			<h2>7. Limitation of Liability</h2>
			<p>
				In no event will Muhammad Naeem be liable for any loss or damage including, without limitation, indirect
				or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits
				arising out of, or in connection with, the use of this website. Through this website, you may be able to
				link to other websites which are not under the control of Muhammad Naeem. We have no control over the
				nature, content, and availability of those sites.
			</p>

			<h2>8. Accuracy and Availability</h2>
			<p>
				Every effort is made to keep the website running smoothly and information current. However:
			</p>
			<ul>
				<li>The website may be temporarily unavailable due to technical issues or maintenance</li>
				<li>Information may become outdated and is subject to change without notice</li>
				<li>We make no warranty that the website will be error-free or uninterrupted</li>
				<li>Technical errors, typos, or inaccuracies may occur despite our best efforts</li>
			</ul>

			<h2>9. Intellectual Property</h2>
			<p>
				All content on this website, including text, images, code, and designs, is the intellectual property of
				Muhammad Naeem unless otherwise stated. Some projects may use third-party libraries, frameworks, and
				tools that have their own licenses. The use of company logos, trademarks, or brand names in the
				portfolio section is for identification purposes only and does not imply endorsement or affiliation
				unless explicitly stated.
			</p>

			<h2>10. Contact Form</h2>
			<p>
				The contact form is provided as a convenience for communication. While we make every effort to respond to
				inquiries in a timely manner, we do not guarantee response times or that all messages will be answered.
				Submission of a message does not create any professional relationship, obligation, or expectation of
				services.
			</p>

			<h2>11. Blog Content</h2>
			<p>
				Blog articles and technical content are provided for educational purposes and represent opinions and
				experiences. While we strive for accuracy, technical information should be independently verified before
				implementation. Code examples and tutorials are provided without warranty and should be tested thoroughly
				in your specific environment.
			</p>

			<h2>12. Changes to This Disclaimer</h2>
			<p>
				This disclaimer may be updated from time to time. Any changes will be posted on this page with an updated
				revision date. It is your responsibility to review this disclaimer periodically for changes. Your
				continued use of the website following the posting of changes constitutes acceptance of those changes.
			</p>

			<h2>13. Consent</h2>
			<p>
				By using this website, you hereby consent to this disclaimer and agree to its terms. If you do not agree
				with this disclaimer, please do not use this website.
			</p>

			<h2>Questions or Concerns?</h2>
			<p>
				If you have any questions about this disclaimer or require clarification, please contact us at{' '}
				<a href='mailto:contact@imnaeem.dev'>contact@imnaeem.dev</a>
			</p>
		</LegalPage>
	);
}
