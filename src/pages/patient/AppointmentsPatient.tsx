import React from "react";

interface AppointmentsProps {
	allAppoinments: any;
}
const AppointmentsPatient: React.FC <AppointmentsProps> = ({allAppoinments}) => {
	return (
		<p>Todas las citas pendientes</p>
	)
}

export default AppointmentsPatient;