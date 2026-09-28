type SectionHeadingProps = {
	eyebrow: string;
	title: string;
	description?: string;
	align?: 'left' | 'center';
	className?: string;
};

/** Small sharp section label: accent eyebrow + display title + muted lede. */
export default function SectionHeading({
	eyebrow,
	title,
	description,
	align = 'left',
	className = '',
}: SectionHeadingProps) {
	const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start';
	return (
		<div className={`flex flex-col gap-3 ${alignCls}${className ? ` ${className}` : ''}`}>
			<span className='text-xs font-semibold uppercase tracking-[0.18em] text-accent'>{eyebrow}</span>
			<h2 className='font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl'>{title}</h2>
			{description ? <p className='max-w-2xl text-base leading-relaxed text-ink-soft'>{description}</p> : null}
		</div>
	);
}
