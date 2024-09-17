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
    <section>
      <WelcomeComponent user={profile}/>
      <section>
        <section>
        <h2>Citas para hoy</h2>
        </section>
        <section>
          <h2>Últimas reservas</h2>
          {pendAppointments.map((appointment:DashboardMedicalAppointments) => (
            <DashboardAppointment key={appointment.id} appointment={appointment} />
          ))}
        </section>
        <section>
          <h2>Últimas reseñas</h2>
        </section>
      </section>
    </section>
  );
};

export default DashboardDoctor;
