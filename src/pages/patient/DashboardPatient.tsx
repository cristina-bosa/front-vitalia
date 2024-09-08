"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import Card from "@/components/ui/cards/Card";
import CardDoctor from "@/components/ui/cards/CardDoctor";
import ModalProfileDoctor from "@/components/ui/modals/ModalProfileDoctor";
import WelcomeComponent from "@/components/ui/cards/WelcomeComponent";
import NotificationComponent from "@/components/ui/cards/NotificationComponent";
import QuickAccessComponent from "@/components/ui/cards/QuickAccessComponent";

import { CircleArrowRight } from "lucide-react";
import {
  fetchOneDoctor,
  fetchTopFourDoctors,
} from "@/actions/patients/doctors";

import { useUser } from "@/context/useUser";
import { Profile } from "@/types";

const DashboardPatient = () => {
  const { profile } = useUser() as { profile: Profile };

  const [doctors, setDoctors] = useState([]);  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any>();

  useEffect(() => {
    setIsLoading(true);
    fetchTopFourDoctors().then((doctors) => {
      setDoctors(doctors);
      setIsLoading(false);
    });
  }, []);

  const handleOpenProfile = (id: number) => async () => {
    console.log(id);
    setIsOpen(true);
    const doctor = await fetchOneDoctor(id);
    setSelectedDoctor(doctor);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section className="dashboard">
        <WelcomeComponent user={profile} />
      </section>
      <section className="dashboard__body">
        <QuickAccessComponent />
        <NotificationComponent />
      </section>
      <section>
      <span className="text-color-dark-light">Médicos cercanos</span>
          
      </section>
      <ModalProfileDoctor
        doctor={selectedDoctor}
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default DashboardPatient;
