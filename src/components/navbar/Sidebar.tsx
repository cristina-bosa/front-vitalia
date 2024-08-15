"use client"

import { usePathname } from "next/navigation";
import { LayoutDashboard, HeartPulse, CalendarCheck, User } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="fixed top-0 left-0 w-auto h-full" aria-label="Sidenav">
      <div className="overflow-y-auto py-5 px-3 h-full border-r-2 border-primary">
        <ul className="space-y-2">
          <li>
            <Link 
              href="/patient/dashboard"
              className={`flex items-center p-2 text-base font-normal ${pathname === '/patient/dashboard' ? 'text-primary-darker bg-primary-lighter' : 'text-primary'} rounded-lg hover:bg-primary hover:text-light`}
            >
              <LayoutDashboard className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link 
              href="/patient/historical"
              className={`flex items-center p-2 text-base font-normal ${pathname === '/patient/historical' ? 'text-primary-darker bg-primary-lighter' : 'text-primary'} rounded-lg hover:bg-primary hover:text-light`}
            >
              <HeartPulse className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link 
              href="/patient/appointment"
              className={`flex items-center p-2 text-base font-normal ${pathname === '/patient/appointment' ? 'text-primary-darker bg-primary-lighter' : 'text-primary'} rounded-lg hover:bg-primary hover:text-light`}
            >
              <CalendarCheck className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link 
              href="/patient/profile"
              className={`flex items-center p-2 text-base font-normal ${pathname === '/patient/profile' ? 'text-primary-darker bg-primary-lighter' : 'text-primary'} rounded-lg hover:bg-primary hover:text-light`}
            >
              <User className="w-6 h-6" />
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
