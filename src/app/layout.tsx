import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Footer } from '@/components/footer/Footer';
import { Navbar } from '@/components/navbar';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from '../components/scroll/ScrollToTop';
import ScrollToTopArrow from '../components/scroll/ScrollToTopArrow';
import ThemeRegistry from './ThemeRegistry';
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = localFont({
	src: [
		{
			path: '../../public/fonts/roboto-latin-300-normal.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../public/fonts/roboto-latin-400-normal.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/roboto-latin-500-normal.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/fonts/roboto-latin-700-normal.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-roboto',
});

export const metadata: Metadata = {
	title: 'Muhammad Naeem | Full Stack Javascript Developer',
	description:
		'Full Stack JavaScript Developer skilled in React, Next.js, Node.js, and GraphQL, building scalable and high-performance web apps.',
	applicationName: 'Muhammad Naeem Portfolio',
	authors: [{ name: 'Muhammad Naeem', url: 'https://www.linkedin.com/in/im-naeem/' }],
	keywords: [
		'react js developer',
		'node js developer',
		'next js developer',
		'nest js developer',
		'graphql developer',
		'full stack developer',
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
			<body className={`${inter.variable} antialiased`}>
				<div className='min-h-screen' style={{
					position: 'relative',
					background: 'linear-gradient(135deg, rgba(248, 250, 252, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(248, 250, 252, 1) 100%)',
				}}>
					{/* Background gradients */}
					<div style={{
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						overflow: 'hidden',
						zIndex: 0,
						pointerEvents: 'none',
					}}>
						{/* Diagonal gradient */}
						<div style={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.02) 0%, transparent 50%)',
						}} />
						
						{/* Straight gradient from other side */}
						<div style={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							background: 'linear-gradient(225deg, rgba(20, 184, 166, 0.02) 0%, transparent 50%)',
						}} />
					</div>

					<div style={{ position: 'relative', zIndex: 1 }}>
						<Navbar />
						<main className='container mx-auto px-4 sm:px-6 lg:px-8 py-8' style={{ maxWidth: '1200px' }}>
							<ThemeRegistry>{children}</ThemeRegistry>
						</main>
						<Footer />
					</div>
				</div>
				<ToastContainer />
				<ScrollToTop />
				<ScrollToTopArrow />
			</body>
			<GoogleAnalytics gaId="G-YXRFS4T2EH" />
		</html>
	);
}
