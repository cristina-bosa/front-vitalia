import Image from "next/image";
import LoginDoctor from "@/pages/doctor/auth/LoginDoctor";

const DoctorLogin = () => {

  return (
    <section className="flex flex-row gap-6 justify-center items-center min-h-screen">
      <section className="flex-1">
        <Image src="/brand.svg" alt="Vitalia" width={200} height={200} />
        <h1 className="text-6xl font-light  text-primary">Bienvenido a Vitalia, tu espacio de gestión de citas</h1>
      </section>
      <section className="flex flex-1 flex-col gap-2">
        <LoginDoctor />
      </section>
    </section>
  );
}
export default DoctorLogin;