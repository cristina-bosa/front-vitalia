import Image from 'next/image';

import Login from '@/pages/patient/auth/Login';



export default function Home() {

  return (
    <main className="container mx-auto flex flex-row min-h-screen gap-6 items-center justify-center">
      <section className="flex flex-col gap-6">
        <Image src="brand.svg" alt="Vitalia" width={200} height={200} />
        <h1 className="text-6xl font-light  text-primary">La atención médica que necesitas, con la facilidad que mereces</h1>
        <h2 className="text-5xl font-bold text-secondary">Encuentra tu especialista hoy</h2>
      </section>
      <section className="flex gap-6">
        <Login />
      </section>
    </main>
  );
}
