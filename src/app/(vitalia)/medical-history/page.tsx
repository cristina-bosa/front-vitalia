import { fetchMedicalHistory } from "@/actions/patients/medical-appointment";
import HistoricalPage from "@/pages/patient/MedicalHistoryPatient";
import React from "react";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/utils";
import {Roles} from "@/types/enum";
import MedicalHistoryDoctor from "@/pages/doctor/MedicalHistoryDoctor";
import MedicalHistoryPatient from "@/pages/patient/MedicalHistoryPatient";

const MedicalHistoryPage: React.FC = async () => {
  const session = await getServerSession(authOptions);
  const userRole = session?.user.groups[0];
  switch (userRole){
    case Roles.PATIENT:
        const historicalData = await fetchMedicalHistory();
      return <MedicalHistoryPatient historicalInfo={ historicalData } />
    case Roles.DOCTOR:
      return <MedicalHistoryDoctor />
  }

}

export default MedicalHistoryPage;