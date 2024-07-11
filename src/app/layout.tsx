import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../assets/styles/globals.scss"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vitalia",
  description: "Bienvenido a Vitalia, tu espacio de salud y bienestar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
