import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';

export const metadata: Metadata = {
	title: 'Terms & Conditions | Muhammad Naeem',
	description: 'Terms and conditions for using the imnaeem.dev portfolio website.',
};

export default function TermsConditionsPage() {
	return (
		<LegalPage
			eyebrow='Legal'
			title='Terms & Conditions'
			subtitle='Please read these terms carefully before using this website.'
			updated='November 30, 2025'>
			<h2>1. Acceptance of Terms</h2>
			<p>
				By accessing and using this portfolio website (imnaeem.dev), you accept and agree to be bound by the
				terms and provisions of this agreement. If you do not agree to these terms, please do not use this
				website.
			</p>

			<h2>2. Use License</h2>
			<p>
				Permission is granted to temporarily view and download one copy of the materials on this website for
				personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
				title, and under this license you may not:
			</p>
			<ul>
				<li>Modify or copy the materials</li>
				<li>Use the materials for any commercial purpose or public display</li>
				<li>Attempt to reverse engineer any software contained on the website</li>
				<li>Remove any copyright or other proprietary notations from the materials</li>
			</ul>

			<h2>3. Intellectual Property</h2>
			<p>
				All content on this website, including but not limited to text, graphics, logos, images, code, and
				software, is the property of Muhammad Naeem and is protected by international copyright laws. The
				projects displayed in the portfolio section may be subject to their own respective licenses and terms.
			</p>

			<h2>4. Contact Form and Communications</h2>
			<p>
				By submitting information through the contact form, you grant permission for Muhammad Naeem to use this
				information to respond to your inquiry. Your contact information will be handled in accordance with our
				Privacy Policy and will not be shared with third parties without your consent.
			</p>

			<h2>5. External Links</h2>
			<p>
				This website may contain links to external websites, including project demos and GitHub repositories.
				These external sites have their own terms and conditions, and Muhammad Naeem has no control over their
				content or availability. The inclusion of any links does not necessarily imply a recommendation or
				endorsement.
			</p>

			<h2>6. Disclaimer of Warranties</h2>
			<p>
				The materials on this website are provided on an &lsquo;as is&rsquo; basis. Muhammad Naeem makes no
				warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
				without limitation, implied warranties or conditions of merchantability, fitness for a particular
				purpose, or non-infringement of intellectual property or other violation of rights.
			</p>

			<h2>7. Limitations of Liability</h2>
			<p>
				In no event shall Muhammad Naeem or his suppliers be liable for any damages (including, without
				limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
				or inability to use the materials on this website, even if Muhammad Naeem or an authorized
				representative has been notified orally or in writing of the possibility of such damage.
			</p>

			<h2>8. Revisions and Errata</h2>
			<p>
				The materials appearing on this website could include technical, typographical, or photographic errors.
				Muhammad Naeem does not warrant that any of the materials on the website are accurate, complete, or
				current. Updates may be made periodically to the materials, and Muhammad Naeem may make changes at any
				time without notice.
			</p>

			<h2>9. Professional Services Disclaimer</h2>
			<p>
				While this website showcases professional work and technical expertise, it does not constitute an offer
				for employment or services. Any professional engagements will be subject to separate agreements and
				terms.
			</p>

			<h2>10. Modifications to Terms</h2>
			<p>
				Muhammad Naeem may revise these terms of service at any time without notice. By using this website, you
				are agreeing to be bound by the current version of these terms and conditions.
			</p>

			<h2>11. Governing Law</h2>
			<p>
				These terms and conditions are governed by and construed in accordance with applicable international
				laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
			</p>

			<h2>Contact Information</h2>
			<p>
				If you have any questions about these Terms &amp; Conditions, please contact us at{' '}
				<a href='mailto:contact@imnaeem.dev'>contact@imnaeem.dev</a>
			</p>
		</LegalPage>
	);
}
