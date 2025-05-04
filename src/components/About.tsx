"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 bg-background dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-text-heading mb-4">My Background</h3>
            <p className="text-text-secondary mb-4">
              I'm a passionate software engineer with a strong background in data science and AI. 
              With expertise in Python, C++, and JavaScript/TypeScript, I've developed a variety 
              of applications, from machine learning models to full-stack web applications.
            </p>
            <p className="text-text-secondary mb-4">
              My journey began with a deep interest in algorithms and data structures, which led 
              me to explore the world of AI and machine learning. Throughout my career, I've had 
              the opportunity to work on diverse projects, each presenting unique challenges that 
              have enriched my skill set.
            </p>
            <p className="text-text-secondary">
              I'm constantly learning and exploring new technologies to stay at the forefront of 
              the rapidly evolving tech landscape. I believe in writing clean, maintainable code 
              and building robust, scalable systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="bg-card-bg dark:bg-gray-800 p-6 rounded-lg shadow-md border border-card-border dark:border-gray-700">
              <h4 className="text-lg font-semibold text-text-heading mb-2">Education</h4>
              <p className="text-text-secondary">
                Bachelor's/Master's Degree in Computer Science
              </p>
            </div>
            
            <div className="bg-card-bg dark:bg-gray-800 p-6 rounded-lg shadow-md border border-card-border dark:border-gray-700">
              <h4 className="text-lg font-semibold text-text-heading mb-2">Current Focus</h4>
              <p className="text-text-secondary">
                I'm currently focused on AI applications, system design, and building 
                efficient software solutions that solve real-world problems.
              </p>
            </div>
            
            <div className="bg-card-bg dark:bg-gray-800 p-6 rounded-lg shadow-md border border-card-border dark:border-gray-700">
              <h4 className="text-lg font-semibold text-text-heading mb-2">Hobbies</h4>
              <p className="text-text-secondary">
                When I'm not coding, I enjoy solving competitive programming challenges,
                contributing to open-source projects, and staying updated with the latest 
                tech trends.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 