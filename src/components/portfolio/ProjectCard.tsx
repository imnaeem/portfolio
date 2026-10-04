import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight, FiStar } from 'react-icons/fi';
import type { Project } from '@/types';
import { Chip } from '@/components/ui/Chip';
import { titleCase } from '@/utils';

type ProjectCardProps = {
	project: Project;
};

/** Project teaser card: thumbnail, type chip, title, description, top tech chips. */
export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<Link
			href={`/portfolio/${project.key}`}
			className='card card-hover group flex h-full flex-col overflow-hidden'
			aria-label={`View project: ${project.title}`}>
			<div className='relative h-48 shrink-0 overflow-hidden bg-stone-100'>
				<Image
					src={project.thumbnail}
					alt={project.title}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					className='object-cover transition-transform duration-500 group-hover:scale-105'
				/>
				{project.featured ? (
					<span className='absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-orange-200 bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-accent-dark backdrop-blur'>
						<FiStar size={11} /> Featured
					</span>
				) : null}
			</div>

			<div className='flex flex-1 flex-col p-5'>
				<div className='flex items-center justify-between gap-2'>
					<Chip variant={project.type === 'professional' ? 'accent' : 'soft'}>{titleCase(project.type)}</Chip>
					<FiArrowUpRight
						size={18}
						className='shrink-0 text-stone-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent'
					/>
				</div>
				<h3 className='mt-3 font-display text-lg font-semibold tracking-tight text-ink'>{project.title}</h3>
				<p className='mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-soft'>
					{project.metadata.description}
				</p>
				<div className='mt-4 flex flex-wrap gap-1.5'>
					{project.details.techStack.slice(0, 3).map((tech) => (
						<Chip key={tech} variant='soft'>
							{tech}
						</Chip>
					))}
					{project.details.techStack.length > 3 ? (
						<Chip variant='outline'>+{project.details.techStack.length - 3}</Chip>
					) : null}
				</div>
			</div>
		</Link>
	);
}
