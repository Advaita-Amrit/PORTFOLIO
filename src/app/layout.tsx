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
	description: 'Information Science Student @ SIT, Tumkur. Builder of web apps, robots, and community events. Passionate about Full-Stack Engineering, Artificial Intelligence, Blockchain, and open-source innovation.',
	keywords: 'Advaita Amrit, advaita, advaitaamrit, Software Developer, Full Stack Developer, Android Developer, Web Developer, React Developer, Next.js Expert, Database Developer, Frontend Specialist, Backend Developer, JavaScript Expert, TypeScript Developer, Node.js Developer, Oracle Expert, SQL Developer, Flutter Developer, MERN Stack Developer, Open Source Contributor, Tech Enthusiast, Portfolio, Advaita Portfolio',
	authors: [{ name: 'Advaita Amrit' }],
	creator: 'Advaita Amrit',
	manifest: '/manifest.json',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://advaitaamrit.tech/',
		title: 'Advaita Amrit - Full Stack Developer',
		description: 'Student. Developer. Builder. Currently studying Information Science at SIT, Tumkur. Passionate about turning complex logic into clean, efficient code for the web and robotics.',
		siteName: 'Advaita Amrit - Engineer',
		images: [
            {
                url: '/opengraph-image.png', // Ensure this file is in your 'public' folder
                width: 1200,
                height: 630,
                alt: 'Advaita Amrit Portfolio Preview',
            },
        ],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Advaita Amrit - Full Stack Developer',
		description: 'Student. Developer. Builder. Currently studying Information Science at SIT, Tumkur. Passionate about turning complex logic into clean, efficient code for the web and robotics.',
		creator: '@amrit_advaita',
		images: ['/opengraph-image.png'],
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
	metadataBase: new URL('https://advaitaamrit.tech'),
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
				<link rel="shortcut icon" href="/logoW.png" type="image/x-icon" />
				<link rel="apple-touch-icon" href="/logoW.png" />
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