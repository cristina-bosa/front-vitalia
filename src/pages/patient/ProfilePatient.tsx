'use client';

import Button from "@/components/ui/Button";
import WelcomeComponent from "@/components/ui/cards/WelcomeComponent";
import PatientHistorical from "@/components/ui/PatientHistorical";
import CardProfilePatient from "@/components/ui/cards/CardProfilePatient";
import React from "react";

interface PatientProps{
  profile: any;
}

const PatientProfilePage: React.FC <PatientProps> = ({profile}) => {
  const medicalHistory = profile.medical_history;
  return (
    <section className="flex flex-col gap-6 justify-end">
      <CardProfilePatient profile={profile}/>
      {medicalHistory && <PatientHistorical medicalHistory={medicalHistory} />}
      <Button className="self-end	btn--secondary">Darme de baja</Button>
    </section>
  );
}
export default PatientProfilePage;