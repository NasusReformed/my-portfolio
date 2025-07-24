import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-center font-medium tracking-wide shadow-inner mt-12">
      <span>
        &copy; {new Date().getFullYear()} Ignacio Quevedo &mdash; Software Engineer. All rights
        reserved.
      </span>
    </footer>
  );
};

export default Footer;
