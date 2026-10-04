'use client';

import { useEffect, type ReactNode } from 'react';
import { FiX } from 'react-icons/fi';

type ModalProps = {
	open: boolean;
	onClose: () => void;
	title: string;
	description?: string;
	children: ReactNode;
};

/** Minimal accessible modal: esc/backdrop close, scroll lock. */
export default function Modal({ open, onClose, title, description, children }: ModalProps) {
	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.removeEventListener('keydown', onKey);
			document.body.style.overflow = prev;
		};
	}, [open, onClose]);

	if (!open) return null;

	return (
		<div
			className='fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/40 p-4 backdrop-blur-sm'
			onClick={onClose}
			role='presentation'>
			<div
				role='dialog'
				aria-modal='true'
				aria-label={title}
				className='card w-full max-w-md p-6 sm:p-7'
				onClick={(e) => e.stopPropagation()}>
				<div className='mb-1 flex items-start justify-between gap-4'>
					<h3 className='font-display text-xl font-semibold tracking-tight text-ink'>{title}</h3>
					<button
						type='button'
						onClick={onClose}
						aria-label='Close dialog'
						className='-mr-1 -mt-1 cursor-pointer rounded-lg p-1.5 text-stone-400 transition-colors hover:bg-stone-100 hover:text-ink'>
						<FiX size={18} />
					</button>
				</div>
				{description ? <p className='mb-5 text-sm leading-relaxed text-ink-soft'>{description}</p> : null}
				{children}
			</div>
		</div>
	);
}
