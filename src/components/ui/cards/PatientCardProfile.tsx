"use client";
import Image from "next/image";
import { Edit } from "lucide-react";
import { PatientProfile } from "@/types";

import Button from "@/components/ui/Button";
import { useState } from "react";

const PatientCardProfile = ({ user }: { user: PatientProfile }) => {
  const years =
    new Date().getFullYear() - new Date(user.birth_date).getFullYear();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  console.log(isEditing)
  return (
    <section className="card card--patient">
      <h5 className="text-secondary font-bold">DATOS PERSONALES</h5>
      <section className="card__body">
        <section className="flex flex-col gap-4">
          <section className="flex flex-col gap-1">
            <span className="text-dark-light text-sm">
              Identificador personal
            </span>
            <p className="text-dark text-lg">{user.identification_number}</p>
          </section>
          <section className="flex flex-col gap-1">
            <span className="text-dark-light text-sm">Género</span>
            <p>{user.genre}</p>
          </section>
        </section>
        <section className="flex flex-col gap-4">
          <section className="flex flex-col gap-1">
            <span className="text-dark-light text-sm">Correo electrónico</span>
            <p className="text-dark text-lg">{user.email}</p>
          </section>
          <section className="flex flex-col gap-1">
            <span className="text-dark-light text-sm">Teléfono</span>
            <p>{user.phone}</p>
          </section>
        </section>
        <section className="flex flex-col gap-4">
          <section className="flex flex-col gap-1">
            <span className="text-dark-light text-sm">Fecha de nacimiento</span>
            <p className="text-dark text-lg">
              {user.birth_date}{" "}
              <span className="text-dark-light">({years} años)</span>
            </p>
          </section>
        </section>
      </section>
      
      <section
        className="relative flex items-center self-end group hover:cursor-pointer"
        onClick={() => setIsEditing(true)}
      >
        <Edit className="text-primary-darker group-hover:translate-x-[-10px] transition-transform duration-300 hover:cursor-pointer" />
        <span className="ml-2 hidden text-sm text-primary-darker group-hover:block transition-all duration-300">
          Editar
        </span>
      </section>
    </section>
  );
};

export default PatientCardProfile;
