'use client'

import Button from "@/components/ui/Button";
import InputComponent from "@/components/ui/Input";

import Link from "next/link";
import { useState } from "react";

const DoctorLogin = () => {
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    

  }
  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold text-primary">Iniciar sesión</h1>
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
      <Link href="/auth/doctor/register">¿No tienes cuenta? Registrate aquí</Link>
      <Link href="/auth/reset-password">¿Te olvidaste la contraseña? Reseteala aquí</Link>
    </form>
  );
}
export default DoctorLogin;