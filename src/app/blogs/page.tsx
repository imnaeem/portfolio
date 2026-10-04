import type { Metadata } from 'next';
import BlogsExplorer from '@/components/blogs/BlogsExplorer';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
	title: 'Blog Articles | Muhammad Naeem - Senior Full-Stack Engineer',
	description:
		'Read in-depth articles about React, Next.js, NestJS, GraphQL, AWS, and AI development tools. Learn modern web development techniques and best practices.',
	keywords:
		'React, Next.js, NestJS, GraphQL, AWS, AI Tools, Web Development, Full Stack, JavaScript, TypeScript, Programming Blog',
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

export default function BlogsPage() {
	return (
		<>
			<Reveal>
				<SectionHeading
					eyebrow='Writing'
					title='Blog'
					description='Notes and deep-dives on React, Next.js, NestJS, GraphQL, AWS, and AI-assisted development.'
				/>
			</Reveal>
			<div className='mt-8'>
				<BlogsExplorer />
			</div>
		</>
	);
}
