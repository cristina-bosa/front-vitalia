import LoginForm from '@/components/LoginForm';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto flex flex-row min-h-screen items-center justify-around">
      <section className="flex flex-col flex-1 gap-6">
        <Image src="brand.svg" alt="Vitalia" width={200} height={200} />
        <h1 className="text-7xl font-bold  text-primary">
          Bienvenido a Vitalia, tu espacio de salud y bienestar</h1>
      </section>
      <section className="flex flex-1 flex-col gap-4">
        <LoginForm />
        <p>¿Olvidaste contraseña? <Link className="font-bold text-primary" href={'reset-password'}>Resetear contraseña</Link></p>
        <p>¿No tienes cuenta? <Link className="font-bold text-primary" href={'patient-register'}>Registrate aquí</Link></p>
        <p>¿Eres médico? <Link className="font-bold text-primary" href={'doctor-register'}>Registrate aquí</Link></p>
      </section>
    </main>
  );
}
