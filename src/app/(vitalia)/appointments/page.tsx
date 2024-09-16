import React from "react";
import { fetchDoctors } from "@/actions/patients/doctors";
import { fetchCity, fetchSpecialty } from "@/actions/utils";
import AppointmentPage from "@/pages/patient/Appointment";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/utils";
import {Roles} from "@/types/enum";

const PatientAppointmentPage = async () => {
  const session = await getServerSession(authOptions)
  const useRole = session?.user.groups[0];
  const specialty = await fetchSpecialty();
  const city = await fetchCity();
  const doctors = await fetchDoctors();

  switch (useRole) {
    case Roles.PATIENT:
      return <AppointmentPage specialtyData={specialty} cityData={city} doctorsData={doctors} />
  }

}
export default PatientAppointmentPage;
