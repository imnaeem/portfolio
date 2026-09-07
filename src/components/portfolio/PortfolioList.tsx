'use client';
import { projectsList } from '@/app/api/projects/data';
import { titleCase } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useMemo, useState } from 'react';
import PortfolioCategories from './PortfolioCategories';
import { Project } from '@/types';

const PortfolioList = () => {
	const [category, setCategory] = useState('all');

	const filteredProjects = useMemo(() => {
		if (category === 'all') return projectsList;
		return projectsList.filter(({ type }) => type === category);
	}, [category]);

	return (
		<>
			<Suspense fallback={<p className="text-text-muted">Loading...</p>}>
				<PortfolioCategories category={category} setCategory={setCategory} />
			</Suspense>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
				{filteredProjects.map((item: Project) => (
					<Link
						key={item.key}
						href={`/portfolio/${item.key}`}
						className="group block h-full rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-border-hover hover:-translate-y-1 glow-border"
					>
						<div className="relative h-48 bg-surface-2 overflow-hidden">
							<Image
								src={item.thumbnail}
								alt={item.title}
								fill
								sizes="(max-width: 900px) 100vw, 33vw"
								style={{ objectFit: 'cover' }}
								className="transition-transform duration-500 group-hover:scale-105"
							/>
							{item.featured && (
								<div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-amber-400 flex items-center gap-1">
									<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
									Featured
								</div>
							)}
						</div>
						<div className="p-6">
							<span className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider mb-3 ${
								item.type === 'professional'
									? 'bg-accent/10 border border-accent/20 text-accent'
									: 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
							}`}>
								{titleCase(item.type)}
							</span>
							<div className="flex items-start justify-between gap-2">
								<h3 className="text-base font-bold text-text group-hover:text-accent transition-colors">{item.title}</h3>
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 text-text-dim opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
							</div>
							<p className="mt-2 text-[13px] text-text-muted leading-relaxed line-clamp-2">{item.metadata.description}</p>
						</div>
					</Link>
				))}
			</div>
		</>
	);
};

export default PortfolioList;
