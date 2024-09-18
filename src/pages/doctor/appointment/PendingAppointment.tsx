"use client"
import React, {useState} from "react";

interface PendingAppointmentProps {
	pendingAppointment:any
}
const PendingAppointment: React.FC <PendingAppointmentProps> = ({pendingAppointment}) => {
	const [appointment, setAppointment] = useState(pendingAppointment)
		return (
				<p>
					{appointment.guid}
				</p>
		)
}
export default PendingAppointment