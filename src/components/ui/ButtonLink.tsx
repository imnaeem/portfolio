import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
	href: string;
	variant?: 'primary' | 'secondary' | 'ghost';
	children: ReactNode;
};

const variants: Record<NonNullable<ButtonLinkProps['variant']>, string> = {
	primary:
		'bg-accent text-white shadow-[0_2px_12px_-2px_rgba(234,88,12,0.5)] hover:bg-accent-dark hover:-translate-y-px',
	secondary: 'bg-white text-ink border border-line hover:border-stone-300 hover:-translate-y-px',
	ghost: 'text-ink-soft hover:text-accent hover:bg-accent-soft',
};

/** Consistent link-buttons across the site. */
export default function ButtonLink({ href, variant = 'primary', className = '', children, ...rest }: ButtonLinkProps) {
	return (
		<Link
			href={href}
			className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${variants[variant]}${className ? ` ${className}` : ''}`}
			{...rest}>
			{children}
		</Link>
	);
}
