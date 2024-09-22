import Image from 'next/image';

import Login from '@/pages/patient/auth/Login';



export default function Home() {

  return (
    <main className="auth">
      <section className="auth__content">
        <Image src="brand.svg" alt="Vitalia" width={200} height={200} />
        <Login />
      </section>
    </main>
  );
}
