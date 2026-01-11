'use client';

import { motion } from 'framer-motion';
import { Code2, Wrench, Briefcase, GraduationCap, Award, Users, Globe } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';


const About = () => {
	const achievements = [
		{
			icon: <Wrench className="w-6 h-6" />,
			title: "10+ Projects",
			description: "Multi-Domain Project Experience"
		},
		{
			icon: <Code2 className="w-6 h-6" />,
			title: "200+ DSA Problems",
			description: "Practiced on LeetCode & GeeksforGeeks"
		},
		{
			icon: <GraduationCap className="w-6 h-6" />,
			title: "8.5 CGPA",
			description: "Core Fundamentals & Academics"
		}
	];

	const interests = [
		"Web Development",
		"Artificial Intelligence",
		"Mobile App Development",
		"Robotics",
		"UI/UX Design",
		"Blockchain Technology"
	];

	return (
		<div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.h2 className="text-4xl font-bold mb-8 gradient-text">
					About Me
				</motion.h2>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 gap-8">
				<ScrollAnimation className="space-y-6">
					<div className="aspect-square overflow-hidden rounded-2xl">
						<img
							src="/profile/profile.jpg"
							alt="Advaita Amrit"
							className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
						/>
					</div>

					<ScrollAnimation>
						<div className="pt-4">
							<h3 className="text-2xl font-semibold mb-4 gradient-text">Quick Facts</h3>
							<ul className="list-none space-y-3">
								{["Siddaganga Institute of Technology, Tumkur", "B.E. in Information Science & Engineering"].map((fact, index) => (
									<motion.li
										key={fact}
										className="flex items-center space-x-2 text-gray-300"
									>
										<span className="w-2 h-2 bg-white rounded-full" />
										<span>{fact}</span>
									</motion.li>
								))}
							</ul>
						</div>
					</ScrollAnimation>

					<ScrollAnimation>
						<div className="flex justify-start space-x-4">
							<a
								href="/files/cv_pdf/Advaita_Amrit_CV.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
							>
								Download CV
							</a>
							<a
								href="/skills"
								className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
							>
								My Skills
							</a>
						</div>
					</ScrollAnimation>
				</ScrollAnimation>

				<ScrollAnimation className="space-y-6">
					<div className="space-y-4">
						<p className="text-gray-300 leading-relaxed">
							I don’t just write code; I build ecosystems. My journey in tech took root at Siddaganga Institute of Technology, where my curiosity for robotics and code evolved into a dedication for creating impactful solutions.
							</p>
						<p className="text-gray-300 leading-relaxed">
							Currently pursuing my Bachelor of Engineering in Information Science, I’ve maintained a strong academic record while actively taking on leadership roles within student technical communities. This blend of theoretical foundations and practical management experience has shaped my holistic approach to software engineering, teaching me that the best solutions are built with both code and collaboration in mind.
							</p>
						<p className="text-gray-300 leading-relaxed">
							My primary focus lies in Full-Stack Development (React, Node.js) and Mobile technologies (Flutter), alongside a growing passion for Robotics and AI integration. My experience ranges from building voice-assisted intelligent bots to developing financial prediction tools, always aiming to create performant applications that solve real-world problems.
							</p>
					</div>
				</ScrollAnimation>
			</div>

			<ScrollAnimation>
				<div className="mt-16">
					<h3 className="text-2xl font-semibold mb-8 gradient-text">Achievements</h3>
					<div className="grid md:grid-cols-3 gap-6">
						{achievements.map((achievement, index) => (
							<ScrollAnimation key={achievement.title}>
								<div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
									<div className="text-white mb-4">{achievement.icon}</div>
									<h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
									<p className="text-gray-400">{achievement.description}</p>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation>
				<div className="mt-16">
					<h3 className="text-2xl font-semibold mb-8 gradient-text">Areas of Interest</h3>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						{interests.map((interest, index) => (
							<ScrollAnimation key={interest}>
								<div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3">
									<Globe className="w-5 h-5 text-gray-400" />
									<span className="text-gray-300">{interest}</span>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</ScrollAnimation>
		</div>
		
	);
};

export default About;