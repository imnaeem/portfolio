'use client';
import React from 'react';

type Props = {
	title: string;
	value: string;
	link?: string;
	color?: string;
	icon: React.ReactElement;
};

const Info = ({ title, value, icon, link }: Props) => {
	const handleLinkClick = () => {
		if (link) window.open(link, '_blank');
	};

	return (
		<div
			onClick={handleLinkClick}
			className={`flex items-center gap-3 p-4 rounded-xl border border-border bg-surface transition-all duration-200 ${
				link ? 'cursor-pointer hover:border-border-hover' : ''
			}`}
		>
			<div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center shrink-0 text-text-muted">
				{icon}
			</div>
			<div>
				<p className="text-[10px] font-semibold uppercase tracking-wider text-text-dim">{title}</p>
				<p className="text-sm font-semibold text-text mt-0.5">{value}</p>
			</div>
		</div>
	);
};

export default Info;
