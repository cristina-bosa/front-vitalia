'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

import Select from 'react-select';
import Button from "@/components/ui/Button";
import InputComponent from "@/components/ui/Input";
import SelectComponent from "@/components/ui/Select";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { stepRegisterPatient, typeRegister, } from "@/constants";

import { fetchRegister } from "@/actions/auth";
import { fetchGenre, fetchCity, fetchAllergies, fetchMedicalInterventions, fetchRelevantDiseases, fetchMedications } from "@/actions/utils";
import { RegisterSchema, RegisterPatientSchema } from "@/schemas";
import { RegisterPatientData } from '@/types';

interface SelectData {
  value: string,
  label: string
}



const RegisterPatient = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [steps, setSteps] = useState(stepRegisterPatient)
  const [optsGenre, setOptsGenre] = useState([]);
  const [optsCity, setOptsCity] = useState([]);
  const [optsAllergies, setOptsAllergies] = useState([]);
  const [optsMedicalInterventions, setOptsMedicalInterventions] = useState([]);
  const [optsRelevantDiseases, setOptsRelevantDiseases] = useState([])
  const [optsMedications, setOptsMedications] = useState([]);
  const [selectedAllergies, setSelectedAllergies] = useState([]);
  const [selectedMedicalInterventions, setSelectedMedicalInterventions] = useState([]);
  const [selectedRelevantDiseases, setSelectedRelevantDiseases] = useState([]);
  const [selectedMedications, setSelectedMedications] = useState([]);

  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [registerPatientData, setRegisterPatientData] = useState<RegisterPatientData>({
    register_type: typeRegister.PATIENT,
    first_name: '',
    last_name: '',
    username: '',
    identification_number: '',
    phone: '',
    email: '',
    repeat_email: '',
    password: '',
    repeat_password: '',
    genre: 'M',
    birth_date: '',
    city: 0,
    medical_history: {
      allergies: [],
      relevant_diseases: [],
      current_medication: [],
      medical_intervention: []
    }
  });

  useEffect(() => {
    const fetchAll = async () => {
      setIsLoading(true);
      const genre = await fetchGenre();
      const city = await fetchCity();
      const allergies = await fetchAllergies();
      const medicalInterventions = await fetchMedicalInterventions();
      const relevantDiseases = await fetchRelevantDiseases();
      const medications = await fetchMedications();
      setOptsGenre(genre);
      setOptsCity(city);
      setOptsAllergies(allergies);
      setOptsMedicalInterventions(medicalInterventions);
      setOptsRelevantDiseases(relevantDiseases);
      setOptsMedications(medications);
      setIsLoading(false);
    }
    fetchAll();
  }, [])


  useEffect(() => {
    setRegisterPatientData((prevData) => ({
      ...prevData,
      username: `${prevData.first_name}${prevData.last_name}`.toLowerCase()
    }));
  }, [registerPatientData.first_name, registerPatientData.last_name]);

  const nextStep = () => {
    let validationResult;
    if (currentStep === 1) {
      validationResult = RegisterSchema.safeParse(registerPatientData)
    } else if (currentStep === 2) {
      validationResult = RegisterPatientSchema.safeParse(registerPatientData)
    }

    if (validationResult && !validationResult.success) {
      const formattedErrors = validationResult.error.flatten().fieldErrors;
      setErrors(formattedErrors);
    } else {
      setErrors({});
      setCurrentStep((prev) => prev + 1);
    }
  }
  const previusStep = () => {
    setCurrentStep((prev) => prev - 1);
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setRegisterPatientData({
      ...registerPatientData,
      [id]: id === 'city' || id === 'allergies' ? parseInt(value) : value
    })

    if (errors[id]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors }
        delete newErrors[id]
        return newErrors
      })
    }
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setRegisterPatientData({
      ...registerPatientData,
      [id]: value
    })

    if (errors[id]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors }
        delete newErrors[id]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const validationResult = RegisterPatientSchema.safeParse(registerPatientData)
    if (validationResult && !validationResult.success) {
      const formattedErrors = validationResult.error.flatten().fieldErrors;
      setErrors(formattedErrors);
      setIsLoading(false);
    } else {
      setErrors({});
      const data = {
        ...registerPatientData,
        medical_history: {
          allergies: selectedAllergies.map((allergy: SelectData) => +allergy.value),
          relevant_diseases: selectedRelevantDiseases.map((disease: SelectData) => +disease.value),
          current_medication: selectedMedications.map((medication: SelectData) => +medication.value),
          medical_intervention: selectedMedicalInterventions.map((intervention: SelectData) => +intervention.value)
        }
      }
      const response = await fetchRegister(data);
      console.log(response)
      setIsLoading(false);
      if (response) {
        setIsValid(true);
        setCurrentStep((prev) => prev + 1);
      } else {
        setIsValid(false);
        setCurrentStep((prev) => prev + 1);
        setErrors(response.errors)
      }
    }

  }
  return (
    <>
      <section>
        <nav aria-label="Progress">
          <section className="multistep">
            {steps.map((step, index) => (
              <div key={index} >
                <section className="multistep__item">
                  <section className={`multistep__item ${currentStep >= step.id ? 'multistep__item--active' : 'multistep__item--deactivate'}`}>
                    <p>{step.id}</p>
                  </section>

                  <section className={`multistep__text ${currentStep >= step.id ? 'multistep__text--active' : 'multistep__text--deactivate'}`}>
                    <p>{step.title}</p>
                  </section>
                </section>
                <section className="multistep__line"></section>
              </div>
            ))}
          </section>
        </nav>
      </section >
      <section className="flex flex-col gap-2">
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <section className="flex flex-col">
              <h2 className="text-2xl font-bold text-center">Datos personales</h2>
              <section className="flex flex-col gap-6 my-5">
                <section className="form-row">
                  <InputComponent
                    id="first_name"
                    label="Nombre"
                    type="text"
                    placeholder="Introduce tu nombre"
                    value={registerPatientData.first_name}
                    onChange={handleInputChange}
                    error={errors.firstName && errors.firstName[0]}
                  />
                  <InputComponent
                    id="last_name"
                    label="Apellido"
                    type="text"
                    placeholder="Introduce tu apellido"
                    value={registerPatientData.last_name}
                    onChange={handleInputChange}
                    error={errors.lastName && errors.lastName[0]}
                  />
                </section>
                <section className="form-row">
                  <InputComponent
                    id="identification_number"
                    label="Número de identificación"
                    type="text"
                    placeholder="45125809P"
                    value={registerPatientData.identification_number}
                    onChange={handleInputChange}
                    error={errors.identification_number && errors.identification_number[0]}
                  />
                  <InputComponent
                    id="phone"
                    label="Teléfono"
                    type="tel"
                    placeholder="689808956"
                    value={registerPatientData.phone}
                    onChange={handleInputChange}
                    error={errors.phone && errors.phone[0]}
                  />
                </section>
                <section className="form-row">
                  <InputComponent
                    id="birth_date"
                    label="Fecha de nacimiento"
                    type="date"
                    placeholder="11/11/1995"
                    value={registerPatientData.birth_date}
                    onChange={handleInputChange}
                    error={errors.birth_date && errors.birth_date[0]}
                  />
                  <section className="form-group">
                    <label htmlFor="genre" className="text-primary uppercase text-xs font-semibold">Género</label>
                    <select
                      id="genre"
                      className={`select`}
                      value={registerPatientData.genre}
                      onChange={handleSelectChange}>
                      {optsGenre.map((option: { id: string, name: string }, index) => (
                        <option key={index} value={option.name}>{option.name}</option>
                      ))}
                      {errors.genre && errors.genre[0] && <span className="text-red-500 text-xs">{errors.genre && errors.genre[0]}</span>}
                    </select>
                  </section>
                </section>
                <section className="form-row">
                  <SelectComponent
                    id="city"
                    label="Ciudad"
                    value={registerPatientData.city}
                    className="select--full"
                    options={optsCity}
                    onChange={handleSelectChange}
                  />
                </section>
                <section className="form-row">
                  <InputComponent
                    id="email"
                    label="E-mail"
                    type="email"
                    placeholder="cristina.bosa@vitalia.es"
                    value={registerPatientData.email}
                    onChange={handleInputChange}
                    error={errors.email && errors.email[0]}
                  />
                  <InputComponent
                    id="repeat_email"
                    label="Confirme e-mail"
                    type="email"
                    placeholder="cristina.bosa@vitalia.es"
                    value={registerPatientData.repeat_email}
                    onChange={handleInputChange}
                    error={errors.email && errors.email[0]}
                  />
                </section>
                <section className="form-row">
                  <InputComponent
                    id="password"
                    label="Contraseña"
                    type="password"
                    placeholder="Introduce tu contraseña"
                    value={registerPatientData.password}
                    onChange={handleInputChange}
                    error={errors.password && errors.password[0]}
                  />
                  <InputComponent
                    id="repeat_password"
                    label="Confirme contraseña"
                    type="password"
                    placeholder="Confirme contraseña"
                    value={registerPatientData.repeat_password}
                    onChange={handleInputChange}
                    error={errors.password && errors.password[0]}
                  />
                </section>
              </section>
              <Button className="btn--secondary self-end" onClick={nextStep}>Siguiente <ArrowRight size={20} />
              </Button>
            </section>
          )}
          {currentStep === 2 && (
            <section className="flex flex-col">
              <h2 className="text-2xl font-bold text-center">Datos médicos</h2>
              <p>Por favor, completa los siguientes campos para que podamos ofrecerte un mejor servicio.</p>

              <section className="flex flex-col gap-6 my-5">
                <section className="form-group">
                  <label htmlFor="allergies" className="text-primary uppercase text-xs font-semibold">Alergias</label>
                  <Select
                    instanceId={"allergies"}
                    isMulti={true}
                    isLoading={isLoading}
                    onChange={(allergies) => setSelectedAllergies(Array.from(allergies))}
                    options={optsAllergies}
                    isSearchable={false}
                  />
                </section>
                <section className="form-group">
                  <label id="relevant_diseases" className="text-primary uppercase text-xs font-semibold">Enfermedades relevantes</label>
                  <Select
                    id={"relevant_diseases"}
                    isMulti={true}
                    isLoading={isLoading}
                    onChange={(relevantDiseases) => setSelectedRelevantDiseases(Array.from(relevantDiseases))}
                    options={optsRelevantDiseases}
                    isSearchable={false}
                  />
                </section>
                <section className="form-group">
                  <label className="text-primary uppercase text-xs font-semibold">Enfermedad actual</label>
                  <Select
                    id={"current_medication"}
                    isMulti={true}
                    isLoading={isLoading}
                    onChange={(medications) => setSelectedMedications(Array.from(medications))}
                    options={optsMedications}
                    isSearchable={false}
                  />
                </section>
                <section className="form-group">
                  <label className="text-primary uppercase text-xs font-semibold">Cirugías</label>
                  <Select
                    id={"medical_intervention"}
                    isMulti={true}
                    isLoading={isLoading}
                    onChange={(medicalInterventions) => setSelectedMedicalInterventions(Array.from(medicalInterventions))}
                    options={optsMedicalInterventions}
                    isSearchable={false}
                  />
                </section>
              </section>
              <section className="flex gap-6 justify-between">
                <Button className="btn--outline" onClick={previusStep}><ArrowLeft size={20} />Volver</Button>
                <Button type="submit" className="btn--secondary">Siguiente<ArrowRight size={20} /></Button>
              </section>
            </section>

          )}
          {currentStep === 3 && (
            <>
              {isLoading && (<p>Estamos procesando tus datos....</p>)}
              {isValid ? (
                <>
                  <h2 className="text-2xl font-bold text-center">Finalizar</h2>
                  <section className="flex flex-col gap-6 my-5">
                    <h3>¡Gracias por registrarte en Vitalia!</h3>
                    <p>Hemos enviado un correo de verificación a tu dirección de email. Por favor, revisa tu bandeja de entrada y sigue las instrucciones para validar tu correo electrónico y activar tu cuenta.</p>
                    <p>Si no recibes el correo en unos minutos, revisa tu carpeta de spam o correo no deseado.</p>
                    <p>Gracias por unirte a nuestra plataforma. Estamos aquí para ayudarte a gestionar tu salud de manera más fácil y efectiva.</p>
                    <Link href="/" className="btn btn--primary text-white">Iniciar sesión</Link>
                  </section>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-center">Oh no!</h2>
                  <section className="flex flex-col gap-6 my-5">
                    <h3>Oh no!</h3>
                    <p>Hubo un error en el proceso de tus datos. Por favor, inténtelo de nuevo más tarde.</p>
                  </section>
                </>
              )}
            </>
          )}

        </form>
      </section>
    </>
  );
}
export default RegisterPatient;