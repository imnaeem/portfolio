'use client';
import { useEffect } from 'react';

const WhatsAppRedirect = () => {
	useEffect(() => {
		const mobileNumber = String.fromCharCode(52, 52, 55, 56, 52, 57, 56, 50, 48, 50, 51, 50);
		const whatsappUrl = `https://wa.me/${mobileNumber}`;
		window.location.href = whatsappUrl;
	}, []);

	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
			<p>Redirecting to WhatsApp...</p>
		</div>
	);
};

export default WhatsAppRedirect;

