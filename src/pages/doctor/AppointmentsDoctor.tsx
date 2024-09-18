"use client"

import React, {useState} from "react";
import InputComponent from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import {ArrowUpRight, Eye, EyeIcon} from "lucide-react";
import {useRouter} from "next/navigation";
import {fetchMedicalAppointmentByDate} from "@/actions/doctors/medical-appointment";
import {getEndOfDay} from "@/utils/utils";
import {AppointmentStatus, HTTPStatus} from "@/types/enum";

interface AppointmentsProps {
	allAppoinments: any;
	status?: string;
}
const AppointmentsDoctor: React.FC<AppointmentsProps> = ({allAppoinments, status}) => {
	const router = useRouter();
	const [appointments, setAppointments] = useState(allAppoinments);
	const [search, setSearch] = useState<string>("");
	const [date, setDate] = useState<string>("");
	const handleSearchByName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
		const filteredAppointments = allAppoinments.filter((appointment: any) => {
			const fullName = `${appointment.patient_name} ${appointment.patient_last_name}`;
			return fullName.toLowerCase().includes(search.toLowerCase());
		});
		if(search === "") {
			setAppointments(allAppoinments);
		}else{
			setAppointments(filteredAppointments);
		}
	}
	console.log(getEndOfDay())
	const handleSearchByDate = async (event: React.ChangeEvent<HTMLInputElement>) => {
		setDate(event.target.value);
		if(event.target.value === ""){
			setAppointments(allAppoinments);
			return;
		}
		try{
			const response = await fetchMedicalAppointmentByDate(AppointmentStatus.PENDING, {
				start_date: event.target.value,
				end_date: getEndOfDay()
			})
			if(response && response.status === HTTPStatus.OK){
				setAppointments(response.data)
			}
		}catch(error){
			console.error(error)
		}
	}
	return (
		<section className={"appointment-doctor"}>
			<section className={"appointment-doctor__header"}>
				<h2 className={"text-2xl text-color-primary"}>Reservas pendientes</h2>
				<p className={"text-m text-color-dark-light"}>Estas son todas las citas pendientes</p>
			</section>
			<section className={"appointment-doctor__search"}>
				<InputComponent
					id={"search"}
					value={search}
					placeholder={"Buscar por nombre"}
					onChange={(event) => handleSearchByName(event)}
					type={"text"}/>

					<InputComponent
						id={"date"}
						value={date}
						placeholder={"Buscar por nombre"}
						onChange={(event) => handleSearchByDate(event)}
						type={"date"}/>
						<Button
							type={"button"}
							className={"btn--primary--soft"}
							onClick={() => {
								setAppointments(allAppoinments)
								setSearch("")
								setDate("")
								}}>
							Restablecer
						</Button>
			</section>
			<section>
				{appointments.length === 0 ? (<>
					<p>No hay citas pendientes</p>
				</>) : (
					<table className={"table"}>
						<thead className={"table__header"}>
						<tr>
							<th className={"table__header--item text-xs"}>Nombre y apellidos</th>
							<th className={"table__header--item text-xs"}>Motivo</th>
							<th className={"table__header--item text-xs"}>Fecha</th>
							<th className={"table__header--item text-xs"}>Acciones</th>
						</tr>
						</thead>
						<tbody>
								{appointments.map((appointment: any) => (
								<tr key={appointment.id} onClick={() => router.push(`/appointments/doctor/${appointment.id}`)}>
									<td className={"table__body--item"} >{appointment.patient_name} {appointment.patient_last_name}</td>
									<td className={"table__body--item"} >{appointment.reason_consultation.substring(0, 10)}</td>
									<td className={"table__body--item"} >{appointment.patient_appointment}</td>
									<td className={"table__body--item "}>
										<EyeIcon/>
									</td>
								</tr>
								))}
						</tbody>
					</table>
				)}


			</section>
		</section>
	)
}

export default AppointmentsDoctor;