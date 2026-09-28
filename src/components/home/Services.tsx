import { FiCode, FiServer, FiLayers, FiPenTool, FiTrendingUp, FiSearch } from 'react-icons/fi';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const services = [
	{
		title: 'Frontend Development',
		description: 'Modern, responsive interfaces built with React, Next.js, Tailwind CSS, and TypeScript.',
		Icon: FiCode,
	},
	{
		title: 'Backend Development',
		description: 'Scalable, efficient APIs and services with Node.js, NestJS, Express, and MongoDB.',
		Icon: FiServer,
	},
	{
		title: 'Full Stack Solutions',
		description: 'End-to-end web applications — React, Next.js, Node.js, NestJS, MongoDB, and GraphQL.',
		Icon: FiLayers,
	},
	{
		title: 'WordPress Development',
		description: 'Custom themes, plugins, and WooCommerce stores tailored to business needs.',
		Icon: FiPenTool,
	},
	{
		title: 'Digital Marketing',
		description: 'Growth through Facebook Ads, Google Ads, SEO, and SEM strategies.',
		Icon: FiTrendingUp,
	},
	{
		title: 'SEO Optimization',
		description: 'On-page, off-page, technical, local, and e-commerce SEO that ranks.',
		Icon: FiSearch,
	},
];

export default function Services() {
	return (
		<section aria-label='Services' className='py-10 sm:py-14'>
			<Reveal>
				<SectionHeading
					eyebrow='Services'
					title='What I do'
					description='From first pixel to production deploy — the services I offer to ship complete, polished products.'
				/>
			</Reveal>

			<div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				{services.map(({ title, description, Icon }, i) => (
					<Reveal key={title} delay={(i % 3) * 70}>
						<Card hover className='h-full p-6'>
							<div className='flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-white'>
								<Icon size={19} />
							</div>
							<h3 className='mt-4 font-display text-lg font-semibold tracking-tight text-ink'>{title}</h3>
							<p className='mt-2 text-sm leading-relaxed text-ink-soft'>{description}</p>
						</Card>
					</Reveal>
				))}
			</div>
		</section>
	);
}
