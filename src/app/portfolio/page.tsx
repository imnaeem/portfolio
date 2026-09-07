'use client';
import PortfolioList from '@/components/portfolio/PortfolioList';

const Portfolio = () => {
	return (
		<div className="flex flex-col gap-8 py-8">
			<div>
				<div className="flex items-center gap-3 mb-3">
					<div className="w-7 h-[2px] bg-accent rounded-full" />
					<h1 className="text-3xl sm:text-4xl font-bold text-text tracking-tight">Work</h1>
				</div>
				<p className="text-sm text-text-muted max-w-lg leading-relaxed">
					A collection of projects spanning production platforms, e-commerce, AI tools, and developer utilities.
				</p>
			</div>
			<PortfolioList />
		</div>
	);
};

export default Portfolio;
