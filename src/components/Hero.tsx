"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="pt-28 pb-16 md:py-36">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm md:text-lg font-medium text-text-link mb-2"
            >
              Hello, I'm
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold text-text-heading mb-4"
            >
              Marwan Musa
            </motion.h1>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl md:text-2xl font-medium text-text-secondary mb-6"
            >
              Data Scientist | AI Engineer | Software Engineer
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-base md:text-lg text-text-tertiary mb-8 max-w-2xl"
            >
              Building intelligent solutions through code. Passionate about AI, data analysis,
              and software engineering with expertise in Python, C++, and TypeScript.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="#projects" 
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-light transition-colors"
              >
                View Projects
              </Link>
              <Link 
                href="#contact" 
                className="bg-transparent border border-card-border px-6 py-3 rounded-lg font-medium text-text-secondary hover:text-text-link hover:bg-card-bg transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              {/* Replace with your own image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-4xl">
                MM
              </div>
              {/* Uncomment and add your own image
              <Image 
                src="/profile.jpg" 
                alt="Marwan Musa" 
                fill 
                className="object-cover"
              />
              */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 