import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { experiences } from '../data/portfolioData';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey in software development and the key roles I've held
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-800 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors duration-200">
                    <div className="flex items-center gap-3 mb-4">
                      <FaBriefcase className="text-blue-400" size={20} />
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-gray-300">
                      <FaCalendarAlt size={16} />
                      <span className="font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.duration}</span>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-blue-400">Responsibilities:</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-green-400">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {exp.achievements.map((ach, i) => (
                          <li key={i}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for timeline */}
                <div className="hidden md:block w-2/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;