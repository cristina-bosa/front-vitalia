'use client';

import { useEffect, useState } from 'react';

import { PlusCircleIcon } from "lucide-react";

import Button from "@/components/ui/Button";
import InputComponent from "@/components/ui/Input";

import { MedialHistoryPatient } from "@/types";
import { fetchAllergies, fetchMedicalInterventions, fetchMedications, fetchRelevantDiseases } from '@/actions/utils';

import { MedicalHistory } from '@/constants';
import { addMedicalHistoryAllergies } from '@/actions/patients/medical-history';

const PatientHistorical = ({ medicalHistory }: { medicalHistory: MedialHistoryPatient }) => {

  const [disease, setDisease] = useState<string[]>([])
  const [medications, setMedications] = useState([])
  const [allergies, setAllergies] = useState<[]>([])
  const [medicalInterventions, setMedicalInterventions] = useState<[]>()

  const [selectedDisease, setSelectedDisease] = useState('')
  const [selectedMedication, setSelectedMedication] = useState('')
  const [selectedAllergies, setSelectedAllergies] = useState('')
  const [selectedMedicalInterventions, setSelectedMedicalInterventions] = useState('')

  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    fetchAllergies().then((allergies) => {
      setAllergies(allergies)
    })
    fetchRelevantDiseases().then((disease) => {
      setDisease(disease)
    })
    fetchMedicalInterventions().then((medicalInterventions) => {
      setMedicalInterventions(medicalInterventions)
    })
    fetchMedications().then((medications) => {
      setMedications(medications)
    })
  }, [medicalHistory])

  console.log('historial', medicalHistory)

  const handleNewMedicalHistory = async (e: React.FormEvent<HTMLFormElement>, typeMedicalHistory: MedicalHistory) => {
    e.preventDefault();
    if (typeMedicalHistory === MedicalHistory.ALLERGIES) {
      try{
      const response = await addMedicalHistoryAllergies(+selectedAllergies)
      console.log(response)
      
      } catch (error) {
        console.error(error)
      }
    }
    if (typeMedicalHistory === MedicalHistory.RELEVANT_DISEASES) {
      console.log('enfermedad previa', selectedDisease)
    }
    if (typeMedicalHistory === MedicalHistory.CURRENT_MEDICATION) {
      console.log('medicacion actual', selectedMedication)
    }
    if (typeMedicalHistory === MedicalHistory.MEDICAL_INTERVENTION) {
      console.log('cirgias', selectedMedicalInterventions)
    }
  }

  return (
    <section className="flex flex-col gap-6 bg-slate-100 p-4 rounded-xl">
      <h2 className="text-2xl font-bold text-primary">Historial clínico</h2>
      <details className="details">
        <summary className="details__title">Enfermedades previas</summary>
        <section className="details__content">
          <form className="form-row" onSubmit={(e) => handleNewMedicalHistory(e, MedicalHistory.RELEVANT_DISEASES)}>
            <select
              id='relevant_diseases'
              className={`select`}
              value={selectedDisease}
              onChange={(e) => setSelectedDisease(e.target.value)}>
              <option value='null'>Seleccione una opción</option>
              {disease.map((option: any) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            <Button className="btn--primary"><PlusCircleIcon className="size-6 text-white" /></Button>
          </form>
          <ul className="list-disc list-inside">
            {medicalHistory && medicalHistory.relevant_diseases.map((disease, index) => (
              <li key={index}>{disease}</li>
            ))}
          </ul>
        </section>
      </details >
      <details className="details">
        <summary className="details__title">Medicamentos actuales</summary>
        <section className="details__content">
          <form className="form-row" onSubmit={(e) => handleNewMedicalHistory(e, MedicalHistory.CURRENT_MEDICATION)}>
            <select
              id='current_medication'
              className={`select`}
              value={selectedMedication}
              onChange={(e) => setSelectedMedication(e.target.value)}>
              <option value='null'>Seleccione una opción</option>
              {medications.map((option: any) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
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
          <form className="form-row" onSubmit={(e) => handleNewMedicalHistory(e, MedicalHistory.ALLERGIES)}>
            <select
              id='allergies'
              className={`select`}
              value={selectedAllergies}
              onChange={(e) => setSelectedAllergies(e.target.value)}>
              <option value='null'>Seleccione una opción</option>
              {allergies.map((option: any) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
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
          <form className="form-row" onSubmit={(e) => handleNewMedicalHistory(e, MedicalHistory.MEDICAL_INTERVENTION)}>
            <select
              id='medical_intervention'
              className={`select`}
              value={selectedMedicalInterventions}
              onChange={(e) => setSelectedMedicalInterventions(e.target.value)}>
              <option value='null'>Seleccione una opción</option>
              {medicalInterventions && medicalInterventions.map((option: any) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            <Button className="btn--primary"><PlusCircleIcon className="size-6 text-white" /></Button>
          </form>
          <ul className="list-disc list-inside">
            {medicalHistory && medicalHistory.medical_intervention.map((intervention, index) => (
              <li key={index}>{intervention}</li>
            ))}
          </ul>
        </section>
      </details>
    </section >
  )
}

export default PatientHistorical;