import { NextResponse } from 'next/server';
import { transporter } from '../mailer';

const { MAILER_EMAIL, RECEIVER_EMAIL } = process.env;

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const TURNSTILE_ACTION = 'contact';
const TURNSTILE_MAX_TOKEN_LENGTH = 2048;

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
	value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');

const getClientIp = (req: Request) => {
	const forwarded = req.headers.get('x-forwarded-for');
	if (forwarded) {
		return forwarded.split(',')[0]?.trim() || undefined;
	}
	return req.headers.get('cf-connecting-ip') ?? undefined;
};

const getExpectedHostnames = () =>
	new Set(
		(process.env.TURNSTILE_HOSTNAMES ?? '')
			.split(',')
			.map((hostname) => hostname.trim())
			.filter(Boolean)
	);

type TurnstileResult = {
	success?: boolean;
	action?: string;
	hostname?: string;
	'error-codes'?: string[];
};

const verifyTurnstile = async (token: string, remoteIp?: string) => {
	const secret = process.env.TURNSTILE_SECRET;
	const expectedHostnames = getExpectedHostnames();

	if (!secret) {
		console.error('Contact form: TURNSTILE_SECRET is missing');
		return false;
	}

	const payload = new URLSearchParams({ secret, response: token });
	if (remoteIp) {
		payload.append('remoteip', remoteIp);
	}

	let result: TurnstileResult;
	try {
		const response = await fetch(TURNSTILE_VERIFY_URL, {
			method: 'POST',
			body: payload,
			signal: AbortSignal.timeout(10_000),
		});

		if (!response.ok) {
			console.error('Turnstile verification request failed with status', response.status);
			return false;
		}

		result = (await response.json()) as TurnstileResult;
	} catch (error) {
		console.error('Turnstile verification request error', error);
		return false;
	}

	const hostnameRejected =
		expectedHostnames.size > 0 && (!result.hostname || !expectedHostnames.has(result.hostname));

	if (result.success !== true || result.action !== TURNSTILE_ACTION || hostnameRejected) {
		console.warn('Turnstile rejected the submission', {
			action: result.action,
			hostname: result.hostname,
			errors: result['error-codes'],
		});
		return false;
	}

	return true;
};

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { name, email, message } = body as {
			name?: string;
			email?: string;
			message?: string;
		};
		const turnstileToken = body['cf-turnstile-response'] ?? body.turnstileToken;

		const senderName = typeof name === 'string' ? name.trim() : '';
		const senderEmail = typeof email === 'string' ? email.trim() : '';
		const senderMessage = typeof message === 'string' ? message.trim() : '';

		if (!senderName || !senderEmail || !senderMessage) {
			return NextResponse.json({ message: 'Please fill all the details' }, { status: 400 });
		}

		if (!EMAIL_PATTERN.test(senderEmail) || senderEmail.length > MAX_EMAIL_LENGTH) {
			return NextResponse.json({ message: 'Please enter a valid email address' }, { status: 400 });
		}

		if (senderName.length > MAX_NAME_LENGTH || senderMessage.length > MAX_MESSAGE_LENGTH) {
			return NextResponse.json({ message: 'Your message is too long' }, { status: 400 });
		}

		if (
			typeof turnstileToken !== 'string' ||
			turnstileToken.length === 0 ||
			turnstileToken.length > TURNSTILE_MAX_TOKEN_LENGTH
		) {
			return NextResponse.json({ message: 'Captcha verification is required' }, { status: 403 });
		}

		const isHuman = await verifyTurnstile(turnstileToken, getClientIp(req));
		if (!isHuman) {
			return NextResponse.json({ message: 'Captcha verification failed. Please try again.' }, { status: 403 });
		}

		const safeName = escapeHtml(senderName);
		const safeEmail = escapeHtml(senderEmail);
		const safeMessage = escapeHtml(senderMessage);

		const senderEmailOption = {
			from: MAILER_EMAIL,
			to: senderEmail,
			subject: 'Thank you for contacting us',
			html: `
        <p>Hi ${safeName},</p>
        <p>Thank you for contacting us. We will get back to you as soon as possible.</p>
        <p>Best regards,</p>
        <p>Muhammad Naeem</p>
        `,
		};

		const receiverEmailOption = {
			from: MAILER_EMAIL,
			to: RECEIVER_EMAIL,
			replyTo: senderEmail,
			subject: 'New message from the contact form',
			html: `
        <p>Name: ${safeName}</p>
        <p>Email: ${safeEmail}</p>
        <p>Message: ${safeMessage}</p>
        `,
		};

		transporter.verify();

		const [receiverInfo, senderInfo] = await Promise.all([
			transporter.sendMail(receiverEmailOption),
			transporter.sendMail(senderEmailOption),
		]);

		console.log('Email sent to receiver', receiverInfo.response);
		console.log('Email sent to sender', senderInfo.response);
		return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
	} catch (error) {
		console.error('Error:', error);
		return NextResponse.json({ message: 'Failed to send message. Try Again!' }, { status: 500 });
	}
}
