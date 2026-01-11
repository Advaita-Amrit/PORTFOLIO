import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Background3D from '@/components/Background3D';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

export const metadata: Metadata = {
	title: 'Advaita Amrit - Software Developer',
	description: 'Advaita Amrit - Full Stack Developer specializing in MERN stack, React.js, Node.js, and modern web technologies. Expert in database development and web applications.',
	keywords: 'Advaita Amrit, advaita1, advaita1, Software Developer, Full Stack Developer, MERN Stack, Web Developer, React Developer, Next.js Expert, Database Developer, Frontend Specialist, Backend Developer, JavaScript Expert, TypeScript Developer, Node.js Developer, MongoDB Expert, SQL Developer',
	authors: [{ name: 'Advaita Amrit' }],
	creator: 'Advaita Amrit',
	manifest: '/manifest.json',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://advaita1.vercel.app/',
		title: 'Advaita Amrit - Full Stack Developer',
		description: 'Full-stack developer specializing in MERN stack, React.js, Node.js, and modern web technologies.',
		siteName: 'Advaita Amrit Portfolio',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Advaita Amrit - Full Stack Developer',
		description: 'Full-stack developer specializing in MERN stack, React.js, Node.js, and modern web technologies.',
		creator: '@advaita_dev',
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
		},
	},
	metadataBase: new URL('https://advaita1.vercel.app'),
	alternates: {
		canonical: '/',
	},
	verification: {
		google: '/googlea4a36904e14398c1.html',
	},
};

export function generateViewport() {
	return {
		viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
		themeColor: '#000000',
	};
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<head>
				<link rel="shortcut icon" href="/nextjs.png" type="image/x-icon" />
				<link rel="apple-touch-icon" href="/nextjs.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta httpEquiv="Content-Security-Policy" content="default-src 'self' data: blob: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https: http:; font-src 'self' data: https:; connect-src 'self' data: blob: https:; worker-src 'self' blob: data:;" />
			</head>
			<body>
				<script dangerouslySetInnerHTML={{__html: `try{const s=localStorage.getItem('username');if(s&&s.toLowerCase()==='advaita'){localStorage.setItem('username','Advaita Amrit');}}catch(e){}`}} />
				<div className="min-h-screen flex flex-col">
					<Background3D />
					<Navbar />
					<main className="flex-grow">{children}</main>
					<SpeedInsights />
					<Footer />
				</div>
				<Analytics />
			</body>
		</html>
	);
}