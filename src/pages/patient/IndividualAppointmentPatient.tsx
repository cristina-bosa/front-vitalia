import React from "react";
import {AppointmentStatusSpanish} from "@/types/enum";
import PendingAppointmentPatient from "@/pages/patient/PendingAppointmentPatient";
import ConfirmedAppointmentPatient from "@/pages/patient/ConfirmedAppointmentPatient";
import FinishedOrRejectAppointmentPatient from "@/pages/patient/FinishedOrRejectAppointmentPatient";

interface IndividualAppointmentProps {
	oneAppointment: any;
}
const IndividualAppointmentPatient: React.FC <IndividualAppointmentProps> = ({oneAppointment}) => {
	const status = oneAppointment.status;
	switch (status){
		case AppointmentStatusSpanish.PENDING:
			return <PendingAppointmentPatient pendingAppointment={oneAppointment}/>
		case AppointmentStatusSpanish.CONFIRMED:
			return <ConfirmedAppointmentPatient pendingAppointment={oneAppointment} />
		default:
			return <FinishedOrRejectAppointmentPatient finishedRejectedAppointment={oneAppointment} />

	}
}

export default IndividualAppointmentPatient;