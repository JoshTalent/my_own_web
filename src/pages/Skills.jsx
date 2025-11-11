// src/pages/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Code, Database, Cloud, Cpu, Palette, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 92 }
      ],
      color: "blue"
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 93 },
        { name: "Python", level: 87 },
        { name: "Express.js", level: 91 },
        { name: "GraphQL", level: 85 },
        { name: "REST APIs", level: 94 }
      ],
      color: "green"
    },
    {
      icon: Database,
      title: "Database & Storage",
      skills: [
        { name: "PostgreSQL", level: 89 },
        { name: "MongoDB", level: 86 },
        { name: "Redis", level: 82 },
        { name: "Elasticsearch", level: 80 },
        { name: "Firebase", level: 84 }
      ],
      color: "purple"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 80 },
        { name: "CI/CD", level: 87 },
        { name: "Terraform", level: 78 }
      ],
      color: "orange"
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 95 },
        { name: "Linux", level: 88 },
        { name: "Webpack", level: 82 },
        { name: "Jest", level: 85 },
        { name: "Figma", level: 80 }
      ],
      color: "red"
    },
    {
      icon: Palette,
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 94 },
        { name: "Team Leadership", level: 88 },
        { name: "Communication", level: 92 },
        { name: "Project Management", level: 85 },
        { name: "Mentoring", level: 90 }
      ],
      color: "indigo"
    }
  ];

  const getColorClass = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600',
      indigo: 'from-indigo-500 to-indigo-600'
    };
    return colors[color] || colors.blue;
  };

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
              Technical
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Skills
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across various domains 
              of software development and engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${getColorClass(category.color)} rounded-xl`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-300 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.05 }}
                          className={`bg-gradient-to-r ${getColorClass(category.color)} h-2 rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Skills;