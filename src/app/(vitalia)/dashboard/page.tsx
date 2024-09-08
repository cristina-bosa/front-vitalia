import { authOptions } from "@/lib/utils";
import { Roles } from "@/types/enum";
import { getServerSession } from "next-auth";

import DashboardAdmin from "@/pages/admin/DashboardAdmin";
import DashboardDoctor from "@/pages/doctor/DashboardDoctor";
import DashboardPatient from "@/pages/patient/DashboardPatient";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  const userRole = session?.user.groups[0];

  switch (userRole) {
    case Roles.PATIENT:
      return <DashboardPatient />;
    case Roles.DOCTOR:
      return <DashboardDoctor />;
    case Roles.ADMIN:
      return <DashboardAdmin />;
    default:
      return <div>Not found</div>;
  }
};

export default DashboardPage;
