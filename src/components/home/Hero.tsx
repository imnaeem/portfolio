import Image from 'next/image';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiMessageCircle } from 'react-icons/fi';
import ButtonLink from '@/components/ui/ButtonLink';
import { Chip } from '@/components/ui/Chip';
import Reveal from '@/components/ui/Reveal';
import { socials } from '@/content/site';

const socialLinks = [
	{ label: 'LinkedIn', href: socials.linkedin, Icon: FiLinkedin },
	{ label: 'GitHub', href: socials.github, Icon: FiGithub },
	{ label: 'WhatsApp', href: socials.whatsapp, Icon: FiMessageCircle },
	{ label: 'Email', href: `mailto:${socials.email}`, Icon: FiMail },
];

const stats = [
	{ value: '4+', label: 'Years experience' },
	{ value: '9', label: 'Projects shipped' },
	{ value: '3', label: 'Developers mentored' },
];

export default function Hero() {
	return (
		<section aria-label='Introduction' className='py-6 sm:py-10'>
			<div className='grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]'>
				<Reveal>
					<Chip variant='accent' className='mb-5'>
						<span className='mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent' aria-hidden='true' />
						Full Stack Developer
					</Chip>
					<h1 className='font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl'>
						Hi, I&apos;m Muhammad <span className='text-accent'>Naeem</span>
					</h1>
					<p className='mt-5 max-w-xl text-lg leading-relaxed text-ink-soft'>
						Software Engineer with 4+ years of experience building scalable JavaScript applications — from
						pixel-sharp interfaces to robust APIs.
					</p>
					<div className='mt-7 flex flex-wrap gap-3'>
						<ButtonLink href='/contact'>
							Get in Touch <FiArrowRight size={16} />
						</ButtonLink>
						<ButtonLink href='/portfolio' variant='secondary'>
							View Projects
						</ButtonLink>
					</div>
					<div className='mt-8 flex items-center gap-2.5'>
						{socialLinks.map(({ label, href, Icon }) => (
							<a
								key={label}
								href={href}
								aria-label={label}
								target={href.startsWith('http') ? '_blank' : undefined}
								rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
								className='flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white text-stone-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent'>
								<Icon size={17} />
							</a>
						))}
					</div>
				</Reveal>

				<Reveal delay={120} className='mx-auto w-full max-w-xs lg:max-w-none'>
					<div className='relative'>
						<div className='absolute -inset-3 rounded-[1.75rem] bg-accent/10 blur-2xl' aria-hidden='true' />
						<div className='card relative overflow-hidden p-2'>
							<div className='relative aspect-square overflow-hidden rounded-2xl'>
								<Image
									src='/profile-image.jpg'
									alt='Muhammad Naeem — Full Stack Developer'
									fill
									priority
									sizes='(max-width: 1024px) 320px, 420px'
									className='object-cover'
								/>
							</div>
						</div>
					</div>
				</Reveal>
			</div>

			<Reveal delay={200}>
				<dl className='mt-12 grid grid-cols-3 gap-3 sm:gap-4'>
					{stats.map(({ value, label }) => (
						<div key={label} className='card px-4 py-5 text-center sm:py-6'>
							<dt className='order-2 mt-1 block text-xs font-medium text-ink-muted sm:text-sm'>{label}</dt>
							<dd className='order-1 font-display text-2xl font-bold text-ink sm:text-3xl'>{value}</dd>
						</div>
					))}
				</dl>
			</Reveal>
		</section>
	);
}
