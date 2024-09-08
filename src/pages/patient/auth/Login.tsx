'use client'

import { startTransition, useState } from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { useSession } from "next-auth/react";

import Button from "@/components/ui/Button";
import InputComponent from "@/components/ui/Input";

import { signIn } from "next-auth/react";



const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const s = useSession()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    startTransition(() => {
      signIn('credentials', {
        email: email,
        password: password,
        redirect: false
      }).then((data) => {
        if(data?.error){
          console.error(data.error)
          return
        }
        router.push('/dashboard')
      })
    })


  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit} >
      <h1 className="text-2xl font-bold text-primary">Iniciar sesión</h1>
      <InputComponent
        id="email"
        value={email}
        placeholder="Introduce su email o nombre de usuario"
        onChange={e => setEmail(e.target.value)}
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
      <Link href="/auth/doctor/register">¿Eres médico y no tienes cuenta? Registrate aquí</Link>
      <Link href="/auth/patient/register">¿Eres paciente y no tienes cuenta? Registrate aquí</Link>
      <Link href="/auth/reset-password">¿Te olvidaste la contraseña? Reseteala aquí</Link>
    </form>
  );
}
export default Login;