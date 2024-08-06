'use client'
import { z } from 'zod';
import Button from "@/components/ui/Button";
import InputComponent from "@/components/ui/Input";
import SelectComponent from "@/components/ui/Select";
import { useState } from "react";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

interface FormData {
  firstName: string;
  lastName: string;
  dateBirth: string;
  email: string;
  repeatEmail: string;
  password: string;
  repeatPassword: string;
  genre: string;
  allergies: string;
  relevantDiseases: string;
  medicalIntervention: string;
  currentMedication: string;
}

const personalDataSchema = z.object({
  firstName: z.string().min(2, "El nombre es obligatorio"),
  lastName: z.string().min(2, "El apellido es obligatorio"),
  dateBirth: z.string().refine(val => !isNaN(Date.parse(val)), "Fecha de nacimiento no válida"),
  genre: z.string(),
  email: z.string().email("Correo electrónico no válido"),
  repeatEmail: z.string().email("Correo electrónico no válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  repeatPassword: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
}).refine(data => data.email === data.repeatEmail, {
  message: "Los correos electrónicos deben coincidir",
  path: ["repeatEmail"],
}).refine(data => data.password === data.repeatPassword, {
  message: "Las contraseñas deben coincidir",
  path: ["repeatPassword"],
});

const medicalDataSchema = z.object({
  allergies: z.string(),
  relevantDiseases: z.string(),
  currentMedication: z.string(),
  medicalIntervention: z.string(),
});


const RegisterPatient = () => {
  const steps = [
    {
      id: 1,
      title: 'Datos personales'
    },
    {
      id: 2,
      title: 'Datos médicos'
    },
    {
      id: 3,
      title: 'Completado'
    }
  ]
  const optsGenre = [{
    value: 'M',
    label: 'Masculino'
  },
  {
    value: 'F',
    label: 'Femenino'
  }]

  const optsAllergies = [{
    value: 'M',
    label: 'Ninguna'
  },
  {
    value: 'F',
    label: 'Polen'
  }]

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    dateBirth: '',
    email: '',
    repeatEmail: '',
    password: '',
    repeatPassword: '',
    genre: '',
    allergies: '',
    relevantDiseases: '',
    medicalIntervention: '',
    currentMedication: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    })

    if (errors[id]) {
      setErrors(prevErrors => {
        const newErros = { ...prevErrors };
        delete newErros[id];
        return newErros;
      })
    }
  }
  const handleNextStep = () => {
    let validationResult
    if (currentStep === 1) {
      validationResult = personalDataSchema.safeParse(formData);
    } else {
      validationResult = medicalDataSchema.safeParse(formData);
    }
    if (validationResult && !validationResult.success) {
      const formattedErrors = validationResult.error.flatten().fieldErrors;
      setErrors(formattedErrors);
    } else {
      setErrors({});
      setCurrentStep((prev) => currentStep + 1);
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const personalValidationResult = personalDataSchema.safeParse(formData);
    const medicalValidationResult = medicalDataSchema.safeParse(formData);

    if (personalValidationResult.success && medicalValidationResult.success) {
      console.log('Datos personales', personalValidationResult.data);
      console.log('Datos médicos', medicalValidationResult.data);
      setCurrentStep(3);
    } else {
      const formattedErrors = {
        ...(personalValidationResult.error?.flatten().fieldErrors || {}),
        ...(medicalValidationResult.error?.flatten().fieldErrors || {})
      }
      setErrors(formattedErrors);
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
                    id="firstName"
                    label="Nombre"
                    type="text"
                    placeholder="Introduce tu nombre"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    error={errors.firstName && errors.firstName[0]}
                  />
                  <InputComponent
                    id="lastName"
                    label="Apellido"
                    type="text"
                    placeholder="Introduce tu apellido"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    error={errors.lastName && errors.lastName[0]}
                  />
                </section>
                <section className="form-row">
                  <InputComponent
                    id="dateBirth"
                    label="Fecha de nacimiento"
                    type="date"
                    placeholder="11/11/1995"
                    value={formData.dateBirth}
                    onChange={handleInputChange}
                    error={errors.dateBirth && errors.dateBirth[0]}
                  />
                  <SelectComponent
                    id="genre"
                    value={formData.genre}
                    label="Género"
                    options={optsGenre}
                    onChange={(e) => console.log('hola')}
                  />
                </section>
                <section className="form-row">
                  <InputComponent
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="Introduce tu email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email && errors.email[0]}
                  />
                  <InputComponent
                    id="repeatEmail"
                    label="Email"
                    type="email"
                    placeholder="Repita el email"
                    value={formData.repeatEmail}
                    onChange={handleInputChange}
                    error={errors.repeatEmail && errors.repeatEmail[0]}
                  />
                </section>
                <section className="form-row">
                  <InputComponent
                    id="password"
                    label="Contraseña"
                    type="password"
                    placeholder="Introduce tu contraseña"
                    value={formData.password}
                    onChange={handleInputChange}
                    error={errors.password && errors.password[0]}
                  />
                  <InputComponent
                    id="repeatPassword"
                    label="Repita la contraseña"
                    type="password"
                    placeholder="Introduce tu contraseña"
                    value={formData.repeatPassword}
                    onChange={handleInputChange}
                    error={errors.repeatPassword && errors.repeatPassword[0]}
                  />
                </section>
              </section>
              <Button className="btn--primary" onClick={handleNextStep}>Siguiente <ArrowRightIcon className="size-5 text-white" /></Button>
            </section>
          )}
          {currentStep === 2 && (
            <section className="flex flex-col">
              <h2 className="text-2xl font-bold text-center">Datos profesionales</h2>
              <section className="flex flex-col gap-6 my-5">

                <SelectComponent
                  id="allergies"
                  options={optsGenre}
                  label="Alergías"
                  value={formData.allergies}
                  onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}

                />
                <SelectComponent
                  id="relevantDiseases"
                  options={optsAllergies}
                  label="Enfermedades relevantes"
                  value={formData.relevantDiseases}
                  onChange={(e) => setFormData({ ...formData, relevantDiseases: e.target.value })}

                />
                <SelectComponent
                  id="currentMedication"
                  options={optsAllergies}
                  label="Medicación actual"
                  value={formData.currentMedication}
                  onChange={(e) => setFormData({ ...formData, currentMedication: e.target.value })}
                />
                <SelectComponent
                  id="medicalIntervention"
                  options={optsAllergies}
                  label="Intervenciones quirúrgicas"
                  value={formData.medicalIntervention}
                  onChange={(e) => setFormData({ ...formData, medicalIntervention: e.target.value })}
                />
              </section>
              <Button type="submit" className="btn--primary" >Siguiente <ArrowRightIcon className="size-5 text-white" /></Button>
            </section>

          )}
          {currentStep === 3 && (
            <section className="flex flex-col gap-6 my-5 max-w-7xl">
              <h2 className="text-2xl font-bold text-center">¡Bienvenido/a a Vitalia!</h2>
              <p> Hemos enviado un correo de verificación a tu dirección de email. Por favor, revisa tu bandeja de entrada y sigue las instrucciones para validar tu correo electrónico y activar tu cuenta. </p>
              <p>Si no recibes el correo en unos minutos, revisa tu carpeta de spam o correo no deseado.</p>
              <p>Gracias por unirte a nuestra plataforma. Estamos aquí para ayudarte a gestionar tu salud de manera más fácil y efectiva.</p>
              <Link href="login" className="btn btn--primary text-white">Iniciar sesión</Link>
            </section>
          )}

        </form>
      </section>
    </>
  );
}
export default RegisterPatient;