import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/images/logo.png';

const AboutSection: React.FC = () => {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Left Column - Photo */}
          <div className="md:w-1/4 lg:w-1/5 flex-shrink-0 mx-auto md:mx-0">
            <div className="relative">
              <Image
                src={Logo}
                alt="Ignacio Quevedo"
                width={240}
                height={240}
                className="rounded-full border-4 border-white shadow-xl w-full max-w-[240px] h-auto aspect-square object-cover relative z-10"
                priority
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold mb-6 text-white tracking-tight drop-shadow-lg uppercase letter-spacing-wider">
              About Me
            </h2>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                <span className="text-gray-800 dark:text-gray-200">Hello everyone, my name is </span>
                <span className="font-bold text-blue-600 dark:text-blue-400">Ignacio Quevedo</span>
                <span className="text-gray-800 dark:text-gray-200"> but you can call me </span>
                <span className="font-semibold">Nacho</span>
                <span className="text-gray-800 dark:text-gray-200"> or </span>
                <span className="font-semibold">Nasus</span>.
              </p>

              <p>
                I am a <span className="font-semibold">Software Engineer</span> with a love for technology
                and continuous learning. I specialize in{' '}
                <span className="font-semibold">Software Engineering</span>, creating innovative
                solutions that enhance user experiences and drive business success.
              </p>

              <p>
                At the moment, I study new technologies related to{' '}
                <span className="font-semibold">Python</span>,{' '}
                <span className="font-semibold">Data Analyst</span>,{' '}
                <span className="font-semibold">Computer Science</span>, {' '}
                <span className="font-semibold">Machine Learning</span>, {' '}
                <span className="font-semibold">Deep Learning</span>, {' '}
                <span className="font-semibold">Multicloud</span>, {' '}
                <span className="font-semibold">AI</span> and{' '}
                <span className="font-semibold">Cloud</span>. This new technologies open new opportunities for me to create innovative solutions.
              </p>

              <p>
                My principal motivation for learning new technologies is to stay at the forefront of the industry. This,
                complemented with certifications in technologies of vanguard they form me to be a better professional.  
              </p>

              <p>
                I believe in the power of <span className="font-semibold">collaboration</span> and am
                always looking for opportunities to work on exciting projects that challenge my skills and
                expand my knowledge.
              </p>
              <p className="italic text-md text-gray-500 dark:text-gray-400 mt-2">
                "Small steps create big progress"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
