// SEO-optimized internal and external linking for blog articles

export interface ExternalResource {
	title: string;
	url: string;
	description: string;
}

export interface BlogLinks {
	relatedArticles: string[]; // Array of related article slugs
	externalResources: ExternalResource[];
}

// Mapping of blog article slugs to their related content and external resources
export const blogLinksMap: Record<string, BlogLinks> = {
	'react-hooks-complete-guide': {
		relatedArticles: [
			'react-performance-optimization-guide',
			'react-context-vs-redux-state-management',
			'react-server-components-future',
			'nextjs-15-app-router-guide',
		],
		externalResources: [
			{
				title: 'React Hooks Official Documentation',
				url: 'https://react.dev/reference/react',
				description: 'Official React documentation covering all built-in Hooks and best practices',
			},
			{
				title: 'Rules of Hooks - React Docs',
				url: 'https://react.dev/warnings/invalid-hook-call-warning',
				description: 'Understanding the essential rules for using Hooks correctly',
			},
		],
	},
	'nextjs-15-app-router-guide': {
		relatedArticles: [
			'react-server-components-future',
			'nextjs-server-actions-guide',
			'nextjs-isr-ssg-static-generation',
			'nextjs-edge-runtime-serverless-functions',
		],
		externalResources: [
			{
				title: 'Next.js App Router Documentation',
				url: 'https://nextjs.org/docs/app',
				description: 'Official Next.js documentation for the App Router',
			},
			{
				title: 'React Server Components RFC',
				url: 'https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md',
				description: 'Official RFC explaining React Server Components architecture',
			},
		],
	},
	'nestjs-fundamentals-scalable-backend': {
		relatedArticles: [
			'nestjs-microservices-distributed-systems',
			'nestjs-guards-interceptors-pipes',
			'graphql-best-practices-schema-optimization',
		],
		externalResources: [
			{
				title: 'NestJS Official Documentation',
				url: 'https://docs.nestjs.com/',
				description: 'Comprehensive NestJS documentation and guides',
			},
			{
				title: 'TypeScript Handbook',
				url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
				description: 'Official TypeScript documentation for type-safe development',
			},
		],
	},
	'graphql-best-practices-schema-optimization': {
		relatedArticles: [
			'graphql-subscriptions-realtime-websockets',
			'graphql-federation-unified-gateway',
			'nestjs-fundamentals-scalable-backend',
		],
		externalResources: [
			{
				title: 'GraphQL Official Documentation',
				url: 'https://graphql.org/learn/',
				description: 'Learn GraphQL fundamentals and best practices',
			},
			{
				title: 'Apollo GraphQL Best Practices',
				url: 'https://www.apollographql.com/docs/apollo-server/performance/best-practices/',
				description: 'Production-ready GraphQL server best practices',
			},
		],
	},
	'aws-lambda-serverless-deployment-guide': {
		relatedArticles: [
			'aws-dynamodb-design-best-practices',
			'aws-s3-cloudfront-file-storage-cdn',
			'nextjs-edge-runtime-serverless-functions',
		],
		externalResources: [
			{
				title: 'AWS Lambda Documentation',
				url: 'https://docs.aws.amazon.com/lambda/',
				description: 'Official AWS Lambda documentation and guides',
			},
			{
				title: 'Serverless Framework',
				url: 'https://www.serverless.com/framework/docs',
				description: 'Framework for building serverless applications',
			},
		],
	},
	'cursor-ai-revolutionizing-development': {
		relatedArticles: ['github-copilot-vs-cursor-comparison', 'ai-coding-tools-beyond-completion'],
		externalResources: [
			{
				title: 'Cursor AI Official Website',
				url: 'https://cursor.sh/',
				description: 'Official Cursor AI website and documentation',
			},
			{
				title: 'AI and Software Development - GitHub Blog',
				url: 'https://github.blog/2023-06-20-how-to-write-better-prompts-for-github-copilot/',
				description: 'Best practices for AI-assisted development',
			},
		],
	},
	'react-performance-optimization-guide': {
		relatedArticles: [
			'react-hooks-complete-guide',
			'react-server-components-future',
			'nextjs-15-app-router-guide',
		],
		externalResources: [
			{
				title: 'React DevTools Profiler',
				url: 'https://react.dev/learn/react-developer-tools',
				description: 'Official guide to profiling React applications',
			},
			{
				title: 'Web Vitals',
				url: 'https://web.dev/vitals/',
				description: 'Essential metrics for a healthy website',
			},
		],
	},
	'nextjs-server-actions-guide': {
		relatedArticles: [
			'nextjs-15-app-router-guide',
			'react-server-components-future',
			'nextjs-isr-ssg-static-generation',
		],
		externalResources: [
			{
				title: 'Next.js Server Actions Documentation',
				url: 'https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations',
				description: 'Official Server Actions documentation',
			},
			{
				title: 'Progressive Enhancement - MDN',
				url: 'https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement',
				description: 'Understanding progressive enhancement principles',
			},
		],
	},
	'nestjs-microservices-distributed-systems': {
		relatedArticles: [
			'nestjs-fundamentals-scalable-backend',
			'graphql-federation-unified-gateway',
			'nestjs-guards-interceptors-pipes',
		],
		externalResources: [
			{
				title: 'NestJS Microservices Documentation',
				url: 'https://docs.nestjs.com/microservices/basics',
				description: 'Official NestJS microservices guide',
			},
			{
				title: 'Microservices Patterns',
				url: 'https://microservices.io/patterns/index.html',
				description: 'Comprehensive catalog of microservice patterns',
			},
		],
	},
	'graphql-federation-unified-gateway': {
		relatedArticles: [
			'graphql-best-practices-schema-optimization',
			'graphql-subscriptions-realtime-websockets',
			'nestjs-microservices-distributed-systems',
		],
		externalResources: [
			{
				title: 'Apollo Federation Documentation',
				url: 'https://www.apollographql.com/docs/federation/',
				description: 'Official Apollo Federation documentation',
			},
			{
				title: 'GraphQL Federation Spec',
				url: 'https://www.apollographql.com/docs/federation/federation-spec/',
				description: 'Federation specification and protocols',
			},
		],
	},
	'aws-dynamodb-design-best-practices': {
		relatedArticles: ['aws-lambda-serverless-deployment-guide', 'aws-s3-cloudfront-file-storage-cdn'],
		externalResources: [
			{
				title: 'AWS DynamoDB Documentation',
				url: 'https://docs.aws.amazon.com/dynamodb/',
				description: 'Official DynamoDB documentation',
			},
			{
				title: 'DynamoDB Best Practices',
				url: 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html',
				description: 'AWS recommended best practices for DynamoDB',
			},
		],
	},
	'github-copilot-vs-cursor-comparison': {
		relatedArticles: ['cursor-ai-revolutionizing-development', 'ai-coding-tools-beyond-completion'],
		externalResources: [
			{
				title: 'GitHub Copilot Documentation',
				url: 'https://docs.github.com/en/copilot',
				description: 'Official GitHub Copilot documentation',
			},
			{
				title: 'Cursor AI Documentation',
				url: 'https://cursor.sh/docs',
				description: 'Official Cursor AI documentation',
			},
		],
	},
	'react-context-vs-redux-state-management': {
		relatedArticles: [
			'react-hooks-complete-guide',
			'react-performance-optimization-guide',
			'nextjs-15-app-router-guide',
		],
		externalResources: [
			{
				title: 'React Context API',
				url: 'https://react.dev/reference/react/useContext',
				description: 'Official React Context documentation',
			},
			{
				title: 'Redux Toolkit Documentation',
				url: 'https://redux-toolkit.js.org/',
				description: 'Official Redux Toolkit guide',
			},
		],
	},
	'nextjs-isr-ssg-static-generation': {
		relatedArticles: [
			'nextjs-15-app-router-guide',
			'nextjs-server-actions-guide',
			'nextjs-edge-runtime-serverless-functions',
		],
		externalResources: [
			{
				title: 'Next.js Data Fetching',
				url: 'https://nextjs.org/docs/app/building-your-application/data-fetching',
				description: 'Official Next.js data fetching documentation',
			},
			{
				title: 'ISR and On-Demand Revalidation',
				url: 'https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration',
				description: 'Guide to Incremental Static Regeneration',
			},
		],
	},
	'nestjs-guards-interceptors-pipes': {
		relatedArticles: ['nestjs-fundamentals-scalable-backend', 'nestjs-microservices-distributed-systems'],
		externalResources: [
			{
				title: 'NestJS Guards Documentation',
				url: 'https://docs.nestjs.com/guards',
				description: 'Official NestJS guards documentation',
			},
			{
				title: 'NestJS Interceptors',
				url: 'https://docs.nestjs.com/interceptors',
				description: 'Understanding NestJS interceptors',
			},
		],
	},
	'graphql-subscriptions-realtime-websockets': {
		relatedArticles: [
			'graphql-best-practices-schema-optimization',
			'graphql-federation-unified-gateway',
		],
		externalResources: [
			{
				title: 'GraphQL Subscriptions',
				url: 'https://www.apollographql.com/docs/apollo-server/data/subscriptions/',
				description: 'Apollo Server subscriptions guide',
			},
			{
				title: 'WebSocket API - MDN',
				url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
				description: 'WebSocket protocol documentation',
			},
		],
	},
	'aws-s3-cloudfront-file-storage-cdn': {
		relatedArticles: [
			'aws-lambda-serverless-deployment-guide',
			'aws-dynamodb-design-best-practices',
			'nextjs-edge-runtime-serverless-functions',
		],
		externalResources: [
			{
				title: 'Amazon S3 Documentation',
				url: 'https://docs.aws.amazon.com/s3/',
				description: 'Official AWS S3 documentation',
			},
			{
				title: 'Amazon CloudFront Documentation',
				url: 'https://docs.aws.amazon.com/cloudfront/',
				description: 'Official CloudFront CDN documentation',
			},
		],
	},
	'ai-coding-tools-beyond-completion': {
		relatedArticles: ['cursor-ai-revolutionizing-development', 'github-copilot-vs-cursor-comparison'],
		externalResources: [
			{
				title: 'AI-Powered Developer Tools',
				url: 'https://github.blog/2023-11-08-universe-2023-copilot-transforms-github-into-the-ai-powered-developer-platform/',
				description: 'How AI is transforming the developer platform and tooling ecosystem',
			},
			{
				title: 'The Future of Programming',
				url: 'https://stackoverflow.blog/2023/01/09/beyond-web-search-exploring-future-programming/',
				description: 'Industry perspectives on AI in development',
			},
		],
	},
	'react-server-components-future': {
		relatedArticles: [
			'react-hooks-complete-guide',
			'nextjs-15-app-router-guide',
			'nextjs-server-actions-guide',
			'react-performance-optimization-guide',
		],
		externalResources: [
			{
				title: 'React Server Components',
				url: 'https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components',
				description: 'Official React Server Components announcement',
			},
			{
				title: 'Server Components RFC',
				url: 'https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md',
				description: 'Detailed RFC for Server Components',
			},
		],
	},
	'nextjs-edge-runtime-serverless-functions': {
		relatedArticles: [
			'nextjs-15-app-router-guide',
			'aws-lambda-serverless-deployment-guide',
			'nextjs-server-actions-guide',
		],
		externalResources: [
			{
				title: 'Next.js Edge Runtime',
				url: 'https://nextjs.org/docs/app/api-reference/edge',
				description: 'Official Edge Runtime documentation',
			},
			{
				title: 'Vercel Edge Functions',
				url: 'https://vercel.com/docs/functions/edge-functions',
				description: 'Vercel Edge Functions guide',
			},
		],
	},
};

// Helper function to get blog links for a specific article
export function getBlogLinks(slug: string): BlogLinks | undefined {
	return blogLinksMap[slug];
}
