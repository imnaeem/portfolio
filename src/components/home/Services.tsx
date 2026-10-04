import { FiCode, FiServer, FiLayers, FiCpu, FiCloud, FiZap } from 'react-icons/fi';
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
		description: 'Scalable, efficient APIs and services with Node.js, NestJS, Express, and PostgreSQL.',
		Icon: FiServer,
	},
	{
		title: 'Full Stack Solutions',
		description: 'End-to-end web applications — React, Next.js, Node.js, NestJS, MongoDB, and GraphQL.',
		Icon: FiLayers,
	},
	{
		title: 'AI Integration',
		description:
			'AI agents, chatbots, and LLM workflows with OpenAI APIs and Langfuse. Shipped to production, not just demoed.',
		Icon: FiCpu,
	},
	{
		title: 'Cloud & DevOps',
		description: 'AWS infrastructure, Docker, and CI/CD pipelines that deploy reliably, every time.',
		Icon: FiCloud,
	},
	{
		title: 'API Development',
		description:
			'REST and GraphQL APIs built for scale — including 30% faster responses through query optimization.',
		Icon: FiZap,
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
