// Aquí puedes definir tipos globales o interfaces que uses en tu aplicación

interface ProjectData {
    id: number;
    title: string;
    description: string;
    slug: string;
    // Puedes añadir más propiedades según lo necesites
  }
  
  // Ejemplo de una interfaz para propiedades de un componente
  interface MyComponentProps {
    text: string;
    isActive?: boolean;
  }