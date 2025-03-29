import { Box, Stack, Typography } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

type Props = {
	skills: string[];
};

export const Skills = ({ skills }: Props) => {
	return (
		<Stack gap={1.5} direction='row' flexWrap='wrap' mb='32px'>
			{skills.map((tech) => (
				<Box key={tech} sx={{ bgcolor: lightBlue[50], borderRadius: 1.5, px: 2, py: 1 }}>
					<Typography>{tech}</Typography>
				</Box>
			))}
		</Stack>
	);
};
