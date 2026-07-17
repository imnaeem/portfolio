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
		<Box sx={{ width: '100%', bgcolor: 'transparent', display: 'flex', justifyContent: 'flex-end' }}>
			<Tabs
				sx={{
					height: { xs: 40, sm: 44 },
					minHeight: { xs: 40, sm: 44 },
					backgroundColor: 'transparent',
					width: 'fit-content',
					'& .MuiTabs-indicator': {
						display: 'none',
					},
				}}
				value={category}
				onChange={(_, v) => handleChange(v)}>
				{tabs?.map((tab) => (
					<Tab
						key={tab}
						sx={{
							height: { xs: 40, sm: 44 },
							minHeight: { xs: 40, sm: 44 },
							px: 2,
							mx: 0.5,
							fontSize: 14,
							fontWeight: 500,
							color: category === tab.toLowerCase() ? '#171717' : '#737373',
							backgroundColor: category === tab.toLowerCase() ? '#f5f5f5' : '#ffffff',
							border: `1px solid ${category === tab.toLowerCase() ? '#d4d4d4' : '#f0f0f0'}`,
							borderRadius: '8px',
							transition: 'all 0.2s ease-in-out',
							'&:hover': {
								backgroundColor: '#f5f5f5',
							},
							'&.Mui-selected': {
								color: '#171717',
							},
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
