import { blogArticles } from './data';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const category = searchParams.get('category');
	const slug = searchParams.get('slug');

	if (slug) {
		const article = blogArticles.find((a) => a.slug === slug);
		if (!article) {
			return NextResponse.json({ error: 'Article not found' }, { status: 404 });
		}
		return NextResponse.json(article);
	}

	if (category && category !== 'all') {
		const filtered = blogArticles.filter((a) => a.category === category);
		return NextResponse.json(filtered);
	}

	return NextResponse.json(blogArticles);
}

