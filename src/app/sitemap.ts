import { blogArticles } from './api/blogs/data';
import { projectsList } from './api/projects/data';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://imnaeem.dev';
	const currentDate = new Date().toISOString();

	// Static pages
	const staticPages: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 1.0,
		},
		{
			url: `${baseUrl}/experience`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/portfolio`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blogs`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/terms-conditions`,
			lastModified: currentDate,
			changeFrequency: 'yearly',
			priority: 0.3,
		},
		{
			url: `${baseUrl}/privacy-policy`,
			lastModified: currentDate,
			changeFrequency: 'yearly',
			priority: 0.3,
		},
		{
			url: `${baseUrl}/disclaimer`,
			lastModified: currentDate,
			changeFrequency: 'yearly',
			priority: 0.3,
		},
	];

	// Dynamic project pages
	const projectPages: MetadataRoute.Sitemap = projectsList.map((project) => ({
		url: `${baseUrl}/portfolio/${project.key}`,
		lastModified: currentDate,
		changeFrequency: 'monthly' as const,
		priority: 0.8,
	}));

	// Dynamic blog pages
	const blogPages: MetadataRoute.Sitemap = blogArticles.map((article) => ({
		url: `${baseUrl}/blogs/${article.slug}`,
		lastModified: article.publishedDate,
		changeFrequency: 'monthly' as const,
		priority: 0.7,
	}));

	return [...staticPages, ...projectPages, ...blogPages];
}

