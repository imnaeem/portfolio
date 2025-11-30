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
						borderRadius: '10px',
						fontSize: 14,
						fontWeight: 500,
						color: '#3730A3',
						background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.08) 0%, rgba(20, 184, 166, 0.08) 100%)',
						border: '1px solid rgba(79, 70, 229, 0.15)',
						transition: 'all 0.2s ease-in-out',
						'&:hover': {
							background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.12) 0%, rgba(20, 184, 166, 0.12) 100%)',
							transform: 'translateY(-2px)',
							boxShadow: '0 4px 12px rgba(79, 70, 229, 0.1)',
						},
					}}>
					{tech}
				</Box>
			))}
		</Stack>
	);
};
