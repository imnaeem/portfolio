'use client';
import { ContactDetails } from '@/components/contact/ContactDetails';
import { Form } from '@/components/contact/Form';

const Contact = () => {
	return (
		<div className="flex flex-col gap-8 py-8">
			<div>
				<div className="flex items-center gap-3 mb-3">
					<div className="w-7 h-[2px] bg-accent rounded-full" />
					<h1 className="text-3xl sm:text-4xl font-bold text-text tracking-tight">Contact</h1>
				</div>
				<p className="text-sm text-text-muted max-w-lg leading-relaxed">
					Let&apos;s work together on your next project. I&apos;m always open to discussing product design work or partnerships.
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
				<div className="lg:col-span-3 p-6 sm:p-8 rounded-2xl border border-border bg-surface">
					<h2 className="text-xl font-bold text-text mb-2">Send a Message</h2>
					<p className="text-sm text-text-muted mb-6">I&apos;ll get back to you as soon as possible.</p>
					<Form />
				</div>
				<div className="lg:col-span-2">
					<ContactDetails />
				</div>
			</div>
		</div>
	);
};

export default Contact;
