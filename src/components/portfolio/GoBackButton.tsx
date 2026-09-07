'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const GoBackButton = () => {
	const router = useRouter();
	const [canGoBack, setCanGoBack] = useState(false);

	useEffect(() => {
		setCanGoBack(window.history.length > 2);
	}, []);

	const handleGoBack = () => {
		if (canGoBack) router.back();
		else router.replace('/portfolio');
	};

	return (
		<button
			onClick={handleGoBack}
			className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-text-muted hover:text-text hover:border-border-hover text-sm font-medium transition-all duration-200"
		>
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
			Go back
		</button>
	);
};

export default GoBackButton;
