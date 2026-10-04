'use client';

import { useEffect } from 'react';

const WhatsAppRedirect = () => {
	useEffect(() => {
		const mobileNumber = String.fromCharCode(52, 52, 55, 56, 52, 57, 56, 50, 48, 50, 51, 50);
		const whatsappUrl = `https://wa.me/${mobileNumber}`;
		window.location.href = whatsappUrl;
	}, []);

	return (
		<div className='flex min-h-[40vh] flex-col items-center justify-center gap-4 text-center'>
			<div
				className='h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent'
				role='status'
				aria-label='Loading'
			/>
			<p className='text-sm text-ink-soft'>Redirecting to WhatsApp…</p>
		</div>
	);
};

export default WhatsAppRedirect;
