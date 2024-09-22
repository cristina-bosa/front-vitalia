"use client"
import React, {useState} from "react";
import InputComponent from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import {AppointmentStatusSpanish, typeUserURI} from "@/types/enum";
import {BadgeStatus} from "@/constants";
import {useRouter} from "next/navigation";
import Hero from "@/components/ui/Hero";
import {ArrowUpRight} from "lucide-react";

interface MedicalHistoryDoctorProps {
	historicalInfo: any
}
const MedicalHistoryDoctor : React.FC<MedicalHistoryDoctorProps> = ({historicalInfo}) =>{
	const router = useRouter()
	const [historicalData, setHistoricalData] = useState(historicalInfo)
	const [search, setSearch] = useState("")
	const [date, setDate] = useState("")

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value)
		const filteredData = historicalInfo.filter((historicalData: any) => {
			return historicalData.patient_name.toLowerCase().includes(search.toLowerCase())
		})
		if(search === ""){
			setHistoricalData(historicalInfo)
		}
		setHistoricalData(filteredData)
	}
	const handleFilterByStatus = (status: AppointmentStatusSpanish) => () => {
		const filteredData = historicalInfo.filter((historicalData: any) => {
			return historicalData.status === status
		})
		setHistoricalData(filteredData)
	}
	const handleFilterByDate = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDate(event.target.value)
		const datee = event.target.value;
		const [year, month, day] = datee.split("-");
		const formatedDate = `${day}-${month}-${year}`;

		const filteredData = historicalInfo.filter((historicalData: any) => {
			const [appointmentDate] = historicalData.patient_appointment.split(" ");
			return appointmentDate === formatedDate;
		});
		setHistoricalData(filteredData);
	};

	return (
		<section className={"history"}>
			<Hero
				title={"Mi histórico"}
				subtitle={"Estan todas las consultas que has realizado"}
				/>
			<section className={"history__search"}>
				<InputComponent
					id={"search"}
					value={search}
					onChange={(event) => handleSearch(event)}
					placeholder={"Buscar paciente"}
					type={"text"}/>
				<InputComponent
					id="date"
					type="date"
					placeholder={"Fecha"}
					value={date}
					onChange={(event) => {handleFilterByDate(event)}}
				/>
				<Button className={"btn--primary--soft"} onClick={handleFilterByStatus(AppointmentStatusSpanish.CONFIRMED)}>Citas confirmadas</Button>
				<Button className={"btn--primary--soft"} onClick={handleFilterByStatus(AppointmentStatusSpanish.CANCELED)}>Citas canceladas</Button>
				<Button className={"btn--primary--soft"} onClick={handleFilterByStatus(AppointmentStatusSpanish.FINISHED)}>Citas finalizadas</Button>
				<Button className={"btn--outline"} onClick={() => {
					setHistoricalData(historicalInfo)
					setSearch("")
					setDate("")
				}}>Restablecer filtros</Button>
			</section>
			<section className={"history__body"}>
				<table>
				<thead>
					<tr>
						<th>Identificador de la consulta</th>
						<th>Nombre y apellidos</th>
						<th>Fecha y hora</th>
						<th>Estado</th>
					</tr>
				</thead>
				<tbody>
					{historicalData.map((historicalData: any) => (
						<tr key={historicalData.id}
								onClick={() => router.push(`appointments/${typeUserURI.DOCTOR}/${historicalData.id}`)}>
							<td>{historicalData.guid}</td>
							<td>{historicalData.patient_name} {historicalData.patient_last_name}</td>
							<td>{historicalData.patient_appointment}</td>
							<td><span
								className={`text-xs badge ${BadgeStatus[historicalData.status as keyof typeof BadgeStatus] || 'badge--default'}`}>
								{historicalData.status}
							</span>
							</td>
							<td><ArrowUpRight className={"card__appointment__footer"}/></td>
						</tr>
					))}
				</tbody>
				</table>
			</section>
		</section>
	)
}
export default MedicalHistoryDoctor;
