import type { ReactNode } from 'react';

type CardProps = {
	children: ReactNode;
	className?: string;
	hover?: boolean;
	as?: 'div' | 'article' | 'section' | 'li';
};

/** Base surface: white, hairline border, soft shadow, optional hover lift. */
export default function Card({ children, className = '', hover = false, as = 'div' }: CardProps) {
	const Tag = as as 'div';
	return <Tag className={`card${hover ? ' card-hover' : ''}${className ? ` ${className}` : ''}`}>{children}</Tag>;
}
