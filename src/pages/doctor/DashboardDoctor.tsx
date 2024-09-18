"use client";
import WelcomeComponent from "@/components/ui/cards/WelcomeComponent";
import {useUser} from "@/context/useUser";
import React, {useState} from "react";
import appointment from "@/pages/patient/Appointment";
import {DashboardMedicalAppointments} from "@/types";
import DashboardAppointment from "@/components/ui/cards/DashboardAppointment";

interface DashboardDoctorProps {
  acceptAppointments: DashboardMedicalAppointments[];
  pendingAppointments: DashboardMedicalAppointments[]
}

const DashboardDoctor :React.FC<DashboardDoctorProps> = ({acceptAppointments, pendingAppointments}) => {
  const {profile} = useUser()
  const [accepedAppointments, setAcceptedAppointments] = useState(acceptAppointments)
  const [pendAppointments, setPendingAppointments] = useState(pendingAppointments)

  return (
    <section className={"dashboard"}>
      <WelcomeComponent user={profile}/>
      <section className={"dashboard--doctor__body"}>
        <section className={"card card__today-apointment"}>
          <h2 className={"text-2xl text-color-secondary"}>Citas para hoy</h2>
          <span className={"text-m text-color-dark-light"}>Tienes un total de {accepedAppointments.length} citas para hoy</span>
          Ver todas
          {accepedAppointments.map((appointment: DashboardMedicalAppointments) => (
            <DashboardAppointment
              key={appointment.id}
              appointment={appointment}
              handleOpenAppointment={() => console.log("open appointment")}
            />
          ))}
        </section>
        <section className={"card card__today-reserded"}>
          <h2 className={"text-2xl text-color-secondary"}>Reservas pendientes</h2>
          <section>
          <span className={"text-m text-color-dark-light"}>Tienes un total de {pendAppointments.length} citas pendientes</span>
          <Link href={"/"}

          </section>
          {pendAppointments.map((appointment: DashboardMedicalAppointments) => (
            <DashboardAppointment
              key={appointment.id}
              appointment={appointment}
              handleOpenAppointment={() => console.log("open appointment")}
            />
          ))}
          {pendAppointments.map((appointment: DashboardMedicalAppointments) => (
            <DashboardAppointment
              key={appointment.id}
              appointment={appointment}
              handleOpenAppointment={() => console.log("open appointment")}
            />
          ))}
        </section>
      </section>
    </section>
  );
};

export default DashboardDoctor;
