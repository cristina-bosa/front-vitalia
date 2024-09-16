
import { fetchProfile } from "@/actions/patients/profile";
import PatientProfile from "@/pages/patient/Profile";
import React from "react";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/utils";
import {Roles} from "@/types/enum";
import AdminProfile from "@/pages/admin/AdminProfile";

const ProfilePage: React.FC = async () => {
  const session = await getServerSession(authOptions);
  const userRole = session?.user.groups[0];
  const data = await fetchProfile();
  switch (userRole) {
    case Roles.PATIENT:{
      return <PatientProfile profile ={data} />;
    }
    case Roles.DOCTOR:
      return <div>Not found</div>;
    case Roles.ADMIN:
      return <AdminProfile />;
  }
}

export default ProfilePage;