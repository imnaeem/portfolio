'use client';

import { useMemo, useState } from 'react';
import { projectsList } from '@/app/api/projects/data';
import ProjectCard from '@/components/portfolio/ProjectCard';
import { FilterChip } from '@/components/ui/Chip';
import Reveal from '@/components/ui/Reveal';
import { titleCase } from '@/utils';

const filters = [
	{ key: 'all', label: 'All Projects' },
	{ key: 'professional', label: 'Professional' },
	{ key: 'personal', label: 'Personal' },
];

export default function PortfolioGrid() {
	const [category, setCategory] = useState('all');

	const filtered = useMemo(
		() => (category === 'all' ? projectsList : projectsList.filter((p) => p.type === category)),
		[category],
	);

	return (
		<>
			<div className='flex flex-wrap gap-2' role='group' aria-label='Filter projects by category'>
				{filters.map(({ key, label }) => (
					<FilterChip key={key} active={category === key} onClick={() => setCategory(key)}>
						{label}
					</FilterChip>
				))}
			</div>

			{filtered.length === 0 ? (
				<p className='mt-10 text-center text-sm text-ink-soft'>No projects in this category yet.</p>
			) : (
				<div className='mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
					{filtered.map((project, i) => (
						<Reveal key={project.key} delay={Math.min(i, 8) * 60} className='h-full'>
							<ProjectCard project={project} />
						</Reveal>
					))}
				</div>
			)}

			<p className='mt-8 text-xs text-ink-muted' aria-live='polite'>
				Showing {filtered.length} of {projectsList.length} projects
				{category !== 'all' ? ` in ${titleCase(category)}` : ''}.
			</p>
		</>
	);
}
