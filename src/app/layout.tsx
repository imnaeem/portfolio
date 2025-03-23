import type { Metadata } from 'next';
import { Geist, Roboto } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/footer/Footer';
import { Navbar } from '@/components/navbar';
import { ToastContainer } from 'react-toastify';
import ThemeRegistry from './ThemeRegistry';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'], // Specify the font weights you need
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
			<body className={`${roboto.variable} ${geistSans.variable} antialiased`}>
				<div
					className='min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full bg-gradient-to-r from-[#d2e4fc] to-[#f7f7f7]'
					style={{ backgroundImage: "url('/bg.jpg')" }}>
					<Navbar />
					<div
						className='container lg:rounded-2xl bg-white px-4 sm:px-5 md:px-10 lg:px-20 mx-auto py-8 shadow-sm'
						style={{ maxWidth: '1332px' }}>
						<ThemeRegistry>{children}</ThemeRegistry>
						<Footer />
					</div>
				</div>
				<ToastContainer />
			</body>
		</html>
	);
}
