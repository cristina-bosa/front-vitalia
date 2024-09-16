"use client";

import { useEffect, useState } from "react";

import { PlusCircleIcon } from "lucide-react";

import Button from "@/components/ui/Button";

import { MedialHistoryPatient } from "@/types";
import {
  fetchAllergies,
  fetchMedicalInterventions,
  fetchMedications,
  fetchRelevantDiseases,
} from "@/actions/utils";

import { MedicalHistory } from "@/types/enum";
import { addMedicalHistoryAllergies } from "@/actions/patients/medical-history";

const PatientHistorical = ({
  medicalHistory,
}: {
  medicalHistory: MedialHistoryPatient;
}) => {
  return (
    <section className="flex flex-col gap-6 bg-slate-100 p-4 rounded-xl">
      <h5 className="text-secondary font-bold">HISTORIAL CLÍNICO</h5>
      <section className="card__body">
        <section className="flex flex-col gap-4">
          <section className="flex flex-col gap-1">
            <span className="text-dark-light text-sm">
              Enfermedades previas
            </span>
            {medicalHistory.relevant_diseases.map((disease: string) => (
              <p key={disease} className="text-dark text-lg">
                {disease}
              </p>
            ))}
          </section>
          <section className="flex flex-col gap-1">
            <span className="text-dark-light text-sm">
              Medicamentos actuales
            </span>
            <section className="flex flex-row gap-4">
              {medicalHistory.current_medication.map((disease: string) => (
                <span key={disease} className="text-dark text-lg">
                  {disease}
                </span>
              ))}
            </section>
          </section>
        </section>

        <section className="flex flex-col gap-4">
          <section className="flex flex-col gap-1">
            <span className="text-dark-light text-sm">Alergias</span>
            <section className="flex flex-row gap-4">
              {medicalHistory.allergies.map((disease: string) => (
                <span key={disease} className="text-dark text-lg">
                  {disease}
                </span>
              ))}
            </section>
          </section>
          <section className="flex flex-col gap-1">
            <span className="text-dark-light text-sm">Operaciones</span>
            {medicalHistory.medical_intervention.map((disease: string) => (
              <p key={disease} className="text-dark text-lg">
                {disease}
              </p>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default PatientHistorical;
