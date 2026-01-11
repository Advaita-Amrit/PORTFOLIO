'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';


const projects = [
	{
		title: 'ISL-Audio Conversation',
		description: 'Audio-to-Indian-Sign-Lang is a bidirectional communication system designed to bridge the gap between the hearing/speech-impaired community and the general public.',
		image: '/projects_img/project-1a.png',
		github: 'https://github.com/Advaita-Amrit/Audio-to-Indian-Sign-Lang',
		tags: ["Python", "OpenCV", "Pillow", "NumPy", "Matplotlib"]
	},
	{
		title: 'Invisble Watermarking on NFTs using Blockchain',
		description: 'NFT Copyright is a desktop application designed to protect digital assets specifically images intended as NFTs by embedding invisible or visible watermarks.',
		image: '/projects_img/project-2a.png',
		github: 'https://github.com/Advaita-Amrit/nft_copyright_mini_proj',
		tags: ["Python", "Pillow", "Web3", "Solidity", "SHA-256"]
	},
];

const Projects = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-12 gradient-text">Featured Projects</h2>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<ScrollAnimation key={project.title}>
						<div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm">
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map(tag => (
										<span key={tag} className="px-2 py-1 text-sm bg-purple-500/20 rounded">
											{tag}
										</span>
									))}
								</div>
								<div className="flex space-x-4">
									<a href={project.github} target="_blank" rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
										<Github className="w-4 h-4" />
										<span>Code</span>
									</a>							
								</div>
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Projects;