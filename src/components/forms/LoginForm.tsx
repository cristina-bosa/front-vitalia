'use client'

import React from "react";
import Button from "../ui/Button";

const LoginForm: React.FC = () => {
  const [email, setEmail] = React.useState('' as string)
  const [password, setPassword] = React.useState('' as string)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  }
  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <section className="flex flex-col gap-2">
        <label htmlFor="email" className="text-primary uppercase text-xs font-semibold">Correo electrónico</label>
        <input
          className="input"
          type="email"
          id="email"
          placeholder="Introduce tu correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)} />
      </section>
      <section className="flex flex-col gap-2">
        <label htmlFor="email" className="text-primary uppercase text-xs font-semibold">Contraseña</label>
        <input
          className="input"
          type="password"
          id="password"
          placeholder="Introduce tu contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)} />
        <Button type="submit" className="btn--secondary">Iniciar sesión</Button>
      </section>
    </form>
  )
}
export default LoginForm;