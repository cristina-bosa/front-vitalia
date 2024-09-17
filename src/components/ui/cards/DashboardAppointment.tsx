"use client"
import React from "react";
import {DashboardMedicalAppointments} from "@/types";
import {ArrowUpRight, Clock} from "lucide-react";

interface DashboardAppointmentProps {
	appointment: DashboardMedicalAppointments;
}
const DashboardAppointment : React.FC<DashboardAppointmentProps>= ({appointment}) => {
	return (
		<article className="card card__appointment" key={appointment.id}>
			<header className={"card__appointment__header"}>
				<Clock />
				<time>{appointment.patient_appointment}</time>
			</header>
			<section className={"card__appointment__body"}>
				<h6 className={""}>{appointment.patient_name} {appointment.patient_last_name}</h6>
			</section>
			<section className={"card__appointment__footer"}>
				<ArrowUpRight />
			</section>
		</article>
	)
}
export default DashboardAppointment