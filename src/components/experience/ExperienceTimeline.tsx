import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import Card from '@/components/ui/Card';
import Reveal from '@/components/ui/Reveal';
import { experience } from '@/content/site';

export default function ExperienceTimeline() {
	return (
		<ol className='space-y-5'>
			{experience.map((item, i) => (
				<Reveal as='li' key={`${item.company}-${item.title}`} delay={i * 80}>
					<Card hover className='p-6 sm:p-7'>
						<div className='flex flex-wrap items-start justify-between gap-3'>
							<div className='flex items-start gap-4'>
								<div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-dark'>
									<FiBriefcase size={19} />
								</div>
								<div>
									<h3 className='font-display text-lg font-semibold tracking-tight text-ink sm:text-xl'>
										{item.title}
									</h3>
									<p className='mt-0.5 text-sm font-semibold text-accent-dark'>{item.company}</p>
								</div>
							</div>
							<span className='inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600'>
								<FiCalendar size={12} /> {item.period}
							</span>
						</div>
						<ul className='mt-5 space-y-2.5'>
							{item.highlights.map((highlight) => (
								<li key={highlight} className='flex gap-3 text-sm leading-relaxed text-ink-soft'>
									<span
										className='mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent'
										aria-hidden='true'
									/>
									{highlight}
								</li>
							))}
						</ul>
					</Card>
				</Reveal>
			))}
		</ol>
	);
}
