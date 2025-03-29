import PortfolioList from '@/components/portfolio/PortfolioList';
import Title from '@/components/shared/Title';
import { Fade } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'My Portfolio | Muhammad Naeem',
	description: 'Checkout my portfolio of projects built with React, Next.js, Node.js, and GraphQL.',
};

const Portfolio = () => {
	return (
		<Fade in timeout={500}>
			<div>
				<Title title='Portfolio' />
				<PortfolioList />
			</div>
		</Fade>
	);
};

export default Portfolio;
