"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Leading development of AI-powered applications, optimizing algorithms for improved performance, and mentoring junior developers on best practices.",
    skills: ["Python", "TensorFlow", "System Design", "Team Leadership"]
  },
  {
    title: "Machine Learning Engineer",
    company: "Data Insights Corp.",
    period: "2020 - 2022",
    description: "Developed and deployed machine learning models for predictive analytics, implemented data pipelines, and collaborated with cross-functional teams to deliver insights.",
    skills: ["Python", "ML Algorithms", "Data Engineering", "AWS"]
  },
  {
    title: "Software Developer",
    company: "WebTech Innovations",
    period: "2018 - 2020",
    description: "Built responsive web applications, implemented RESTful APIs, and contributed to the development of microservices architecture.",
    skills: ["JavaScript", "Node.js", "React", "Microservices"]
  },
  {
    title: "Data Analyst Intern",
    company: "Analytics Solutions",
    period: "2017 - 2018",
    description: "Analyzed large datasets to extract meaningful insights, created data visualizations, and automated reporting processes.",
    skills: ["SQL", "Data Analysis", "Python", "Tableau"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and career highlights.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Experience items */}
          <div className="relative z-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`mb-12 flex items-center ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900"></div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-12 text-right" : "md:pl-12"
                }`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <h4 className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                      {exp.company}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download My Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 