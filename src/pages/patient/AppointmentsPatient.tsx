"use client";
import React, {useState} from "react";
import Hero from "@/components/ui/Hero";
import CardDoctor from "@/components/ui/cards/CardDoctor";
import {fetchOneDoctor} from "@/actions/patients/doctors";
import ModalProfileDoctor from "@/components/ui/modals/ModalProfileDoctor";
import InputComponent from "@/components/ui/Input";
import SelectComponent from "@/components/ui/Select";
import Button from "@/components/ui/Button";

interface AppointmentsProps {
	allDoctors: any;
	cities: any;
	specialties: any;
}
const AppointmentsPatient: React.FC <AppointmentsProps> = ({allDoctors, cities, specialties}) => {
	const [doctors, setDoctors] = useState(allDoctors);
	const [city, setCity] = useState<[]>(cities);
	const [specialty, setSpecialty] = useState<[]>(specialties);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedDoctor, setSelectedDoctor] = useState<any>();
	const [search, setSearch] = useState<string>("");

	const handleOpenProfile = (id: number) => async () => {
		const responseDoctor = await fetchOneDoctor(id);
		setSelectedDoctor(responseDoctor.data);
		setIsOpen(true);
	};

	const handleSearchByName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
		const filteredDoctors = allDoctors.filter((doctor: any) => {
			const fullName = `${doctor.first_name} ${doctor.last_name}`;
			return fullName.toLowerCase().includes(event.target.value.toLowerCase());
		});
		if(event.target.value === "") {
			setDoctors(allDoctors);
		}else{
			setDoctors(filteredDoctors);
		}
	}
	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedId = event.target.value;
		if (selectedId === 'null') {
			return setDoctors(allDoctors);
		}
		const typeOfSelect = event.target.id;
		if (typeOfSelect === "city") {
			const selectedCity:any = city.find((city: any) => city.id === parseInt(selectedId));
			if (selectedCity) {
				const filteredDoctors = allDoctors.filter((doctor: any) => doctor.city === selectedCity.name);
				setDoctors(filteredDoctors);
			}
		}
		if (typeOfSelect === "specialty") {
			const selectedSpecialty:any = specialty.find((specialty: any) => specialty.id === parseInt(selectedId));
			if (selectedSpecialty) {
				const filteredDoctors = allDoctors.filter((doctor: any) => doctor.specialty === selectedSpecialty.name);
				setDoctors(filteredDoctors);
			}
		}
	};


	return (
		<>
		<Hero title={"Solicitar cita médica"} subtitle={"En esta sección puedes solicitar una cita médica"}/>
			<section className={"form-row"}>
				<InputComponent
					id={"search"}
					value={search}
					onChange={(event) => handleSearchByName(event)}
					type={"text"}
					placeholder={"Buscar por nombre"}
				/>
				<SelectComponent
					id={"city"}
					options={city}
					onChange={(event) => handleSelectChange(event)} />
				<SelectComponent
					id={"specialty"}
					options={specialty}
					onChange={(event) => handleSelectChange(event)} />
				<Button onClick={() => {
					setDoctors(allDoctors)
					setSearch("")
				}}>Reestablecer</Button>
			</section>
	<section className="list-doctors">
		{doctors?.length === 0 && <p>No se han encontrado médicos que cumplan los criterios de búsqueda</p>}
		{doctors?.map((doctor:any) => (
			<CardDoctor
				key={doctor.id}
				doctor={doctor}
				handleClick={handleOpenProfile(doctor.id)}
			/>
		))}
	</section>
			<ModalProfileDoctor
				doctorData={selectedDoctor}
				isOpen={isOpen}
				handleCloseModal={() => setIsOpen(false)}
			/>
	</>
	)
}

export default AppointmentsPatient;

