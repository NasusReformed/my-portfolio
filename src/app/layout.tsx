import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";

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
        <Navbar />{/* Render the Nabvar here */}
        <main>{children}</main>{/* The page content will be rendered here */}
      </body>
    </html>
  );
}
