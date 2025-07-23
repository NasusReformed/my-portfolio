import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center py-12 px-4">
      <h2 className="text-2xl text-center font-bold mb-4">About Me</h2>
      <p className="mb-4 text-center text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Hello everyone, My name is Ignacio Quevedo but you can call me Nacho or Nasus. I am a
        Software Engineer with a passion for technology and continuous learning. I specialize in
        Software Engineer, creating innovative solutions that enhance user experiences and drive
        business success. Recently I have been focused on improving my skills in Python, Data
        Analyst with Python, and Computer Science with Python. I am always eager to learn new
        technologies and methodologies that can help me grow as a developer. I'm learning new
        technologies such as machine learning and AI to stay at the forefront of the industry. This,
        complemented with certifications in Data Analysis and Cloud Computing, allows me to create
        robust and scalable applications. I believe in the power of collaboration and am always
        looking for opportunities to work on exciting projects that challenge my skills and expand
        my knowledge.
      </p>
    </div>
  );
};

export default AboutSection;
