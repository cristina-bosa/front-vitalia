import React from "react";

interface IndividualAppointmentProps {
	oneAppointment: any;
}
const IndividualAppointmentPatient: React.FC <IndividualAppointmentProps>= ({oneAppointment}) => {
	return (
		<p>Cita individual</p>
	)
}

export default IndividualAppointmentPatient;