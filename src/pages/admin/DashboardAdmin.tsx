"use client";

import { useSession } from "next-auth/react";
import WelcomeComponent from "@/components/ui/cards/WelcomeComponent";
import React, {useState} from "react";
import {useUser} from "@/context/useUser";
import {BadgeStatus} from "@/constants";

interface DashboardAdminProps {
  lastDoctors: any;
  lastPatients: any;
}
const DashboardAdmin : React.FC<DashboardAdminProps> = ({lastDoctors, lastPatients}) => {
  const user = useUser()
  const [doctors, setDoctors] = useState<[]>(lastDoctors);
  const [patients, setPatients] = useState<[]>(lastPatients);


  return (
    <section className={"dashboard"}>
      <section className={"dashboard--admin__header"}>
      <WelcomeComponent user={user}/>
      </section>
      <section className={"dashboard--admin__body"}>
      <section className={"dashboard--admin__body__patient"}>
        <h3 className={"text-color-secondary text-2xl"}>Últimos pacientes registrados</h3>
        <table className={"table"}>
          <thead className={"table__header"}>
            <tr>
              <th className={"table__header--item text-xs"}>Nombre y apellidos</th>
              <th className={"table__header--item text-xs"}>Correo</th>
              <th className={"table__header--item text-xs"}>Fecha de alta</th>
            </tr>
          </thead>
          <tbody>
            {patients?.map((patient: any) => (
              <tr key={patient.id}>
                <td className={"table__body--item"}>{patient.first_name} {patient.last_name}</td>
                <td className={"table__body--item"}>{patient.email}</td>
                <td className={"table__body--item"}>{patient.date_joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
        <section className={"dashboard--admin__body__doctors"}>
          <h3 className={"text-color-secondary  text-2xl"}>Últimos médicos registrados</h3>
          <table className={"table"}>
            <thead className={"table__header"}>
            <tr>
              <th className={"table__header--item text-xs"}>Nombre y apellidos</th>
              <th className={"table__header--item text-xs"}>Correo</th>
              <th className={"table__header--item text-xs"}>Fecha de alta</th>
              <th className={"table__header--item text-xs"}>Estado</th>
            </tr>
            </thead>
            <tbody>
            {doctors?.map((doctors: any) => (
              <tr key={doctors.id}>
                <td className={"table__body--item"}>{doctors.first_name} {doctors.last_name}</td>
                <td className={"table__body--item"}>{doctors.email}</td>
                <td className={"table__body--item"}>{doctors.date_joined}</td>
                <td className={"table__body--item"}>
                  <span
                    className={`text-xs badge ${BadgeStatus[doctors.status as keyof typeof BadgeStatus] || 'badge--default'}`}>{doctors.status}</span>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </section>
      </section>
    </section>
  );
};

export default DashboardAdmin;
