'use client';

import Button from "@/components/ui/Button";
import PatientCardProfile from "@/components/ui/cards/PatientCardProfile";
import PatientHistorical from "@/components/ui/PatientHistorical";
import { useSession } from "next-auth/react";

const PatientProfile: React.FC = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const medicalHistory = session?.medical_history;
  return (
    <section className="flex flex-col gap-6 justify-end">
      {user && <PatientCardProfile user={user} />}
      {medicalHistory && <PatientHistorical medicalHistory={medicalHistory} />}
      <Button className="self-end	btn--secondary">Darme de baja</Button>
    </section>
  );
}
export default PatientProfile;