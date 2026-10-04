import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { projectsList } from '@/app/api/projects/data';
import ProjectGallery from '@/components/portfolio/ProjectGallery';
import Card from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import { titleCase } from '@/utils';

type ProjectPageProps = {
	params: Promise<{ project: string }>;
};

export async function generateStaticParams() {
	return projectsList.map((project) => ({ project: project.key }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
	const { project: projectKey } = await params;
	const project = projectsList.find(({ key }) => key === projectKey);

	if (!project) {
		return { title: 'Project Not Found' };
	}

	const { title, thumbnail, metadata, details } = project;
	const baseUrl = 'https://imnaeem.dev';
	const projectUrl = `${baseUrl}/portfolio/${projectKey}`;
	const imageUrl = thumbnail ? `${baseUrl}${thumbnail}` : '';

	return {
		title: `${title} | Muhammad Naeem Portfolio`,
		description: metadata?.description || `${title} project by Muhammad Naeem`,
		keywords: details?.techStack?.join(', ') || '',
		authors: [{ name: 'Muhammad Naeem' }],
		creator: 'Muhammad Naeem',
		openGraph: {
			title: `${title} | Portfolio`,
			description: metadata?.description || `${title} project by Muhammad Naeem`,
			type: 'website',
			url: projectUrl,
			siteName: 'Muhammad Naeem Portfolio',
			locale: 'en_US',
			images: imageUrl
				? [{ url: imageUrl, width: 1200, height: 630, alt: title }]
				: [],
		},
		twitter: {
			card: 'summary_large_image',
			title: `${title} | Portfolio`,
			description: metadata?.description || `${title} project by Muhammad Naeem`,
			creator: '@imnaeem',
			images: imageUrl ? [imageUrl] : [],
		},
		alternates: { canonical: projectUrl },
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
	};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { project: projectKey } = await params;
	const project = projectsList.find(({ key }) => key === projectKey);

	if (!project) notFound();

	const { title, type, details } = project;

	return (
		<article>
			<Link
				href='/portfolio'
				className='inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-accent'>
				<FiArrowLeft size={15} /> Back to portfolio
			</Link>

			<header className='mt-5'>
				<Chip variant={type === 'professional' ? 'accent' : 'soft'}>{titleCase(type)}</Chip>
				<h1 className='mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl'>
					{title}
				</h1>
				<p className='mt-2 max-w-2xl text-base leading-relaxed text-ink-soft'>
					{project.metadata.description}
				</p>
			</header>

			<div className='mt-7'>
				<ProjectGallery images={details.images} title={title} />
			</div>

			<div className='mt-8 grid gap-5 lg:grid-cols-[1.6fr_1fr]'>
				<Card className='p-6 sm:p-7'>
					<h2 className='font-display text-lg font-semibold tracking-tight text-ink'>About this project</h2>
					<p className='mt-3 text-[15px] leading-relaxed text-ink-soft'>{details.description}</p>
					<div className='mt-5 flex flex-wrap gap-2.5'>
						{details.github ? (
							<a
								href={details.github}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-1.5 rounded-xl bg-ink px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-stone-800'>
								<FiGithub size={15} /> Source Code
							</a>
						) : null}
						{details.preview ? (
							<a
								href={details.preview}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-accent-dark'>
								<FiExternalLink size={15} /> Live Preview
							</a>
						) : null}
					</div>
				</Card>

				<Card className='h-fit p-6 sm:p-7'>
					<h2 className='text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted'>
						Tech Stack
					</h2>
					<div className='mt-4 flex flex-wrap gap-2'>
						{details.techStack.map((tech) => (
							<Chip key={tech} variant='accent'>
								{tech}
							</Chip>
						))}
					</div>
				</Card>
			</div>
		</article>
	);
}
