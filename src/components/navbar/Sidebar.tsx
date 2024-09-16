"use client";

import { usePathname } from "next/navigation";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

import { routes } from "@/constants";

import Button from "@/components/ui/Button";

const Sidebar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  const user = session?.user;
  const userRole = user?.groups[0];

  const route = routes.filter((route) => route.roles.includes(userRole));

  return (
    <aside className="sidebar">
      <section className={"sidebar__content"}>
        <section className="sidebar__top">
          <Image src="/symbol.svg" alt="brand vitalia" width={54} height={54}/>
          <section className="sidebar__top-nav">
            {route?.map((nav) => (
              <Link
                key={nav.label}
                href={nav.path}
                className={`sidebar__link ${
                  pathname === nav.path ? "sidebar__link--active" : ""
                }`}
              >
                <Image src={nav.icon} alt={nav.label} width={24} height={24}/>
                {nav.label}
              </Link>
            ))}
          </section>
        </section>
        <section className="sidebar__bottom">
          <p className="sidebar__bottom-link">
            {user?.first_name} {user?.last_name}
          </p>
          <Button
            onClick={() => {
              signOut({
                redirect: true,
                callbackUrl: "/",
              });
            }}
          >
            <LogOutIcon size={24}/>
            Cerrar sesión
          </Button>
        </section>
      </section>
    </aside>
  );
};

export default Sidebar;
