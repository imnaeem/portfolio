import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from '../components/scroll/ScrollToTop';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = localFont({
	src: [
		{ path: '../../public/fonts/roboto-latin-300-normal.woff2', weight: '300', style: 'normal' },
		{ path: '../../public/fonts/roboto-latin-400-normal.woff2', weight: '400', style: 'normal' },
		{ path: '../../public/fonts/roboto-latin-500-normal.woff2', weight: '500', style: 'normal' },
		{ path: '../../public/fonts/roboto-latin-700-normal.woff2', weight: '700', style: 'normal' },
	],
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: 'Muhammad Naeem | Full Stack JavaScript Developer',
	description: 'Full Stack JavaScript Developer skilled in React, Next.js, Node.js, and GraphQL, building scalable and high-performance web apps.',
	applicationName: 'Muhammad Naeem Portfolio',
	authors: [{ name: 'Muhammad Naeem', url: 'https://www.linkedin.com/in/im-naeem/' }],
	keywords: ['react js developer', 'node js developer', 'next js developer', 'nest js developer', 'graphql developer', 'full stack developer', 'javascript developer', 'typescript developer', 'web developer', 'portfolio', 'muhammad naeem'],
	icons: ['/favicon.ico'],
	manifest: '/manifest.json',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} antialiased`}>
				<div className="noise" />
				<div className="min-h-screen flex flex-col bg-bg">
					<Navbar />
					<main className="flex-1 w-full max-w-6xl mx-auto px-5 sm:px-8 py-8">
						{children}
					</main>
					<Footer />
				</div>
				<ToastContainer theme="dark" />
				<ScrollToTop />
			</body>
			<GoogleAnalytics gaId="G-YXRFS4T2EH" />
		</html>
	);
}
