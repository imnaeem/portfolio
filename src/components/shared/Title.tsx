const Title = ({ title, subtitle }: { title: string; subtitle?: string }) => {
	return (
		<div className="mb-8">
			<div className="flex items-center gap-3 mb-3">
				<div className="w-7 h-[2px] bg-accent rounded-full" />
				<h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">{title}</h2>
			</div>
			{subtitle && <p className="text-sm sm:text-base text-text-muted max-w-2xl leading-relaxed">{subtitle}</p>}
		</div>
	);
};

export default Title;
