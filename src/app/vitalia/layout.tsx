import type { Metadata } from "next";

import Sidebar from "@/components/navbar/Sidebar";
import Footer from "@/components/Footer";
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
    <>
      <Sidebar />
      <main className="container mx-auto">
        {children}
      </main>
      <Footer/>
    </>
  );
}
