'use client';
import { useEffect, useState } from 'react';

const ScrollToTopArrow = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => setVisible(window.scrollY > 100);
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

	if (!visible) return null;

	return (
		<button
			onClick={handleClick}
			aria-label="Scroll to top"
			className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/30 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 animate-fade-in"
		>
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
		</button>
	);
};

export default ScrollToTopArrow;
