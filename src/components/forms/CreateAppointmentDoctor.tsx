'use client'

import React, {useState} from "react";
import InputComponent from "@/components/ui/Input";
import {CreateAppointmentData} from "@/types";
import Button from "@/components/ui/Button";

interface CreateAppointmentDoctorProps {
	appointment: any
	handleCreateAppointment: (appointmentFormData: CreateAppointmentData) => void
}
const CreateAppointmentDoctor:React.FC<CreateAppointmentDoctorProps> =  ({appointment, handleCreateAppointment}) => {
	const [appointmentFormData, setAppointmentFormData] = useState<CreateAppointmentData>({
		reason_consultation: appointment?.reason_consultation || "",
		symptoms:  "",
		diagnosis:  "",
		medications: "",
		treatment: "",
		recommendations: ""
	})

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		handleCreateAppointment(appointmentFormData)
	}

	return (
		<section>
			<h3 className={"text-xl text-color-secondary"}>Informe médico</h3>
			<form className="forms" onSubmit={handleSubmit}>
				<section className={"form-row"}>
					<InputComponent
						label={"Motivo de la consulta"}
						id={"reason_consultation"}
						value={appointmentFormData.reason_consultation}
						onChange={(event) => setAppointmentFormData({...appointmentFormData, reason_consultation: event.target.value})}
						placeholder={"Motivo de la consulta"}
						type={"text"}/>
					<InputComponent
						label={"Síntomas"}
						id={"symptoms"}
						value={appointmentFormData.symptoms}
						onChange={(event) => setAppointmentFormData({...appointmentFormData, symptoms: event.target.value})}
						placeholder={"Síntomas"}
						type={"text"}/>
				</section>
				<section className={"form-row"}>
					<InputComponent
						label={"Diagnóstico"}
						id={"diagnosis"}
						value={appointmentFormData.diagnosis}
						onChange={(event) => setAppointmentFormData({...appointmentFormData, diagnosis: event.target.value})}
						placeholder={"Diagnóstico"}
						type={"text"}/>
					<InputComponent
						label={"Medicamentos"}
						id={"medications"}
						value={appointmentFormData.medications}
						onChange={(event) => setAppointmentFormData({...appointmentFormData, medications: event.target.value})}
						placeholder={"Medicamentos"}
						type={"text"}/>
				</section>
				<section className={"form-row"}>
					<InputComponent
						label={"Tratamiento"}
						id={"treatment"}
						value={appointmentFormData.treatment}
						onChange={(event) => setAppointmentFormData({...appointmentFormData, treatment: event.target.value})}
						placeholder={"Tratamiento"}
						type={"text"}/>
					<InputComponent
						label={"Recomendaciones"}
						id={"recommendations"}
						value={appointmentFormData.recommendations}
						onChange={(event) => setAppointmentFormData({...appointmentFormData, recommendations: event.target.value})}
						placeholder={"Recomendaciones"}
						type={"text"}/>
				</section>
				<section className={"form-bottom"}>
				<Button className="btn btn--primary" type={"submit"}>Finalizar consulta</Button>
				</section>
			</form>
		</section>
	)
}

export default CreateAppointmentDoctor