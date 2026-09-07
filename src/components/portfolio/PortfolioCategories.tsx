'use client';
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
	}, [searchParams, router, setCategory]);

	const handleChange = (newValue: string) => {
		setCategory(newValue);
		router.replace(`?projects=${newValue}`);
	};

	return (
		<div className="flex justify-end w-full">
			<div className="flex gap-2 p-1 rounded-xl border border-border bg-surface w-fit">
				{tabs.map((tab) => {
					const val = tab.toLowerCase();
					const active = category === val;
					return (
						<button
							key={tab}
							onClick={() => handleChange(val)}
							className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
								active
									? 'bg-accent text-white shadow-sm'
									: 'text-text-muted hover:text-text hover:bg-surface-2'
							}`}
						>
							{tab}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default PortfolioCategories;
