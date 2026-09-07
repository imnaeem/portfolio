import React from 'react';
import { blogArticles } from '@/app/api/blogs/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
	return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const article = blogArticles.find((a) => a.slug === slug);
	if (!article) return { title: 'Article Not Found' };
	const baseUrl = 'https://imnaeem.dev';
	const articleUrl = `${baseUrl}/blogs/${article.slug}`;
	const imageUrl = `${baseUrl}${article.image}`;
	return {
		title: `${article.title} | Muhammad Naeem`,
		description: article.excerpt,
		keywords: article.tags.join(', '),
		authors: [{ name: article.author }],
		creator: article.author,
		openGraph: { title: article.title, description: article.excerpt, type: 'article', url: articleUrl, siteName: 'Muhammad Naeem Portfolio', locale: 'en_US', publishedTime: article.publishedDate, authors: [article.author], tags: article.tags, images: [{ url: imageUrl, width: 800, height: 400, alt: article.title }] },
		twitter: { card: 'summary_large_image', title: article.title, description: article.excerpt, creator: '@imnaeem', images: [imageUrl] },
		alternates: { canonical: articleUrl },
		robots: { index: true, follow: true },
	};
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const article = blogArticles.find((a) => a.slug === slug);
	if (!article) notFound();

	const currentIndex = blogArticles.findIndex((a) => a.slug === slug);
	const prevArticle = currentIndex > 0 ? blogArticles[currentIndex - 1] : null;
	const nextArticle = currentIndex < blogArticles.length - 1 ? blogArticles[currentIndex + 1] : null;

	return (
		<div className="max-w-3xl mx-auto py-8">
			<span className="inline-block px-3 py-1 rounded-md bg-accent/10 border border-accent/20 text-[11px] font-semibold uppercase tracking-wider text-accent mb-4">{article.category.replace('-', ' ')}</span>
			<h1 className="text-3xl sm:text-4xl font-bold text-text leading-tight mb-4">{article.title}</h1>
			<div className="flex flex-wrap gap-4 text-sm text-text-muted mb-8">
				<span className="flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>{article.author}</span>
				<span className="flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>{new Date(article.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
				<span className="flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>{article.readTime} min read</span>
			</div>
			<div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-border mb-8">
				<Image src={article.image} alt={article.title} fill sizes="(max-width: 768px) 100vw, 800px" style={{ objectFit: 'cover' }} priority />
			</div>

			<div className="prose-custom">
				<p className="text-base italic text-text-muted pl-4 border-l-2 border-accent mb-8">{article.excerpt}</p>
				<p className="text-[15px] leading-relaxed text-text-muted mb-6">{article.content.introduction}</p>

				<div className="my-8 p-5 rounded-2xl bg-gradient-to-br from-accent/5 to-purple-500/5 border border-accent/10">
					<p className="text-xs font-bold text-accent uppercase tracking-wider mb-3">Table of Contents</p>
					<nav className="space-y-2">
						{article.content.sections.map((section, index) => (
							<a key={index} href={`#section-${index}`} className="block text-sm text-text-muted hover:text-accent transition-colors">{index + 1}. {section.heading}</a>
						))}
					</nav>
				</div>

				{article.content.sections.map((section, index) => (
					<div key={index} id={`section-${index}`} className="mb-8">
						<h2 className="text-xl sm:text-2xl font-bold text-text mt-8 mb-4 flex items-center gap-3"><span className="w-1 h-6 bg-accent rounded-full shrink-0" />{section.heading}</h2>
						<p className="text-[15px] leading-relaxed text-text-muted">{section.content}</p>
						{index < article.content.sections.length - 1 && <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8" />}
					</div>
				))}

				<div className="my-10 p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20">
					<h2 className="text-xl font-bold text-amber-400 mb-3 flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/></svg>Key Takeaways</h2>
					<p className="text-[15px] leading-relaxed text-text-muted">{article.content.conclusion.split('. ').slice(0, 2).join('. ')}.</p>
				</div>

				<h2 className="text-xl font-bold text-text mt-10 mb-4">Conclusion</h2>
				<p className="text-[15px] leading-relaxed text-text-muted mb-8">{article.content.conclusion}</p>
			</div>

			<div className="mt-10 pt-6 border-t border-border">
				<p className="text-sm font-semibold text-text mb-3">Tags</p>
				<div className="flex flex-wrap gap-2">
					{article.tags.map((tag) => (
						<span key={tag} className="px-3 py-1 rounded-lg text-[12px] font-medium text-text-muted border border-border bg-surface">{tag}</span>
					))}
				</div>
			</div>

			<div className="mt-10">
				<h3 className="text-lg font-bold text-text mb-4">Continue Reading</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{prevArticle && (
						<Link href={`/blogs/${prevArticle.slug}`} className="group relative block h-36 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
							<Image src={prevArticle.image} alt={prevArticle.title} fill sizes="(max-width: 768px) 100vw, 400px" style={{ objectFit: 'cover' }} />
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex flex-col justify-end p-5">
								<span className="inline-flex px-2 py-1 rounded-md bg-white/20 backdrop-blur-sm text-[10px] font-bold text-white uppercase w-fit mb-2">&larr; Previous</span>
								<p className="text-sm font-bold text-white line-clamp-1">{prevArticle.title}</p>
							</div>
						</Link>
					)}
					{nextArticle && (
						<Link href={`/blogs/${nextArticle.slug}`} className="group relative block h-36 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
							<Image src={nextArticle.image} alt={nextArticle.title} fill sizes="(max-width: 768px) 100vw, 400px" style={{ objectFit: 'cover' }} />
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex flex-col justify-end items-end p-5">
								<span className="inline-flex px-2 py-1 rounded-md bg-white/20 backdrop-blur-sm text-[10px] font-bold text-white uppercase w-fit mb-2">Next &rarr;</span>
								<p className="text-sm font-bold text-white text-right line-clamp-1">{nextArticle.title}</p>
							</div>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
