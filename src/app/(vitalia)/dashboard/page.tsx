import { authOptions } from "@/lib/utils";
import {AppointmentStatus, HTTPStatus, Roles} from "@/types/enum";
import { getServerSession } from "next-auth";

import DashboardAdmin from "@/pages/admin/DashboardAdmin";
import DashboardDoctor from "@/pages/doctor/DashboardDoctor";
import DashboardPatient from "@/pages/patient/DashboardPatient";
import {fetchDoctors, fetchTopFourDoctors} from "@/actions/patients/doctors";
import {fetchLastDoctorRegistration, fetchLastPatientRegistration} from "@/actions/admin/users";
import {fetchMedicalAppointmentByDate, fetchMedicalAppointmentsByStatus} from "@/actions/doctors/medical-appointment";
import {getEndOfDay, getStartOfDay} from "@/utils/utils";


const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  const userRole = session?.user.groups[0];

  switch (userRole) {
    case Roles.PATIENT:{
      const doctors = await fetchDoctors()
      return <DashboardPatient doctorsData= {doctors.data}/>;
    }
    case Roles.DOCTOR:
      const acceptAppointments = await fetchMedicalAppointmentByDate(AppointmentStatus.CONFIRMED, {start_date: getStartOfDay(), end_date: getEndOfDay()})
      const pendingAppointments = await fetchMedicalAppointmentsByStatus(AppointmentStatus.PENDING)
      return <DashboardDoctor acceptAppointments={acceptAppointments?.data} pendingAppointments={pendingAppointments.data}/>;
    case Roles.ADMIN:{
      const lastDoctors = await fetchLastDoctorRegistration()
      const lastPatients = await fetchLastPatientRegistration()
      return <DashboardAdmin lastDoctors={lastDoctors.data} lastPatients={lastPatients.data}/>;
    }
    default:
      return <div>Not found</div>;
  }
};

export default DashboardPage;
