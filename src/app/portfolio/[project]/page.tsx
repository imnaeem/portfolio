import { projectsList } from '@/app/api/projects/data';
import GoBackButton from '@/components/portfolio/GoBackButton';
import ProjectView from '@/components/portfolio/ProjectView';
import { titleCase } from '@/utils';
import { Metadata } from 'next';

interface ProjectPageProps {
	params: Promise<{ project: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
	const { project: projectKey } = await params;
	const project = projectsList.find(({ key }) => key === projectKey);
	if (!project) return { title: 'Project Not Found' };
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
			images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: title }] : [],
		},
		twitter: { card: 'summary_large_image', title: `${title} | Portfolio`, description: metadata?.description || `${title} project by Muhammad Naeem`, creator: '@imnaeem', images: imageUrl ? [imageUrl] : [] },
		alternates: { canonical: projectUrl },
		robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
	};
}

const Project = async ({ params }: ProjectPageProps) => {
	const { project } = await params;
	return (
		<div className="py-8">
			<div className="flex items-center justify-between mb-8">
				<div>
					<div className="flex items-center gap-3 mb-2">
						<div className="w-7 h-[2px] bg-accent rounded-full" />
						<h1 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">{titleCase(project.replaceAll('-', ' '))}</h1>
					</div>
				</div>
				<GoBackButton />
			</div>
			<ProjectView projectKey={project} />
		</div>
	);
};

export default Project;
