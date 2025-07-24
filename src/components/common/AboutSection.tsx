import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/images/logo.png';

const AboutSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4">
      <h2 className="text-3xl text-center font-extrabold mb-4 text-white tracking-tight drop-shadow-lg">
        About Me
      </h2>
      <Image
        src={Logo}
        alt="Photo About Me"
        className="h-[140px] w-[140px] rounded-full border-4 border-white shadow-md object-cover mb-4"
        priority
      />
      <p className="mb-2 text-center text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Hello everyone, my name is{' '}
        <span className="font-bold text-blue-600 dark:text-blue-400">Ignacio Quevedo</span> but you
        can call me <span className="font-semibold">Nacho</span> or{' '}
        <span className="font-semibold">Nasus</span>.
      </p>
      <p className="mb-2 text-center text-base text-gray-700 dark:text-gray-300 leading-relaxed">
        I am a <span className="font-bold">Software Engineer</span> with a passion for technology
        and continuous learning. I specialize in{' '}
        <span className="font-semibold">Full Stack Development</span>, creating innovative solutions
        that enhance user experiences and drive business success.
      </p>
      <p className="mb-2 text-center text-base text-gray-700 dark:text-gray-300 leading-relaxed">
        Recently, I have been focused on improving my skills in{' '}
        <span className="font-semibold">Python</span>,{' '}
        <span className="font-semibold">Data Analysis</span>, and{' '}
        <span className="font-semibold">Computer Science</span>. I am always eager to learn new
        technologies and methodologies that help me grow as a developer.
      </p>
      <p className="mb-2 text-center text-base text-gray-700 dark:text-gray-300 leading-relaxed">
        I'm learning new technologies such as{' '}
        <span className="font-semibold">Machine Learning</span> and{' '}
        <span className="font-semibold">AI</span> to stay at the forefront of the industry. This,
        complemented with certifications in <span className="font-semibold">Data Analysis</span> and{' '}
        <span className="font-semibold">Cloud Computing</span>, allows me to create robust and
        scalable applications.
      </p>
      <p className="text-center text-base text-gray-700 dark:text-gray-300 leading-relaxed">
        I believe in the power of <span className="font-semibold">collaboration</span> and am always
        looking for opportunities to work on exciting projects that challenge my skills and expand
        my knowledge.
      </p>
    </section>
  );
};

export default AboutSection;
