import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';

export const metadata: Metadata = {
	title: 'Privacy Policy | Muhammad Naeem',
	description: 'How imnaeem.dev collects, uses, and safeguards your information.',
};

export default function PrivacyPolicyPage() {
	return (
		<LegalPage
			eyebrow='Legal'
			title='Privacy Policy'
			subtitle='Your privacy is important to us.'
			updated='November 30, 2025'>
			<h2>1. Introduction</h2>
			<p>
				Muhammad Naeem (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the imnaeem.dev
				website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
				when you visit our portfolio website. Please read this policy carefully to understand our practices
				regarding your personal data.
			</p>

			<h2>2. Information We Collect</h2>
			<p>We may collect and process the following types of information:</p>
			<h3>2.1 Personal Information</h3>
			<p>
				When you use the contact form, we collect your name, email address, and any message content you
				provide. This information is voluntarily submitted by you.
			</p>
			<h3>2.2 Automatically Collected Information</h3>
			<p>
				We may automatically collect certain information about your device and usage patterns, including:
			</p>
			<ul>
				<li>Browser type and version</li>
				<li>Operating system</li>
				<li>IP address (anonymized)</li>
				<li>Pages visited and time spent on pages</li>
				<li>Referral source</li>
			</ul>

			<h2>3. How We Use Your Information</h2>
			<p>We use the collected information for the following purposes:</p>
			<ul>
				<li>To respond to your inquiries and communications</li>
				<li>To improve website functionality and user experience</li>
				<li>To analyze website traffic and usage patterns</li>
				<li>To maintain website security and prevent fraud</li>
				<li>To comply with legal obligations</li>
			</ul>

			<h2>4. Data Storage and Security</h2>
			<p>
				We implement appropriate technical and organizational security measures to protect your personal
				information against unauthorized access, alteration, disclosure, or destruction. However, no method of
				transmission over the internet or electronic storage is 100% secure. While we strive to protect your
				data, we cannot guarantee absolute security.
			</p>

			<h2>5. Third-Party Services</h2>
			<p>
				This website may use third-party services for hosting, analytics, and other functionalities:
			</p>
			<h3>5.1 Hosting Services</h3>
			<p>
				This website is hosted on Vercel, which may collect and process data according to their own privacy
				policies.
			</p>
			<h3>5.2 External Links</h3>
			<p>
				Our website contains links to external websites (such as GitHub, LinkedIn, and project demos). We
				are not responsible for the privacy practices of these third-party sites.
			</p>

			<h2>6. Cookies and Tracking Technologies</h2>
			<p>
				This website may use cookies and similar tracking technologies to enhance user experience and analyze
				website traffic. You can control cookie preferences through your browser settings. Disabling cookies may
				affect the functionality of certain features.
			</p>

			<h2>7. Data Retention</h2>
			<p>
				We retain personal information only for as long as necessary to fulfill the purposes outlined in this
				Privacy Policy, unless a longer retention period is required by law. Contact form submissions are
				typically retained for a reasonable period to respond to inquiries and maintain communication records.
			</p>

			<h2>8. Your Rights</h2>
			<p>
				Depending on your location, you may have the following rights regarding your personal data:
			</p>
			<ul>
				<li>Right to access your personal data</li>
				<li>Right to rectification of inaccurate data</li>
				<li>Right to erasure (&ldquo;right to be forgotten&rdquo;)</li>
				<li>Right to restrict processing</li>
				<li>Right to data portability</li>
				<li>Right to object to processing</li>
			</ul>
			<p>
				To exercise these rights, please contact us using the information provided at the end of this policy.
			</p>

			<h2>9. Children&apos;s Privacy</h2>
			<p>
				This website is not intended for individuals under the age of 13. We do not knowingly collect personal
				information from children. If you believe we have inadvertently collected information from a child,
				please contact us immediately.
			</p>

			<h2>10. International Data Transfers</h2>
			<p>
				Your information may be transferred to and processed in countries other than your own. These countries
				may have different data protection laws. By using this website, you consent to such transfers.
			</p>

			<h2>11. Changes to This Privacy Policy</h2>
			<p>
				We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
				updated &ldquo;Last Updated&rdquo; date. We encourage you to review this policy periodically for any
				updates. Continued use of the website after changes constitutes acceptance of the updated policy.
			</p>

			<h2>Contact Information</h2>
			<p>
				If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data,
				please contact us:
			</p>
			<p>
				Email: <a href='mailto:contact@imnaeem.dev'>contact@imnaeem.dev</a>
				<br />
				Website: <a href='https://imnaeem.dev'>https://imnaeem.dev</a>
			</p>
		</LegalPage>
	);
}
