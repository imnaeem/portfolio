'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { FiCalendar, FiClock, FiSearch } from 'react-icons/fi';
import { blogArticles } from '@/app/api/blogs/data';
import { Chip, FilterChip } from '@/components/ui/Chip';
import Reveal from '@/components/ui/Reveal';
import type { BlogArticle } from '@/types/blog';

const categories = [
	{ key: 'all', label: 'All Articles' },
	{ key: 'react', label: 'React' },
	{ key: 'nextjs', label: 'Next.js' },
	{ key: 'nestjs', label: 'NestJS' },
	{ key: 'graphql', label: 'GraphQL' },
	{ key: 'aws', label: 'AWS' },
	{ key: 'ai-tools', label: 'AI Tools' },
];

function formatDate(iso: string) {
	return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
}

function BlogCard({ article }: { article: BlogArticle }) {
	return (
		<Link href={`/blogs/${article.slug}`} className='card card-hover group flex h-full flex-col overflow-hidden'>
			<div className='relative h-44 shrink-0 overflow-hidden bg-stone-100'>
				<Image
					src={article.image}
					alt={article.title}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					className='object-cover transition-transform duration-500 group-hover:scale-105'
					loading='lazy'
				/>
			</div>
			<div className='flex flex-1 flex-col p-5'>
				<Chip variant='accent' className='self-start'>
					{article.category}
				</Chip>
				<h3 className='mt-3 font-display text-[17px] font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-accent-dark'>
					{article.title}
				</h3>
				<p className='mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-soft'>{article.excerpt}</p>
				<div className='mt-4 flex items-center gap-4 text-xs text-ink-muted'>
					<span className='inline-flex items-center gap-1.5'>
						<FiCalendar size={12} /> {formatDate(article.publishedDate)}
					</span>
					<span className='inline-flex items-center gap-1.5'>
						<FiClock size={12} /> {article.readTime} min read
					</span>
				</div>
			</div>
		</Link>
	);
}

export default function BlogsExplorer() {
	const [category, setCategory] = useState('all');
	const [query, setQuery] = useState('');

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		return blogArticles.filter((article) => {
			const matchesCategory = category === 'all' || article.category === category;
			const matchesQuery =
				!q ||
				article.title.toLowerCase().includes(q) ||
				article.excerpt.toLowerCase().includes(q) ||
				article.tags.some((t) => t.toLowerCase().includes(q));
			return matchesCategory && matchesQuery;
		});
	}, [category, query]);

	return (
		<>
			<div className='relative max-w-md'>
				<FiSearch size={16} className='pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400' />
				<input
					type='search'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder='Search articles…'
					aria-label='Search articles'
					className='w-full rounded-xl border border-line bg-white py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-stone-400 transition-colors focus:border-accent focus:outline-none'
				/>
			</div>

			<div className='mt-4 flex flex-wrap gap-2' role='group' aria-label='Filter articles by category'>
				{categories.map(({ key, label }) => (
					<FilterChip key={key} active={category === key} onClick={() => setCategory(key)}>
						{label}
					</FilterChip>
				))}
			</div>

			{filtered.length === 0 ? (
				<p className='mt-12 text-center text-sm text-ink-soft'>
					No articles found. Try a different search or category.
				</p>
			) : (
				<div className='mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
					{filtered.map((article, i) => (
						<Reveal key={article.id} delay={Math.min(i, 8) * 60} className='h-full'>
							<BlogCard article={article} />
						</Reveal>
					))}
				</div>
			)}
		</>
	);
}
