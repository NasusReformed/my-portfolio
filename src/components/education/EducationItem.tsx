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
        <div className="w-full h-48 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-1">📄</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Open PDF</p>
          </div>
        </div>
      );
    }

    if (imageError || !imagePath) {
      return (
        <div className="w-full h-48 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-1">🎓</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{institution.charAt(0)}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="relative w-full h-48">
        <Image
          src={imagePath}
          alt={`${title} certificate`}
          fill
          className="object-contain"
          style={{ objectPosition: 'center' }}
          onError={() => setImageError(true)}
          onLoad={() => setImageError(false)}
          unoptimized={process.env.NODE_ENV !== 'production'}
          priority={index < 2}
        />
        <div className="absolute inset-0 bg-white/0 hover:bg-white/80 dark:bg-gray-900/0 dark:hover:bg-gray-900/80 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200 px-3 py-1 rounded bg-white/90 dark:bg-gray-800/90 shadow-sm border border-gray-200 dark:border-gray-700">
            View Certificate
          </span>
        </div>
      </div>
    );
  };

  const content = (
    <div className="flex flex-col items-center w-full h-full">
      {/* Certificate/Degree Media */}
      <div className="w-full h-48 mb-2 overflow-hidden">
        {renderCertificate()}
      </div>

      {/* Content */}
      <div className="w-full text-center px-1">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 mb-0.5 leading-tight" title={title}>
          {title}
        </h3>
        <p className="text-xs text-gray-700 dark:text-gray-300 leading-tight">
          {institution} • {period}
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
        className="block h-full hover:bg-gray-50 dark:hover:bg-gray-800/30 rounded transition-colors p-1"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="h-full p-1">
      {content}
    </div>
  );
};

export default EducationItem;
