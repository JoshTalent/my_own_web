// src/pages/Experience.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, Users, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "GNA IntelleX",
      period: "2022 - Present",
      location: "Remote",
      description: "Leading full-stack development teams and architecting scalable solutions for enterprise clients. Driving technical excellence and mentoring junior developers.",
      achievements: [
        "Led development of a microservices architecture serving 10K+ users",
        "Reduced system latency by 40% through performance optimization",
        "Mentored 5 junior developers to senior level positions"
      ],
      technologies: ["React", "Node.js", "AWS", "Kubernetes", "MONGO DB"]
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      company: "VUDUKA",
      period: "2021 - Present",
      location: "San Francisco, CA",
      description: "Developed and maintained multiple web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Built 10+ production applications from concept to deployment",
        "Improved development workflow efficiency by 30%",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ],
      technologies: ["React", "TypeScript", "Express.js", "MongoDB", "Docker"]
    },
    {
      id: 3,
      title: "Software Developer",
      company: "GS DES PARENTS",
      period: "2019 - 2021",
      location: "Austin, TX",
      description: "Built MVP products and contributed to early-stage product development and architecture. Worked in agile environments to rapidly iterate on product features.",
      achievements: [
        "Developed 3 successful MVP products that secured funding",
        "Reduced initial load time by 50% through code optimization",
        "Implemented automated testing covering 90% of codebase"
      ],
      technologies: ["JavaScript", "Python", "React", "Firebase", "Git"]
    }
  ];

  const stats = [
    { icon: Briefcase, value: "6+", label: "Years Experience" },
    { icon: Users, value: "50+", label: "Projects Completed" },
    { icon: Award, value: "15+", label: "Technologies Mastered" },
    { icon: TrendingUp, value: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20">
        <Navbar className="pb-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-black mb-6">
              Professional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Experience
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A journey through my professional career, showcasing growth, achievements, 
              and the evolution of my technical expertise.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gray-300"></div>
                )}

                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-blue-200 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-blue-600 font-semibold mb-3">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-gray-600 mb-4 lg:mb-0">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3 text-gray-600">
                            <Award className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Evolution */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-4">
              Skills <span className="text-blue-400">Evolution</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How my technical expertise has grown and evolved throughout my career journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">Early Career</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• JavaScript Fundamentals</li>
                <li>• React & Frontend Basics</li>
                <li>• Python Programming</li>
                <li>• Git Version Control</li>
                <li>• Basic DevOps</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-xl font-bold text-purple-400 mb-4">Mid Career</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• TypeScript & Advanced React</li>
                <li>• Node.js & Backend Development</li>
                <li>• Database Design & Optimization</li>
                <li>• Docker & Containerization</li>
                <li>• API Design & Microservices</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-xl font-bold text-green-400 mb-4">Senior Level</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• System Architecture & Design</li>
                <li>• Cloud Infrastructure (AWS)</li>
                <li>• Kubernetes & Orchestration</li>
                <li>• Team Leadership & Mentoring</li>
                <li>• Performance Optimization</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Experience;