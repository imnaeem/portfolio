import About from '@/components/home/About';
import ContactCTA from '@/components/home/ContactCTA';
import ExperienceTeaser from '@/components/home/ExperienceTeaser';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';

export default function HomePage() {
	return (
		<>
			<Hero />
			<About />
			<Services />
			<FeaturedProjects />
			<ExperienceTeaser />
			<ContactCTA />
		</>
	);
}
