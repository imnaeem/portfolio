import { FiMail, FiMapPin, FiMessageCircle } from 'react-icons/fi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { socials } from '@/content/site';

const infoCards = [
	{
		title: 'Email',
		value: socials.email,
		href: `mailto:${socials.email}`,
		Icon: FiMail,
	},
	{
		title: 'WhatsApp',
		value: 'Chat with me',
		href: socials.whatsapp,
		Icon: FiMessageCircle,
	},
	{
		title: 'Location',
		value: socials.location,
		href: undefined,
		Icon: FiMapPin,
	},
	{
		title: 'LinkedIn',
		value: 'linkedin.com/in/im-naeem',
		href: socials.linkedin,
		Icon: FiLinkedin,
	},
	{
		title: 'GitHub',
		value: 'github.com/imnaeem',
		href: socials.github,
		Icon: FiGithub,
	},
];

export default function About() {
	return (
		<section aria-label='About' className='py-10 sm:py-14'>
			<Reveal>
				<SectionHeading
					eyebrow='About'
					title='Built to last, not just to launch'
					description="I'm Muhammad Naeem, a Senior Full-Stack Engineer. I've seen too many codebases that were fine at launch and a mess a year later. I build the kind that holds up as the team and the traffic grow — clean architecture, tested code, and AI-native workflows where they actually help."
				/>
			</Reveal>

			<div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				{infoCards.map(({ title, value, href, Icon }, i) => {
					const inner = (
						<>
							<div className='flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent-dark'>
								<Icon size={18} />
							</div>
							<div className='mt-4'>
								<p className='text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted'>{title}</p>
								<p className='mt-1 truncate text-[15px] font-medium text-ink'>{value}</p>
							</div>
						</>
					);
					return (
						<Reveal key={title} delay={i * 60}>
							{href ? (
								<a
									href={href}
									target={href.startsWith('http') ? '_blank' : undefined}
									rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
									className='card card-hover block h-full p-5'>
									{inner}
								</a>
							) : (
								<Card hover className='h-full p-5'>
									{inner}
								</Card>
							)}
						</Reveal>
					);
				})}
			</div>
		</section>
	);
}
