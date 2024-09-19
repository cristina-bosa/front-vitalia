import { AppointmentStatusSpanish} from "@/types/enum";
import PendingAppointment from "@/pages/doctor/appointment/PendingAppointment";
import ConfirmedAppointment from "@/pages/doctor/appointment/ConfirmedAppointment";
import FinishedRejectedAppointment from "@/pages/doctor/appointment/FinishedRejectedAppointment";
import React from "react";

interface IndividualAppointmentProps {
	oneAppointment: any;
}
const IndividualAppointmentDoctor: React.FC <IndividualAppointmentProps> = ({oneAppointment}) => {
	const status = oneAppointment.status;
	switch (status){
		case AppointmentStatusSpanish.PENDING:
			return <PendingAppointment pendingAppointment={oneAppointment}/>
		case AppointmentStatusSpanish.CONFIRMED:
			return <ConfirmedAppointment confirmedAppointment={oneAppointment} />
		default:
			return <FinishedRejectedAppointment finishedRejectedAppointment={oneAppointment} />
	}
}

export default IndividualAppointmentDoctor;