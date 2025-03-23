'use client';
import { hexToRgba, titleCase } from '@/utils';
import { Grid2, Typography } from '@mui/material';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import PortfolioCategories from './PortfolioCategories';

const projects = [
	{
		title: 'Platforms Inspection',
		key: 'platform-Inspection',
		type: 'professional',
		color: '#000000',
		image: '/images/abyss.jpeg',
	},
	{
		title: 'Poll App',
		key: 'poll-app',
		type: 'professional',
		color: '#008FF5',
		image: '/images/polly.png',
	},
	{
		title: 'Shuttle Pro',
		key: 'shuttle-pro',
		type: 'professional',
		color: '#187355',
		image: '/images/shuttle-pro.png',
	},
	{
		title: 'Home Repair Service system',
		key: 'goc-installers',
		type: 'professional',
		color: '#044a20',
		image: '/images/goc-installers.png',
	},
	{
		title: 'Construction Solutions',
		key: 'construction-solutions',
		type: 'personal',
		color: '#008FF5',
		image: '/images/conssols.png',
	},
	{
		title: 'Personal Portfolio',
		key: 'personal-portfolio',
		type: 'personal',
		color: '#008FF5',
		image: '/images/portfolio.png',
	},
];

const PortfolioList = () => {
	const [category, setCategory] = useState('all');

	const filteredProjects = useMemo(() => {
		if (category === 'all') return projects;
		return projects.filter(({ type }) => type === category);
	}, [category]);

	const handleOpenProject = () => {
		toast.info('Coming soon!');
	};

	return (
		<>
			<PortfolioCategories category={category} setCategory={setCategory} />
			<Grid2 container spacing={3} my='32px'>
				{filteredProjects.map((item) => (
					<Grid2
						key={item.key}
						onClick={handleOpenProject}
						className='shadow-sm'
						sx={{ p: 2, borderRadius: '8px', bgcolor: hexToRgba(item.color, 0.1), cursor: 'pointer' }}
						size={{ xs: 12, sm: 6, md: 4 }}>
						<Image
							style={{ borderRadius: '12px', height: '230px', width: '340px' }}
							src={item.image}
							alt={item.title}
							width={500}
							height={230}
						/>
						<Typography variant='body2' fontSize={16} my={2} lineHeight={1}>
							{titleCase(item.type)}
						</Typography>
						<Typography fontWeight={500} fontSize={25} mb={0.5} lineHeight={1}>
							{item.title}
						</Typography>
					</Grid2>
				))}
			</Grid2>
		</>
	);
};

export default PortfolioList;
