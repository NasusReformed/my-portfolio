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
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">{institution.charAt(0)}</p>
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
      <div className="w-40 h-40 mb-3 relative flex-shrink-0">
        {renderCertificate()}
      </div>
      <div className="w-full text-center px-2 flex-1 flex flex-col justify-center">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 mb-1 leading-tight" title={title}>
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-tight mb-1">
          {institution}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">
          {period}
        </p>
      </div>
    </div>
  );

  if (certificateUrl) {
    return (
      <a
        href={certificateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full hover:bg-gray-50 dark:hover:bg-gray-800/30 rounded-full transition-colors p-2"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="w-full h-full rounded-full p-2">
      {content}
    </div>
  );
};

export default EducationItem;
