'use client';
import { Education } from '@/components/experience/Education';
import ProfessionalExperiences from '@/components/experience/ProfessionalExperiences';
import { Resume } from '@/components/experience/Resume';
import { Skills } from '@/components/experience/Skills';

const technologies = [
	'ReactJs', 'NextJs', 'VueJs', 'Redux', 'React Query', 'Git', 'Github',
	'NodeJs', 'NestJs', 'Apollo GraphQL', 'Kafka', 'Github Actions', 'CI/CD',
	'Typescript', 'MongoDB', 'SQL', 'AWS Services', 'Vercel', 'Docker',
];

const Experience = () => {
	return (
		<div className="flex flex-col gap-16 py-8">
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
				<div>
					<div className="flex items-center gap-3 mb-3">
						<div className="w-7 h-[2px] bg-accent rounded-full" />
						<h1 className="text-3xl sm:text-4xl font-bold text-text tracking-tight">Experience</h1>
					</div>
					<p className="text-sm text-text-muted max-w-lg leading-relaxed">
						My professional journey and technical expertise building production systems.
					</p>
				</div>
				<Resume />
			</div>

			<section>
				<h2 className="text-xl font-bold text-text mb-6 flex items-center gap-3">
					<span className="w-1.5 h-6 bg-accent rounded-full" />
					Work History
				</h2>
				<ProfessionalExperiences />
			</section>

			<section>
				<h2 className="text-xl font-bold text-text mb-6 flex items-center gap-3">
					<span className="w-1.5 h-6 bg-accent rounded-full" />
					Technical Skills
				</h2>
				<Skills skills={technologies} />
			</section>

			<Education />
		</div>
	);
};

export default Experience;
