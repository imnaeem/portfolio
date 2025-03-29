'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const ScrollToTop = () => {
	const pathname = usePathname();

	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, [pathname]);

	return null;
};

export default ScrollToTop;
