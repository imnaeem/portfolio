import GoBackButton from '@/components/portfolio/GoBackButton';
import ProjectView from '@/components/portfolio/ProjectView';
import Title from '@/components/shared/Title';
import { projectsList } from '@/lib/data';
import { titleCase } from '@/utils';
import { Stack } from '@mui/material';
import { Metadata } from 'next';

interface ProjectPageProps {
	params: { project: string };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
	const { project: projectKey } = await params;
	const project = projectsList.find(({ key }) => key === projectKey);
	const { key, title, thumbnail, metadata } = project || {};
	return {
		title: `${title} - My Portfolio`,
		description: metadata?.description,
		openGraph: {
			title: `${title} - My Portfolio`,
			description: metadata?.description,
			url: `/portfolio/${projectKey}`,
			images: [{ url: thumbnail || '', alt: key }],
		},
	};
}

const Project = async ({ params }: ProjectPageProps) => {
	const { project } = await params;

	return (
		<>
			<Stack direction='row' justifyContent='space-between'>
				<Title title={titleCase(project.replaceAll('-', ' '))} />
				<GoBackButton />
			</Stack>
			<ProjectView projectKey={project} />
		</>
	);
};

export default Project;
