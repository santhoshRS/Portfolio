import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const SkillsSection: React.FC = () => {
  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-green-500';
      case 'Advanced': return 'bg-blue-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Beginner': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills across different domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-400">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-600 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(skill.level === 'Expert' ? 100 : skill.level === 'Advanced' ? 80 : skill.level === 'Intermediate' ? 60 : 40)}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full ${getSkillLevelColor(skill.level)} rounded-full`}
                        />
                      </div>
                      <span className="text-sm text-gray-400 w-16">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;