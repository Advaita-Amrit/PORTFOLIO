'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';


const certificates = [
	{
		title: "Programming and Problem Solving using C++",
		issuer: "CodeChef",
		date: "27th January 2025",
		link: "./files/certificates_pdf/sit1si23is002-Learn Programming and Problem Solving using C++.pdf",
		description: "This is a technical course build a strong foundation in C++ and algorithmic logic. This certification validates that the learner has successfully completed all lessons and projects, demonstrating proficiency in programming concepts and problem-solving techniques.",
		skills: ["Data Structure and Algorithm", "C++", "Problem Solving"]
	},
	{
		title: "DBMS and SQL Programming",
		issuer: "CodeChef",
		date: "6th December 2025",
		link: "./files/certificates_pdf/sit1si23is002-DBMS and SQL Programming.pdf",
		description: "This Course focuses on the essential skills for managing and querying databases. The curriculum is structured around practical application, requiring learners to complete all assigned lessons and projects to ensure a strong grasp of the material.",
		skills: ["Database Management", "SQL"]
	},
	{
		title: "CCNA: Introduction to Networks",
		issuer: "Cisco Networking Academy",
		date: "13th December 2025",
		link: "./files/certificates_pdf/CCNA Introduction to Networks certificate.pdf",
		description: "This certification covers the architecture, structure, functions, components, and models of the Internet and other computer networks.",
		skills: ["Network Fundamentals", "Data Communication"]
	},
	{
		title: "Agile and Scrum Training",
		issuer: "HackerRank",
		date: "30th October 2025",
		link: "./files/certificates_pdf/Agile and Scrum Training.pdf",
		description: "The training provides a comprehensive overview of Agile principles and the Scrum framework, equipping learners with the knowledge to manage projects iteratively and incrementally.",
		skills: ["Agile Methodology", "Scrum Framework", "Project Management"]
	}
	
];

const Certificates = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.div
					className="flex items-center gap-3 mb-12"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<Award className="w-8 h-8" />
					<h2 className="text-4xl font-bold gradient-text">Certificates</h2>
				</motion.div>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 gap-6">
				{certificates.map((cert, index) => (
					<ScrollAnimation key={cert.title}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all group border border-white/5"
						>
							<h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
							<div className="text-gray-400 space-y-2">
								<div className="flex items-center justify-between">
									<span className="text-lg">{cert.issuer}</span>
									<div className="flex items-center gap-2">
										<Calendar className="w-4 h-4" />
										<span>{cert.date}</span>
									</div>
								</div>
								<p className="text-gray-300 line-clamp-2">{cert.description}</p>
								<div className="flex flex-wrap gap-2 mt-4">
									{cert.skills.map((skill) => (
										<span
											key={skill}
											className="px-2 py-1 text-sm bg-white/10 rounded-full"
										>
											{skill}
										</span>
									))}
								</div>
								<motion.a
									href={cert.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4 group-hover:translate-x-2 transition-transform"
									whileHover={{ scale: 1.05 }}
								>
									View Certificate
									<ExternalLink className="w-4 h-4" />
								</motion.a>
							</div>
						</motion.div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Certificates;