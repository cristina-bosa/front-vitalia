'use client';

import Button from "@/components/ui/Button";
import PatientCardProfile from "@/components/ui/cards/PatientCardProfile";
import PatientHistorical from "@/components/ui/PatientHistorical";

const PatientProfile: React.FC = () => {
  const user = {
    first_name: "John",
    last_name: "Doe",
    identification_number: "123456789",
    phone: "123456789",
    email: "johndoe@test.com",
    genre: "female",
    birthdate: "2021-01-01",
  }

  return (
    <section className="flex flex-col gap-6 justify-end">
      <PatientCardProfile user={user} />
      <PatientHistorical />      
      <Button className="self-end	btn--secondary">Darme de baja</Button>
    </section>
  );
}
export default PatientProfile;