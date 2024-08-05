import Image from "next/image";

import { PatientProfile } from "@/types";

const PatientCardProfile = ({ user }: { user: PatientProfile }) => {
  return (
    <section className="card card--patient">
      <section className="">
        <Image src="/assets/images/user.png" alt="User" width={185} height={246} />
      </section>
      <section className="card__body">
        <h6 className="text-sm text-dark-light">Datos personales</h6>
        <h3 className="text-xl font-bold text-primary">{user.first_name} {user.last_name}</h3>
        <p className="text-dark"><span className="font-bold">Identificador personal </span>{user.identification_number}</p>
        <p className="text-dark"><span className="font-bold">Teléfono </span>{user.phone}</p>
        <p className="text-dark"><span className="font-bold">Correo electrónico </span>{user.email}</p>
        <p className="text-dark"><span className="font-bold">Género </span>{user.genre}</p>
        <p className="text-dark"><span className="font-bold">Fecha de nacimiento </span>{user.birthdate}</p>
      </section>
    </section>
  );
}

export default PatientCardProfile;