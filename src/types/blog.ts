export interface BlogArticle {
	id: string;
	title: string;
	slug: string;
	excerpt: string;
	category: 'react' | 'nextjs' | 'nestjs' | 'graphql' | 'aws' | 'ai-tools';
	readTime: number;
	publishedDate: string;
	author: string;
	tags: string[];
	image: string;
	content: {
		introduction: string;
		sections: {
			heading: string;
			content: string;
		}[];
		conclusion: string;
	};
	imageKeyword: string;
	relatedArticles?: string[]; // Array of related article slugs
	externalResources?: {
		title: string;
		url: string;
		description: string;
	}[];
}

