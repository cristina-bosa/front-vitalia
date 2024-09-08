import Sidebar from "@/components/navbar/Sidebar";
import { UserProvider } from "@/context/useUser";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <section className="layout">
        <Sidebar />
        <main className="container">{children}</main>
      </section>
    </UserProvider>
  );
}
