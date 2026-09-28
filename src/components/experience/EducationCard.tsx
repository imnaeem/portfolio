import { FiBookOpen } from 'react-icons/fi';
import Card from '@/components/ui/Card';
import Reveal from '@/components/ui/Reveal';
import { education } from '@/content/site';

export default function EducationCard() {
	return (
		<Reveal>
			<Card hover className='p-6 sm:p-7'>
				<div className='flex items-start gap-4'>
					<div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-white'>
						<FiBookOpen size={19} />
					</div>
					<div>
						<h3 className='font-display text-lg font-semibold tracking-tight text-ink'>{education.degree}</h3>
						<p className='mt-1 text-sm font-medium text-ink-soft'>{education.school}</p>
					</div>
				</div>
			</Card>
		</Reveal>
	);
}
