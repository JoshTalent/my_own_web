// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  Shield, 
  Users, 
  Target, 
  Award, 
  Clock,
  MapPin,
  Download,
  Mail,
  ExternalLink
} from 'lucide-react';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Professional specialties
  const specialties = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end application development with modern frameworks and best practices",
      technologies: ["React", "Node.js", "TypeScript", "Python"]
    },
    {
      icon: Database,
      title: "Database Architecture",
      description: "Designing scalable and efficient database systems for high-performance applications",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Building and deploying applications on cloud platforms with DevOps practices",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"]
    },
    {
      icon: Cpu,
      title: "System Architecture",
      description: "Creating robust, scalable system architectures for enterprise applications",
      technologies: ["Microservices", "API Design", "System Design", "Performance"]
    }
  ];

  // Technical skills with proficiency
  const technicalSkills = [
    { category: "Frontend", skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 }
    ]},
    { category: "Backend", skills: [
      { name: "Node.js", level: 93 },
      { name: "Python", level: 87 },
      { name: "Express.js", level: 91 },
      { name: "GraphQL", level: 85 }
    ]},
    { category: "Database", skills: [
      { name: "PostgreSQL", level: 89 },
      { name: "MongoDB", level: 86 },
      { name: "Redis", level: 82 },
      { name: "Elasticsearch", level: 80 }
    ]},
    { category: "DevOps", skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 80 },
      { name: "CI/CD", level: 87 }
    ]}
  ];

  // Professional milestones
  const milestones = [
    {
      year: "2023",
      title: "Senior Software Engineer",
      company: "Tech Innovators Inc.",
      description: "Leading full-stack development teams and architecting scalable solutions for enterprise clients."
    },
    {
      year: "2021",
      title: "Full-Stack Developer",
      company: "Digital Solutions LLC",
      description: "Developed and maintained multiple web applications using modern JavaScript frameworks."
    },
    {
      year: "2019",
      title: "Software Developer",
      company: "StartUp Ventures",
      description: "Built MVP products and contributed to early-stage product development and architecture."
    },
    {
      year: "2018",
      title: "Computer Science Degree",
      company: "University of Technology",
      description: "Graduated with honors, focusing on software engineering and distributed systems."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-black text-white py-20">
        <Navbar className="pb-20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Senior Software Engineer</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                About
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Josue Ntwali
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Passionate software engineer with 5+ years of experience crafting digital solutions 
                that solve real-world problems. Specializing in full-stack development, cloud architecture, 
                and creating scalable, maintainable systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
                <a
                  href="mailto:hello@josuentwali.com"
                  className="inline-flex items-center gap-3 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </a>
              </div>
            </motion.div>

            {/* Right Content - Profile */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-2xl">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-white text-2xl font-bold">JN</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-gray-900"></div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Josue Ntwali</h3>
                    <p className="text-gray-300">Senior Software Engineer</p>
                  </div>

                  <div className="grid grid-cols-3 gap-6 w-full">
                    <div className="text-center">
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-xs text-gray-400">PROJECTS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">5+</div>
                      <div className="text-xs text-gray-400">YEARS EXP</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-xs text-gray-400">SUCCESS</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Professional <span className="text-blue-600">Specialties</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expertise across the full software development lifecycle, from concept to deployment and beyond.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={specialty.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors duration-300">
                      <specialty.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {specialty.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {specialty.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {specialty.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">
                Technical <span className="text-blue-400">Expertise</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive skill set across modern technologies and development practices.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {technicalSkills.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  variants={itemVariants}
                  className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
                >
                  <h3 className="text-2xl font-bold mb-6 text-blue-400">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-200">{skill.name}</span>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Career <span className="text-blue-600">Journey</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                My professional path from foundational education to senior engineering roles.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-0.5 bg-gray-300"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    variants={itemVariants}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    {/* Year */}
                    <div className={`w-32 flex-shrink-0 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} text-right`}>
                      <span className="text-2xl font-black text-blue-600">{milestone.year}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ml-12 lg:ml-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-3">{milestone.company}</p>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Development Philosophy
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                "I believe in writing clean, maintainable code that not only solves today's problems 
                but also anticipates tomorrow's challenges. Great software is built through collaboration, 
                continuous learning, and a deep understanding of both technology and business needs."
              </p>
              <div className="flex justify-center gap-6 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Problem Solving Focus
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Team Collaboration
                </span>
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Quality First
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;