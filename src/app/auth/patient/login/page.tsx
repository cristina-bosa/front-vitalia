
import LoginPatient from '@/pages/patient/auth/LoginPatient';
import Image from 'next/image';
const PatientLogin = () => {
  return (
    <section className="flex flex-row gap-6 justify-center items-center min-h-screen">
      <section className="flex-1">
        <Image src="/brand.svg" alt="Vitalia" width={200} height={200} />
        <h1 className="text-6xl font-light  text-primary">Bienvenido a Vitalia, tu salud es nuestra prioridad</h1>
      </section>
      <section className="flex flex-1 flex-col gap-2">
        <LoginPatient />
      </section>
    </section>
  );
}
export default PatientLogin;