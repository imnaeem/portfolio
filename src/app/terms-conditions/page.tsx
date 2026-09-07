const sections = [
	{ title: '1. Acceptance of Terms', content: 'By accessing and using this portfolio website (imnaeem.dev), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this website.' },
	{ title: '2. Use License', content: 'Permission is granted to temporarily view one copy of the materials for personal, non-commercial transitory viewing only. You may not modify, copy, use commercially, reverse engineer, or remove proprietary notations from the materials.' },
	{ title: '3. Intellectual Property', content: 'All content on this website is the property of Muhammad Naeem and is protected by international copyright laws. Projects displayed may be subject to their own respective licenses.' },
	{ title: '4. Contact Form', content: 'By submitting information through the contact form, you grant permission for Muhammad Naeem to use this information to respond to your inquiry.' },
	{ title: '5. Disclaimer of Warranties', content: 'Materials are provided "as is". No warranties, expressed or implied, are made regarding accuracy, completeness, or reliability.' },
	{ title: '6. Limitations of Liability', content: 'In no event shall Muhammad Naeem be liable for any damages arising out of the use or inability to use the materials on this website.' },
	{ title: '7. Governing Law', content: 'These terms are governed by applicable international laws.' },
];

const TermsConditions = () => {
	return (
		<div className="max-w-3xl mx-auto py-8">
			<div className="mb-8">
				<div className="flex items-center gap-3 mb-3"><div className="w-7 h-[2px] bg-accent rounded-full" /><h1 className="text-3xl font-bold text-text tracking-tight">Terms & Conditions</h1></div>
				<p className="text-sm text-text-muted">Last Updated: November 30, 2025</p>
			</div>
			<div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface space-y-8">
				{sections.map((s) => (
					<div key={s.title}>
						<h2 className="text-base font-bold text-text mb-2">{s.title}</h2>
						<p className="text-[14px] leading-relaxed text-text-muted">{s.content}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default TermsConditions;
