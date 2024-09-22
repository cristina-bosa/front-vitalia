"use client";

import React, {useState} from "react";

import CardDoctor from "@/components/ui/cards/CardDoctor";
import ModalProfileDoctor from "@/components/ui/modals/ModalProfileDoctor";
import WelcomeComponent from "@/components/ui/cards/WelcomeComponent";
import QuickAccessComponent from "@/components/ui/cards/QuickAccessComponent";
import {fetchOneDoctor} from "@/actions/patients/doctors";

import {useUser} from "@/context/useUser";
import {AllDoctors, Profile} from "@/types";

interface DashboardPatientProps {
    doctorsData:  AllDoctors[]
}
const DashboardPatient: React.FC<DashboardPatientProps> = ({doctorsData}) => {
  const { profile } = useUser() as { profile: Profile };
  const [doctors, setDoctors] = useState(doctorsData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any>();
  const [availableHours, setAvailableHours] = useState<any>();

  const handleOpenProfile = (id: number) => async () => {
    const responseDoctor = await fetchOneDoctor(id);
    setSelectedDoctor(responseDoctor.data);
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section className="dashboard__header">
        <WelcomeComponent user={profile} />
      </section>
      <section className="dashboard__body">
        <QuickAccessComponent />
      </section>
      <section className={"dashboard--patient"}>
      <span className="text-color-dark-light">Médicos cercanos</span>
        {doctors.length === 0 && (<p className={"text-color-dark"}>No tenemos disponibles médicos en su zona, lamentamos las molestias</p>)}
          <section className="list-doctors">
          {doctors?.map((doctor:any) => (
            <CardDoctor
              key={doctor.id}
              doctor={doctor}
              handleClick={handleOpenProfile(doctor.id)}
            />
          ))}
          </section>
      </section>
      <ModalProfileDoctor
        doctorData={selectedDoctor}
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default DashboardPatient;
