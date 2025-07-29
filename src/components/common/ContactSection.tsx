import React from 'react';
import ContactForm from '../contact/ContactForm';
import { SiLinkedin, SiGithub } from 'react-icons/si';

const ContactSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-4">
      <h2 className="text-4xl text-center font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight drop-shadow-lg uppercase letter-spacing-wider">
        Contact
        <span className="text-blue-600 dark:text-blue-400"> Me</span>
      </h2>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
        I'm open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Get in Touch</h3>
          <ContactForm />
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300">Email</h4>
              <a href="mailto:nasus.informatic.engineering@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">nasus.informatic.engineering@gmail.com</a>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300">Connect with me</h4>
              <div className="flex space-x-4 mt-2">
                <a href="https://www.linkedin.com/in/ignacio-quevedo-a71841248/?trk=public-profile-join-page" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 dark:hover:text-blue-500">
                  <SiLinkedin size={28} />
                </a>
                <a href="https://github.com/NasusReformed" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <SiGithub size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
