'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, FileText, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import Image from 'next/image';


const Education = () => {
	const educationData = [
		{
			school: "Siddaganga Institute of Technology, Tumkur",
			location: "Tumkur, KA, India",
			duration: "Sept 2023 - Present",
			degree: "Bachelor of Engineering (Information Science & Engineering)",
			grade: " 8.5 CGPA",
			image: "/education/college_img1.jpg",
			coursework: [
				"DSA",
				"OOPs",
				"DBMS",
				"AIML",				
				"OS",
				"CN",
				"Web Development"
			],
			description: "Currently at SIT, Tumkur, I am building a strong foundation in Information Science, focusing on software development, automation, and real-world applications. Engaging in hands-on projects, and coding challenges is helping me continuously enhance my technical and analytical skills. This ongoing experience is preparing me for a future in software development, equipping me with the ability to create scalable and efficient solutions."
		},
		{
			school: "Sacred Heart School ",
			location: "Sitamarhi, BR, India",
			duration: "March 2021 - March 2023",
			degree: "Higher Secondary (CBSE)",
			grade: "Percentage: 79%",
			image: "/education/school_img1.jpg",
			subjects: [
				"Physics",
				"Chemistry",
				"Mathematics"
			],
			description: "My higher secondary education laid the foundation for my technical journey, strengthening my analytical thinking and problem-solving abilities. The strong emphasis on Physics, Chemistry, and Mathematics has been instrumental in shaping my logical approach to software development, enabling me to break down complex technical challenges with precision and confidence."
		},
		{
			school: "Podar International School",
			location: "Sambhajinagar, MH, India",
			duration: "April 2019 - March 2021",
			degree: "Secondary School (ICSE)",
			grade: "Percentage: 90%",
			image: "/education/school_img2.jpg",
			subjects: [
				"Physics",
				"Chemistry",
				"Mathematics",
				"Biology",
				"Java",
				"Web Development"
			],
			description: "My secondary education at Podar International School under the ICSE curriculum laid the initial groundwork for my technical journey. It was here that I received my first formal introduction to Java programming and the basics of Web Development. This early exposure to coding logic and software creation was instrumental in igniting my genuine interest in the domain, setting the stage for my future endeavors in Software domain."
		}
	];

	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.div
					className="flex items-center gap-3 mb-12"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<GraduationCap className="w-8 h-8" />
					<h2 className="text-4xl font-bold gradient-text">Education</h2>
				</motion.div>
			</ScrollAnimation>

			<div className="space-y-12">
				{educationData.map((edu, index) => (
					<ScrollAnimation key={edu.school}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							className="relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all"
						>
							<div className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-bl-xl flex items-center gap-2">
								<Calendar className="w-4 h-4 text-gray-300" />
								<span className="text-gray-300">{edu.duration}</span>
							</div>

							<div className="grid md:grid-cols-[300px,1fr] gap-6">
								{/* Left Column - Image */}
								<div className="relative h-64 md:h-full">
									<Image
										src={edu.image}
										alt={edu.school}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 300px"
										priority
										quality={90}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
										<div className="p-6">
											<h3 className="text-xl font-bold mb-2">{edu.school}</h3>
											<div className="flex items-center gap-2 text-gray-300 mb-1">
												<MapPin className="w-4 h-4" />
												<span>{edu.location}</span>
											</div>
											<div className="flex items-center gap-2 text-gray-300">
												<Award className="w-4 h-4" />
												<span>{edu.grade}</span>
											</div>
										</div>
									</div>
								</div>

								{/* Right Column - Content */}
								<div className="p-6">
									<div className="flex items-center gap-2 mb-4">
										<BookOpen className="w-5 h-5 text-gray-400" />
										<h4 className="text-lg font-semibold">{edu.degree}</h4>
									</div>

									<div className="flex items-start gap-2 text-gray-300 mb-6">
										<FileText className="w-5 h-5 mt-1 flex-shrink-0" />
										<p className="text-sm leading-relaxed">{edu.description}</p>
									</div>

									{edu.coursework && (
										<div className="mb-6">
											<div className="flex flex-wrap gap-2">
												{edu.coursework.map((course) => (
													<span
														key={course}
														className="px-3 py-1 bg-white/10 rounded-full text-sm"
													>
														{course}
													</span>
												))}
											</div>
										</div>
									)}

									{edu.subjects && (
										<div className="mb-6">
											<div className="flex flex-wrap gap-2">
												{edu.subjects.map((subject) => (
													<span
														key={subject}
														className="px-3 py-1 bg-white/10 rounded-full text-sm"
													>
														{subject}
													</span>
												))}
											</div>
										</div>
									)}

									{/* <motion.a
										href={edu.resultUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-sm font-medium"
										whileHover={{ scale: 1.02 }}
									>
										View Result
										<ExternalLink className="w-4 h-4" />
									</motion.a> */}
								</div>
							</div>
						</motion.div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Education;