'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = {
	children: ReactNode;
	delay?: number;
	className?: string;
	as?: 'div' | 'section' | 'li' | 'article';
};

/** Fades/slides content in once it enters the viewport. */
export default function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === 'undefined') {
			setVisible(true);
			return;
		}
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setVisible(true);
						observer.disconnect();
					}
				}
			},
			{ threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	const Tag = as as 'div';

	return (
		<Tag
			ref={ref}
			className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
			style={{ transitionDelay: `${delay}ms` }}>
			{children}
		</Tag>
	);
}
