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
    <section className="layout">
      <Sidebar />      
      <main className="container mx-auto h-screen">
        {children}
      </main>
      <Footer/>
    </section>
  );
}
