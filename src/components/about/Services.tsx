const services = [
	{ title: 'Product Frontends', description: 'Responsive React and Next.js interfaces for dashboards, SaaS tools, marketplaces, and workflow-heavy apps.' },
	{ title: 'Backend Systems', description: 'Node.js, NestJS, GraphQL, REST, MongoDB, and service integrations built for maintainability.' },
	{ title: 'Performance Work', description: 'API and UI improvements such as the GraphQL optimizations that delivered 30% faster responses.' },
	{ title: 'Architecture', description: 'Feature structure, RBAC, CI/CD, testing, data flows, and implementation plans teams can keep using.' },
	{ title: 'Quality Practices', description: 'Unit tests, end-to-end checks, PR reviews, and release routines that reduce last-minute surprises.' },
	{ title: 'Team Delivery', description: 'Developer mentoring, task breakdown, code reviews, and coordination across GitHub, Jira, and Agile teams.' },
];

const Services = () => {
	return (
		<div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{services.map((item) => (
					<div key={item.title} className="p-6 rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-border-hover glow-border">
						<h3 className="text-base font-bold text-text">{item.title}</h3>
						<p className="mt-2 text-[13px] text-text-muted leading-relaxed">{item.description}</p>
					</div>
				))}
			</div>
			<p className="mt-4 text-[13px] text-text-dim leading-relaxed">
				I keep the service list focused on engineering work recruiters and hiring teams can validate through projects, resume bullets, and technical interviews.
			</p>
		</div>
	);
};

export default Services;
