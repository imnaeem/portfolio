import { projectsList } from '@/lib/data';
import { useMemo } from 'react';

type Props = {
	projectKey: string;
};

const ProjectView = ({ projectKey }: Props) => {
	const currentProject = useMemo(() => {
		return projectsList.find((item) => item.key === projectKey);
	}, [projectKey]);

	console.log(currentProject);
	return <div>Project</div>;
};

export default ProjectView;
