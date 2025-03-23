import { Box, Stack, Typography } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

const technologies = [
	'ReactJs',
	'NextJs',
	'VueJs',
	'Redux',
	'React Query',
	'Git',
	'Github',
	'NodeJs',
	'NestJs',
	'Apollo GraphQL',
	'Kafka',
	'Github Actions',
	'CI/CD',
	'Typescript',
	'MongoDB',
	'SQL',
	'AWS Services',
	'Vercel',
	'Docker',
];

export const Skills = () => {
	return (
		<Stack gap={1.5} direction='row' flexWrap='wrap' mb='32px'>
			{technologies.map((tech) => (
				<Box key={tech} sx={{ bgcolor: lightBlue[50], borderRadius: 1.5, px: 2, py: 1 }}>
					<Typography>{tech}</Typography>
				</Box>
			))}
		</Stack>
	);
};
