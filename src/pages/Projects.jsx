// src/pages/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { rbf, olivier , vuduka , gsp , okello} from '../assets';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "RWANDA BOXING FEDERATION ",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      image: rbf ,
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      liveUrl: "https://rwandaboxing.netlify.app",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "OLIVIER COACH WEB",
      description: "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
      image: olivier ,
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      liveUrl: "https://olivierbox.netlify.app",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "VUDUKA ",
      description: "A responsive weather application with location-based forecasts, interactive maps, and historical data.",
      image:vuduka,
      technologies: ["React.j","Typescript", "Express.js", "Mongo DB", "Chart.js" , "Postgresql "],
      liveUrl: "https://vuduka.rw",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "GROUPE SCOLAIRE DES PARENTS",
      description: "Analytics platform for social media performance tracking with customizable dashboards and reports.",
      image: gsp ,
      technologies: ["React", "Python", "Django", "D3.js"],
      liveUrl: "https://gsphuye.com",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "OKELLO STUDIOS WEBSITE",
      description: "Analytics platform for social media performance tracking with customizable dashboards and reports.",
      image: okello ,
      technologies: ["React", "Python", "Django", "D3.js"],
      liveUrl: "https://okellostudios.netlify.app",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "GROUPE SCOLAIRE DES PARENTS",
      description: "Analytics platform for social media performance tracking with customizable dashboards and reports.",
      image: gsp ,
      technologies: ["React", "Python", "Django", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
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
              Featured
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of my recent work showcasing full-stack development, 
              problem-solving skills, and attention to detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in seeing more?
            </h3>
            <p className="text-gray-600 mb-6">
              Check out my GitHub profile for more projects and contributions.
            </p>
            <a
              href="https://github.com/josuentwali"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              View GitHub Profile
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}; 

export default Projects;