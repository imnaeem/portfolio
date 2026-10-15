import PortfolioList from '@/components/portfolio/PortfolioList';
import Title from '@/components/shared/Title';
import {  } from '@mui/material';
import { Metadata } from 'next';
import FadeIn from '@/components/shared/FadeIn';

export const metadata: Metadata = {
	title: 'My Portfolio | Muhammad Naeem',
	description: 'Checkout my portfolio of projects built with React, Next.js, Node.js, and GraphQL.',
};

const Portfolio = () => {
	return (
		<FadeIn>
			<div>
				<Title title='Portfolio' subtitle='A collection of my recent projects and work' />
				<PortfolioList />
			</div>
		</FadeIn>
	);
};

export default Portfolio;
