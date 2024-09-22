
import { fetchProfile } from "@/actions/patients/profile";
import PatientProfile from "@/pages/patient/ProfilePatient";
import React from "react";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/utils";
import {Roles} from "@/types/enum";
import ProfileDoctor from "@/pages/doctor/ProfileDoctor";

const ProfilePage: React.FC = async () => {
  const session = await getServerSession(authOptions);
  const userRole = session?.user.groups[0];
  const data = await fetchProfile();

  switch (userRole) {
    case Roles.PATIENT:{
      return <PatientProfile profile ={data.data} />;
    }
    case Roles.DOCTOR:
      return <ProfileDoctor profile={data.data}/>
  }
}

export default ProfilePage;