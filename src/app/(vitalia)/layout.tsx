import Sidebar from "@/components/navbar/Sidebar";
import Footer from "@/components/Footer";


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
    </section>
  );
}
