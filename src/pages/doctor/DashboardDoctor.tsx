"use client";
import WelcomeComponent from "@/components/ui/cards/WelcomeComponent";
import {useUser} from "@/context/useUser";
import React, {useState} from "react";
import {DashboardMedicalAppointments} from "@/types";
import DashboardAppointment from "@/components/ui/cards/DashboardAppointment";
import {useRouter} from "next/navigation";
import {AppointmentStatus, typeUserURI} from "@/types/enum";
import Link from "next/link";

interface DashboardDoctorProps {
  acceptAppointments: DashboardMedicalAppointments[];
  pendingAppointments: DashboardMedicalAppointments[]
}

const DashboardDoctor :React.FC<DashboardDoctorProps> = ({acceptAppointments, pendingAppointments}) => {
  const router = useRouter()
  const {profile} = useUser()
  const [accepted, setAccepted] = useState(acceptAppointments)
  const [pending, setPending] = useState(pendingAppointments)
  console.log(acceptAppointments)

  return (
    <section className={"dashboard"}>
      <WelcomeComponent user={profile}/>
      <section className={"dashboard--doctor__body"}>
        <section className={"card card__today-apointment"}>
          <h2 className={"text-2xl text-color-secondary"}>Citas para hoy</h2>
          <span className={"text-m text-color-dark-light"}>Tienes un total de {accepted.length} citas para hoy</span>
          <Link href={`/schedule/`}>Ver todas</Link>
          {accepted.map((appointment: DashboardMedicalAppointments) => (
            <DashboardAppointment
              key={appointment.id}
              appointment={appointment}
              handleOpenAppointment={() => router.push(`/appointments/${typeUserURI.DOCTOR}/${appointment.id}`)}
            />
          ))}
        </section>
        <section className={"card card__today-reserded"}>
          <h2 className={"text-2xl text-color-secondary"}>Reservas pendientes</h2>
          <section>
          <p className={"text-m text-color-dark-light"}>Tienes un total de {pending.length} citas pendientes</p>
          </section>
          <Link href={`/appointments/${typeUserURI.DOCTOR}/all/${AppointmentStatus.PENDING}`}>Ver todas</Link>
          {pending.map((appointment: DashboardMedicalAppointments) => (
            <DashboardAppointment
              key={appointment.id}
              appointment={appointment}
              handleOpenAppointment={() => router.push(`/appointments/${typeUserURI.DOCTOR}/${appointment.id}`)}
            />
          ))}
        </section>
      </section>
    </section>
  );
};

export default DashboardDoctor;
