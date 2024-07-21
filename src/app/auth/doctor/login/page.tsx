'use client'
import Image from "next/image";
import Button from "@/components/Button";
import InputComponent from "@/components/Input";

import Link from "next/link";
import { useState } from "react";

const DoctorLogin = () => {
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(firstName, password)

  }
  return (
    <section className="flex flex-row gap-6 justify-center items-center min-h-screen">
      <section>
        <Image src="/assets/images/doctor.png" alt="Vitalia" width={600} height={600} quality={72} loading="lazy"/>
      </section>
      <section className="flex flex-col gap-2">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <h1 className="text-xl font-bold">Iniciar sesión</h1>
          <InputComponent
            id="email"
            value={firstName}
            placeholder="Introduce su email o nombre de usuario"
            onChange={e => setFirstName(e.target.value)}
            type="text"
            label="email / nombre de usuario"
          />
          <InputComponent
            id="password"
            value={password}
            placeholder="Introduce tu contraseña"
            onChange={e => setPassword(e.target.value)}
            type="password"
            label="contraseña"
          />
          <Button type="submit" className="btn--secondary">Iniciar sesión</Button>
          <Link href="/auth/reset-password">¿Te olvidaste la contraseña? Reseteala aquí</Link>
        </form>
      </section>
    </section>
  );
}
export default DoctorLogin;