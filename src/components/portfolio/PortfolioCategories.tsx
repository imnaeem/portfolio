'use client';
import { Box, Tab, Tabs } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

type Props = {
	category: string;
	setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const tabs = ['All', 'Professional', 'Personal'];

const PortfolioCategories = ({ category, setCategory }: Props) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	useEffect(() => {
		const currentCategory = searchParams.get('projects');

		if (currentCategory) {
			setCategory(currentCategory);
		} else {
			router.replace('?projects=all', { scroll: false });
			setCategory('all');
		}
	}, [searchParams, router, setCategory]); // Proper dependency array

	const handleChange = (newValue: string) => {
		setCategory(newValue);
		router.replace(`?projects=${newValue}`); // Update URL without reloading
	};

	return (
		<Box sx={{ width: '100%', bgcolor: 'background.paper', display: 'flex', justifyContent: 'flex-end' }}>
			<Tabs
				sx={{
					height: { xs: 35, sm: 40 },
					minHeight: { xs: 35, sm: 40 },
					// borderRadius: variant === 'joined' ? '5px' : 'none',
					backgroundColor: 'transparent',
					width: 'fit-content',
				}}
				value={category}
				onChange={(_, v) => handleChange(v)}>
				{tabs?.map((tab) => (
					<Tab
						key={tab}
						sx={{
							height: { xs: 35, sm: 40 },
							minHeight: { xs: 35, sm: 40 },
							px: 1,
							mx: 0.5,
							backgroundColor: category === tab ? '#e0e0e0' : '#f2f2f2',
							borderRadius: '5px',
							transition: 'background-color 0.3s ease',
							'&:hover': { backgroundColor: '#e0e0e0' },
						}}
						iconPosition='start'
						label={tab}
						value={tab.toLowerCase()}
					/>
				))}
			</Tabs>
		</Box>
	);
};

export default PortfolioCategories;
