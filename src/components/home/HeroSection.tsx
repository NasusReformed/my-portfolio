import Image from 'next/image';
import Logo from '../../../public/images/logo.png';

export default function HeroSection() {
  return (
    <div className="avatar flex flex-col items-center justify-center py-12">
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Image
          src={Logo}
          alt="Foto profesional de Ignacio Quevedo, Software Engineer"
          className="relative z-10 inline-block h-[220px] w-[220px] rounded-full border-4 border-white shadow-xl object-cover"
          priority
        />
      </div>
      <div className="text-center mt-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight drop-shadow-lg">
          Ignacio Quevedo
        </h1>
        <p className="text-blue-600 dark:text-blue-400 text-xl font-semibold mb-2">
          Software Engineer
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-flex mb-4">
          Passionate for the Tecnologies | Python | AI | Oracle Cloud Ingraestructure | Data Analyst
        </p>
        <p className="italic text-md text-gray-500 dark:text-gray-400 mt-2">
          "If you can dream it, I can create it"
        </p>
        <div className="flex gap-4 mt-6 justify-center">
          <a
            href="https://github.com/NasusReformed"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Ignacio Quevedo"
            className="hover:scale-110 transition-transform"
          >
            <svg
              width="32"
              height="32"
              fill="currentColor"
              className="text-gray-800 dark:text-gray-200"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ignacio-quevedo-a71841248/?trk=public-profile-join-page"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Ignacio Quevedo"
            className="hover:scale-110 transition-transform"
          >
            <svg
              width="32"
              height="32"
              fill="currentColor"
              className="text-blue-700 dark:text-blue-400"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
