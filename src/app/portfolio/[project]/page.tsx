import GoBackButton from '@/components/portfolio/GoBackButton';
import ProjectView from '@/components/portfolio/ProjectView';
import Title from '@/components/shared/Title';
import { titleCase } from '@/utils';
import { Stack } from '@mui/material';

interface ProjectPageProps {
	params: Promise<{ project: string }>;
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
