import type { Metadata } from 'next';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
	title: 'My Portfolio | Muhammad Naeem',
	description: 'Checkout my portfolio of projects built with React, Next.js, Node.js, and GraphQL.',
};

export default function PortfolioPage() {
	return (
		<>
			<Reveal>
				<SectionHeading
					eyebrow='Work'
					title='Portfolio'
					description='A collection of my recent projects — professional client work and personal experiments.'
				/>
			</Reveal>
			<div className='mt-8'>
				<PortfolioGrid />
			</div>
		</>
	);
}
