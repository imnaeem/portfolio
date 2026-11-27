'use client';
import SendIcon from '@mui/icons-material/Send';
import { Button, Stack, TextField } from '@mui/material';
import React, { useCallback, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { Turnstile, type TurnstileHandle } from './Turnstile';

const initialForm = { name: '', email: '', message: '' };
// The site key is public (it ships in the page HTML), so it has a safe fallback.
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '0x4AAAAAAGWFQmpGHTvbPQx0';

const ContactForm = () => {
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState(initialForm);
	const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
	const turnstileRef = useRef<TurnstileHandle>(null);

	const handleTurnstileToken = useCallback((token: string | null) => {
		setTurnstileToken(token);
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!form.name || !form.email || !form.message) {
			toast.error('Please fill all the fields');
			return;
		}

		if (!turnstileToken) {
			toast.error('Please complete the captcha verification');
			return;
		}

		setLoading(true);

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ ...form, 'cf-turnstile-response': turnstileToken }),
			});

			const data = await response.json();

			if (response.ok) {
				toast.success('Message sent successfully, We will get back to you as soon as possible. Thanks!');
				setForm(initialForm);
			} else {
				toast.error(data.message || 'Failed to send message. Try Again!');
			}
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		} catch (error: any) {
			console.error('Error sending email:', error);
			toast.error(error?.message || 'Failed to send message. Try Again!');
		} finally {
			setLoading(false);
			// Turnstile tokens are single-use, so reset the widget after every attempt.
			turnstileRef.current?.reset();
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<Stack spacing={2.5}>
				<TextField
					required
					type='text'
					size='medium'
					key='name'
					name='name'
					variant='filled'
					label='Your Name'
					fullWidth
					value={form.name}
					onChange={handleChange}
					sx={{
						'& .MuiFilledInput-root': {
							borderRadius: '12px',
							backgroundColor: '#F8FAFC',
							border: '1px solid #E2E8F0',
							'&:hover': {
								backgroundColor: '#F1F5F9',
							},
							'&.Mui-focused': {
								backgroundColor: '#F8FAFC',
								borderColor: '#4F46E5',
							},
							'&::before, &::after': {
								display: 'none',
							},
						},
					}}
				/>
				<TextField
					required
					type='email'
					size='medium'
					name='email'
					label='Your Email'
					variant='filled'
					fullWidth
					value={form.email}
					onChange={handleChange}
					sx={{
						'& .MuiFilledInput-root': {
							borderRadius: '12px',
							backgroundColor: '#F8FAFC',
							border: '1px solid #E2E8F0',
							'&:hover': {
								backgroundColor: '#F1F5F9',
							},
							'&.Mui-focused': {
								backgroundColor: '#F8FAFC',
								borderColor: '#4F46E5',
							},
							'&::before, &::after': {
								display: 'none',
							},
						},
					}}
				/>
				<TextField
					required
					size='medium'
					name='message'
					variant='filled'
					label='Your Message'
					multiline
					rows={5}
					fullWidth
					value={form.message}
					onChange={handleChange}
					sx={{
						'& .MuiFilledInput-root': {
							borderRadius: '12px',
							backgroundColor: '#F8FAFC',
							border: '1px solid #E2E8F0',
							'&:hover': {
								backgroundColor: '#F1F5F9',
							},
							'&.Mui-focused': {
								backgroundColor: '#F8FAFC',
								borderColor: '#4F46E5',
							},
							'&::before, &::after': {
								display: 'none',
							},
						},
					}}
				/>
				<Turnstile
					ref={turnstileRef}
					siteKey={TURNSTILE_SITE_KEY}
					action='contact'
					theme='light'
					onToken={handleTurnstileToken}
				/>
				<Button
					loading={loading}
					loadingPosition='start'
					startIcon={<SendIcon />}
					size='large'
					type='submit'
					variant='contained'
					fullWidth
					sx={{
						py: 1.5,
						borderRadius: '12px',
						backgroundColor: '#4F46E5',
						fontWeight: 600,
						fontSize: 16,
						boxShadow: 'none',
						'&:hover': {
							backgroundColor: '#4338CA',
							boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
						},
					}}>
					Send Message
				</Button>
			</Stack>
		</form>
	);
};

export default ContactForm;
