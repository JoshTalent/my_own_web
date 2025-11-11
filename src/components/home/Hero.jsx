// src/sections/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Cpu, Database, Cloud, ArrowRight, Award, Users, Target, Clock, MapPin, Play } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const backgroundSlides = [
    {
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Full-Stack Development",
      subtitle: "Scalable solutions from concept to deployment"
    },
    {
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      title: "Cloud Architecture",
      subtitle: "Enterprise-grade infrastructure & DevOps"
    },
    {
      image: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Innovative Solutions",
      subtitle: "Cutting-edge technology implementation"
    }
  ];

  const features = [
    { icon: Code, text: "Clean Code Architecture", color: "text-blue-400" },
    { icon: Database, text: "Scalable Systems", color: "text-green-400" },
    { icon: Cloud, text: "Cloud Native", color: "text-purple-400" },
    { icon: Cpu, text: "High Performance", color: "text-red-400" }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundSlides.length]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-20">
      {/* Animated Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundSlides[currentSlide].image})` }}
          >
            {/* Dark overlay with very low opacity */}
            <div className="absolute inset-0 bg-black/70" />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            
            {/* Left Content - Minimal & Clean */}
            <div className="space-y-8">
              {/* Location Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
              >
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  Available Worldwide • Remote
                </span>
              </motion.div>

              {/* Main Title */}
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none"
                >
                  JOSUE
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                    NTWALI
                  </span>
                  <span className="block text-2xl lg:text-3xl font-light text-gray-300 mt-4">
                    Senior Software Engineer
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl text-gray-300 leading-relaxed max-w-2xl font-light"
                >
                  Crafting digital excellence through innovative code and scalable architecture. 
                  Transforming complex challenges into elegant, high-performance solutions.
                </motion.p>
              </div>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-4 max-w-md"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    <span className="text-white text-sm font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <button
                  onClick={scrollToProjects}
                  className="group relative px-8 py-4 text-lg font-bold bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-2xl"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="group px-8 py-4 text-lg font-bold rounded-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm"
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </motion.div>
            </div>

            {/* Right Content - Advanced Layout */}
            <div className="relative">
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: 10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-2xl transform perspective-1000"
              >
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl" />
                
                <div className="relative space-y-6">
                  {/* Current Slide Info */}
                  <div className="text-center space-y-2">
                    <motion.h3
                      key={`title-${currentSlide}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-2xl font-bold text-white"
                    >
                      {backgroundSlides[currentSlide].title}
                    </motion.h3>
                    <motion.p
                      key={`subtitle-${currentSlide}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-gray-300"
                    >
                      {backgroundSlides[currentSlide].subtitle}
                    </motion.p>
                  </div>

                  {/* Progress Indicator */}
                  <div className="flex justify-center gap-2">
                    {backgroundSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${
                          currentSlide === index
                            ? "bg-white w-8"
                            : "bg-white/30 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">50+</div>
                      <div className="text-xs text-gray-400">PROJECTS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">5+</div>
                      <div className="text-xs text-gray-400">YEARS EXP</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-xs text-gray-400">SUCCESS</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Code className="w-3 h-3 text-white" />
                </motion.div>
              </motion.div>

              {/* Background Decorative Elements */}
              <div className="absolute -z-10 top-1/2 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -z-10 bottom-8 -left-8 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-lg border-t border-white/10"
      >
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Senior Level Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span>Team Leadership</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>Full-Stack Development</span>
              <span>•</span>
              <span>Cloud Architecture</span>
              <span>•</span>
              <span>System Design</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-black rounded-2xl overflow-hidden max-w-4xl w-full border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-white text-center">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Project Demo Reel</p>
                  <p className="text-sm text-gray-400 mt-2">Showcasing Technical Expertise & Solutions</p>
                </div>
              </div>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors border border-white/20"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;