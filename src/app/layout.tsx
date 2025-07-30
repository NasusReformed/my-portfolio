import type { Metadata } from 'next';
import './globals.css';
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
      <body className={inter.className}>
        <NavBar />
        {/*renderice the children of the app/page.tsx*/}
        <main className="relative z-10">{children}</main> 
        <Footer />
      </body>
    </html>
  );
}
