'use client';

import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';

interface InlineLinkMapping {
	[key: string]: {
		slug: string;
		title: string;
	};
}

// Mapping of keywords/phrases to their corresponding article slugs
const inlineLinkMappings: InlineLinkMapping = {
	// React related
	'React Hooks': { slug: 'react-hooks-complete-guide', title: 'React Hooks: A Complete Guide' },
	'React performance': { slug: 'react-performance-optimization-guide', title: 'React Performance Optimization' },
	'performance optimization': { slug: 'react-performance-optimization-guide', title: 'React Performance Optimization' },
	'useMemo and useCallback': { slug: 'react-performance-optimization-guide', title: 'React Performance Optimization' },
	'Context API': { slug: 'react-context-vs-redux-state-management', title: 'React Context API vs Redux' },
	'Redux': { slug: 'react-context-vs-redux-state-management', title: 'React Context API vs Redux' },
	'state management': { slug: 'react-context-vs-redux-state-management', title: 'State Management' },
	'Server Components': { slug: 'react-server-components-future', title: 'React Server Components' },
	'React Server Components': { slug: 'react-server-components-future', title: 'React Server Components' },

	// Next.js related
	'Next.js': { slug: 'nextjs-15-app-router-guide', title: 'Next.js 15 App Router' },
	'App Router': { slug: 'nextjs-15-app-router-guide', title: 'Next.js 15 App Router' },
	'Server Actions': { slug: 'nextjs-server-actions-guide', title: 'Next.js Server Actions' },
	'ISR': { slug: 'nextjs-isr-ssg-static-generation', title: 'Next.js ISR and SSG' },
	'SSG': { slug: 'nextjs-isr-ssg-static-generation', title: 'Next.js ISR and SSG' },
	'Static Site Generation': { slug: 'nextjs-isr-ssg-static-generation', title: 'Next.js ISR and SSG' },
	'Incremental Static Regeneration': { slug: 'nextjs-isr-ssg-static-generation', title: 'Next.js ISR and SSG' },
	'Edge Runtime': { slug: 'nextjs-edge-runtime-serverless-functions', title: 'Next.js Edge Runtime' },
	'Edge Functions': { slug: 'nextjs-edge-runtime-serverless-functions', title: 'Next.js Edge Runtime' },

	// NestJS related
	'NestJS': { slug: 'nestjs-fundamentals-scalable-backend', title: 'NestJS Fundamentals' },
	'microservices': { slug: 'nestjs-microservices-distributed-systems', title: 'NestJS Microservices' },
	'Guards': { slug: 'nestjs-guards-interceptors-pipes', title: 'NestJS Guards, Interceptors, and Pipes' },
	'Interceptors': { slug: 'nestjs-guards-interceptors-pipes', title: 'NestJS Guards, Interceptors, and Pipes' },
	'Pipes': { slug: 'nestjs-guards-interceptors-pipes', title: 'NestJS Guards, Interceptors, and Pipes' },

	// GraphQL related
	'GraphQL': { slug: 'graphql-best-practices-schema-optimization', title: 'GraphQL Best Practices' },
	'GraphQL subscriptions': { slug: 'graphql-subscriptions-realtime-websockets', title: 'GraphQL Subscriptions' },
	'WebSocket': { slug: 'graphql-subscriptions-realtime-websockets', title: 'GraphQL Subscriptions' },
	'WebSockets': { slug: 'graphql-subscriptions-realtime-websockets', title: 'GraphQL Subscriptions' },
	'Apollo Federation': { slug: 'graphql-federation-unified-gateway', title: 'GraphQL Federation' },
	'Federation': { slug: 'graphql-federation-unified-gateway', title: 'GraphQL Federation' },

	// AWS related
	'AWS Lambda': { slug: 'aws-lambda-serverless-deployment-guide', title: 'AWS Lambda Guide' },
	'Lambda': { slug: 'aws-lambda-serverless-deployment-guide', title: 'AWS Lambda Guide' },
	'serverless': { slug: 'aws-lambda-serverless-deployment-guide', title: 'AWS Lambda Guide' },
	'DynamoDB': { slug: 'aws-dynamodb-design-best-practices', title: 'AWS DynamoDB Best Practices' },
	'S3': { slug: 'aws-s3-cloudfront-file-storage-cdn', title: 'AWS S3 and CloudFront' },
	'CloudFront': { slug: 'aws-s3-cloudfront-file-storage-cdn', title: 'AWS S3 and CloudFront' },
	'CDN': { slug: 'aws-s3-cloudfront-file-storage-cdn', title: 'AWS S3 and CloudFront' },

	// AI Tools related
	'Cursor AI': { slug: 'cursor-ai-revolutionizing-development', title: 'Cursor AI Guide' },
	'Cursor': { slug: 'cursor-ai-revolutionizing-development', title: 'Cursor AI Guide' },
	'GitHub Copilot': { slug: 'github-copilot-vs-cursor-comparison', title: 'GitHub Copilot vs Cursor' },
	'Copilot': { slug: 'github-copilot-vs-cursor-comparison', title: 'GitHub Copilot vs Cursor' },
	'AI coding tools': { slug: 'ai-coding-tools-beyond-completion', title: 'AI Coding Tools Beyond Completion' },
};

interface InlineLinkedContentProps {
	content: string;
	currentSlug: string;
}

export default function InlineLinkedContent({ content, currentSlug }: InlineLinkedContentProps) {
	// Parse content and add inline links
	const parseContentWithLinks = (text: string): React.ReactNode[] => {
		const parts: React.ReactNode[] = [];
		let remainingText = text;
		let keyIndex = 0;

		// Sort keywords by length (longest first) to match longer phrases first
		const sortedKeywords = Object.keys(inlineLinkMappings).sort((a, b) => b.length - a.length);

		while (remainingText.length > 0) {
			let matchFound = false;

			// Try to find a keyword match
			for (const keyword of sortedKeywords) {
				const mapping = inlineLinkMappings[keyword];
				
				// Don't link to the current article
				if (mapping.slug === currentSlug) continue;

				// Case-insensitive search
				const regex = new RegExp(`\\b${keyword}\\b`, 'i');
				const match = remainingText.match(regex);

				if (match && match.index !== undefined) {
					// Add text before the match
					if (match.index > 0) {
						parts.push(
							<span key={`text-${keyIndex++}`}>{remainingText.substring(0, match.index)}</span>
						);
					}

					// Add the link
					parts.push(
						<Link
							key={`link-${keyIndex++}`}
							href={`/blogs/${mapping.slug}`}
							style={{
								color: '#4F46E5',
								textDecoration: 'none',
								borderBottom: '1px solid rgba(79, 70, 229, 0.3)',
								transition: 'all 0.2s ease',
								fontWeight: 500,
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.borderBottomColor = '#4F46E5';
								e.currentTarget.style.color = '#6366F1';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.borderBottomColor = 'rgba(79, 70, 229, 0.3)';
								e.currentTarget.style.color = '#4F46E5';
							}}>
							{match[0]}
						</Link>
					);

					// Continue with remaining text
					remainingText = remainingText.substring(match.index + match[0].length);
					matchFound = true;
					break;
				}
			}

			// If no match found, add the rest of the text
			if (!matchFound) {
				parts.push(<span key={`text-${keyIndex++}`}>{remainingText}</span>);
				break;
			}
		}

		return parts;
	};

	return <Typography component='p'>{parseContentWithLinks(content)}</Typography>;
}
