import React from 'react';

type Props = {
	title: string;
	description: string | React.ReactElement;
	icon?: React.ReactElement;
	color?: string;
};

const Card = ({ title, description, icon }: Props) => {
	return (
		<div className="flex gap-4 items-start p-6 rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-border-hover glow-border h-full">
			{icon && (
				<div className="w-11 h-11 rounded-xl bg-surface-2 border border-border flex items-center justify-center shrink-0 text-text-muted">
					{icon}
				</div>
			)}
			<div>
				<h3 className="text-base font-bold text-text">{title}</h3>
				{typeof description === 'string' ? (
					<p className="mt-2 text-[13px] text-text-muted leading-relaxed">{description}</p>
				) : (
					<div className="mt-2">{description}</div>
				)}
			</div>
		</div>
	);
};

export default Card;
