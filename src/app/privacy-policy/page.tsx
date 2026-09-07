const sections = [
	{ title: '1. Introduction', content: 'Muhammad Naeem operates the imnaeem.dev website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our portfolio website.' },
	{ title: '2. Information We Collect', content: 'When you use the contact form, we collect your name, email address, and message content. We may also automatically collect browser type, operating system, anonymized IP address, pages visited, and referral source.' },
	{ title: '3. How We Use Your Information', content: 'We use collected information to respond to inquiries, improve website functionality, analyze traffic patterns, maintain security, and comply with legal obligations.' },
	{ title: '4. Data Security', content: 'We implement appropriate technical and organizational security measures. However, no method of transmission over the internet is 100% secure.' },
	{ title: '5. Third-Party Services', content: 'This website is hosted on Vercel and contains links to external websites. We are not responsible for the privacy practices of third-party sites.' },
	{ title: '6. Cookies', content: 'This website may use cookies to enhance user experience. You can control cookie preferences through your browser settings.' },
	{ title: '7. Your Rights', content: 'You may have rights to access, rectify, erase, restrict processing, portability, and objection regarding your personal data. Contact us to exercise these rights.' },
	{ title: '8. Changes to This Policy', content: 'We may update this Privacy Policy from time to time. Continued use of the website after changes constitutes acceptance of the updated policy.' },
];

const PrivacyPolicy = () => {
	return (
		<div className="max-w-3xl mx-auto py-8">
			<div className="mb-8">
				<div className="flex items-center gap-3 mb-3"><div className="w-7 h-[2px] bg-accent rounded-full" /><h1 className="text-3xl font-bold text-text tracking-tight">Privacy Policy</h1></div>
				<p className="text-sm text-text-muted">Last Updated: November 30, 2025</p>
			</div>
			<div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface space-y-8">
				{sections.map((s) => (
					<div key={s.title}>
						<h2 className="text-base font-bold text-text mb-2">{s.title}</h2>
						<p className="text-[14px] leading-relaxed text-text-muted">{s.content}</p>
					</div>
				))}
				<div className="p-4 rounded-xl bg-surface-2 border border-border">
					<p className="text-sm font-bold text-text mb-1">Contact</p>
					<p className="text-[13px] text-text-muted">Email: <a href="mailto:contact@imnaeem.dev" className="text-accent hover:underline">contact@imnaeem.dev</a></p>
				</div>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
