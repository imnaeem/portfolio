import { NextResponse } from 'next/server';

const { RECAPTCHA_SECRET_KEY } = process.env;

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const { recaptchaToken } = body;

		const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: `secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
		});

		const recaptchaData = await recaptchaResponse.json();

		if (!recaptchaData.success || recaptchaData.score < 0.5) {
			return NextResponse.json({ message: 'reCAPTCHA verification failed. Try again!' }, { status: 400 });
		}

		return NextResponse.json({ message: 'Success' }, { status: 200 });
	} catch (error) {
		console.error('Error:', error);
		return NextResponse.json({ message: 'reCAPTCHA verification failed. Try again!' }, { status: 400 });
	}
}
