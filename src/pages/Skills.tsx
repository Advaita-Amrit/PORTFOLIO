'use client';

import { motion } from 'framer-motion';
import {
	Code2, Layout, Server, Database, MessageSquare, Lightbulb, Users, Brain,
	Cloud, Terminal, Wrench,
} from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import {
	CppLogo, PythonLogo, JavaScriptLogo, HTML5Logo,
	CSSLogo, ReactLogo, TypeScriptLogo, NodeLogo, MySQLLogo,
	MongoDBLogo, VSCodeLogo, GitLogo, TailwindLogo, ShadCNLogo, NextjsLogo,
	VirtualBoxLogo, VercelLogo, OracleLogo, AndroidStudioLogo, FigmaLogo, SupabaseLogo, FirebaseLogo,
	DartLogo
} from '@/components/TechLogos';

const skills = [
	{
		category: 'Programming Languages',
		icon: <Code2 className="w-6 h-6" />,
		items: [
			{ name: 'C++', icon: <CppLogo /> },
			{ name: 'Python', icon: <PythonLogo /> },
			{ name: 'TypeScript', icon: <TypeScriptLogo /> },			
			{ name: 'Dart', icon: <DartLogo /> }
		]
	},
	{
		category: 'Front-End Development',
		icon: <Layout className="w-6 h-6" />,
		items: [
			{ name: 'React.js', icon: <ReactLogo /> },
			{ name: 'CSS3', icon: <CSSLogo /> },
			{ name: 'Tailwind', icon: <TailwindLogo /> },
			{ name: 'ShadCN', icon: <ShadCNLogo /> }
		]
	},
	{
		category: 'Back-End Development',
		icon: <Server className="w-6 h-6" />,
		items: [
			{ name: 'Flask', icon: <PythonLogo /> },
			{ name: 'Node.js', icon: <NodeLogo /> },
			{ name: 'Next.js', icon: <NextjsLogo /> }
		]
	},
	{
		category: 'Databases & Cloud Storage',
		icon: <Database className="w-6 h-6" />,
		items: [
			{ name: 'Oracle DB', icon: <OracleLogo /> },
			{ name: 'Supabase', icon: <SupabaseLogo /> },
			{ name: 'Firebase', icon: <FirebaseLogo /> },
			{ name: 'Cloudinary', icon: <Cloud className="w-4 h-4" /> }
		]
	},
	{
		category: 'Version Control & DevOps',
		icon: <GitLogo />,
		items: [
			{ name: 'Git', icon: <GitLogo /> },
			{ name: 'GitHub', icon: <GitLogo /> },
			{ name: 'Vercel', icon: <VercelLogo /> }
		]
	},
	{
		category: 'Tools & Platforms',
		icon: <Wrench className="w-6 h-6" />,
		items: [
			{ name: 'VS Code', icon: <VSCodeLogo /> },
			{ name: 'AndroidStudio', icon: <AndroidStudioLogo /> },
			{ name: 'Figma', icon: <FigmaLogo /> }
		]
	},
	{
		category: 'Library',
		icon: <Terminal className="w-13 h-6" />,
		items: [
			{ name: 'OpenCV2', icon: <Terminal className="w-4 h-4" /> },
			{ name: 'NumPy', icon: <Terminal className="w-4 h-4" /> },
			{ name: 'Dlib', icon: <Terminal className="w-4 h-4" /> },
			{ name: 'Panda', icon: <Terminal className="w-4 h-4" /> }
		],
		span: true
	},
	{
		category: 'Soft Skills',
		icon: <Brain className="w-6 h-6" />,
		items: [
			{ name: 'Teamwork', icon: <Users className="w-4 h-4" /> },
			{ name: 'Troubleshooting', icon: <Wrench className="w-4 h-4" /> },
			{ name: 'Progressive', icon: <Lightbulb className="w-4 h-4" /> },
			{ name: 'Communication', icon: <MessageSquare className="w-4 h-4" /> }
		]
	}
];

const Skills = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
			</ScrollAnimation>

			<ScrollAnimation>
				<p className="text-gray-400 mb-12 max-w-2xl">
					A comprehensive overview of my technical expertise and tools I work with
				</p>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{skills.map((skillGroup, index) => (
					<ScrollAnimation key={skillGroup.category}>
						<div className={`bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5 ${skillGroup.span ? 'md:col-span-2 lg:col-span-2' : ''}`}>
							<div className="flex items-center space-x-3 mb-6">
								<div className="p-2 bg-white/10 rounded-lg">
									{skillGroup.icon}
								</div>
								<h3 className="text-lg font-semibold">{skillGroup.category}</h3>
							</div>
							<div className="grid grid-cols-2 gap-4">
								{skillGroup.items.map((skill, skillIndex) => (
									<div
										key={skill.name}
										className="bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
									>
										<div className="text-gray-400 group-hover:text-white transition-colors">
											{skill.icon}
										</div>
										<span className="text-gray-400 group-hover:text-white transition-colors text-sm">
											{skill.name}
										</span>
									</div>
								))}
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Skills;