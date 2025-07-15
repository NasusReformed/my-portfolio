import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} [Tu Nombre]. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;