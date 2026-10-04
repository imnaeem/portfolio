'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';

const navItems = [
	{ label: 'About', href: '/' },
	{ label: 'Experience', href: '/experience' },
	{ label: 'Portfolio', href: '/portfolio' },
	{ label: 'Blog', href: '/blogs' },
	{ label: 'Contact', href: '/contact' },
];

export default function Navbar() {
	const pathname = usePathname();
	const [mobileOpen, setMobileOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		setMobileOpen(false);
	}, [pathname]);

	const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

	return (
		<header
			className={`sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl transition-all duration-300 ${
				scrolled ? 'border-line shadow-[0_4px_24px_-12px_rgba(28,25,23,0.12)]' : 'border-transparent'
			}`}>
			<nav aria-label='Primary' className='mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8'>
				<Link href='/' className='font-display text-lg font-bold tracking-tight text-ink'>
					imnaeem<span className='text-accent'>.dev</span>
				</Link>

				{/* Desktop nav */}
				<div className='hidden items-center gap-1 md:flex'>
					{navItems.map(({ label, href }) => (
						<Link
							key={href}
							href={href}
							aria-current={isActive(href) ? 'page' : undefined}
							className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
								isActive(href) ? 'text-ink' : 'text-ink-soft hover:text-ink'
							}`}>
							{label}
							{isActive(href) ? (
								<span className='absolute inset-x-3.5 -bottom-px h-0.5 rounded-full bg-accent' aria-hidden='true' />
							) : null}
						</Link>
					))}
				</div>

				<div className='hidden md:block'>
					<Link
						href='/contact'
						className='inline-flex items-center gap-1.5 rounded-xl bg-ink px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-stone-800'>
						Hire Me <FiArrowUpRight size={15} />
					</Link>
				</div>

				{/* Mobile toggle */}
				<button
					type='button'
					onClick={() => setMobileOpen((v) => !v)}
					aria-expanded={mobileOpen}
					aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
					className='cursor-pointer rounded-lg p-2 text-ink transition-colors hover:bg-stone-100 md:hidden'>
					{mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
				</button>
			</nav>

			{/* Mobile panel */}
			{mobileOpen ? (
				<div className='border-t border-line bg-white px-4 pb-5 pt-2 md:hidden'>
					{navItems.map(({ label, href }) => (
						<Link
							key={href}
							href={href}
							className={`block rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
								isActive(href) ? 'bg-accent-soft text-accent-dark' : 'text-ink-soft hover:bg-stone-100 hover:text-ink'
							}`}>
							{label}
						</Link>
					))}
					<Link
						href='/contact'
						className='mt-2 flex items-center justify-center gap-1.5 rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white'>
						Hire Me <FiArrowUpRight size={15} />
					</Link>
				</div>
			) : null}
		</header>
	);
}
