'use client';
import { blogArticles } from '../api/blogs/data';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogsPage() {
	return (
		<div className="flex flex-col gap-8 py-8">
			<div>
				<div className="flex items-center gap-3 mb-3">
					<div className="w-7 h-[2px] bg-accent rounded-full" />
					<h1 className="text-3xl sm:text-4xl font-bold text-text tracking-tight">Writing</h1>
				</div>
				<p className="text-sm text-text-muted max-w-lg leading-relaxed">
					Articles about React, Next.js, NestJS, GraphQL, AWS, and AI tools.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{blogArticles.map((article) => (
					<Link
						key={article.id}
						href={`/blogs/${article.slug}`}
						className="group block h-full rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-border-hover hover:-translate-y-1 glow-border"
					>
						<div className="relative h-48 bg-surface-2 overflow-hidden">
							<Image
								src={article.image}
								alt={article.title}
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								style={{ objectFit: 'cover' }}
								className="transition-transform duration-500 group-hover:scale-105"
							/>
						</div>
						<div className="p-6">
							<span className="inline-block px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-[10px] font-semibold uppercase tracking-wider text-accent mb-3">
								{article.category}
							</span>
							<h2 className="text-base font-bold text-text leading-snug line-clamp-2 group-hover:text-accent transition-colors">
								{article.title}
							</h2>
							<p className="mt-2 text-[13px] text-text-muted leading-relaxed line-clamp-2">
								{article.excerpt}
							</p>
							<div className="mt-4 flex items-center gap-4 text-[11px] text-text-dim font-medium">
								<span className="flex items-center gap-1">
									<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
									{new Date(article.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
								</span>
								<span className="flex items-center gap-1">
									<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
									{article.readTime} min read
								</span>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
