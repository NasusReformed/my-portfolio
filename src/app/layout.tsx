import type { Metadata } from 'next';
import './globals.css';
import '../styles/custom.css';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import { Inter, Geist } from 'next/font/google';
import Footer from '@/components/common/Footer';
import NavBar from '@/components/common/NavBar';

const inter = Inter({
  subsets: ['latin'],
});

const geist = Geist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio of Software Engineer',
  description: 'Profesional portfolio of Ignacio Quevedo, Software Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <AnimatedBackground />

        <NavBar />
        <main className="relative z-10">{children}</main> 
        <Footer />
      </body>
    </html>
  );
}
