'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/** Scrolls to top on route change. */
export default function RouteScrollTop() {
	const pathname = usePathname();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
	}, [pathname]);

	return null;
}
