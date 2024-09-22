"use client";

import {ArrowUpRight, ArrowUpRightIcon, Clock} from "lucide-react";
import {useRouter} from "next/navigation";
import {AppointmentStatus, typeUserURI} from "@/types/enum";
import React, {useEffect, useState} from "react";
import {fetchMedicalAppointmentByDate} from "@/actions/doctors/medical-appointment";
import {getEndOfDay, getStartOfDay} from "@/utils/utils";

const QuickAccessComponent = () => {
  const router = useRouter();
  const [appointment, setAppointment] = useState<any>();
  useEffect(() => {
    const loadAppointment = async () => {
      const acceptAppointments = await fetchMedicalAppointmentByDate(AppointmentStatus.PENDING, {start_date: getStartOfDay(), end_date: getEndOfDay()})
      setAppointment(acceptAppointments?.data);
    }
    loadAppointment();
  }, [])
  return (
    <section className="dashboard__quick__access">
      <section>
        <span className="text-color-dark-light">Acceso rápido</span>
      </section>
      <section className="list">

        <article className="card card__quick-access"
                 onClick={() => router.push(`/appointments/${typeUserURI.PATIENT}/all`)}>
          <header className="card__header">
            <h6 className="font-semibold text-color-secondary">Reservar cita</h6>
            <p>En esta sección puede solicitar una cita médica a un especialista</p>
            <ArrowUpRightIcon className="badge badge--default"/>
          </header>
        </article>

        <article className="card card__quick-access" onClick={() => router.push('/medical-history')}>
          <header className="card__header">
            <h6 className="font-semibold text-color-secondary">Historial médico</h6>
            <p>En esta sección puede consultar su historial médico</p>
            <ArrowUpRightIcon className="badge badge--default"/>
          </header>
        </article>

        <article className="card card__quick-access">
          <header className="card__header">
            <h6 className="font-semibold text-color-secondary">Tu próxima cita</h6>
            {appointment?.length === 0 && (<p>No tienes citas pendientes</p>)}
            {appointment && (
            <article className="card__appointment" key={appointment.id}>
              <section className={"card__appointment__header"}>
                <header className={"card__appointment__header--bg"}>
                  <Clock/>
                  <time>{appointment.patient_appointment}</time>
                </header>
                <section className={"card__appointment__body"}>
                  <h6 className={"text-color-dark"}>{appointment.patient_name} {appointment.patient_last_name}</h6>
                </section>
              </section>
              <section className={"card__appointment__footer"}>
                <ArrowUpRight/>
              </section>
            </article>
            )}
          </header>
        </article>


      </section>
    </section>
  );
};

export default QuickAccessComponent;
