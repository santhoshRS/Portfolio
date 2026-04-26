import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          <p className="text-gray-400 mb-4">
            Built with <FaHeart className="inline text-red-500 mx-1" /> using React & TypeScript
          </p>

          <p className="text-gray-500 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;