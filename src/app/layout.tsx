import type { Metadata } from "next";
import "./globals.css";
import { 
  Inter, 
  Geist
} from "next/font/google";
import SpeedDial from "@/components/common/SpeedDial";
import Footer from "@/components/common/Footer";

const inter = Inter({
  subsets: ['latin'],
});

const geist = Geist({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Portfolio of Software Engineer",
  description: "Profesional portfolio of Ignacio Quevedo, Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body className={inter.className}>
        <main>{children}</main>
        <SpeedDial />{/* Render the Speed Dial here */}
        <Footer />{/* Render the Footer here */}
        {/* The page content will be rendered here */}
      </body>
    </html>
  );
}
