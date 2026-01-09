// Aquí puedes definir tipos globales o interfaces que uses en tu aplicación

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  slug: string;
}

export interface MyComponentProps {
  text: string;
  isActive?: boolean;
}
