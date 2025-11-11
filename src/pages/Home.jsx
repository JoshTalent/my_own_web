"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import About from "./About";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </>
  );
};

export default Home;
