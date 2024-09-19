"use client"
import React, {useEffect, useState} from "react";
import CardHistoricalPatient from "@/components/ui/cards/CardHistoricalPatient";
import Button from "@/components/ui/Button";
import {fetchMedicalAppointmentAcceptOrReject} from "@/actions/doctors/medical-appointment";
import {AcceptRejectAppointment, HTTPStatus} from "@/types/enum";
import toast from "react-hot-toast";
import { Check } from 'lucide-react';
import CardHistoricalAppointmentInformation from "@/components/ui/cards/CardHistoricalAppointmentInformation";
import {useRouter} from "next/navigation";


interface PendingAppointmentProps {
	pendingAppointment:any
}
const PendingAppointment: React.FC <PendingAppointmentProps> = ({pendingAppointment}) => {
	const router = useRouter()
	const [appointment, setAppointment] = useState(pendingAppointment)


	const handleRejectAppointment = async () => {
		try{
			const response = await fetchMedicalAppointmentAcceptOrReject(appointment.id, AcceptRejectAppointment.REJECT)
			if(response && response.status === HTTPStatus.OK){
				toast.success("Se ha cancelado la reserva correctamente")
				setAppointment({...appointment, status:AcceptRejectAppointment.REJECT})
				setTimeout(() =>{
					router.replace("/dashboard")
				},2000)
			}
		}catch(error){
			console.error(error)
		}
	}
	const handleAcceptAppointment = async () => {
		try{
			const response = await fetchMedicalAppointmentAcceptOrReject(appointment.id, AcceptRejectAppointment.ACCEPT)
			if(response && response.status === HTTPStatus.OK){
				toast.success("Se ha aceptado correctamente la reserva")
				setAppointment({...appointment, status:AcceptRejectAppointment.ACCEPT})
				setTimeout(() =>{
					router.replace("/dashboard")
				},2000)
			}
		}catch(error){
			console.error(error)
		}
	}
	return (
		<section className={"container"}>
			<CardHistoricalPatient patient={appointment.patient}/>
			<CardHistoricalAppointmentInformation appointmentInformation={appointment.appointment_information}/>
			<section className={"appointment__opts"}>
				<section className={"appointment__opts__buttons"}>
				<Button type="button" className="btn--outline--error" onClick={handleRejectAppointment}>Cancelar
					reserva</Button>
				<Button type="button" className="btn--success--soft" onClick={handleAcceptAppointment}>Aceptar reserva</Button>
				</section>
			</section>
		</section>
	)
}
export default PendingAppointment