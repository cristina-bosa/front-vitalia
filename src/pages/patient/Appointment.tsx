'use client'

import { useEffect, useState } from "react";

import { fetchDoctors, fetchFilterDoctors, fetchOneDoctor } from "@/actions/patients/doctors";
import { fetchCity, fetchSpecialty } from "@/actions/utils";

import CardDoctor from "@/components/ui/cards/CardDoctor";
import SelectComponent from "@/components/ui/Select";
import Button from "@/components/ui/Button";

import { CircleChevronRight } from "lucide-react";
import ModalProfileDoctor from "@/components/ui/modals/ModalProfileDoctor";


const AppointmentPage = () => {

  const [specialty, setSpecialty] = useState<any[]>([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState<number>();

  const [cities, setCities] = useState<any[]>([]);
  const [selectedCity, setSelectedCity] = useState<number>();

  const [doctors, setDoctors] = useState<any[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<any>();
  const [filteredDoctors, setFilteredDoctors] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetchSpecialty().then((specialty) => {
      setSpecialty(specialty);
    })
    fetchCity().then((cities) => {
      setCities(cities);
    })
    fetchDoctors().then((doctors) => {
      setDoctors(doctors);
      setFilteredDoctors(doctors);
      setIsLoading(false);
    })
  }, [])

  const handleSelectChange = (e: any) => {
    const { id, value } = e.target;
    if (id === 'specialty') {
      setSelectedSpecialty(value);
    } else {
      setSelectedCity(value);
    }
  }

  const handleSearch = async () => {
    fetchFilterDoctors(selectedCity, selectedSpecialty).then((doctors) => {
      setFilteredDoctors(doctors);
    })
  }

  const handleOpenProfile = (id: number) => async () => {
    console.log(id);
    setIsOpen(true);
    const doctor = await fetchOneDoctor(id);
    setSelectedDoctor(doctor);
  }

  const handleCloseModal = () => {
    setIsOpen(false);
  }

  const handleReseat = () => {
    setSelectedCity(undefined);
    setSelectedSpecialty(undefined);
    setFilteredDoctors(doctors);
  }
  return (
    <>
      <section>
        <h1 className="text-4xl font-bold text-primary-darker">Solicitar cita médica</h1>
      </section>
      <section className="flex flex-row gap-6 my-6">
        <section className="flex flex-row gap-6">
          <SelectComponent
            id="specialty"
            label="Especialidad"
            value={selectedSpecialty}
            className="select"
            options={specialty}
            onChange={handleSelectChange}
          />
          <SelectComponent
            id="city"
            label="Ciudad"
            value={selectedCity}
            className="select"
            options={cities}
            onChange={handleSelectChange}
          />
        </section>
        <Button className="btn--secondary self-end" onClick={handleSearch}>Buscar</Button>
        <Button className="btn--outline self-end" onClick={handleReseat}>Resetear</Button>
      </section>
      <section className="list-doctors">
        {isLoading && <p>Cargando...</p>}
        {filteredDoctors && filteredDoctors.map((doctor: any) => (
          <CardDoctor
            key={doctor.id}
            doctor={doctor}
            handleClick={handleOpenProfile(doctor.id)} />
        ))}
      </section>
      <section>
        {filteredDoctors.length === 0 && <p className="text-primary-darker">No se encontraron médicos que cumplan con tus criterios de búsqueda.</p>}
      </section>
      <ModalProfileDoctor doctor={selectedDoctor} isOpen={isOpen} handleCloseModal={handleCloseModal} />
    </>
  );
}

export default AppointmentPage;