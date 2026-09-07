'use client';
import { projectsList } from '@/app/api/projects/data';
import { Skills } from '../experience/Skills';
import Info from '../shared/Info';
import { notFound } from 'next/navigation';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

type Props = { projectKey: string };

const ProjectView = ({ projectKey }: Props) => {
	const currentProject = useMemo(() => projectsList.find((p) => p.key === projectKey), [projectKey]);
	const currentIndex = useMemo(() => projectsList.findIndex((p) => p.key === projectKey), [projectKey]);
	const prevProject = currentIndex > 0 ? projectsList[currentIndex - 1] : null;
	const nextProject = currentIndex < projectsList.length - 1 ? projectsList[currentIndex + 1] : null;
	const [imgIdx, setImgIdx] = useState(0);

	if (!currentProject?.details) return notFound();
	const { description, github, preview, techStack, images } = currentProject.details;

	return (
		<div className="flex flex-col gap-10">
			<div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface">
				<p className="text-[15px] leading-relaxed text-text-muted">{description}</p>
			</div>

			{(github || preview) && (
				<div>
					<h2 className="text-xl font-bold text-text mb-4 flex items-center gap-3"><span className="w-1.5 h-6 bg-accent rounded-full" />Project Links</h2>
					<div className="flex flex-wrap gap-3">
						{github && <Info title="Github" value="View Source Code" link={github} icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>} />}
						{preview && <Info title="Live Preview" value="Visit Website" link={preview} icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>} />}
					</div>
				</div>
			)}

			<div>
				<h2 className="text-xl font-bold text-text mb-4 flex items-center gap-3"><span className="w-1.5 h-6 bg-accent rounded-full" />Technologies Used</h2>
				<Skills skills={techStack} />
			</div>

			<div>
				<h2 className="text-xl font-bold text-text mb-4 flex items-center gap-3"><span className="w-1.5 h-6 bg-accent rounded-full" />Project Preview</h2>
				{images.length === 0 ? (
					<div className="h-64 flex flex-col items-center justify-center rounded-2xl border border-border bg-surface">
						<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-text-dim mb-3"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
						<p className="text-sm text-text-muted">Preview not available for this project.</p>
					</div>
				) : (
					<div className="rounded-2xl overflow-hidden border border-border bg-surface">
						<div className="relative w-full aspect-video bg-surface-2">
							<img src={images[imgIdx].url} alt={images[imgIdx].key} className="w-full h-full object-cover" />
						</div>
						<div className="flex gap-2 p-3 overflow-x-auto">
							{images.map((image, i) => (
								<button key={image.key} onClick={() => setImgIdx(i)} className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${i === imgIdx ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'}`}>
									<img src={image.url} alt={image.key} className="w-full h-full object-cover" />
								</button>
							))}
						</div>
					</div>
				)}
			</div>

			<div>
				<h2 className="text-xl font-bold text-text mb-4 flex items-center gap-3"><span className="w-1.5 h-6 bg-accent rounded-full" />More Projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{prevProject && (
						<NextLink href={`/portfolio/${prevProject.key}`} className="group relative block h-36 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
							<img src={prevProject.thumbnail} alt={prevProject.title} className="w-full h-full object-cover" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex flex-col justify-end p-5">
								<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/20 backdrop-blur-sm text-[10px] font-bold text-white uppercase tracking-wider w-fit mb-2">&larr; Previous</span>
								<p className="text-sm font-bold text-white line-clamp-1">{prevProject.title}</p>
							</div>
						</NextLink>
					)}
					{nextProject && (
						<NextLink href={`/portfolio/${nextProject.key}`} className="group relative block h-36 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
							<img src={nextProject.thumbnail} alt={nextProject.title} className="w-full h-full object-cover" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex flex-col justify-end items-end p-5">
								<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/20 backdrop-blur-sm text-[10px] font-bold text-white uppercase tracking-wider w-fit mb-2">Next &rarr;</span>
								<p className="text-sm font-bold text-white text-right line-clamp-1">{nextProject.title}</p>
							</div>
						</NextLink>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectView;
