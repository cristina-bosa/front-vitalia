'use client';

import Button from "@/components/ui/Button";
import PatientCardProfile from "@/components/ui/cards/PatientCardProfile";
import WelcomeComponent from "@/components/ui/cards/WelcomeComponent";
import PatientHistorical from "@/components/ui/PatientHistorical";

import { PatientProfile, MedialHistoryPatient } from "@/types";
interface PatientProps{
  profile: {
    user: PatientProfile;
    medical_history: MedialHistoryPatient;
  };

}
const PatientProfilePage: React.FC <PatientProps> = ({profile}) => {
  const profileData = profile.user;
  const medicalHistory = profile.medical_history;
  return (
    <section className="flex flex-col gap-6 justify-end">
      <WelcomeComponent user={profileData} />
      {profileData && <PatientCardProfile user={profileData} />}
      {medicalHistory && <PatientHistorical medicalHistory={medicalHistory} />}
      <Button className="self-end	btn--secondary">Darme de baja</Button>
    </section>
  );
}
export default PatientProfilePage;