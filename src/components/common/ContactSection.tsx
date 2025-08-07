import React from 'react';
import ContactForm from '../contact/ContactForm';
import { SiLinkedin, SiGithub, SiGmail } from 'react-icons/si';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Get In Touch
            <span className="block text-blue-600 dark:text-blue-400 mt-2">Let's Work Together</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 relative inline-block">
                Send Me a Message
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"></span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Have a project in mind or want to discuss potential opportunities? I'm just an email away.
              </p>
              <ContactForm />
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 relative inline-block">
                Contact Information
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"></span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <SiGmail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Email</h4>
                    <a 
                      href="mailto:nasus.informatic.engineering@gmail.com" 
                      className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200"
                    >
                      nasus.informatic.engineering@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Connect with me</h4>
                  <div className="flex space-x-6">
                    <a 
                      href="https://www.linkedin.com/in/ignacio-quevedo-a71841248/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                      aria-label="LinkedIn Profile"
                    >
                      <SiLinkedin size={24} />
                    </a>
                    <a 
                      href="https://github.com/NasusReformed" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                      aria-label="GitHub Profile"
                    >
                      <SiGithub size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Availability</h4>
              <p className="text-gray-600 dark:text-gray-400">
                I'm currently open to new opportunities and collaborations. Feel free to reach out for any inquiries or just to say hello!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
