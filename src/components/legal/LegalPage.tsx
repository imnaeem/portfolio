import type { ReactNode } from 'react';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

type LegalPageProps = {
	eyebrow: string;
	title: string;
	subtitle: string;
	updated: string;
	children: ReactNode;
};

/** Shared shell for the legal pages: heading + card + prose content. */
export default function LegalPage({ eyebrow, title, subtitle, updated, children }: LegalPageProps) {
	return (
		<>
			<Reveal>
				<SectionHeading eyebrow={eyebrow} title={title} description={subtitle} />
			</Reveal>
			<Reveal delay={80}>
				<Card className='mt-8 p-6 sm:p-10'>
					<p className='text-sm text-ink-muted'>Last Updated: {updated}</p>
					<div className='prose-minimal mt-6'>{children}</div>
				</Card>
			</Reveal>
		</>
	);
}
