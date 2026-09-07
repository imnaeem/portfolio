export const Education = () => {
	return (
		<section>
			<h2 className="text-xl font-bold text-text mb-6 flex items-center gap-3">
				<span className="w-1.5 h-6 bg-accent rounded-full" />
				Education
			</h2>
			<div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-border-hover glow-border">
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
					<div className="flex items-center gap-4">
						<div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="m4 6 8-4 8 4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/><path d="M18 22V5.14"/><path d="M6 22V5.14"/></svg>
						</div>
						<div>
							<h3 className="text-base font-bold text-text">Bachelor of Science in Information Technology</h3>
							<p className="text-sm font-semibold text-accent mt-0.5">Punjab University College of Information Technology | PUCIT</p>
						</div>
					</div>
					<span className="text-sm text-text-dim font-medium sm:text-right">CGPA: 3.13/4.0</span>
				</div>
			</div>
		</section>
	);
};
