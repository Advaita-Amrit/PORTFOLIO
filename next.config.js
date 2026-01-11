const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === 'development'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	reactStrictMode: true,
	swcMinify: true,
	images: {
		unoptimized: true,
		domains: ['images.unsplash.com'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
		formats: ['image/webp', 'image/avif'],
	},
	// Headers removed because they are not supported in 'output: export'
	experimental: {
		scrollRestoration: true,
	},
};

module.exports = withPWA(nextConfig);
