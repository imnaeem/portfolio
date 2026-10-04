import type { Metadata } from 'next';
import ContactCards from '@/components/contact/ContactCards';
import ContactForm from '@/components/contact/ContactForm';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
	title: 'Contact Me | Muhammad Naeem',
	description: 'Contact me for any queries, partnerships, or product design work.',
};

export default function ContactPage() {
	return (
		<>
			<Reveal>
				<SectionHeading
					eyebrow='Contact'
					title="Let's work together"
					description='Have a question, a project, or a role in mind? Reach out — I usually reply within a day.'
				/>
			</Reveal>

			<div className='mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]'>
				<Reveal>
					<ContactCards />
				</Reveal>

				<Reveal delay={100}>
					<Card className='h-full p-6 sm:p-8'>
						<h2 className='font-display text-xl font-semibold tracking-tight text-ink'>
							Send a message
						</h2>
						<p className='mt-1 text-sm text-ink-soft'>
							Prefer email? The form lands straight in my inbox.
						</p>
						<div className='mt-5'>
							<ContactForm />
						</div>
					</Card>
				</Reveal>
			</div>
		</>
	);
}
