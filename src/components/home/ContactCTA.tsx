import { FiArrowRight } from 'react-icons/fi';
import ButtonLink from '@/components/ui/ButtonLink';
import Reveal from '@/components/ui/Reveal';

export default function ContactCTA() {
	return (
		<section aria-label='Contact call to action' className='py-10 sm:py-14'>
			<Reveal>
				<div className='relative overflow-hidden rounded-3xl border border-line bg-ink px-6 py-12 text-center sm:px-12 sm:py-16'>
					<div
						className='pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl'
						aria-hidden='true'
					/>
					<div
						className='pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl'
						aria-hidden='true'
					/>
					<p className='relative text-xs font-semibold uppercase tracking-[0.18em] text-orange-300'>
						Have a project in mind?
					</p>
					<h2 className='relative mx-auto mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl'>
						Let&apos;s build something great together
					</h2>
					<p className='relative mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-stone-400'>
						I&apos;m open to full-time roles, freelance projects, and collaborations. My inbox is always open —
						I&apos;ll get back to you within a day.
					</p>
					<div className='relative mt-7 flex flex-wrap justify-center gap-3'>
						<ButtonLink href='/contact'>
							Get in Touch <FiArrowRight size={16} />
						</ButtonLink>
						<ButtonLink
							href='/whatsapp'
							variant='secondary'
							className='border-stone-700 bg-transparent text-white hover:border-stone-500 hover:bg-stone-800'>
							Chat on WhatsApp
						</ButtonLink>
					</div>
				</div>
			</Reveal>
		</section>
	);
}
