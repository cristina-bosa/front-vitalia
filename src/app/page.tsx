import LoginForm from '@/components/LoginForm';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Button from '@/components/Button';


export default function Home() {
  return (
    <main className="container mx-auto flex flex-row min-h-screen gap-6 items-center justify-center">
      <section className="flex flex-col flex-1 gap-6">
        <Image src="brand.svg" alt="Vitalia" width={200} height={200} />
        <h1 className="text-7xl font-bold  text-primary">
          Bienvenido a Vitalia, tu espacio de salud y bienestar</h1>
      </section>
      <section className="flex flex-row gap-4">
        <section className="card bg-primary">
          <h2 className="text-xl font-bold text-light">¿Eres médico?</h2>
          <p className="text-light">Únete a nuestra red de especialistas y lleva tu práctica médica al siguiente nivel. Gestiona tus citas, accede a registros médicos electrónicos y colabora con otros profesionales para ofrecer un cuidado integral y personalizado a tus pacientes.</p>
          <section className="flex flex-row gap-4">
            <Link className="btn text-white btn--secondary" href="/auth/doctor/register">Darme de alta<ArrowRightIcon className="size-6 text-light" /></Link>
            <Link className="btn text-white btn--secondary" href="/auth/doctor/login">Iniciar sesión <ArrowRightIcon className="size-6 text-light" /></Link>
          </section>
        </section>
        <section className="card bg-secondary">
          <h2 className="text-xl font-bold text-light">¿Eres paciente?</h2>
          <p className="text-light">Descubre una nueva forma de cuidar tu salud. Reserva citas con especialistas, accede a tu historial médico y recibe recomendaciones personalizadas. En Vitalia, estamos aquí para apoyarte en cada paso hacia tu bienestar.</p>
          <section className="flex flex-row gap-4">
            <Link className="btn text-white btn--primary" href="/auth/patient/register">Darme de alta<ArrowRightIcon className="size-6 text-light" /></Link>
            <Link className="btn text-white btn--primary" href="/auth/patient/login">Iniciar sesión
              <ArrowRightIcon className="size-6 text-light" /></Link>
          </section>
        </section>
      </section>
    </main>
  );
}
