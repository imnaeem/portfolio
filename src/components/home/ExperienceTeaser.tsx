import Link from 'next/link';
import { FiArrowRight, FiBriefcase } from 'react-icons/fi';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { experience } from '@/content/site';

export default function ExperienceTeaser() {
	const current = experience[0];

	return (
		<section aria-label='Experience preview' className='py-10 sm:py-14'>
			<Reveal>
				<div className='flex flex-wrap items-end justify-between gap-4'>
					<SectionHeading
						eyebrow='Experience'
						title='Where I&apos;ve worked'
						description='Currently a Software Engineer at DevBrains, leading projects and mentoring a small team.'
					/>
					<Link
						href='/experience'
						className='inline-flex items-center gap-1.5 rounded-xl border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-px hover:border-stone-300'>
						Full journey <FiArrowRight size={15} />
					</Link>
				</div>
			</Reveal>

			<Reveal delay={100}>
				<Card className='mt-8 p-6 sm:p-8'>
					<div className='flex flex-wrap items-start justify-between gap-4'>
						<div className='flex items-start gap-4'>
							<div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent-dark'>
								<FiBriefcase size={20} />
							</div>
							<div>
								<h3 className='font-display text-xl font-semibold tracking-tight text-ink'>
									{current.title}
								</h3>
								<p className='mt-0.5 text-sm font-semibold text-accent-dark'>{current.company}</p>
								<p className='mt-1 text-xs font-medium uppercase tracking-wider text-ink-muted'>
									{current.period}
								</p>
							</div>
						</div>
						<Link
							href='/experience'
							className='inline-flex items-center gap-1.5 text-sm font-semibold text-accent-dark transition-colors hover:text-accent'>
							View details <FiArrowRight size={15} />
						</Link>
					</div>
					<ul className='mt-6 grid gap-2.5 sm:grid-cols-2'>
						{current.highlights.slice(0, 4).map((highlight) => (
							<li key={highlight} className='flex gap-2.5 text-sm leading-relaxed text-ink-soft'>
								<span className='mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent' aria-hidden='true' />
								{highlight}
							</li>
						))}
					</ul>
				</Card>
			</Reveal>
		</section>
	);
}
