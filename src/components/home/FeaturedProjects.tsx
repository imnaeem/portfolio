import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { projectsList } from '@/app/api/projects/data';
import ProjectCard from '@/components/portfolio/ProjectCard';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function FeaturedProjects() {
	const featured = projectsList.filter((p) => p.featured).slice(0, 3);

	return (
		<section aria-label='Featured projects' className='py-10 sm:py-14'>
			<Reveal>
				<div className='flex flex-wrap items-end justify-between gap-4'>
					<SectionHeading
						eyebrow='Portfolio'
						title='Featured work'
						description='A selection of projects I&apos;m proud of — production systems and side builds alike.'
					/>
					<Link
						href='/portfolio'
						className='inline-flex items-center gap-1.5 rounded-xl border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-px hover:border-stone-300'>
						All projects <FiArrowRight size={15} />
					</Link>
				</div>
			</Reveal>

			<div className='mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
				{featured.map((project, i) => (
					<Reveal key={project.key} delay={i * 80} className='h-full'>
						<ProjectCard project={project} />
					</Reveal>
				))}
			</div>
		</section>
	);
}
