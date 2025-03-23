import PortfolioList from '@/components/portfolio/PortfolioList';
import Title from '@/components/shared/Title';
import { Fade } from '@mui/material';

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
