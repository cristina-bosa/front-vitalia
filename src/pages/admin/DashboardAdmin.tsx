"use client";

import { useSession } from "next-auth/react";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import NotificationCard from "@/components/ui/cards/NotificationCard";
import Card from "@/components/ui/cards/Card";
import CardDoctor from "@/components/ui/cards/CardDoctor";
import ModalProfileDoctor from "@/components/ui/modals/ModalProfileDoctor";

import { CircleArrowRight } from "lucide-react";
import {
  fetchOneDoctor,
  fetchTopFourDoctors,
} from "@/actions/patients/doctors";
import Image from "next/image";
import WelcomeComponent from "@/components/ui/cards/WelcomeComponent";

const DashboardAdmin = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const [doctors, setDoctors] = useState([]);
  const [notifications, setNotifications] = useState([]);
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

  const handleAppointment = () => {
    router.push("/patient/appointment");
  };

  const handleHistorical = () => {
    router.push("/patient/historical");
  };

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
      <section className="flex flex-row gap-6 mb-6">
        {/* <WelcomeComponent user={user} /> */}
        <section className="flex flex-1 flex-col gap-4 bg-slate-100 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-primary-darker">
            Últimas notificaciones
          </h2>
          <section className="flex flex-1 flex-row gap-4">
            {/* <NotificationCard statusNotification="pending" notification={notifications} />
            <NotificationCard statusNotification="cancelled" notification={notifications} />
            <NotificationCard statusNotification="accepted" notification={notifications} /> */}
          </section>
        </section>
      </section>
      <section className="flex flex-col gap-6 mb-6">
        <h2 className="text-2xl font-bold text-primary-darker">
          ¿Qué estás buscando?
        </h2>
        <section className="flex flex-row gap-6">
          <Card
            title="Solicitar cita"
            description="Encuentra a los médicos más destacados"
            icon={
              <CircleArrowRight
                onClick={handleAppointment}
                className="size-6 text-primary-darker hover:cursor-pointer"
              />
            }
          />
          <Card
            title="Mi histórico"
            description="Accede directamente a tu historial clínico de Vitalia"
            icon={
              <CircleArrowRight
                onClick={handleHistorical}
                className="size-6 text-primary-darker hover:cursor-pointer"
              />
            }
          />
        </section>
      </section>
      <section className="flex flex-col gap-6 mb-6">
        <h2 className="text-2xl font-bold text-primary-darker">
          Los mejores médicos cerca de ti
        </h2>
        {isLoading && <p>Cargando...</p>}
        <section className="list-doctors">
          {doctors &&
            doctors.map((doctor: any) => (
              <CardDoctor
                key={doctor.id}
                doctor={doctor}
                handleClick={handleOpenProfile(doctor.id)}
              />
            ))}
        </section>
        <section>
          {doctors && doctors.length === 0 && (
            <p className="text-primary-darker">
              No hay médicos disponibles en tu área en este momento. Lamentamos
              mucho la situación y esperamos poder cubrir tu zona en el futuro.
            </p>
          )}
        </section>
      </section>
      <ModalProfileDoctor
        doctor={selectedDoctor}
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default DashboardAdmin;
