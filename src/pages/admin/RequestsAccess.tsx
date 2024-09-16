'use client'
import React, {useState} from "react";
import {RequestAccessData} from "@/types";
import {Check, X} from "lucide-react";
import {BadgeStatus} from "@/constants";
import { Tooltip } from "react-tooltip";
import {fetchAcceptRequests, fetchRejectRequests} from "@/actions/admin/requests";
import {HTTPStatus} from "@/types/enum";
import toast from 'react-hot-toast';
import Hero from "@/components/ui/Hero";

interface RequestsAccessProps {
	requestsData: RequestAccessData[];
}
const RequestsAccess: React.FC<RequestsAccessProps> = ({requestsData}) => {
	const [requests, setRequests] = useState(requestsData);
	const [search, setSearch] = useState<string>("");

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
		const filteredRequests = requestsData.filter((request => {
			return request.first_name.toLowerCase().includes(e.target.value.toLowerCase())
		}))
		setRequests(filteredRequests)
	}

	const handleAcceptDoctor = async (id: number) => {
		try{
			const response = await fetchAcceptRequests(id)
			if(response && response.status === HTTPStatus.OK){
				toast.success('Se ha aceptado la solicitud de acceso del médico')
				const newRequests = requests.filter((request) => request.id !== id)
				setRequests(newRequests)
			}else{
				toast.error('Ha ocurrido un error al aceptar la solicitud de acceso del médico')
			}
		}catch(error){
			console.error(error)
		}
	}
	const handleRejectDoctor = async (id:number) => {
		try{
			const response = await fetchRejectRequests(id)
			if(response && response.status === HTTPStatus.OK){
				toast.success('Se ha rechazado la solicitud de acceso del médico')
				const newRequests = requests.filter((request) => request.id !== id)
				setRequests(newRequests)
			}else{
				toast.error('Ha ocurrido un error al rechazar la solicitud de acceso del médico')
			}
		}catch(error){
			console.error(error)
		}
	}

	return (
		<section className="request">
			<Hero
				title={"Solicitudes de acceso de médico"}
				subtitle={"En esta sección encontrarás la lista de médicos que han solicitado acceso a la plataforma."}
				description={"Cada solicitud está pendiente de revisión y aprobación por el equipo administrativo."}/>
			<section className={"request__search"}>
				<input className="input" type="text" placeholder="Buscar por nombre" onChange={(event) => handleSearch(event)} />
			</section>
			{requests.length <= 0 ? (
				<section className={"request__not-found"}>
					<h2 className={"text-2xl"}>No hay solicitudes de acceso pendientes en este momento</h2>
				</section>
			) : (
			<section className={"request__content"}>
				<p className={"text-color-primary-darker text-bold text-sm"}>Se han detectado un total de {requests.length} que han solicitado acceso a la plataforma.</p>
				<table className={"table"}>
					<thead className={"table__header"}>
						<tr >
							<th className={"table__header--item text-xs"}>Nombre y apellidos</th>
							<th className={"table__header--item text-xs"}>Correo</th>
							<th className={"table__header--item text-xs"}>Teléfono</th>
							<th className={"table__header--item text-xs"}>Número profesional</th>
							<th className={"table__header--item text-xs"}>Especialidad</th>
							<th className={"table__header--item text-xs"}>Fecha de solicitud</th>
							<th className={"table__header--item text-xs"}>Estado</th>
							<th className={"table__header--item text-xs"}>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{requests.map((request: RequestAccessData) => (
							<tr key={request.id}>
								<td className={"table__body--item"}>{request.first_name} {request.last_name}</td>
								<td className={"table__body--item"}>{request.email}</td>
								<td className={"table__body--item"}>{request.phone}</td>
								<td className={"table__body--item"}>{request.professional_number}</td>
								<td className={"table__body--item"}>{request.specialty}</td>
								<td className={"table__body--item"}>{request.date_joined}</td>
								<td className={"table__body--item"}>
									<span className={`text-xs badge ${BadgeStatus[request.status as keyof typeof BadgeStatus] || 'badge--default'}`}>PEND</span>
								</td>
								<td className={"table__body--item"}>
									<span className="text-color-error" data-tooltip-id={"tooltip"}
												data-tooltip-content={"Rechazar"} onClick={() => handleRejectDoctor(request.id)}>
									<X/>
									</span>
									<span className="text-color-success" data-tooltip-id={"tooltip"}
												data-tooltip-content={"Aceptar"} onClick={() => handleAcceptDoctor(request.id)}>
									<Check />

									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
			)}
			<Tooltip id={"tooltip"} place={"top"}/>
		</section>
	)

}

export default RequestsAccess;