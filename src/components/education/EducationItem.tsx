'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export interface Education {
  title: string;
  institution: string;
  period: string;
  imagePath: string;
}

interface EducationItemProps {
  education: Education;
  index: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ education, index = 0 }) => {
  const { title, institution, period, imagePath } = education;
  const [showModal, setShowModal] = useState(false);
  const [imageError, setImageError] = useState(false);
  const isPdf = imagePath.toLowerCase().endsWith('.pdf');

  // Reset error state when imagePath changes
  useEffect(() => {
    setImageError(false);
  }, [imagePath]);

  const renderCertificate = () => {
    if (isPdf) {
      return (
        <div className="w-full h-full flex items-center justify-center rounded-full">
          <div className="text-center">
            <div className="text-3xl mb-1">📄</div>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">PDF</p>
          </div>
        </div>
      );
    }

    if (imageError || !imagePath) {
      return (
        <div className="w-full h-full flex items-center justify-center rounded-full">
          <div className="text-center">
            <div className="text-3xl mb-1">🎓</div>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
              {institution.charAt(0)}
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <Image
          src={imagePath}
          alt={`${title} certificate`}
          fill
          className="object-cover"
          style={{ objectPosition: 'center' }}
          onError={() => setImageError(true)}
          onLoad={() => setImageError(false)}
          unoptimized={process.env.NODE_ENV !== 'production'}
          priority={index < 2}
        />
        <div className="absolute inset-0 bg-white/0 hover:bg-white/80 dark:bg-gray-900/0 dark:hover:bg-gray-900/80 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100 rounded-full">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200 px-3 py-1 rounded bg-white/90 dark:bg-gray-800/90 shadow-sm border border-gray-200 dark:border-gray-700">
            Ver
          </span>
        </div>
      </div>
    );
  };

  const content = (
    <div className="flex flex-col items-center w-full h-full">
      <div className="w-40 h-40 mb-3 relative flex-shrink-0">{renderCertificate()}</div>
      <div className="w-full text-center px-2 flex-1 flex flex-col justify-center">
        <h3
          className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 mb-1 leading-tight"
          title={title}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-tight mb-1">{institution}</p>
        <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">{period}</p>
      </div>
    </div>
  );

  // Close with escape
  useEffect(() => {
    if (!showModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

  return (
    <>
      <div
        className="w-full h-full rounded-full p-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors focus:outline-none focus:ring-0"
        onClick={() => setShowModal(true)}
        tabIndex={0}
        role="button"
        aria-label={`Ver certificado de ${title}`}
      >
        {content}
      </div>
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg max-w-xl w-full flex flex-col items-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl"
              onClick={() => setShowModal(false)}
              aria-label="Cerrar"
            >
              &times;
            </button>
            <Image
              src={imagePath}
              alt={`Certificado de ${title}`}
              width={600}
              height={400}
              className="rounded-lg object-contain max-h-[60vh] w-auto h-auto"
              unoptimized={process.env.NODE_ENV !== 'production'}
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{institution}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{period}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EducationItem;
