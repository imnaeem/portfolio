import { ArrowForward } from '@mui/icons-material';
import { Box, Grid2, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		key: 'ralliy',
		title: 'Ralliy',
		description: 'AI-powered freelance marketplace with real-time chat and escrow payments.',
		thumbnail: '/images/projects/ralliy/thumbnail.png',
		color: '#4F46E5',
	},
	{
		key: 'aibot',
		title: 'AIBot',
		description: 'AI chatbot interface with multi-model support and document-aware conversations.',
		thumbnail: '/images/projects/aibot/thumbnail.png',
		color: '#4A90E2',
	},
	{
		key: 'smart-rec',
		title: 'SmartRec',
		description: 'Modern screen recording platform with video trimming and instant sharing.',
		thumbnail: '/images/projects/smart-rec/thumbnail.png',
		color: '#FF6B6B',
	},
	{
		key: 'json-to-toon',
		title: 'JSON to TOON Converter',
		description: 'Convert JSON to TOON and cut LLM token usage by about 50%.',
		thumbnail: '/images/projects/json-to-toon/thumbnail.jpg',
		color: '#10B981',
	},
];

const FeaturedWork = () => {
	return (
		<Box my={5}>
			<Stack direction='row' justifyContent='space-between' alignItems='center' mb={3}>
				<Typography
					sx={{
						fontWeight: 600,
						fontSize: { xs: 22, md: 26 },
						color: '#1E293B',
					}}>
					Featured Work
				</Typography>
				<Link
					href='/portfolio'
					style={{
						display: 'inline-flex',
						alignItems: 'center',
						gap: 4,
						color: '#4F46E5',
						fontWeight: 600,
						fontSize: 14,
						textDecoration: 'none',
					}}>
					View all <ArrowForward sx={{ fontSize: 16 }} />
				</Link>
			</Stack>
			<Grid2 container spacing={2.5}>
				{projects.map((project) => (
					<Grid2 key={project.key} size={{ xs: 12, sm: 6 }}>
						<Link href={`/portfolio/${project.key}`} style={{ textDecoration: 'none' }}>
							<Box
								sx={{
									borderRadius: '16px',
									backgroundColor: '#FFFFFF',
									border: '1px solid #E2E8F0',
									overflow: 'hidden',
									transition: 'all 0.2s ease-in-out',
									'&:hover': {
										borderColor: project.color,
										boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
										transform: 'translateY(-2px)',
									},
								}}>
								<Box sx={{ position: 'relative', width: '100%', height: 180 }}>
									<Image
										src={project.thumbnail}
										alt={`${project.title} project thumbnail`}
										fill
										style={{ objectFit: 'cover' }}
									/>
								</Box>
								<Box sx={{ p: 3 }}>
									<Typography sx={{ fontWeight: 600, fontSize: 17, color: '#1E293B', mb: 1 }}>
										{project.title}
									</Typography>
									<Typography sx={{ fontSize: 14, color: '#64748B', lineHeight: 1.6 }}>
										{project.description}
									</Typography>
								</Box>
							</Box>
						</Link>
					</Grid2>
				))}
			</Grid2>
		</Box>
	);
};

export default FeaturedWork;
