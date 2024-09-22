import React, {useEffect, useState} from "react";
import {fetchAllergies, fetchMedicalInterventions, fetchMedications, fetchRelevantDiseases} from "@/actions/utils";
import HistoricalClinicItemAddData from "@/components/ui/HistoricalClinicItemAddData";
import {MedialHistoryPatient} from "@/types";
import {addMedicalHistory, removeMedicalHistory} from "@/actions/patients/medical-history";
import {HTTPStatus} from "@/types/enum";
import toast from "react-hot-toast"; // Asegúrate que este import está bien

interface PatientHistoricalProps {
  medicalHistory: MedialHistoryPatient;
}

const PatientHistorical: React.FC<PatientHistoricalProps> = ({medicalHistory}) => {
  const [medicalHistoryData, setMedicalHistoryData] = useState<MedialHistoryPatient>(medicalHistory);
  const [optsAllergies, setOptsAllergies] = useState([]);
  const [optsMedicalInterventions, setOptsMedicalInterventions] = useState([]);
  const [optsRelevantDiseases, setOptsRelevantDiseases] = useState([]);
  const [optsMedications, setOptsMedications] = useState([]);

  const [selectedAllergies, setSelectedAllergies] = useState([]);
  const [selectedMedicalInterventions, setSelectedMedicalInterventions] = useState([]);
  const [selectedRelevantDiseases, setSelectedRelevantDiseases] = useState([]);
  const [selectedMedications, setSelectedMedications] = useState([]);

  const [itemToRemove, setItemToRemove] = useState('');

  useEffect(() => {
    const fetchAll = async () => {
      const allergies = await fetchAllergies();
      const medicalInterventions = await fetchMedicalInterventions();
      const relevantDiseases = await fetchRelevantDiseases();
      const medications = await fetchMedications();

      setOptsAllergies(allergies.data);
      setOptsMedicalInterventions(medicalInterventions.data);
      setOptsRelevantDiseases(relevantDiseases.data);
      setOptsMedications(medications.data);
    };
    fetchAll();
  }, []);

  const handleRemove = async (type: string, item: string) => {
    let updatedItems:any[]

    switch (type) {
      case 'allergies':
        updatedItems = medicalHistoryData.allergies.filter((allergy: string) => allergy !== item);
        setMedicalHistoryData((prevData) => ({ ...prevData, allergies: updatedItems }));
        break;
      case 'current-medication':
        updatedItems = medicalHistoryData.current_medication.filter((medication: string) => medication !== item);
        setMedicalHistoryData((prevData) => ({ ...prevData, current_medication: updatedItems }));
        break;
      case 'medical-intervention':
        updatedItems = medicalHistoryData.medical_intervention.filter((intervention: string) => intervention !== item);
        setMedicalHistoryData((prevData) => ({ ...prevData, medical_intervention: updatedItems }));
        break;
      case 'relevant-diseases':
        updatedItems = medicalHistoryData.relevant_diseases.filter((disease: string) => disease !== item);
        setMedicalHistoryData((prevData) => ({ ...prevData, relevant_diseases: updatedItems }));
        break;
    }
    try{
      const response = await removeMedicalHistory(type, item)
      if(response && response.status === HTTPStatus.ACCEPTED){
        toast.success('Se ha eliminado una patología')
      }else{
        toast.error('No se ha podido eliminar la patología')
      }
    }catch(error){
      console.error(error)
    }finally {
      setItemToRemove('');
    }

  };
  const handleSubmit = async (type:string, selected: any) => {
    let data;
    let names: any[];
    switch (type) {
      case 'allergies':
        names = selectedAllergies.map((allergy: any) => allergy.label)
        data = selectedAllergies.map((allergy: any) => +allergy.value)
        setMedicalHistoryData((prevData) => ({ ...prevData, allergies: [...prevData.allergies, ...names] }));
        break;
      case 'current-medication':
        names = selectedMedications.map((medication: any) => medication.label)
        data = selectedMedications.map((medication: any) => +medication.value)
        setMedicalHistoryData((prevData) => ({ ...prevData, current_medication: [...prevData.current_medication, ...names] }));
        break;
      case 'medical-intervention':
        names = selectedMedicalInterventions.map((medicalIntervention: any) => medicalIntervention.label)
        selectedMedicalInterventions.map((medicalIntervention: any) => +medicalIntervention.value)
        setMedicalHistoryData((prevData) => ({ ...prevData, medical_intervention: [...prevData.medical_intervention, ...names] }));
        break;
      case 'relevant-diseases':
        names = selectedRelevantDiseases.map((relevantDisease: any) => relevantDisease.label)
        data = selectedRelevantDiseases.map((relevantDisease: any) => +relevantDisease.value)
        setMedicalHistoryData((prevData) => ({ ...prevData, relevant_diseases: [...prevData.relevant_diseases, ...names] }));
        break;
    }
    try{
      const response = await addMedicalHistory(type, data)
      if(response && response.status === HTTPStatus.ACCEPTED){
        toast.success('Se ha añadido una nueva patología')
      }else{
        toast.error('No se ha podido añadir la patología')
      }
    }catch(error){
      console.error(error)
    }finally{
      switch (type) {
        case 'allergies':
          setSelectedAllergies([])
          break;
        case 'current-medication':
          setSelectedMedications([])
          break;
        case 'medical-intervention':
          setSelectedMedicalInterventions([])
          break;
        case 'relevant-diseases':
          setSelectedRelevantDiseases([])
          break;
      }
    }
  };

  return (
    <section className="card">
      <section className="historical-clinic__list__medical">
        <h5 className="text-color-secondary text-xl font-bold">Historial clínico</h5>
        <HistoricalClinicItemAddData
          name="Alergías"
          optsSelect={optsAllergies}
          historicalItem={medicalHistoryData.allergies}
          onChange={setSelectedAllergies}
          onRemove={(item:any) => handleRemove('allergies', item)}
          onClick={() => handleSubmit('allergies', selectedAllergies)}
        />
        <HistoricalClinicItemAddData
          name="Medicación Actual"
          optsSelect={optsMedications}
          historicalItem={medicalHistoryData.current_medication}
          onChange={setSelectedMedications}
          onRemove={(item:any) => handleRemove('current-medication', item)}
          onClick={() => handleSubmit('current-medication', selectedMedications)}
        />
        <HistoricalClinicItemAddData
          name="Operaciones"
          optsSelect={optsMedicalInterventions}
          historicalItem={medicalHistoryData.medical_intervention}
          onChange={setSelectedMedicalInterventions}
          onRemove={(item:any) => handleRemove('medical-intervention', item)}
          onClick={() => handleSubmit('medical-intervention', selectedMedicalInterventions)}
        />
        <HistoricalClinicItemAddData
          name="Enfermedades Relevantes"
          optsSelect={optsRelevantDiseases}
          historicalItem={medicalHistoryData.relevant_diseases}
          onChange={setSelectedRelevantDiseases}
          onRemove={(item:any) => handleRemove('relevant-diseases', item)}
          onClick={() => handleSubmit('relevant-diseases', selectedRelevantDiseases)}
        />
      </section>
    </section>
  );
};

export default PatientHistorical;
