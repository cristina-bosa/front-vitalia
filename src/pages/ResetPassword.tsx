'use client'
import { useState } from "react";

import Image from "next/image";

import InputComponent from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {   
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage('Hemos enviado un correo de verificación a la dirección proporcionada. Por favor, revisa tu bandeja de entrada y sigue las instrucciones para resetear tu contraseña.');
      setTimeout(() => {
        router.replace('/')
      }, 5000)
    } catch (error) {
      setMessage('Hubo un problema al intentar resetear la contraseña. Por favor, inténtalo de nuevo.');
    }
  };
  return (
    <section className="flex flex-col justify-center items-center">
      <Image src="/brand.svg" alt="Vitalia" width={200} height={200} />
      <h1>Resetear contraseña</h1>
      <form onSubmit = {handleSubmit} className="flex flex-col gap-6">
        <InputComponent
          label="email"
          id="email"
          type="email"
          value={email}
          placeholder="Introduce su email"
          onChange={e => setEmail(e.target.value)}
        />
        <Button type="submit" className="btn--secondary">Resetear contraseña</Button>
      </form>
      {message && (
        <p className="mt-4 text-center">{message}</p>
      )}
    </section>
  );
}

export default ResetPassword;