'use client';

import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { toast } from 'react-toastify';

const inputCls =
	'w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-stone-400 transition-colors focus:border-accent focus:outline-none';

const initialForm = { name: '', email: '', message: '' };

/** Contact form — posts to /api/contact (nodemailer flow kept intact). */
export default function ContactForm() {
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState(initialForm);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
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
				toast.success('Message sent successfully. I will get back to you as soon as possible. Thanks!');
				setForm(initialForm);
			} else {
				toast.error(data.message || 'Failed to send message. Try Again!');
			}
		} catch (error) {
			console.error('Error sending email:', error);
			toast.error('Failed to send message. Try Again!');
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className='space-y-4'>
			<div>
				<label htmlFor='contact-name' className='mb-1.5 block text-xs font-semibold text-ink'>
					Your Name
				</label>
				<input
					id='contact-name'
					name='name'
					type='text'
					required
					value={form.name}
					onChange={handleChange}
					placeholder='Jane Smith'
					className={inputCls}
				/>
			</div>
			<div>
				<label htmlFor='contact-email' className='mb-1.5 block text-xs font-semibold text-ink'>
					Your Email
				</label>
				<input
					id='contact-email'
					name='email'
					type='email'
					required
					value={form.email}
					onChange={handleChange}
					placeholder='jane@company.com'
					className={inputCls}
				/>
			</div>
			<div>
				<label htmlFor='contact-message' className='mb-1.5 block text-xs font-semibold text-ink'>
					Your Message
				</label>
				<textarea
					id='contact-message'
					name='message'
					required
					rows={5}
					value={form.message}
					onChange={handleChange}
					placeholder='Tell me about your project…'
					className={`${inputCls} resize-none`}
				/>
			</div>
			<button
				type='submit'
				disabled={loading}
				className='inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60'>
				<FiSend size={15} /> {loading ? 'Sending…' : 'Send Message'}
			</button>
		</form>
	);
}
