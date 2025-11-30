import { blogArticles } from '@/app/api/blogs/data';
import { Box, Chip, Container, Fade, Grid2, Stack, Typography } from '@mui/material';
import { AccessTime, CalendarToday, Person } from '@mui/icons-material';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
	return blogArticles.map((article) => ({
		slug: article.slug,
	}));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const article = blogArticles.find((a) => a.slug === slug);

	if (!article) {
		return {
			title: 'Article Not Found',
		};
	}

	const baseUrl = 'https://imnaeem.dev';
	const articleUrl = `${baseUrl}/blogs/${article.slug}`;
	const imageUrl = `${baseUrl}${article.image}`;

	return {
		title: `${article.title} | Muhammad Naeem`,
		description: article.excerpt,
		keywords: article.tags.join(', '),
		authors: [{ name: article.author }],
		creator: article.author,
		publisher: article.author,
		openGraph: {
			title: article.title,
			description: article.excerpt,
			type: 'article',
			url: articleUrl,
			siteName: 'Muhammad Naeem Portfolio',
			locale: 'en_US',
			publishedTime: article.publishedDate,
			authors: [article.author],
			tags: article.tags,
			images: [
				{
					url: imageUrl,
					width: 800,
					height: 400,
					alt: article.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: article.title,
			description: article.excerpt,
			creator: '@imnaeem',
			images: [imageUrl],
		},
		alternates: {
			canonical: articleUrl,
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
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const article = blogArticles.find((a) => a.slug === slug);

	if (!article) {
		notFound();
	}

	return (
		<Fade in timeout={500}>
			<Container maxWidth='md'>
				<Box sx={{ mb: 4 }}>
					<Chip
						label={article.category.replace('-', ' ')}
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
						variant='h1'
						sx={{
							fontSize: { xs: 32, md: 42 },
							fontWeight: 800,
							color: '#1E293B',
							lineHeight: 1.2,
							mb: 3,
						}}>
						{article.title}
					</Typography>

					<Stack
						direction='row'
						spacing={3}
						flexWrap='wrap'
						sx={{
							fontSize: 14,
							color: '#64748B',
							mb: 4,
						}}>
						<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
							<Person sx={{ fontSize: 18 }} />
							{article.author}
						</Box>
						<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
							<CalendarToday sx={{ fontSize: 18 }} />
							{new Date(article.publishedDate).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</Box>
						<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
							<AccessTime sx={{ fontSize: 18 }} />
							{article.readTime} min read
						</Box>
					</Stack>

					<Box
						sx={{
							position: 'relative',
							width: '100%',
							height: { xs: 250, md: 350 },
							borderRadius: '16px',
							overflow: 'hidden',
							mb: 4,
							border: '1px solid #E2E8F0',
						}}>
						<Image 
							src={article.image} 
							alt={article.title}
							fill
							sizes="(max-width: 768px) 100vw, 800px"
							style={{ objectFit: 'cover' }}
							priority
						/>
					</Box>
				</Box>

				<Box
					sx={{
						'& p': {
							fontSize: 17,
							lineHeight: 1.8,
							color: '#475569',
							mb: 3,
						},
						'& h2': {
							fontSize: { xs: 24, md: 28 },
							fontWeight: 700,
							color: '#1E293B',
							mt: 5,
							mb: 2.5,
							lineHeight: 1.3,
							display: 'flex',
							alignItems: 'center',
							gap: 2,
							'&::before': {
								content: '""',
								width: 4,
								height: 28,
								backgroundColor: '#4F46E5',
								borderRadius: '2px',
							},
						},
						'& ul': {
							pl: 3,
							mb: 3,
							'& li': {
								fontSize: 16,
								lineHeight: 1.8,
								color: '#475569',
								mb: 1.5,
								position: 'relative',
								pl: 2,
								'&::before': {
									content: '"→"',
									position: 'absolute',
									left: -10,
									color: '#4F46E5',
									fontWeight: 700,
								},
							},
						},
						'& .tip-box': {
							p: 2.5,
							mb: 3,
							borderRadius: '12px',
							backgroundColor: '#F0F9FF',
							border: '1px solid #BAE6FD',
							borderLeft: '4px solid #0EA5E9',
						},
					}}>
					<Typography sx={{ fontStyle: 'italic', pl: 3, borderLeft: '4px solid #4F46E5', mb: 4, p: 2, backgroundColor: '#F8FAFC', borderRadius: '8px' }}>
						{article.excerpt}
					</Typography>

					<Typography component='p'>{article.content.introduction}</Typography>

					<Box
						sx={{
							my: 4,
							p: 3,
							borderRadius: '16px',
							background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(20, 184, 166, 0.05) 100%)',
							border: '1px solid rgba(79, 70, 229, 0.1)',
						}}>
						<Typography sx={{ fontSize: 14, fontWeight: 700, color: '#4F46E5', mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
							📚 Table of Contents
						</Typography>
						<Stack spacing={1}>
							{article.content.sections.map((section, index) => (
								<Typography
									key={index}
									component='a'
									href={`#section-${index}`}
									sx={{
										fontSize: 15,
										color: '#475569',
										textDecoration: 'none',
										transition: 'all 0.2s ease',
										'&:hover': {
											color: '#4F46E5',
											pl: 1,
										},
									}}>
									{index + 1}. {section.heading}
								</Typography>
							))}
						</Stack>
					</Box>

					{article.content.sections.map((section, index) => (
						<Box key={index} id={`section-${index}`}>
							<Typography variant='h2'>{section.heading}</Typography>
							
							{/* Split content into paragraphs and create structured format */}
							{section.content.split('. ').reduce((acc: JSX.Element[], sentence, idx, arr) => {
								// Group sentences into paragraphs of 2-3 sentences
								if (idx % 3 === 0) {
									const paragraphText = arr.slice(idx, idx + 3).join('. ') + (idx + 3 < arr.length ? '.' : '');
									acc.push(
										<Typography key={`p-${idx}`} component='p'>
											{paragraphText}
										</Typography>
									);
								}
								return acc;
							}, [])}

							{/* Add visual separator between sections */}
							{index < article.content.sections.length - 1 && (
								<Box
									sx={{
										height: 1,
										background: 'linear-gradient(90deg, transparent, rgba(226, 232, 240, 0.5), transparent)',
										my: 4,
									}}
								/>
							)}
						</Box>
					))}

					<Box
						sx={{
							my: 5,
							p: 3,
							borderRadius: '12px',
							backgroundColor: '#FEF3C7',
							border: '1px solid #FCD34D',
						}}>
						<Typography variant='h2' sx={{ mt: 0, '&::before': { backgroundColor: '#F59E0B' } }}>
							💡 Key Takeaways
						</Typography>
						<Typography component='p' sx={{ mb: 0 }}>
							{article.content.conclusion.split('. ').slice(0, 2).join('. ')}.
						</Typography>
					</Box>

					<Typography
						variant='h2'
						sx={{
							fontSize: { xs: 22, md: 26 },
						}}>
						Conclusion
					</Typography>
					<Typography component='p'>{article.content.conclusion}</Typography>
				</Box>

				<Box sx={{ mt: 5, pt: 4, borderTop: '1px solid #E2E8F0' }}>
					<Typography variant='h6' sx={{ mb: 2, color: '#1E293B', fontWeight: 600 }}>
						Tags
					</Typography>
					<Stack direction='row' spacing={1} flexWrap='wrap'>
						{article.tags.map((tag) => (
							<Chip
								key={tag}
								label={tag}
								size='small'
								sx={{
									backgroundColor: '#F1F5F9',
									color: '#475569',
									'&:hover': {
										backgroundColor: '#E2E8F0',
									},
								}}
							/>
						))}
					</Stack>
				</Box>

				{/* Next/Previous Navigation */}
				<Box sx={{ mt: 6 }}>
					<Typography variant='h6' sx={{ mb: 3, color: '#1E293B', fontWeight: 700 }}>
						Continue Reading
					</Typography>
					<Grid2 container spacing={3}>
						{(() => {
							const currentIndex = blogArticles.findIndex((a) => a.slug === slug);
							const prevArticle = currentIndex > 0 ? blogArticles[currentIndex - 1] : null;
							const nextArticle = currentIndex < blogArticles.length - 1 ? blogArticles[currentIndex + 1] : null;

							return (
								<>
									{prevArticle && (
										<Grid2 size={{ xs: 12, md: 6 }}>
											<Link href={`/blogs/${prevArticle.slug}`} style={{ textDecoration: 'none' }}>
													<Box
														sx={{
															position: 'relative',
															height: 140,
															borderRadius: '12px',
															overflow: 'hidden',
															cursor: 'pointer',
															transition: 'transform 0.3s ease',
															'&:hover': {
																transform: 'translateY(-4px)',
																'& .nav-overlay': {
																	background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2))',
																},
															},
														}}>
														<Image
															src={prevArticle.image}
															alt={prevArticle.title}
															fill
															sizes="(max-width: 768px) 100vw, 400px"
															style={{
																objectFit: 'cover',
															}}
														/>
													<Box
														className='nav-overlay'
														sx={{
															position: 'absolute',
															inset: 0,
															background: 'linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.3))',
															display: 'flex',
															flexDirection: 'column',
															justifyContent: 'flex-end',
															p: 2.5,
															transition: 'background 0.3s ease',
														}}>
														<Box
															sx={{
																display: 'inline-flex',
																alignItems: 'center',
																gap: 1,
																mb: 1.5,
																backgroundColor: 'rgba(255, 255, 255, 0.2)',
																backdropFilter: 'blur(8px)',
																px: 1.5,
																py: 0.75,
																borderRadius: '6px',
																width: 'fit-content',
															}}>
															<Typography
																sx={{
																	fontSize: 12,
																	fontWeight: 700,
																	color: '#FFFFFF',
																	textTransform: 'uppercase',
																	letterSpacing: '0.5px',
																}}>
																← Previous
															</Typography>
														</Box>
														<Typography
															sx={{
																fontSize: 16,
																fontWeight: 700,
																color: '#FFFFFF',
																lineHeight: 1.3,
																display: '-webkit-box',
																WebkitLineClamp: 2,
																WebkitBoxOrient: 'vertical',
																overflow: 'hidden',
															}}>
															{prevArticle.title}
														</Typography>
													</Box>
												</Box>
											</Link>
										</Grid2>
									)}

									{nextArticle && (
										<Grid2 size={{ xs: 12, md: 6 }}>
											<Link href={`/blogs/${nextArticle.slug}`} style={{ textDecoration: 'none' }}>
													<Box
														sx={{
															position: 'relative',
															height: 140,
															borderRadius: '12px',
															overflow: 'hidden',
															cursor: 'pointer',
															transition: 'transform 0.3s ease',
															'&:hover': {
																transform: 'translateY(-4px)',
																'& .nav-overlay': {
																	background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2))',
																},
															},
														}}>
														<Image
															src={nextArticle.image}
															alt={nextArticle.title}
															fill
															sizes="(max-width: 768px) 100vw, 400px"
															style={{
																objectFit: 'cover',
															}}
														/>
													<Box
														className='nav-overlay'
														sx={{
															position: 'absolute',
															inset: 0,
															background: 'linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.3))',
															display: 'flex',
															flexDirection: 'column',
															justifyContent: 'flex-end',
															alignItems: 'flex-end',
															p: 2.5,
															transition: 'background 0.3s ease',
														}}>
														<Box
															sx={{
																display: 'inline-flex',
																alignItems: 'center',
																gap: 1,
																mb: 1.5,
																backgroundColor: 'rgba(255, 255, 255, 0.2)',
																backdropFilter: 'blur(8px)',
																px: 1.5,
																py: 0.75,
																borderRadius: '6px',
																width: 'fit-content',
															}}>
															<Typography
																sx={{
																	fontSize: 12,
																	fontWeight: 700,
																	color: '#FFFFFF',
																	textTransform: 'uppercase',
																	letterSpacing: '0.5px',
																}}>
																Next →
															</Typography>
														</Box>
														<Typography
															sx={{
																fontSize: 16,
																fontWeight: 700,
																color: '#FFFFFF',
																lineHeight: 1.3,
																textAlign: 'right',
																display: '-webkit-box',
																WebkitLineClamp: 2,
																WebkitBoxOrient: 'vertical',
																overflow: 'hidden',
															}}>
															{nextArticle.title}
														</Typography>
													</Box>
												</Box>
											</Link>
										</Grid2>
									)}
								</>
							);
						})()}
					</Grid2>
				</Box>
			</Container>
		</Fade>
	);
}

