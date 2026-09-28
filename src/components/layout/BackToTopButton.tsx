'use client';

import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

/** Floating back-to-top button, appears after scrolling. */
export default function BackToTopButton() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 400);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	if (!visible) return null;

	return (
		<button
			type='button'
			aria-label='Scroll back to top'
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			className='fixed bottom-6 right-6 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-ink text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-stone-800'>
			<FiArrowUp size={18} />
		</button>
	);
}
