"use client";

import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, HeartPulse, CalendarCheck, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { logOut } from "@/actions/auth";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const token = session?.access_token

  //TODO : hacer el logout
  

  return (
    <aside className="fixed top-5 left-5 bottom-5 w-auto" aria-label="Sidenav">
      <section className="overflow-y-auto py-5 px-3 h-full rounded-full bg-slate-100">
        <section>
          <Image src="/symbol.svg" alt="brand vitalia" width={54} height={54} />
        </section>
        <ul className="space-y-2 mt-4">
          <li>
            <Link
              href="/patient/dashboard"
              className={`flex items-center p-2 text-base font-normal ${pathname === "/patient/dashboard"
                ? "text-primary-darker bg-primary-lighter"
                : "text-primary-darker"
                } rounded-lg hover:bg-primary hover:text-light`}
            >
              <LayoutDashboard size={32} />
            </Link>
          </li>
          <li>
            <Link
              href="/patient/historical"
              className={`flex items-center p-2 text-base font-normal ${pathname === "/patient/historical"
                ? "text-primary-darker bg-primary-lighter"
                : "text-primary-darker"
                } rounded-lg hover:bg-primary hover:text-light`}
            >
              <HeartPulse size={32} />
            </Link>
          </li>
          <li>
            <Link
              href="/patient/appointment"
              className={`flex items-center p-2 text-base font-normal ${pathname === "/patient/appointment"
                ? "text-primary-darker bg-primary-lighter"
                : "text-primary-darker"
                } rounded-lg hover:bg-primary hover:text-light`}
            >
              <CalendarCheck size={32} />
            </Link>
          </li>
          <li>
            <Link
              href="/patient/profile"
              className={`flex items-center p-2 text-base font-normal ${pathname === "/patient/profile"
                ? "text-primary-darker bg-primary-lighter"
                : "text-primary-darker"
                } rounded-lg hover:bg-primary hover:text-light`}
            >
              <User size={32} />
            </Link>
          </li>
          <li>
            <button
              className="flex items-center p-2 text-base font-normal text-primary-darker rounded-lg hover:bg-primary hover:text-light"
            >
              <span>Cerrar sesión</span>
            </button>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
