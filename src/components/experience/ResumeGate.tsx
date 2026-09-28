'use client';

import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Modal from '@/components/ui/Modal';

const inputCls =
	'w-full rounded-xl border border-line bg-canvas px-4 py-2.5 text-sm text-ink placeholder:text-stone-400 transition-colors focus:border-accent focus:outline-none';

/** Gated resume download: collects details via POST /api/resume, then opens the PDF. */
export default function ResumeGate() {
	const [open, setOpen] = useState(false);
	const [submitting, setSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const payload = Object.fromEntries(formData.entries());

		setSubmitting(true);
		try {
			const res = await fetch('/api/resume', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});
			if (!res.ok) {
				toast.error('Something went wrong. Please try again.');
				return;
			}
			window.open('/assets/muhammad-naeem-resume.pdf', '_blank');
			setOpen(false);
			toast.success('Resume download started.');
		} catch {
			toast.error('Something went wrong. Please try again.');
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<>
			<button
				type='button'
				onClick={() => setOpen(true)}
				className='inline-flex cursor-pointer items-center gap-2 rounded-xl border border-line bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-px hover:border-accent hover:text-accent-dark'>
				<FiDownload size={16} /> Download Resume
			</button>

			<Modal
				open={open}
				onClose={() => setOpen(false)}
				title='Download Resume'
				description='Please share a few details so I know who is reading my resume.'>
				<form onSubmit={handleSubmit} className='space-y-3.5'>
					<div>
						<label htmlFor='resume-name' className='mb-1.5 block text-xs font-semibold text-ink'>
							Full Name
						</label>
						<input id='resume-name' name='name' required placeholder='Jane Smith' className={inputCls} />
					</div>
					<div>
						<label htmlFor='resume-email' className='mb-1.5 block text-xs font-semibold text-ink'>
							Email Address
						</label>
						<input
							id='resume-email'
							name='email'
							type='email'
							required
							placeholder='jane@company.com'
							className={inputCls}
						/>
					</div>
					<div>
						<label htmlFor='resume-company' className='mb-1.5 block text-xs font-semibold text-ink'>
							Company Name
						</label>
						<input
							id='resume-company'
							name='companyName'
							required
							placeholder='Acme Inc.'
							className={inputCls}
						/>
					</div>
					<div>
						<label htmlFor='resume-reason' className='mb-1.5 block text-xs font-semibold text-ink'>
							Reason for downloading
						</label>
						<textarea
							id='resume-reason'
							name='reason'
							required
							rows={3}
							placeholder='e.g. Reviewing for a frontend role'
							className={`${inputCls} resize-none`}
						/>
					</div>
					<div className='flex justify-end gap-2.5 pt-1'>
						<button
							type='button'
							onClick={() => setOpen(false)}
							className='cursor-pointer rounded-xl border border-line px-4 py-2.5 text-sm font-semibold text-ink-soft transition-colors hover:bg-stone-100'>
							Cancel
						</button>
						<button
							type='submit'
							disabled={submitting}
							className='inline-flex cursor-pointer items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60'>
							<FiDownload size={15} /> {submitting ? 'Preparing…' : 'Download'}
						</button>
					</div>
				</form>
			</Modal>
		</>
	);
}
