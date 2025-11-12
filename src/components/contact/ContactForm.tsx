'use client';
import SendIcon from '@mui/icons-material/Send';
import { Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const initialForm = { name: '', email: '', message: '' };

const ContactForm = () => {
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState(initialForm);

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

		setLoading(true);

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form),
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
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<Stack spacing={2}>
				<TextField
					required
					type='text'
					size='small'
					key='name'
					name='name'
					variant='filled'
					label='Name'
					fullWidth
					value={form.name}
					onChange={handleChange}
				/>
				<TextField
					required
					type='email'
					size='small'
					name='email'
					label='Email'
					variant='filled'
					fullWidth
					value={form.email}
					onChange={handleChange}
				/>
				<TextField
					required
					size='small'
					name='message'
					variant='filled'
					label='Message'
					multiline
					rows={4}
					fullWidth
					value={form.message}
					onChange={handleChange}
				/>
				<Button
					loading={loading}
					loadingPosition='start'
					startIcon={<SendIcon />}
					size='large'
					type='submit'
					variant='outlined'
					color='primary'
					fullWidth>
					Send Message
				</Button>
			</Stack>
		</form>
	);
};

export default ContactForm;
