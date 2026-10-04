import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackToTopButton from '@/components/layout/BackToTopButton';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import RouteScrollTop from '@/components/layout/RouteScrollTop';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	variable: '--font-display',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Muhammad Naeem | Senior Full-Stack Engineer',
	description:
		'Senior Full-Stack Engineer building scalable web apps and backend systems with Next.js, NestJS, AWS, and AI-native workflows.',
	applicationName: 'Muhammad Naeem Portfolio',
	authors: [{ name: 'Muhammad Naeem', url: 'https://www.linkedin.com/in/im-naeem/' }],
	keywords: [
		'react js developer',
		'node js developer',
		'next js developer',
		'nest js developer',
		'graphql developer',
		'senior full-stack engineer',
		'ai engineer',
		'javascript developer',
		'typescript developer',
		'web developer',
		'portfolio',
		'muhammad naeem',
	],
	icons: ['/favicon.ico'],
	manifest: '/manifest.json',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} ${spaceGrotesk.variable} bg-canvas font-sans text-ink antialiased`}>
				<Navbar />
				<main className='mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8'>{children}</main>
				<Footer />
				<ToastContainer position='bottom-right' theme='light' />
				<RouteScrollTop />
				<BackToTopButton />
			</body>
			<GoogleAnalytics gaId='G-YXRFS4T2EH' />
		</html>
	);
}
