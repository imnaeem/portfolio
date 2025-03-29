'use client';
import { Project } from '@/types';
import { hexToRgba, titleCase } from '@/utils';
import { ButtonBase, Grid2, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useEffect, useMemo, useState } from 'react';
import PortfolioCategories from './PortfolioCategories';

const ProjectLoader = () => {
	return (
		<Grid2 container spacing={3} my='32px'>
			{Array.from({ length: 6 }, (_, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
					<Skeleton height={340} sx={{ transform: 'unset', borderRadius: '8px' }} />
				</Grid2>
			))}
		</Grid2>
	);
};

const PortfolioList = () => {
	const [allProjects, setAllProjects] = useState<Project[]>([]);
	const [loading, setLoading] = useState(true);
	const [category, setCategory] = useState('all');

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await fetch('/api/projects');
				if (response.ok) {
					const data = await response.json();
					setAllProjects(data);
				}
			} catch (error) {
				console.error('Error fetching projects:', error);
			} finally {
				setLoading(false);
			}
		};
		fetchProjects();
	}, []);

	const filteredProjects = useMemo(() => {
		if (category === 'all') return allProjects;
		return allProjects.filter(({ type }) => type === category);
	}, [category, allProjects]);

	return (
		<>
			<Suspense fallback={<p>Loading...</p>}>
				<PortfolioCategories category={category} setCategory={setCategory} />
			</Suspense>
			{loading && <ProjectLoader />}
			<Grid2 container spacing={3} my='32px'>
				{filteredProjects.map((item) => (
					<Grid2 key={item.key} size={{ xs: 12, sm: 6, md: 4 }}>
						<Link href={`/portfolio/${item.key}`}>
							<ButtonBase
								className='shadow-sm'
								sx={{
									p: 2,
									display: 'block',
									width: '100%',
									borderRadius: '8px',
									bgcolor: hexToRgba(item.color, 0.1),
									cursor: 'pointer',
									textAlign: 'left',
								}}>
								<Image
									style={{
										borderRadius: '12px',
										height: '230px',
										width: '340px',
										marginLeft: 'auto',
										marginRight: 'auto',
									}}
									src={item.thumbnail}
									alt={item.key}
									width={500}
									height={230}
								/>
								<Typography variant='body2' fontSize={16} my={2} lineHeight={1}>
									{titleCase(item.type)}
								</Typography>
								<Typography fontWeight={500} fontSize={25} mb={0.5} lineHeight={1}>
									{item.title}
								</Typography>
							</ButtonBase>
						</Link>
					</Grid2>
				))}
			</Grid2>
		</>
	);
};

export default PortfolioList;
