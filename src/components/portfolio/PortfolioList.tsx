'use client';
import { projectsList } from '@/lib/data';
import { Project } from '@/types';
import { hexToRgba, titleCase } from '@/utils';
import { Grid2, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Suspense, useMemo, useState } from 'react';
import PortfolioCategories from './PortfolioCategories';

const PortfolioList = () => {
	const [category, setCategory] = useState('all');
	const router = useRouter();

	const filteredProjects = useMemo(() => {
		if (category === 'all') return projectsList;
		return projectsList.filter(({ type }) => type === category);
	}, [category]);

	const handleOpenProject = (project: Project) => {
		router.push(`/portfolio/${project.key}`);
	};

	return (
		<>
			<Suspense fallback={<p>Loading...</p>}>
				<PortfolioCategories category={category} setCategory={setCategory} />
			</Suspense>
			<Grid2 container spacing={3} my='32px'>
				{filteredProjects.map((item) => (
					<Grid2
						key={item.key}
						onClick={() => handleOpenProject(item)}
						className='shadow-sm'
						sx={{ p: 2, borderRadius: '8px', bgcolor: hexToRgba(item.color, 0.1), cursor: 'pointer' }}
						size={{ xs: 12, sm: 6, md: 4 }}>
						<Image
							style={{ borderRadius: '12px', height: '230px', width: '340px', marginLeft: 'auto', marginRight: 'auto' }}
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
