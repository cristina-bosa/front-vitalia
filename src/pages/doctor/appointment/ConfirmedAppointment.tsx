"use client"
import React, {useState} from "react";
import CardHistoricalPatient from "@/components/ui/cards/CardHistoricalPatient";
import CardHistoricalAppointmentInformation from "@/components/ui/cards/CardHistoricalAppointmentInformation";
import Button from "@/components/ui/Button";
import {useRouter} from "next/navigation";
import {
	fetchMedicalAppointmentAcceptOrReject, fetchMedicalAppointmentFinish,
	fetchMedicalAppointmentStart
} from "@/actions/doctors/medical-appointment";
import {AcceptRejectAppointment, HTTPStatus} from "@/types/enum";
import toast from "react-hot-toast";
import CreateAppointmentDoctor from "@/components/forms/CreateAppointmentDoctor";
import {CreateAppointmentData} from "@/types";

interface ConfirmedAppointmentProps {
	confirmedAppointment:any
}
const ConfirmedAppointment: React.FC <ConfirmedAppointmentProps> = ({confirmedAppointment}) => {
	const router = useRouter()
	const [appointment, setAppointment] = useState(confirmedAppointment)
	const [isAppointmentStarted, setIsAppointmentStarted] = useState(false)
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
	const handleStartAppointment = async () => {
		try{
			const response = await fetchMedicalAppointmentStart(appointment.id)
			if(response && response.status === HTTPStatus.OK){
				setIsAppointmentStarted(true)
			}else{
				toast.error("No se ha podido iniciar la consulta")
			}
		}catch(error){
			console.error(error)
		}
	}

	const handleCreateAppointment = async (appointmentFormData: CreateAppointmentData) => {
		try {
			const response = await fetchMedicalAppointmentFinish(appointment.id, appointmentFormData);
			if (response && response.status === HTTPStatus.OK) {
				toast.success('Consulta creada exitosamente');
				router.push(`/schedule`);
			} else {
				toast.error('Error al crear la consulta');
			}
		} catch (error) {
			console.error(error);
			toast.error('Error al crear la consulta');
		}
	};

	return (
		<section className={"container"}>
			<CardHistoricalPatient patient={appointment.patient}/>
			{!isAppointmentStarted ? (
				<>
			<CardHistoricalAppointmentInformation appointmentInformation={appointment.appointment_information}/>
			<section className={"appointment__opts"}>
				<section className={"appointment__opts__buttons"}>
					<Button type="button" className="btn--outline--error" onClick={handleRejectAppointment}>Cancelar
						consulta</Button>
					<Button type="button" className="btn--success--soft" onClick={handleStartAppointment}>Iniciar consulta</Button>
				</section>
			</section>
			</>
			) : (
				<section className={"appointment"}>
					<CreateAppointmentDoctor appointment={appointment.appointment_information} handleCreateAppointment={handleCreateAppointment}/>
				</section>
			)}
		</section>
	)
}
export default ConfirmedAppointment