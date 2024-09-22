"use client"
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import CardHistoricalAppointmentInformation from "@/components/ui/cards/CardHistoricalAppointmentInformation";
import CardProfileDoctor from "@/components/ui/cards/CardProfileDoctor";
import InputComponent from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import {Rating} from "react-simple-star-rating";
import {fetchAddReview} from "@/actions/patients/doctors";
import {HTTPStatus} from "@/types/enum";
import toast from "react-hot-toast";


interface FinishedRejectedAppointmentPatientProps {
	finishedRejectedAppointment:any
}
const FinishedRejectedAppointmentPatient: React.FC <FinishedRejectedAppointmentPatientProps> = ({finishedRejectedAppointment}) => {
	const router = useRouter()
	const [appointment, setAppointment] = useState(finishedRejectedAppointment)
	const [review, setReview] = useState("")
	const [rating, setRating] = useState(0);

	const handleRating = (rate: number) => {
		setRating(rate)
	}

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()
		try{
			const response = await fetchAddReview(appointment.doctor.id, review, rating)
			if(response && response.status === HTTPStatus.CREATED){
				toast.success("Reseña añadida")
			}else{
				toast.error("Error al añadir reseña")
			}
		}catch(error){
			console.log(error)
		}finally {
			setRating(0)
			setReview("")
		}
	}

	return (
		<section className={"container"}>
			<CardProfileDoctor profile={appointment.doctor} />
			<CardHistoricalAppointmentInformation appointmentInformation={appointment.appointment_information}/>
			<section className={"appointment__reviews"}>
				<h3 className={"text-xl text-color-secondary"}>Añadir una reseña</h3>
				<form className={"forms"} onSubmit={handleSubmit}>
					<InputComponent
						label={"Review"}
						id={"review"}
						value={review}
						onChange={(event) => setReview(event.target.value)}
						type={"text"}
					/>
					<Rating onClick={handleRating} />
					<Button type={"submit"}>
						Añadir reseña
					</Button>
				</form>
			</section>
		</section>
	)
}
export default FinishedRejectedAppointmentPatient