"use client"
import React from "react";
import Hero from "@/components/ui/Hero";
import {typeUserURI} from "@/types/enum";
import {ArrowUpRight} from "lucide-react";
import {useRouter} from "next/navigation";

interface ScheduleDoctorProps {
	acceptAppointments: any;
}
const ScheduleDoctor : React.FC<ScheduleDoctorProps> = ({acceptAppointments}) =>{
	const router = useRouter()
	console.log(acceptAppointments)
	return (
		<section>
			<Hero
				title={"Mi agenda"}
				subtitle={"En esta sección están todas las consultas que has confirmado anteriormente"}
			/>
			<table>
				<thead>
				<tr>
					<th>Identificador de la consulta</th>
					<th>Nombre y apellidos</th>
					<th>Fecha y hora</th>
				</tr>
				</thead>
				<tbody>
				{acceptAppointments.map((historicalData: any) => (
					<tr key={historicalData.id}
							onClick={() => router.push(`appointments/${typeUserURI.DOCTOR}/${historicalData.id}`)}>
						<td>{historicalData.guid}</td>
						<td>{historicalData.patient_name} {historicalData.patient_last_name}</td>
						<td>{historicalData.patient_appointment}</td>
						<td><ArrowUpRight className={"card__appointment__footer"}/></td>
					</tr>
				))}
				</tbody>
			</table>
		</section>
	)
}
export default ScheduleDoctor;