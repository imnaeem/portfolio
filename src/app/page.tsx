'use client';
import { projectsList } from '@/app/api/projects/data';
import Image from 'next/image';
import Link from 'next/link';

const snapshot = [
	{ label: 'Experience', value: '4+ years' },
	{ label: 'Primary stack', value: 'React / Next / Node' },
	{ label: 'Performance win', value: '30% faster APIs' },
	{ label: 'Leadership', value: 'Led 3 developers' },
];

const proofPoints = [
	'Built production dashboards, inspection tools, e-commerce systems, Slack apps, and AI products.',
	'Comfortable across frontend architecture, NestJS APIs, GraphQL, MongoDB, CI/CD, RBAC, and AWS workflows.',
	'Strong fit for product teams that need reliable delivery, clean UI systems, and maintainable full-stack code.',
];

const services = [
	{
		title: 'Product Frontends',
		description: 'Responsive React and Next.js interfaces for dashboards, SaaS tools, marketplaces, and workflow-heavy apps.',
		icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
		),
	},
	{
		title: 'Backend Systems',
		description: 'Node.js, NestJS, GraphQL, REST, MongoDB, and service integrations built for maintainability.',
		icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/></svg>
		),
	},
	{
		title: 'Performance Work',
		description: 'API and UI improvements such as the GraphQL optimizations that delivered 30% faster responses.',
		icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
		),
	},
	{
		title: 'Architecture',
		description: 'Feature structure, RBAC, CI/CD, testing, data flows, and implementation plans teams can keep using.',
		icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6m11-7h-6m-6 0H1m16.36-5.64l-4.24 4.24M10.88 13.12l-4.24 4.24m0-10.72l4.24 4.24m2.24 2.24l4.24 4.24"/></svg>
		),
	},
	{
		title: 'Quality Practices',
		description: 'Unit tests, end-to-end checks, PR reviews, and release routines that reduce last-minute surprises.',
		icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
		),
	},
	{
		title: 'Team Delivery',
		description: 'Developer mentoring, task breakdown, code reviews, and coordination across GitHub, Jira, and Agile teams.',
		icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
		),
	},
];

const featuredProjects = projectsList.filter((project) => project.featured).slice(0, 3);

const Home = () => {
	return (
		<div className="flex flex-col gap-24 sm:gap-32">
			<section className="min-h-[calc(100vh-8rem)] flex items-center">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full py-12">
					<div className="lg:col-span-7 flex flex-col justify-center">
						<div className="animate-fade-up">
							<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-[11px] font-semibold text-text-muted mb-6">
								<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
								Available for full-stack roles
							</div>
						</div>

						<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text leading-[1.08] tracking-tight max-w-2xl animate-fade-up delay-100">
							Full-stack JavaScript engineer for product teams.
						</h1>

						<p className="mt-5 text-base sm:text-lg text-text-muted leading-relaxed max-w-xl animate-fade-up delay-200">
							I build dependable React, Next.js, Node.js, and NestJS applications with a bias for clean interfaces,
							performant APIs, and teams that can maintain what ships.
						</p>

						<div className="mt-8 flex flex-wrap gap-3 animate-fade-up delay-300">
							<a
								href="/assets/muhammad-naeem-resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
							>
								<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
								Open Resume
							</a>
							<Link
								href="/portfolio"
								className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-surface hover:border-border-hover hover:bg-surface-2 text-text text-sm font-semibold transition-all duration-200"
							>
								Review Work
								<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
							</Link>
							<a
								href="https://www.linkedin.com/in/im-naeem/"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-text-muted hover:text-text hover:bg-surface text-sm font-semibold transition-all duration-200"
							>
								<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
								LinkedIn
							</a>
						</div>

						<div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-up delay-400">
							{snapshot.map((item) => (
								<div key={item.label} className="p-4 rounded-xl border border-border bg-surface glow-border">
									<p className="text-[10px] font-semibold uppercase tracking-wider text-text-dim">{item.label}</p>
									<p className="mt-1.5 text-base sm:text-lg font-bold text-text">{item.value}</p>
								</div>
							))}
						</div>
					</div>

					<div className="lg:col-span-5 flex items-center justify-center animate-fade-up delay-300">
						<div className="relative w-full max-w-sm">
							<div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-purple-500/10 blur-2xl" />
							<div className="relative rounded-2xl border border-border bg-surface p-5">
								<div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-2 border border-border">
									<Image
										src="/profile-image.jpg"
										alt="Muhammad Naeem - Full Stack Developer"
										fill
										priority
										sizes="(max-width: 900px) 100vw, 360px"
										style={{ objectFit: 'cover' }}
									/>
								</div>
								<div className="mt-5 space-y-3">
									{proofPoints.map((point) => (
										<div key={point} className="flex gap-3 items-start">
											<span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
											<p className="text-[13px] text-text-muted leading-relaxed">{point}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="mb-8">
					<div className="flex items-center gap-3 mb-3">
						<div className="w-7 h-[2px] bg-accent rounded-full" />
						<h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">Selected Work</h2>
					</div>
					<p className="text-sm sm:text-base text-text-muted max-w-2xl leading-relaxed">
						A few projects that show product breadth, engineering depth, and production-facing UI decisions.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
					{featuredProjects.map((project) => (
						<Link
							key={project.key}
							href={`/portfolio/${project.key}`}
							className="group block h-full rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-border-hover hover:-translate-y-1 glow-border"
						>
							<div className="relative h-48 bg-surface-2 overflow-hidden">
								<Image
									src={project.thumbnail}
									alt={project.title}
									fill
									sizes="(max-width: 900px) 100vw, 33vw"
									style={{ objectFit: 'cover' }}
									className="transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
							<div className="p-6">
								<span className="inline-block px-2.5 py-1 rounded-md bg-surface-2 border border-border text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-3">
									{project.type === 'professional' ? 'Client / Professional' : 'Personal Product'}
								</span>
								<h3 className="text-lg font-bold text-text group-hover:text-accent transition-colors">{project.title}</h3>
								<p className="mt-2 text-[13px] text-text-muted leading-relaxed line-clamp-2">{project.metadata.description}</p>
							</div>
						</Link>
					))}
				</div>
			</section>

			<section>
				<div className="mb-8">
					<div className="flex items-center gap-3 mb-3">
						<div className="w-7 h-[2px] bg-accent rounded-full" />
						<h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">How I Help Teams</h2>
					</div>
					<p className="text-sm sm:text-base text-text-muted max-w-2xl leading-relaxed">
						Practical strengths that matter after the first interview: delivery, reliability, and maintainable systems.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{services.map((service) => (
						<div
							key={service.title}
							className="group p-6 rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-border-hover glow-border"
						>
							<div className="w-10 h-10 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-text-muted group-hover:text-accent group-hover:border-accent/30 transition-all duration-300">
								{service.icon}
							</div>
							<h3 className="mt-4 text-base font-bold text-text">{service.title}</h3>
							<p className="mt-2 text-[13px] text-text-muted leading-relaxed">{service.description}</p>
						</div>
					))}
				</div>
			</section>

			<section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
				<div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-accent to-indigo-600 text-white relative overflow-hidden">
					<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
					<div className="relative">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 mb-5"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/></svg>
						<h2 className="text-2xl sm:text-3xl font-bold leading-tight">
							Looking for a full-stack engineer who can own features end to end?
						</h2>
						<p className="mt-4 text-sm text-white/70 leading-relaxed max-w-md">
							I can help with modern app development, API design, dashboards, integrations, and UI systems that stay
							usable as the product grows.
						</p>
						<Link
							href="/contact"
							className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-white text-accent font-semibold text-sm hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5"
						>
							Contact Me
							<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
						</Link>
					</div>
				</div>

				<div className="p-8 sm:p-10 rounded-2xl border border-border bg-surface">
					<h3 className="text-xl font-bold text-text mb-6">Get In Touch</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
						{[
							{ label: 'Email', value: 'contact@imnaeem.dev', href: 'mailto:contact@imnaeem.dev' },
							{ label: 'WhatsApp', value: 'Message me', href: '/whatsapp' },
							{ label: 'LinkedIn', value: 'linkedin.com/in/im-naeem', href: 'https://www.linkedin.com/in/im-naeem/' },
							{ label: 'GitHub', value: 'github.com/imnaeem', href: 'https://github.com/imnaeem/' },
						].map((item) => (
							<a
								key={item.label}
								href={item.href}
								target={item.href.startsWith('http') || item.href.startsWith('/w') ? '_blank' : undefined}
								rel={item.href.startsWith('http') || item.href.startsWith('/w') ? 'noopener noreferrer' : undefined}
								className="group p-4 rounded-xl border border-border bg-surface-2 hover:border-border-hover transition-all duration-200"
							>
								<p className="text-[10px] font-semibold uppercase tracking-wider text-text-dim">{item.label}</p>
								<p className="mt-1 text-sm font-medium text-text-muted group-hover:text-text transition-colors truncate">{item.value}</p>
							</a>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
