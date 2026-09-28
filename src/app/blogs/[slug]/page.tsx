import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import { blogArticles } from '@/app/api/blogs/data';
import { Chip } from '@/components/ui/Chip';

type BlogArticlePageProps = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	return blogArticles.map((article) => ({
		slug: article.slug,
	}));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
	const { slug } = await params;
	const article = blogArticles.find((a) => a.slug === slug);

	if (!article) {
		return { title: 'Article Not Found' };
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
			images: [{ url: imageUrl, width: 800, height: 400, alt: article.title }],
		},
		twitter: {
			card: 'summary_large_image',
			title: article.title,
			description: article.excerpt,
			creator: '@imnaeem',
			images: [imageUrl],
		},
		alternates: { canonical: articleUrl },
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

function formatDate(iso: string) {
	return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
	const { slug } = await params;
	const article = blogArticles.find((a) => a.slug === slug);

	if (!article) notFound();

	return (
		<article className='mx-auto max-w-3xl'>
			<Link
				href='/blogs'
				className='inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-accent'>
				<FiArrowLeft size={15} /> Back to blog
			</Link>

			<header className='mt-6'>
				<Chip variant='accent'>{article.category}</Chip>
				<h1 className='mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl'>
					{article.title}
				</h1>
				<div className='mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-muted'>
					<span className='inline-flex items-center gap-1.5'>
						<FiUser size={14} /> {article.author}
					</span>
					<span className='inline-flex items-center gap-1.5'>
						<FiCalendar size={14} /> {formatDate(article.publishedDate)}
					</span>
					<span className='inline-flex items-center gap-1.5'>
						<FiClock size={14} /> {article.readTime} min read
					</span>
				</div>
			</header>

			<div className='card mt-7 overflow-hidden'>
				<div className='relative aspect-[2/1] bg-stone-100'>
					<Image
						src={article.image}
						alt={article.title}
						fill
						sizes='(max-width: 768px) 100vw, 768px'
						className='object-cover'
						priority
					/>
				</div>
			</div>

			<div className='prose-minimal mt-8'>
				<p className='text-[17px] leading-relaxed text-ink'>{article.content.introduction}</p>

				{article.content.sections.map((section) => (
					<section key={section.heading}>
						<h2>{section.heading}</h2>
						<p>{section.content}</p>
					</section>
				))}

				<h2>Conclusion</h2>
				<p>{article.content.conclusion}</p>
			</div>

			<div className='mt-8 flex flex-wrap gap-2 border-t border-line pt-6'>
				{article.tags.map((tag) => (
					<Chip key={tag} variant='soft'>
						#{tag}
					</Chip>
				))}
			</div>

			<div className='card mt-6 flex items-center gap-4 p-5'>
				<div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-soft font-display text-lg font-bold text-accent-dark'>
					MN
				</div>
				<div>
					<p className='text-sm font-semibold text-ink'>{article.author}</p>
					<p className='text-sm text-ink-soft'>Full Stack JavaScript Developer — React, Next.js, Node.js, GraphQL.</p>
				</div>
			</div>
		</article>
	);
}
