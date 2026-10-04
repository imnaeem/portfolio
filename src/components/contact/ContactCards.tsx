import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiMessageCircle } from 'react-icons/fi';
import Card from '@/components/ui/Card';
import { socials } from '@/content/site';

const details = [
	{
		title: 'WhatsApp',
		value: 'Chat with me directly',
		href: socials.whatsapp,
		Icon: FiMessageCircle,
	},
	{
		title: 'Email',
		value: socials.email,
		href: `mailto:${socials.email}`,
		Icon: FiMail,
	},
	{
		title: 'Email (alt)',
		value: socials.emailAlt,
		href: `mailto:${socials.emailAlt}`,
		Icon: FiMail,
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

export default function ContactCards() {
	return (
		<div className='grid gap-3 sm:grid-cols-2'>
			{details.map(({ title, value, href, Icon }) => {
				const inner = (
					<>
						<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-dark'>
							<Icon size={17} />
						</div>
						<div className='min-w-0'>
							<p className='text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted'>{title}</p>
							<p className='mt-0.5 truncate text-sm font-medium text-ink'>{value}</p>
						</div>
					</>
				);
				return href ? (
					<a
						key={title}
						href={href}
						target={href.startsWith('http') ? '_blank' : undefined}
						rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
						className='card card-hover flex items-center gap-3.5 p-4'>
						{inner}
					</a>
				) : (
					<Card key={title} hover className='flex items-center gap-3.5 p-4'>
						{inner}
					</Card>
				);
			})}
		</div>
	);
}
