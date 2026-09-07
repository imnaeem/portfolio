'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
	{ label: 'About', href: '/' },
	{ label: 'Experience', href: '/experience' },
	{ label: 'Work', href: '/portfolio' },
	{ label: 'Writing', href: '/blogs' },
	{ label: 'Contact', href: '/contact' },
];

export const Navbar = () => {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 10);
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const isActive = (href: string) => {
		if (href === '/') return pathname === '/';
		return pathname.startsWith(href);
	};

	return (
		<>
			<header
				className={`sticky top-0 z-50 transition-all duration-300 ${
					scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
				}`}
			>
				<nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
					<Link href="/" className="flex items-center gap-3 group">
						<div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-sm tracking-tight transition-transform group-hover:scale-105">
							MN
						</div>
						<div className="hidden sm:block">
							<p className="text-sm font-semibold text-text leading-none">Muhammad Naeem</p>
							<p className="text-[11px] text-text-dim mt-0.5">Full stack engineer</p>
						</div>
					</Link>

					<div className="hidden md:flex items-center gap-1">
						{navItems.map(({ label, href }) => {
							const active = isActive(href);
							return (
								<Link
									key={href}
									href={href}
									className={`px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-200 ${
										active
											? 'bg-surface-2 text-text'
											: 'text-text-muted hover:text-text hover:bg-surface'
									}`}
								>
									{label}
								</Link>
							);
						})}
					</div>

					<div className="hidden md:block">
						<a
							href="/assets/muhammad-naeem-resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-[13px] font-semibold transition-all duration-200 hover:-translate-y-0.5"
						>
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
							Resume
						</a>
					</div>

					<button
						onClick={() => setMobileOpen(!mobileOpen)}
						className="md:hidden w-9 h-9 rounded-lg border border-border bg-surface flex items-center justify-center text-text"
						aria-label="Toggle menu"
					>
						{mobileOpen ? (
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
						) : (
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
						)}
					</button>
				</nav>
			</header>

			{mobileOpen && (
				<div className="fixed inset-0 z-40 md:hidden">
					<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
					<div className="absolute right-0 top-0 bottom-0 w-72 bg-surface border-l border-border p-6 flex flex-col animate-slide-in-right">
						<div className="flex items-center justify-between mb-8">
							<span className="text-sm font-semibold text-text">Menu</span>
							<button onClick={() => setMobileOpen(false)} className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-text">
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
							</button>
						</div>
						<nav className="flex flex-col gap-1">
							{navItems.map(({ label, href }) => {
								const active = isActive(href);
								return (
									<Link
										key={href}
										href={href}
										onClick={() => setMobileOpen(false)}
										className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
											active ? 'bg-surface-2 text-text' : 'text-text-muted hover:text-text hover:bg-surface-2'
										}`}
									>
										{label}
									</Link>
								);
							})}
						</nav>
						<div className="mt-auto">
							<a
								href="/assets/muhammad-naeem-resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-accent text-white text-sm font-semibold"
							>
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
								Open Resume
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
