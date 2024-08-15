"use client"

import { useSession } from "next-auth/react";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import NotificationCard from "@/components/ui/cards/NotificationCard";
import Card from "@/components/ui/cards/Card";
import CardDoctor from "@/components/ui/cards/CardDoctor";

import { CircleChevronRight } from "lucide-react";
import { fetchDoctors } from "@/actions/patients/doctors";

const DashboardPatient = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  const [doctors, setDoctors] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAppointment = () => {
    router.push('/patient/appointment');
  }

  const handleHistorical = () => {
    router.push('/patient/historical');
  }

  useEffect(() => {
    setIsLoading(true);
    fetchDoctors().then((doctors) => {
      setDoctors(doctors);
      setIsLoading(false);
    })
  }, [])





  return (
    <>
      <section className="flex flex-row gap-6 mb-6">
        <section className="flex flex-1 flex-col gap-4">
          <h1 className="text-4xl font-bold text-primary-darker">Hola, {user?.first_name}</h1>
          <p>Hoy es {day} de {month}, {year}</p>
        </section>
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-2xl font-bold text-primary-darker">Últimas notificaciones</h2>
          <section className="flex flex-1 flex-row gap-4">
            {/* <NotificationCard statusNotification="pending" notification={notifications} />
            <NotificationCard statusNotification="cancelled" notification={notifications} />
            <NotificationCard statusNotification="accepted" notification={notifications} /> */}
          </section>
        </section>
      </section>
      <section className="flex flex-col gap-6 mb-6">
        <h2 className="text-2xl font-bold text-primary-darker">¿Qué estás buscando?</h2>
        <section className="flex flex-row gap-6">
          <Card title="Solicitar cita" description="Encuentra a los médicos más destacados" icon={<CircleChevronRight onClick={handleAppointment} className="size-6 text-primary-darker hover:cursor-pointer" />} />
          <Card title="Mi histórico" description="Accede directamente a tu historial clínico de Vitalia" icon={<CircleChevronRight onClick={handleHistorical} className="size-6 text-primary-darker hover:cursor-pointer" />} />
        </section>
      </section>
      <section className="flex flex-col gap-6 mb-6">
        <h2 className="text-2xl font-bold text-primary-darker">Los mejores médicos</h2>        
        {isLoading && <p>Cargando...</p>}
        <section className="list-doctors">
        {doctors && doctors.map((doctor : any) => (
          <CardDoctor key={doctor.id} doctor={doctor} icon={<CircleChevronRight className="size-6 text-primary-darker hover:cursor-pointer" />} />
        ))}
                {doctors && doctors.map((doctor : any) => (
          <CardDoctor key={doctor.id} doctor={doctor} icon={<CircleChevronRight className="size-6 text-primary-darker hover:cursor-pointer" />} />
        ))}
                {doctors && doctors.map((doctor : any) => (
          <CardDoctor key={doctor.id} doctor={doctor} icon={<CircleChevronRight className="size-6 text-primary-darker hover:cursor-pointer" />} />
        ))}
                {doctors && doctors.map((doctor : any) => (
          <CardDoctor key={doctor.id} doctor={doctor} icon={<CircleChevronRight className="size-6 text-primary-darker hover:cursor-pointer" />} />
        ))}
                {doctors && doctors.map((doctor : any) => (
          <CardDoctor key={doctor.id} doctor={doctor} icon={<CircleChevronRight className="size-6 text-primary-darker hover:cursor-pointer" />} />
        ))}

        </section>
        
      </section>
    </>
  )
}

export default DashboardPatient;