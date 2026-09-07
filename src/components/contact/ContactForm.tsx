'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const initialForm = { name: '', email: '', message: '' };

const ContactForm = () => {
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState(initialForm);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
				toast.success('Message sent successfully!');
				setForm(initialForm);
			} else {
				toast.error(data.message || 'Failed to send message.');
			}
		} catch (error: unknown) {
			const msg = error instanceof Error ? error.message : 'Failed to send message.';
			toast.error(msg);
		} finally {
			setLoading(false);
		}
	};

	const inputClass = 'w-full px-4 py-3 rounded-xl bg-surface-2 border border-border text-text text-sm placeholder:text-text-dim focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 resize-none';

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<input
				required
				type="text"
				name="name"
				placeholder="Your Name"
				value={form.name}
				onChange={handleChange}
				className={inputClass}
			/>
			<input
				required
				type="email"
				name="email"
				placeholder="Your Email"
				value={form.email}
				onChange={handleChange}
				className={inputClass}
			/>
			<textarea
				required
				name="message"
				placeholder="Your Message"
				rows={5}
				value={form.message}
				onChange={handleChange}
				className={inputClass}
			/>
			<button
				type="submit"
				disabled={loading}
				className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent hover:bg-accent-hover disabled:opacity-50 text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
			>
				{loading ? (
					<svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
				) : (
					<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
				)}
				{loading ? 'Sending...' : 'Send Message'}
			</button>
		</form>
	);
};

export default ContactForm;
