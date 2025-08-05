'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export interface Education {
  title: string;
  institution: string;
  period: string;
  imagePath: string;
  certificateUrl: string;
}

interface EducationItemProps {
  education: Education;
  index: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ education, index = 0 }) => {
  const { title, institution, period, imagePath, certificateUrl } = education;
  const [imageError, setImageError] = useState(false);
  const isPdf = imagePath.toLowerCase().endsWith('.pdf');

  // Reset error state when imagePath changes
  useEffect(() => {
    setImageError(false);
  }, [imagePath]);

  const renderMedia = () => {
    if (isPdf) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div className="text-center p-4">
            <div className="text-4xl mb-2">📄</div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Ver PDF</p>
          </div>
        </div>
      );
    }

    // Check if the image exists before trying to render it
    if (imageError || !imagePath) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div className="text-center p-4">
            <div className="text-4xl mb-2">🎓</div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{institution.charAt(0)}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="relative w-full h-full">
        <Image
          src={imagePath}
          alt={`${title} certificate`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain transition-transform duration-300 hover:scale-105"
          onError={() => setImageError(true)}
          onLoad={() => setImageError(false)}
          unoptimized={process.env.NODE_ENV !== 'production'}
          priority={index < 2} // Preload first 2 images for better LCP
        />
      </div>
    );
  };

  const content = (
    <>
      {/* Certificate/Degree Media */}
      <div className="h-48 overflow-hidden rounded-lg mb-4 bg-transparent group">
        <div className="relative w-full h-full">
          {renderMedia()}
          {!imageError && imagePath && (
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded-full">
                {isPdf ? 'Abrir PDF' : 'Ver certificado'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <div className="mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2" title={title}>
            {title}
          </h3>
        </div>
        
        <p className="text-md font-semibold text-blue-600 dark:text-blue-400 mb-2">
          {institution}
        </p>
        
        <div className="mt-auto pt-3">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {period}
          </p>
        </div>
      </div>
    </>
  );

  if (certificateUrl) {
    return (
      <a 
        href={certificateUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full group"
      >
        {content}
      </a>
    );
  }

  return <div className="h-full">{content}</div>;
};

export default EducationItem;
