const experience = [
	{
		title: 'Software Engineer',
		company: 'DevBrains',
		period: 'Dec 2022 - Present',
		scope: 'Full-stack product engineering, platform UI, APIs, integrations, testing, and team delivery.',
		impact: ['30% faster GraphQL APIs', 'Led 3 developers', 'RBAC with Auth0', 'CI/CD pipelines'],
		highlights: [
			'Built and optimized Next.js and NestJS applications for data visualization and operations workflows.',
			'Contributed to Slack polling workflows, interactive modals, and Kafka/SQS based microservices.',
			'Owned PR reviews, implementation planning, and delivery quality across Agile project work.',
		],
	},
	{
		title: 'Associate Software Engineer',
		company: 'Kinectro',
		period: 'Aug 2022 - Nov 2022',
		scope: 'MERN and GraphQL development for commerce, social publishing, and customer communication flows.',
		impact: ['WooCommerce + Shopify', 'Facebook APIs', 'Messaging integrations'],
		highlights: [
			'Integrated store management across WooCommerce and Shopify platforms.',
			'Built social posting and scheduling workflows for Facebook and Instagram.',
			'Enabled customer communication via Messenger, Instagram, and WhatsApp integrations.',
		],
	},
];

const ProfessionalExperiences = () => {
	return (
		<div className="relative">
			<div className="absolute left-[17px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />
			<div className="space-y-8">
				{experience.map((item, i) => (
					<div key={item.title} className={`relative flex flex-col md:flex-row gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
						<div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-12 md:pl-0`}>
							<div className={`p-6 rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-border-hover glow-border inline-block text-left w-full`}>
								<div className="flex items-start justify-between gap-4 mb-3">
									<div>
										<h3 className="text-lg font-bold text-text">{item.title}</h3>
										<p className="text-sm font-semibold text-accent mt-0.5">{item.company}</p>
									</div>
									<span className="shrink-0 px-2.5 py-1 rounded-md bg-surface-2 border border-border text-[11px] font-semibold text-text-dim">
										{item.period}
									</span>
								</div>
								<p className="text-[13px] text-text-muted leading-relaxed mb-4">{item.scope}</p>
								<div className="flex flex-wrap gap-1.5 mb-4">
									{item.impact.map((impact) => (
										<span key={impact} className="px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-[11px] font-semibold text-accent">
											{impact}
										</span>
									))}
								</div>
								<ul className="space-y-2.5">
									{item.highlights.map((highlight) => (
										<li key={highlight} className="flex gap-2.5 items-start text-[13px] text-text-muted leading-relaxed">
											<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 text-emerald-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
											{highlight}
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="absolute left-0 md:left-1/2 top-6 w-9 h-9 rounded-full bg-surface border-2 border-accent flex items-center justify-center -translate-x-[17px] md:-translate-x-1/2 z-10">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/></svg>
						</div>
						<div className="hidden md:block flex-1" />
					</div>
				))}
			</div>
		</div>
	);
};

export default ProfessionalExperiences;
