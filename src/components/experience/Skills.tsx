type Props = { skills: string[] };

export const Skills = ({ skills }: Props) => {
	return (
		<div className="flex flex-wrap gap-2">
			{skills.map((tech) => (
				<span
					key={tech}
					className="px-3.5 py-1.5 rounded-lg text-[13px] font-medium text-text-muted border border-border bg-surface transition-all duration-200 hover:border-accent/40 hover:text-accent hover:bg-accent/5 cursor-default"
				>
					{tech}
				</span>
			))}
		</div>
	);
};
