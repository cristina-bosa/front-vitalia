"use client"
import React from "react";
import {DashboardMedicalAppointments} from "@/types";
import {ArrowUpRight, Clock} from "lucide-react";

interface DashboardAppointmentProps {
	appointment: DashboardMedicalAppointments;
	handleOpenAppointment: () => void;
}
const DashboardAppointment : React.FC<DashboardAppointmentProps>= ({appointment, handleOpenAppointment}) => {
	return (
		<article className="card__appointment" key={appointment.id} onClick={handleOpenAppointment}>
			<section className={"card__appointment__header"}>
				<header className={"card__appointment__header--bg"}>
					<Clock />
					<time>{appointment.patient_appointment}</time>
				</header>
				<section className={"card__appointment__body"}>
					<h6 className={"text-color-dark"}>{appointment.patient_name} {appointment.patient_last_name}</h6>
				</section>
			</section>
			<section className={"card__appointment__footer"} >
				<ArrowUpRight />
			</section>
		</article>
	)
}
export default DashboardAppointment