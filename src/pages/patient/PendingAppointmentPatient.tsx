"use client"
import React, {useState} from "react";
import Button from "@/components/ui/Button";
import {fetchMedicalAppointmentAcceptOrReject} from "@/actions/doctors/medical-appointment";
import {AcceptRejectAppointment, HTTPStatus} from "@/types/enum";
import toast from "react-hot-toast";
import CardHistoricalAppointmentInformation from "@/components/ui/cards/CardHistoricalAppointmentInformation";
import {useRouter} from "next/navigation";
import CardProfileDoctor from "@/components/ui/cards/CardProfileDoctor";


interface PendingAppointmentPatientProps {
	pendingAppointment:any
}
const PendingAppointmentPatient: React.FC <PendingAppointmentPatientProps> = ({pendingAppointment}) => {
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

	return (
		<section className={"container"}>
			<CardProfileDoctor profile={appointment.doctor} />
			<CardHistoricalAppointmentInformation appointmentInformation={appointment.appointment_information}/>
			<section className={"appointment__opts"}>
				<section className={"appointment__opts__buttons"}>
					<Button type="button" className="btn--outline--error" onClick={handleRejectAppointment}>Cancelar
						reserva</Button>
				</section>
			</section>
		</section>
	)
}
export default PendingAppointmentPatient