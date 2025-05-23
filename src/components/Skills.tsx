"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import type { TooltipItem } from 'chart.js';

// Register Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Skills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skillGroups = [
    {
      category: "Programming Languages",
      description: "Core programming languages with extensive project experience",
      skills: [
        { name: "Python", level: 95, description: "ML/AI, Web Development, Data Analysis" },
        { name: "C++", level: 90, description: "System Programming, Algorithms" },
        { name: "JavaScript/TypeScript", level: 85, description: "Full-stack Web Development" },
        { name: "SQL", level: 80, description: "Database Design & Optimization" },
      ],
    },
    {
      category: "Data Science & AI",
      description: "Expertise in machine learning and data analysis",
      skills: [
        { name: "Machine Learning", level: 90, description: "Scikit-learn, TensorFlow, PyTorch" },
        { name: "Deep Learning", level: 85, description: "Neural Networks, CNN, RNN" },
        { name: "Data Analysis", level: 85, description: "Pandas, NumPy, Data Visualization" },
        { name: "Natural Language Processing", level: 80, description: "BERT, Transformers, spaCy" },
      ],
    },
    {
      category: "Web Development",
      description: "Modern web development stack and best practices",
      skills: [
        { name: "React", level: 85, description: "Component Design, State Management" },
        { name: "Next.js", level: 80, description: "SSR, API Routes, Full-stack Apps" },
        { name: "Node.js", level: 75, description: "Backend Development, API Design" },
      ],
    },
  ];

  const radarData = {
    labels: [
      'Machine Learning & AI',
      'Software Architecture',
      'Data Engineering',
      'Full-stack Development',
      'System Design',
      'Cloud & DevOps'
    ],
    datasets: [
      {
        label: 'Expertise Level',
        data: [90, 85, 88, 82, 85, 80],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
      },
    ],
  };

  const radarOptions = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        suggestedMin: 50,
        suggestedMax: 100,
        ticks: {
          stepSize: 10,
          font: {
            size: 10
          }
        }
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem: TooltipItem<"radar">) {
            const descriptions = [
              'Deep Learning, MLOps, Model Deployment',
              'System Design, Design Patterns, Architecture',
              'ETL, Data Pipelines, Big Data',
              'React, Node.js, Database Design',
              'Scalable Systems, Microservices',
              'AWS, Docker, CI/CD'
            ];
            return [
              `Level: ${tooltipItem.raw}%`,
              `Focus: ${descriptions[tooltipItem.dataIndex]}`
            ];
          }
        }
      },
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">{group.category}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 text-center">{group.description}</p>
              <div className="space-y-4">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-700 dark:text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-blue-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + skillIndex * 0.1 }}
                      ></motion.div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-0 mt-2 p-2 bg-gray-800 text-white text-sm rounded-md shadow-lg z-10 w-full">
                      {skill.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-4 text-center">Core Competencies</h3>
          <div className="w-full h-120 flex justify-center items-center">
            {mounted && <Radar data={radarData} options={radarOptions} />}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;