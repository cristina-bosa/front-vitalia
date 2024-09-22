'use client'

import {useState} from "react";

import {fetchFilterDoctors, fetchOneDoctor} from "@/actions/patients/doctors";

import CardDoctor from "@/components/ui/cards/CardDoctor";
import SelectComponent from "@/components/ui/Select";
import Button from "@/components/ui/Button";

import ModalProfileDoctor from "@/components/ui/modals/ModalProfileDoctor";
import {Doctor} from "@/types";

const AppointmentPage = ({ specialtyData, cityData, doctorsData }: { specialtyData: any, cityData: any, doctorsData: any }) => {

  const [specialty, setSpecialty] = useState<any[]>(specialtyData);
  const [selectedSpecialty, setSelectedSpecialty] = useState<number>();

  const [cities, setCities] = useState<any[]>(cityData);
  const [selectedCity, setSelectedCity] = useState<number>();

  const [doctors, setDoctors] = useState<Doctor[]>(doctorsData);
  const [selectedDoctor, setSelectedDoctor] = useState<any>();
  const [filteredDoctors, setFilteredDoctors] = useState<any[]>([]);

  const [isOpen, setIsOpen] = useState<boolean>(false);

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
      <section className="appointment">
      <section className="appointment__title">
        <h1>Solicitar cita médica</h1>
      </section>
      <section className="appointment__search">
        <section className="appointment__search__body">
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
        {doctors.length < 0 && (
          <p>No hay doctores disponibles</p>
        )}
        {doctors && doctors.map((doctor: Doctor, index: number) => (
          <CardDoctor
            key={doctor.id}
            doctor={doctor}
            handleClick={handleOpenProfile(doctor.id)} />
        ))}
      </section>
      <section>
    </section>
  </section>
      <ModalProfileDoctor doctor={selectedDoctor} isOpen={isOpen} handleCloseModal={handleCloseModal} />
    </>
  );
}

export default AppointmentPage;