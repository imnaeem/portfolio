'use client';
import Link from 'next/link';

const links = [
	{ label: 'About', href: '/' },
	{ label: 'Experience', href: '/experience' },
	{ label: 'Work', href: '/portfolio' },
	{ label: 'Blog', href: '/blogs' },
	{ label: 'Contact', href: '/contact' },
];

const legal = [
	{ label: 'Terms', href: '/terms-conditions' },
	{ label: 'Privacy', href: '/privacy-policy' },
	{ label: 'Disclaimer', href: '/disclaimer' },
];

export const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-border bg-surface/50 backdrop-blur-md">
			<div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-10">
					<div className="md:col-span-5">
						<div className="flex items-center gap-3 mb-4">
							<div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-sm">
								MN
							</div>
							<span className="text-sm font-semibold text-text">Muhammad Naeem</span>
						</div>
						<p className="text-[13px] text-text-dim leading-relaxed max-w-xs">
							Full-stack JavaScript engineer building dependable React, Next.js, Node.js, and NestJS applications for product teams.
						</p>
						<div className="flex items-center gap-3 mt-5">
							<a href="https://github.com/imnaeem/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-border bg-surface-2 flex items-center justify-center text-text-muted hover:text-text hover:border-border-hover transition-all">
								<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
							</a>
							<a href="https://www.linkedin.com/in/im-naeem/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-border bg-surface-2 flex items-center justify-center text-text-muted hover:text-text hover:border-border-hover transition-all">
								<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
							</a>
							<a href="mailto:contact@imnaeem.dev" className="w-9 h-9 rounded-lg border border-border bg-surface-2 flex items-center justify-center text-text-muted hover:text-text hover:border-border-hover transition-all">
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
							</a>
						</div>
					</div>

					<div className="md:col-span-4">
						<h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">Navigation</h4>
						<nav className="flex flex-col gap-2.5">
							{links.map(({ label, href }) => (
								<Link key={href} href={href} className="text-[13px] text-text-dim hover:text-text transition-colors w-fit">
									{label}
								</Link>
							))}
						</nav>
					</div>

					<div className="md:col-span-3">
						<h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">Legal</h4>
						<nav className="flex flex-col gap-2.5">
							{legal.map(({ label, href }) => (
								<Link key={href} href={href} className="text-[13px] text-text-dim hover:text-text transition-colors w-fit">
									{label}
								</Link>
							))}
						</nav>
					</div>
				</div>

				<div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-[12px] text-text-dim">
						&copy; {year} <span className="text-text-muted font-medium">Muhammad Naeem</span>. All rights reserved.
					</p>
					<p className="text-[12px] text-text-dim">
						Lahore, Pakistan / Remote
					</p>
				</div>
			</div>
		</footer>
	);
};
