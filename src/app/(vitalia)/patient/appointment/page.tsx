import { fetchDoctors } from "@/actions/patients/doctors";
import { fetchCity, fetchSpecialty } from "@/actions/utils";
import AppointmentPage from "@/pages/patient/Appointment";

const PatientAppointmentPage: React.FC = async () => {
  const specialty = await fetchSpecialty();
  const city = await fetchCity();
  const doctors = await fetchDoctors();

  return (
    <AppointmentPage specialtyData={specialty} cityData={city} doctorsData= {doctors}/>
  );
}
export default PatientAppointmentPage;