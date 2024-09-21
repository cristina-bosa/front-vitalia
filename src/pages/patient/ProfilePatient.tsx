'use client';

import PatientHistorical from "@/components/ui/PatientHistorical";
import CardProfilePatient from "@/components/ui/cards/CardProfilePatient";
import React from "react";

interface PatientProps{
  profile: any;
}

const PatientProfilePage: React.FC <PatientProps> = ({profile}) => {
  const medicalHistory = profile.medical_history;
  return (
    <section className="container form-column">
      <CardProfilePatient profile={profile}/>
      {medicalHistory && <PatientHistorical medicalHistory={medicalHistory} />}
    </section>
  );
}
export default PatientProfilePage;