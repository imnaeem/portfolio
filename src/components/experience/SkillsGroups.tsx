import Card from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import Reveal from '@/components/ui/Reveal';
import { skillGroups } from '@/content/site';

export default function SkillsGroups() {
	return (
		<div className='grid gap-4 md:grid-cols-2'>
			{skillGroups.map((group, i) => (
				<Reveal key={group.label} delay={(i % 2) * 80}>
					<Card className='h-full p-6'>
						<h3 className='text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted'>{group.label}</h3>
						<div className='mt-4 flex flex-wrap gap-2'>
							{group.skills.map((skill) => (
								<Chip key={skill} variant='soft'>
									{skill}
								</Chip>
							))}
						</div>
					</Card>
				</Reveal>
			))}
		</div>
	);
}
