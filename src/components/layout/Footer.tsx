import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiMessageCircle } from 'react-icons/fi';

const siteLinks = [
	{ label: 'About', href: '/' },
	{ label: 'Experience', href: '/experience' },
	{ label: 'Portfolio', href: '/portfolio' },
	{ label: 'Blog', href: '/blogs' },
	{ label: 'Contact', href: '/contact' },
];

const legalLinks = [
	{ label: 'Terms & Conditions', href: '/terms-conditions' },
	{ label: 'Privacy Policy', href: '/privacy-policy' },
	{ label: 'Disclaimer', href: '/disclaimer' },
];

const socials = [
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/im-naeem/', Icon: FiLinkedin },
	{ label: 'GitHub', href: 'https://github.com/imnaeem/', Icon: FiGithub },
	{ label: 'WhatsApp', href: '/whatsapp', Icon: FiMessageCircle },
	{ label: 'Email', href: 'mailto:contact@imnaeem.dev', Icon: FiMail },
];

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className='border-t border-line bg-white'>
			<div className='mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8'>
				<div className='grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]'>
					<div>
						<Link href='/' className='font-display text-lg font-bold tracking-tight text-ink'>
							imnaeem<span className='text-accent'>.dev</span>
						</Link>
						<p className='mt-3 max-w-sm text-sm leading-relaxed text-ink-soft'>
							Full Stack JavaScript Developer building scalable web apps with React, Next.js, Node.js, and
							GraphQL.
						</p>
						<div className='mt-4 flex gap-2'>
							{socials.map(({ label, href, Icon }) => (
								<a
									key={label}
									href={href}
									aria-label={label}
									target={href.startsWith('http') ? '_blank' : undefined}
									rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
									className='flex h-9 w-9 items-center justify-center rounded-xl border border-line text-stone-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent'>
									<Icon size={16} />
								</a>
							))}
						</div>
					</div>

					<nav aria-label='Site'>
						<h3 className='text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted'>Explore</h3>
						<ul className='mt-4 space-y-2.5'>
							{siteLinks.map(({ label, href }) => (
								<li key={href}>
									<Link href={href} className='text-sm text-ink-soft transition-colors hover:text-accent'>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<nav aria-label='Legal'>
						<h3 className='text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted'>Legal</h3>
						<ul className='mt-4 space-y-2.5'>
							{legalLinks.map(({ label, href }) => (
								<li key={href}>
									<Link href={href} className='text-sm text-ink-soft transition-colors hover:text-accent'>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>

				<div className='mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row'>
					<p className='text-xs text-ink-muted'>
						© {year} <span className='font-semibold text-ink-soft'>Muhammad Naeem</span>. All rights reserved.
					</p>
					<p className='text-xs text-ink-muted'>Lahore, Pakistan</p>
				</div>
			</div>
		</footer>
	);
}
