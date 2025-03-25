import { projectsList } from '@/lib/data';
import { Box } from '@mui/material';
import { useMemo } from 'react';

type Props = {
	projectKey: string;
};

const ProjectView = ({ projectKey }: Props) => {
	const currentProject = useMemo(() => {
		return projectsList.find((item) => item.key === projectKey);
	}, [projectKey]);

	console.log(currentProject);
	return (
		<Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			Project overview is not available yet. Please check back later.
		</Box>
	);
};

export default ProjectView;
