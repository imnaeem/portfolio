import type { Metadata } from 'next';
import EducationCard from '@/components/experience/EducationCard';
import ExperienceTimeline from '@/components/experience/ExperienceTimeline';
import ResumeGate from '@/components/experience/ResumeGate';
import SkillsGroups from '@/components/experience/SkillsGroups';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
	title: 'Experience | Muhammad Naeem',
	description:
		'Full Stack JavaScript Developer skilled in React, Next.js, Node.js, and GraphQL, building scalable and high-performance web apps.',
};

export default function ExperiencePage() {
	return (
		<>
			<Reveal>
				<div className='flex flex-wrap items-start justify-between gap-4'>
					<SectionHeading
						eyebrow='Career'
						title='Experience'
						description='My professional journey, technical expertise, and education.'
					/>
					<ResumeGate />
				</div>
			</Reveal>

			<section aria-label='Work history' className='mt-10'>
				<Reveal>
					<h2 className='font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl'>
						Work History
					</h2>
				</Reveal>
				<div className='mt-5'>
					<ExperienceTimeline />
				</div>
			</section>

			<section aria-label='Technical skills' className='mt-12'>
				<Reveal>
					<h2 className='font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl'>
						Technical Skills
					</h2>
					<p className='mt-2 max-w-2xl text-[15px] text-ink-soft'>
						The tools and technologies I reach for every day.
					</p>
				</Reveal>
				<div className='mt-5'>
					<SkillsGroups />
				</div>
			</section>

			<section aria-label='Education' className='mt-12'>
				<Reveal>
					<h2 className='font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl'>
						Education
					</h2>
				</Reveal>
				<div className='mt-5'>
					<EducationCard />
				</div>
			</section>
		</>
	);
}
