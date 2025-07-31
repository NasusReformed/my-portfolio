import React from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 py-6 px-4 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <div className="mb-4 sm:mb-0">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Ignacio Quevedo. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            nasus.informatic.engineering@gmail.com
          </p>
        </div>
        <div className="flex space-x-6">
          <a 
            href="https://www.linkedin.com/in/ignacio-quevedo-a71841248/?trk=public-profile-join-page" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile"
            className="text-gray-500 hover:text-blue-700 dark:hover:text-blue-500 transition-colors duration-300"
          >
            <SiLinkedin size={24} />
          </a>
          <a 
            href="https://github.com/NasusReformed" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profile"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            <SiGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
