import { NextResponse } from 'next/server';
import { transporter } from '../mailer';

const { MAILER_EMAIL, RECEIVER_EMAIL } = process.env;

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const { name, email, companyName, reason } = body;
		if (!name || !email || !companyName || !reason) {
			return NextResponse.json({ message: 'Please fill all the details' }, { status: 400 });
		}

		const emailOption = {
			from: MAILER_EMAIL,
			to: RECEIVER_EMAIL,
			subject: 'Resume Download Notification',
			html: `
			<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;"></div>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Company Name:</strong> ${companyName}</p>
				<p><strong>Reason for Download:</strong> ${reason}</p>
			</div>
        `,
		};

		transporter.verify();
		const info = await transporter.sendMail(emailOption);

		console.log('Email sent successfully', info.response);
		return NextResponse.json({ message: 'Ok' }, { status: 200 });
	} catch (error) {
		console.error('Error:', error);
		return NextResponse.json({ message: 'Failed to send notification Email' }, { status: 500 });
	}
}
