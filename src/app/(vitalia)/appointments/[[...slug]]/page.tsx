import React from "react";
import {AppointmentStatus, typeUserURI} from "@/types/enum";
import AppointmentsDoctor from "@/pages/doctor/AppointmentsDoctor";
import IndividualAppointmentDoctor from "@/pages/doctor/IndividualAppointmentDoctor";
import AppointmentsPatient from "@/pages/patient/AppointmentsPatient";
import IndividualAppointmentPatient from "@/pages/patient/IndividualAppointmentPatient";
import {
	fetchAllMedicalAppointments,
	fetchMedicalAppointmentById,
	fetchMedicalAppointmentsByStatus
} from "@/actions/doctors/medical-appointment";

interface AppointmentsParams {
	params: {
		slug: string[];
	};
}

const AppointmentPage: React.FC<AppointmentsParams> = async ({ params }) => {
	const { slug } = params;

	const [userType, idOrAll, status] = slug;

	switch (userType) {
		case typeUserURI.DOCTOR:
			if(idOrAll === typeUserURI.ALL) {
				let getAppointments;
					status === AppointmentStatus.PENDING ? getAppointments = await fetchMedicalAppointmentsByStatus(AppointmentStatus.PENDING) : getAppointments = await fetchAllMedicalAppointments();
				return <AppointmentsDoctor allAppoinments = {getAppointments.data} status={status}/>;
			}else{
				const oneAppointment = await fetchMedicalAppointmentById(idOrAll);
				return <IndividualAppointmentDoctor oneAppointment = {oneAppointment.data}/>
			}
		case typeUserURI.PATIENT:
			if(idOrAll === typeUserURI.ALL) {
				const getAllAppointments = await fetchAllMedicalAppointments();
				return <AppointmentsPatient allAppoinments = {getAllAppointments.data}/>;
			}else{
				const oneAppointment = await fetchMedicalAppointmentById(idOrAll);
				return <IndividualAppointmentPatient oneAppointment = {oneAppointment.data}/>
			}
		default:
			return <p>Ruta no válida</p>;
	}
};

export default AppointmentPage;
