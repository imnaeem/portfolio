import { Box, Stack } from '@mui/material';

type Props = {
	skills: string[];
};

export const Skills = ({ skills }: Props) => {
	return (
		<Stack gap={2} direction='row' flexWrap='wrap' mb={4}>
			{skills.map((tech) => (
				<Box
					key={tech}
					sx={{
						px: 2.5,
						py: 1.25,
						borderRadius: '6px',
						fontSize: 14,
						fontWeight: 500,
						color: '#171717',
						backgroundColor: '#fafafa',
						border: '1px solid #e5e5e5',
						transition: 'all 0.2s ease-in-out',
						'&:hover': {
							backgroundColor: '#f5f5f5',
							borderColor: '#a3a3a3',
							transform: 'translateY(-2px)',
							boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
						},
					}}>
					{tech}
				</Box>
			))}
		</Stack>
	);
};
