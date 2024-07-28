
import Image from 'next/image';
import Link from 'next/link';

import { ArrowRightIcon } from '@heroicons/react/24/outline'



export default function Home() {
  return (
    <main className="container mx-auto flex flex-row min-h-screen gap-6 items-center justify-center">
      <section className="flex flex-col gap-6">
        <Image src="brand.svg" alt="Vitalia" width={200} height={200} />
        <h1 className="text-6xl font-light  text-primary">La atención médica que necesitas, con la facilidad que mereces</h1>
        <h2 className="text-5xl font-bold text-secondary">Encuentra tu especialista hoy</h2>
        <section className="flex gap-6">
          <Link href="auth/doctor/login" className="btn btn--primary text-white">Soy médico <ArrowRightIcon className="size-5 text-white" /></Link>
          <Link href="auth/patient/login" className='btn btn--secondary text-white'>Soy paciente <ArrowRightIcon className="size-5 text-white" /></Link>
        </section>
      </section>
    </main>
  );
}
