'use client';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ContactForm from './ContactForm';

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export const Form = () => {
	return (
		<GoogleReCaptchaProvider reCaptchaKey={SITE_KEY ?? ''}>
			<ContactForm />
		</GoogleReCaptchaProvider>
	);
};
