import Sidebar from "@/components/navbar/Sidebar";
import { UserProvider } from "@/context/useUser";
import {Toaster} from "react-hot-toast";

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
          <Toaster
            position="top-right"
          />
      </section>
    </UserProvider>
  );
}
