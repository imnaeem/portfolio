const info = [
	{ title: 'Phone', value: 'WhatsApp', link: '/whatsapp' },
	{ title: 'Email', value: 'contact@imnaeem.dev', link: 'mailto:contact@imnaeem.dev' },
	{ title: 'Location', value: 'Lahore, Pakistan' },
	{ title: 'LinkedIn', value: 'linkedin.com/in/im-naeem', link: 'https://www.linkedin.com/in/im-naeem/' },
	{ title: 'GitHub', value: 'github.com/imnaeem', link: 'https://github.com/imnaeem/' },
];

const PersonalInfo = () => {
	return (
		<div>
			<h3 className="text-xl font-bold text-text mb-5">Get In Touch</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
				{info.map((item) => (
					item.link ? (
						<a key={item.title} href={item.link} target={item.link.startsWith('http') || item.link.startsWith('/w') ? '_blank' : undefined} rel={item.link.startsWith('http') || item.link.startsWith('/w') ? 'noopener noreferrer' : undefined} className="p-4 rounded-xl border border-border bg-surface-2 hover:border-border-hover transition-all duration-200 group">
							<p className="text-[10px] font-semibold uppercase tracking-wider text-text-dim">{item.title}</p>
							<p className="mt-1 text-sm font-medium text-text-muted group-hover:text-text transition-colors truncate">{item.value}</p>
						</a>
					) : (
						<div key={item.title} className="p-4 rounded-xl border border-border bg-surface-2">
							<p className="text-[10px] font-semibold uppercase tracking-wider text-text-dim">{item.title}</p>
							<p className="mt-1 text-sm font-medium text-text-muted truncate">{item.value}</p>
						</div>
					)
				))}
			</div>
		</div>
	);
};

export default PersonalInfo;
