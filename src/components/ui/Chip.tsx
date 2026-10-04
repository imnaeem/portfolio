import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ChipProps = {
	children: ReactNode;
	variant?: 'soft' | 'accent' | 'outline';
	className?: string;
};

const variants: Record<NonNullable<ChipProps['variant']>, string> = {
	soft: 'bg-stone-100 text-stone-700 border-stone-200',
	accent: 'bg-accent-soft text-accent-dark border-orange-200',
	outline: 'bg-white text-stone-600 border-line',
};

/** Small pill for skills, tech stacks, categories, tags. */
export function Chip({ children, variant = 'soft', className = '' }: ChipProps) {
	return (
		<span
			className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${variants[variant]}${className ? ` ${className}` : ''}`}>
			{children}
		</span>
	);
}

type FilterChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	active?: boolean;
};

/** Toggle pill for category filters. */
export function FilterChip({ active = false, className = '', children, ...rest }: FilterChipProps) {
	return (
		<button
			type='button'
			aria-pressed={active}
			className={`inline-flex cursor-pointer items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
				active
					? 'border-ink bg-ink text-white shadow-sm'
					: 'border-line bg-white text-stone-600 hover:border-stone-300 hover:text-ink'
			}${className ? ` ${className}` : ''}`}
			{...rest}>
			{children}
		</button>
	);
}
