import React from 'react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold mb-4">Hola, soy [Tu Nombre]</h1>
      <p className="text-xl text-gray-700 mb-8">
        Ingeniero Informático especializado en desarrollo web.
      </p>
      <div className="space-x-4">
        <Button variant="primary">Ver Proyectos</Button>
        <Button variant="outline">Descargar CV</Button>
      </div>
    </section>
  );
};

export default HeroSection;