import { blogArticles } from '../api/blogs/data';
import { Box, Container, Fade, Grid2, Typography, Chip, Stack } from '@mui/material';
import Link from 'next/link';
import { AccessTime, CalendarToday } from '@mui/icons-material';
import Title from '@/components/shared/Title';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blog Articles | Muhammad Naeem - Full Stack Developer',
	description: 'Read in-depth articles about React, Next.js, NestJS, GraphQL, AWS, and AI development tools. Learn modern web development techniques and best practices.',
	keywords: 'React, Next.js, NestJS, GraphQL, AWS, AI Tools, Web Development, Full Stack, JavaScript, TypeScript, Programming Blog',
	authors: [{ name: 'Muhammad Naeem' }],
	creator: 'Muhammad Naeem',
	openGraph: {
		title: 'Blog Articles | Muhammad Naeem',
		description: 'In-depth articles about modern web development, cloud computing, and AI tools.',
		type: 'website',
		url: 'https://imnaeem.dev/blogs',
		siteName: 'Muhammad Naeem Portfolio',
		locale: 'en_US',
		images: [
			{
				url: 'https://imnaeem.dev/images/blogs/react-hooks.svg',
				width: 800,
				height: 400,
				alt: 'Blog Articles',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Blog Articles | Muhammad Naeem',
		description: 'In-depth articles about modern web development, cloud computing, and AI tools.',
		creator: '@imnaeem',
	},
	alternates: {
		canonical: 'https://imnaeem.dev/blogs',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

const categories = [
	{ key: 'all', label: 'All Articles' },
	{ key: 'react', label: 'React' },
	{ key: 'nextjs', label: 'Next.js' },
	{ key: 'nestjs', label: 'NestJS' },
	{ key: 'graphql', label: 'GraphQL' },
	{ key: 'aws', label: 'AWS' },
	{ key: 'ai-tools', label: 'AI Tools' },
];

export default function BlogsPage() {
	return (
		<Fade in timeout={500}>
			<Container maxWidth='lg'>
				<Title title='Blog' subtitle='Articles about React, Next.js, NestJS, GraphQL, AWS, and AI Tools' />

				<Grid2 container spacing={3} my={4}>
					{blogArticles.map((article) => (
						<Grid2 key={article.id} size={{ xs: 12, sm: 6, md: 4 }}>
							<Link href={`/blogs/${article.slug}`} style={{ textDecoration: 'none' }}>
								<Box
									sx={{
										borderRadius: '20px',
										backgroundColor: '#FFFFFF',
										border: '1px solid #E2E8F0',
										cursor: 'pointer',
										transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
										height: '100%',
										overflow: 'hidden',
										'&:hover': {
											borderColor: '#4F46E5',
											boxShadow: '0 12px 32px rgba(79, 70, 229, 0.08)',
											transform: 'translateY(-4px)',
											'& .blog-image': {
												transform: 'scale(1.05)',
											},
										},
									}}>
									{/* Blog Image */}
									<Box
										sx={{
											position: 'relative',
											overflow: 'hidden',
											height: '220px',
											backgroundColor: '#F9FAFB',
										}}>
										<Image
											className='blog-image'
											src={article.image}
											alt={article.title}
											fill
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											style={{
												objectFit: 'cover',
												transition: 'transform 0.4s ease',
											}}
										/>
									</Box>

									{/* Blog Content */}
									<Box sx={{ p: 3 }}>
										<Chip
											label={article.category}
											size='small'
											sx={{
												mb: 2,
												backgroundColor: 'rgba(79, 70, 229, 0.08)',
												color: '#4F46E5',
												fontWeight: 600,
												fontSize: 11,
												textTransform: 'uppercase',
												letterSpacing: '0.5px',
											}}
										/>

									<Typography
										variant='h5'
										sx={{
											fontWeight: 700,
											fontSize: { xs: 18, md: 20 },
											color: '#1E293B',
											mb: 2,
											lineHeight: 1.3,
											display: '-webkit-box',
											WebkitLineClamp: 2,
											WebkitBoxOrient: 'vertical',
											overflow: 'hidden',
										}}>
										{article.title}
									</Typography>

									<Typography
										sx={{
											fontSize: 14,
											color: '#64748B',
											lineHeight: 1.7,
											mb: 3,
											display: '-webkit-box',
											WebkitLineClamp: 2,
											WebkitBoxOrient: 'vertical',
											overflow: 'hidden',
										}}>
										{article.excerpt}
									</Typography>

										<Stack
											direction='row'
											spacing={2}
											sx={{
												fontSize: 13,
												color: '#94A3B8',
											}}>
											<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
												<CalendarToday sx={{ fontSize: 16 }} />
												{new Date(article.publishedDate).toLocaleDateString('en-US', {
													year: 'numeric',
													month: 'short',
													day: 'numeric',
												})}
											</Box>
											<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
												<AccessTime sx={{ fontSize: 16 }} />
												{article.readTime} min read
											</Box>
										</Stack>
									</Box>
								</Box>
							</Link>
						</Grid2>
					))}
				</Grid2>
			</Container>
		</Fade>
	);
}

