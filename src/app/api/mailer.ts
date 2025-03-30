import nodemailer from 'nodemailer';

const { MAILER_HOST, MAILER_EMAIL, MAILER_EMAIL_PASSWORD } = process.env;

export const transporter = nodemailer.createTransport({
	secure: true,
	port: 465,
	host: MAILER_HOST,
	auth: { user: MAILER_EMAIL, pass: MAILER_EMAIL_PASSWORD },
});
