const sections = [
	{ title: '1. General Information', content: 'The information provided on imnaeem.dev is for general informational and showcase purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.' },
	{ title: '2. Portfolio Projects', content: 'The portfolio section showcases various projects, both professional and personal. Professional projects may be subject to confidentiality agreements. Screenshots and descriptions represent the project at the time of development and may not reflect current implementations. Project demos are provided "as-is" and may have limited functionality or availability.' },
	{ title: '3. Technical Information', content: 'Technical details, code snippets, and implementation approaches shared on this website are for educational and demonstrative purposes. Always validate and test any approaches for your specific use case and requirements.' },
	{ title: '4. Professional Experience', content: 'The experience and skills listed represent a professional summary. Specific project details from professional work may be generalized to protect client confidentiality and proprietary information.' },
	{ title: '5. External Links', content: 'This website contains links to external websites provided for convenience only. We have no control over external sites and are not responsible for their content, privacy policies, or practices.' },
	{ title: '6. Limitation of Liability', content: 'In no event will Muhammad Naeem be liable for any loss or damage arising out of, or in connection with, the use of this website.' },
];

const Disclaimer = () => {
	return (
		<div className="max-w-3xl mx-auto py-8">
			<div className="mb-8">
				<div className="flex items-center gap-3 mb-3"><div className="w-7 h-[2px] bg-accent rounded-full" /><h1 className="text-3xl font-bold text-text tracking-tight">Disclaimer</h1></div>
				<p className="text-sm text-text-muted">Last Updated: November 30, 2025</p>
			</div>
			<div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface space-y-8">
				{sections.map((s) => (
					<div key={s.title}>
						<h2 className="text-base font-bold text-text mb-2">{s.title}</h2>
						<p className="text-[14px] leading-relaxed text-text-muted">{s.content}</p>
					</div>
				))}
				<div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
					<p className="text-sm font-bold text-amber-400 mb-1">Important Notice</p>
					<p className="text-[13px] leading-relaxed text-text-muted">This disclaimer is subject to change without notice. Your use of this website following any changes constitutes your agreement to be bound by the disclaimer as changed.</p>
				</div>
			</div>
		</div>
	);
};

export default Disclaimer;
