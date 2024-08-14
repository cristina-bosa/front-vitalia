"use client"

import { useSession } from "next-auth/react";

import { redirect } from "next/navigation";

import NotificationCard from "@/components/ui/cards/NotificationCard";

const DashboardPatient = () => {
  const { data: session } = useSession();
  const user = session?.user;
  
  if(!session){
    redirect("/");
  }

  const notification = {
    doctorName: "Dr. House",
    day: "2021-01-01",
    hour: "10:00",
  }

  return (
    <>
      <section className="flex flex-row gap-6">
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Hola, {user.first_name}</h2>
        </section>
        <section className="flex flex-col gap-4">
          <h2>No te olvides bruh</h2>
          <section className="flex flex-row gap-4">
            <NotificationCard statusNotification="pending" notification={notification} />
            <NotificationCard statusNotification="cancelled" notification={notification} />
            <NotificationCard statusNotification="accepted" notification={notification} />
          </section>
        </section>
      </section>
      <section>
        <h2>¿Qué estás buscando?</h2>
        <section>
          <section>
            Solicitar cita
          </section>
          <section>
            Histórico
          </section>
        </section>
      </section>
      <section>
        <h2>Los mejoreh medicos</h2>
      </section>
    </>
  )
}

export default DashboardPatient;