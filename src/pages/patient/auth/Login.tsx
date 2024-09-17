'use client'

import React, {startTransition, useState} from "react";

import {useRouter} from "next/navigation";
import Link from "next/link";

import {signIn, useSession} from "next-auth/react";

import Button from "@/components/ui/Button";
import InputComponent from "@/components/ui/Input";
import {LoginSchema} from "@/schemas";


const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<{ email?: string; password?: string;}>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validate = LoginSchema.safeParse(formData);

    if (validate.success) {
      setErrors({});
      startTransition(() => {
        signIn('credentials', {
          email: formData.email,
          password: formData.password,
          redirect: false
        }).then((data) => {
          if (data?.error) {
            setErrors({ email: '', password: 'Credenciales incorrectas, inténtalo nuevamente' });
            return;
          }
          router.push('/dashboard');
        });
      });
    } else {
      const fieldErrors: { email?: string; password?: string } = {};
      validate.error.errors.forEach(err => {
        if (err.path[0] === 'email') {
          fieldErrors.email = 'El email es obligatorio';
        }
        if (err.path[0] === 'password') {
          fieldErrors.password = 'La contraseña es obligatoria';
        }
      });
      setErrors(fieldErrors);
    }
  };

  return (
    <form className="auth__form" onSubmit={handleSubmit} >
      <h1 className="text-xl text-color-secondary">Iniciar sesión</h1>
      <InputComponent
        id="email"
        value={formData.email}
        placeholder="Introduce su email o nombre de usuario"
        onChange={event => setFormData({...formData, email: event.target.value})}
        type="text"
        label="email"
        error={errors.email}
      />
      <InputComponent
        id="password"
        value={formData.password}
        placeholder="Introduce tu contraseña"
        onChange={event => setFormData({...formData, password: event.target.value})}
        type="password"
        label="contraseña"
        error={errors.password}
      />
      <Button type="submit" className="btn--secondary">Iniciar sesión</Button>
      <Link href="/auth/doctor/register">¿Eres médico y no tienes cuenta? Registrate aquí</Link>
      <Link href="/auth/patient/register">¿Eres paciente y no tienes cuenta? Registrate aquí</Link>
      <Link href="/auth/reset-password">¿Te olvidaste la contraseña? Reseteala aquí</Link>
    </form>
  );
}
export default Login;