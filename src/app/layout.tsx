import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import SpeedDial from "@/components/common/SpeedDial";
import Footer from "@/components/common/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio of Informatic Engineer",
  description: "Profesional portfolio of Ignacio Quevedo, Informatic Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <SpeedDial />{/* Render the Speed Dial here */}
        <Footer />{/* Render the Footer here */}
        {/* The page content will be rendered here */}
      </body>
    </html>
  );
}
