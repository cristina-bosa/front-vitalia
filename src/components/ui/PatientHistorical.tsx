'use client';

import { useEffect, useState } from 'react';

import { motion } from "framer-motion"

import { PlusCircleIcon } from "lucide-react";

import Button from "@/components/ui/Button";
import InputComponent from "@/components/ui/Input";

import { MedialHistoryPatient } from "@/types";

const PatientHistorical = ({ medicalHistory }: { medicalHistory: MedialHistoryPatient }) => {
  console.log(medicalHistory)
  const [disease, setDisease] = useState<string>('')
  const [medications, setMedications] = useState<string>('')
  const [allergies, setAllergies] = useState<string>('')
  const [medicalInterventions, setMedicalInterventions] = useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    switch (id) {
      case 'disease':
        setDisease(value);
        break;
      case 'medications':
        setMedications(value);
        break;
      case 'allergies':
        setAllergies(value);
        break;
      case 'medicalInterventions':
        setMedicalInterventions(value);
        break;
      default:
        break;
    }
  }

  const handleAddNewDisease = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  }


  return (
    <section className="flex flex-col gap-6 bg-slate-100 p-4 rounded-xl">
      <h2 className="text-2xl font-bold text-primary">Historial clínico</h2>
      <details className="details">
        <summary className="details__title">Enfermedades previas</summary>
        <section className="details__content">
          <form className="form-row" onSubmit={handleAddNewDisease}>
            <InputComponent
              id="disease"
              value={disease}
              onChange={handleInputChange}
              type="text"
              placeholder="Nombre de la enfermedad"
            />
            <Button className="btn--primary"><PlusCircleIcon className="size-6 text-white" /></Button>
          </form>
          <ul className="list-disc list-inside">
            {medicalHistory && medicalHistory.relevant_diseases.map((disease, index) => (
              <li key={index}>{disease}</li>
            ))}
          </ul>
        </section>
      </details>
      <details className="details">
        <summary className="details__title">Medicamentos actuales</summary>
        <section className="details__content">
          <form className="form-row" onSubmit={handleAddNewDisease}>
            <InputComponent
              id="medications"
              value={medications}
              onChange={handleInputChange}
              type="text"
              placeholder="Nombre del medicamento"
            />
            <Button className="btn--primary"><PlusCircleIcon className="size-6 text-white" /></Button>
          </form>
          <ul className="list-disc list-inside">
            {medicalHistory && medicalHistory.current_medication.map((medication, index) => (
              <li key={index}>{medication}</li>
            ))}
          </ul>
        </section>
      </details>
      <details className="details">
        <summary className="details__title">Alergías</summary>
        <section className="details__content">
          <form className="form-row" onSubmit={handleAddNewDisease}>
            <InputComponent
              id="allergies"
              value={medications}
              onChange={handleInputChange}
              type="text"
              placeholder="Nombre de la alergia"
            />
            <Button className="btn--primary"><PlusCircleIcon className="size-6 text-white" /></Button>
          </form>
          <ul className="list-disc list-inside">
            {medicalHistory && medicalHistory.allergies.map((allergy, index) => (
              <li key={index}>{allergy}</li>
            ))}
          </ul>
        </section>
      </details>
      <details className="details">
        <summary className="details__title">Operaciones</summary>
        <section className="details__content">
          <form className="form-row" onSubmit={handleAddNewDisease}>
            <InputComponent
              id="medicalInterventions"
              value={medicalInterventions}
              onChange={handleInputChange}
              type="text"
              placeholder="Nombre de la operación"
            />
            <Button className="btn--primary"><PlusCircleIcon className="size-6 text-white" /></Button>
          </form>
          <ul className="list-disc list-inside">
            {medicalHistory && medicalHistory.medical_intervention.map((intervention, index) => (
              <li key={index}>{intervention}</li>
            ))}
          </ul>
        </section>
      </details>
    </section>
  )
}

export default PatientHistorical;