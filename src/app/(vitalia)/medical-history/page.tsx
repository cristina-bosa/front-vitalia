import { fetchMedicalHistory } from "@/actions/patients/medical-appointment";
import HistoricalPage from "@/pages/patient/MedicalHistoryPatient";
import React from "react";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/utils";
import {Roles} from "@/types/enum";
import MedicalHistoryDoctor from "@/pages/doctor/MedicalHistoryDoctor";
import MedicalHistoryPatient from "@/pages/patient/MedicalHistoryPatient";
import {fetchMedicalHistoryDoctors} from "@/actions/doctors/history";

const MedicalHistoryPage: React.FC = async () => {
  const session = await getServerSession(authOptions);
  const userRole = session?.user.groups[0];
  let historicalData;
  switch (userRole){
    case Roles.PATIENT:
        historicalData = await fetchMedicalHistory();
      return <MedicalHistoryPatient historicalInfo={ historicalData.data} />
    case Roles.DOCTOR:
        historicalData = await fetchMedicalHistoryDoctors();
      return <MedicalHistoryDoctor historicalInfo = {historicalData.data} />
  }
}

export default MedicalHistoryPage;