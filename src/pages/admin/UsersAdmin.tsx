"use client"
import React, {useState} from "react";
import {Check, X} from "lucide-react";
import {Tooltip} from "react-tooltip";
import {fetchActivateUser, fetchDeactivateUser} from "@/actions/admin/users";
import {HTTPStatus} from "@/types/enum";
import toast from 'react-hot-toast';
import {AllUsersData} from "@/types";
import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";

interface UsersAdminProps {
	users: AllUsersData[]
}
const UsersAdmin : React.FC<UsersAdminProps> = ({users}) => {
	const [allUsers, setAllUsers] = useState(users);
	const [search, setSearch] = useState<string>("");

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
		const filteredUsers = allUsers.filter((users => {
			return users.first_name.toLowerCase().includes(e.target.value.toLowerCase())
		}))
		if(e.target.value === ""){
			return setAllUsers(users)
		}
		return setAllUsers(filteredUsers)
	}
	const handleFilterUsers = (typeUser: any) => {
		const filteredUsers = users.filter((users => {
			return users.groups[0].toLowerCase().includes(typeUser.toLowerCase())
		}))
		setAllUsers(filteredUsers)
	}
	const handleActivateUser = async (id: number) => {
		try{
			const response = await fetchActivateUser(id)
			if(response && response.status === HTTPStatus.OK){
				toast.success('Se ha activado el usuario')
				const newUsers = allUsers.map((user: AllUsersData) => {
					if(user.id === id){
						user.is_active = true
					}
					return user
				})
				setAllUsers(newUsers)
			}else{
				console.error('Ha ocurrido un error al activar el usuario')
			}
		}catch(error){
			console.error(error)
		}
	}
	const handleDeactivateUser = async (id: number) => {
		try{
			const response = await fetchDeactivateUser(id)
			if(response && response.status === HTTPStatus.OK) {
				toast.success('Se ha desactivado el usuario')
				const newUsers = allUsers.map((user: any) => {
					if (user.id === id) {
						user.is_active = false
					}
					return user
				})
				setAllUsers(newUsers)
			}else{
				toast.error('Ha ocurrido un error al desactivar el usuario')
			}
		}catch(error){
			console.error(error)
		}
	}

	return (
		<section className={"users"}>
			<Hero
				title={"Todos los usuarios de Vitalia"}
				subtitle={"En esta sección encontrarás la lista de los usuarios dentro de la plataforma."}
				description={"Cada solicitud está pendiente de revisión y aprobación por el equipo administrativo."}/>
			<section className={"users__search"}>
				<input className="input" type="text" placeholder="Buscar por nombre" onChange={(event) => handleSearch(event)}/>
				<Button className={"btn btn--outline"} onClick={() => setAllUsers(users)}>Mostrar todos los usuarios</Button>
				<Button className={"btn btn--primary--soft"} onClick={() => handleFilterUsers("Doctor")}>Médicos</Button>
				<Button className={"btn btn--primary--soft"} onClick={() => handleFilterUsers("Patient")}>Pacientes</Button>
			</section>
			{allUsers.length <= 0 ? (
				<section className={"users__not-found"}>
					<h2 className={"text-2xl"}>No hay usuarios registrados en la plataforma</h2>
				</section>
			) : (
				<section className={"users__content"}>

					<p className={"text-color-primary-darker text-bold text-sm"}>Hay un total de {allUsers.length} usuarios en la plataforma</p>
					<table className={"table"}>
						<thead className={"table__header"}>
						<tr>
							<th className={"table__header--item text-xs"}>Nombre y apellidos</th>
							<th className={"table__header--item text-xs"}>Correo</th>
							<th className={"table__header--item text-xs"}>Teléfono</th>
							<th className={"table__header--item text-xs"}>DNI</th>
							<th className={"table__header--item text-xs"}>Tipo de usuario</th>
							<th className={"table__header--item text-xs"}>Fecha de alta</th>
							<th className={"table__header--item text-xs"}>Activo</th>
							<th className={"table__header--item text-xs"}>Acciones</th>
						</tr>
						</thead>
						<tbody>
						{allUsers.map((user: AllUsersData) => (
							<tr key={user.id}>
								<td className={"table__body--item"}>{user.first_name} {user.last_name}</td>
								<td className={"table__body--item"}>{user.email}</td>
								<td className={"table__body--item"}>{user.phone}</td>
								<td className={"table__body--item"}>{user.identification_number}</td>
								<td className={"table__body--item"}>{user.groups[0]}</td>
								<td className={"table__body--item"}>{user.date_joined}</td>
								<td className={"table__body--item"}>{user.is_active ? (
									<span>Activo</span>
								) : (
									<span>Desactivado</span>
								)}</td>
								<td className={"table__body--item"}>
									<span className="text-color-error-darker" data-tooltip-id={"tooltip"}
												data-tooltip-content={"Rechazar"} onClick={() => handleDeactivateUser(user.id)}>
									<X/>
									</span>
									<span className="text-color-success-darker" data-tooltip-id={"tooltip"}
												data-tooltip-content={"Aceptar"} onClick={() => handleActivateUser(user.id)}>
									<Check/>
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
export default UsersAdmin;