"use client"
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import CardHistoricalPatient from "@/components/ui/cards/CardHistoricalPatient";
import CardHistoricalAppointmentInformation from "@/components/ui/cards/CardHistoricalAppointmentInformation";



interface FinishedRejectedAppointmentProps {
	finishedRejectedAppointment:any
}
const FinishedRejectedAppointment: React.FC <FinishedRejectedAppointmentProps> = ({finishedRejectedAppointment}) => {
	const router = useRouter()
	const [appointment, setAppointment] = useState(finishedRejectedAppointment)
	console.log(appointment)
	return (
		<section className={"container"}>
			<CardHistoricalPatient patient={appointment.patient}/>
			<CardHistoricalAppointmentInformation appointmentInformation={appointment.appointment_information}/>
		</section>
	)
}
export default FinishedRejectedAppointment