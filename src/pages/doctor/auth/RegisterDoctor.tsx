'use client'

import { useEffect, useState } from "react";

import { z } from 'zod';

import Button from "@/components/ui/Button";
import InputComponent from "@/components/ui/Input";
import SelectComponent from "@/components/ui/Select";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { RegisterDoctorData } from "@/types";

import { stepRegisterDoctor, typeRegister } from "@/constants";

import { fetchGenre } from "@/actions/auth";

const DoctorRegister = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [steps, setSteps] = useState(stepRegisterDoctor)
  const [optsGenre, setOptsGenre] = useState([]);
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
  const [genre, setGenre] = useState('M');

  useEffect(() => {
    fetchGenre().then((data) => {
      setOptsGenre(data);
    });
  }, [])

  const [registerDoctorData, setRegisterDoctorData] = useState<RegisterDoctorData>({
    first_name: '',
    last_name: '',
    identification_number: '',
    phone: '',
    email: '',
    password: '',
    genre: 'M',
    birthdate: '',
    register_data: typeRegister.DOCTOR,
    city: '',

    professional_number: '',
    specialty: 0,
    start_schedule: '',
    end_schedule: '',
    price: 0
  });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setRegisterDoctorData({
      ...registerDoctorData,
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

  const nextStep = () => {
    setCurrentStep(currentStep + 1)

  }

  const previusStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(registerDoctorData)


  }
  return (
    <section>
      <section>
        <nav aria-label="Progress">
          <section className="multistep">
            {steps.map((step, index) => (
              <section key={index}>
                <section className="multistep__item">
                  <section className={`multistep__item ${currentStep >= step.id ? 'multistep__item--active' : 'multistep__item--deactivate'}`}>
                    <p>{step.id}</p>
                  </section>

                  <section className={`multistep__text ${currentStep >= step.id ? 'multistep__text--active' : 'multistep__text--deactivate'}`}>
                    <p>{step.title}</p>
                  </section>
                </section>
                <section className="multistep__line"></section>
              </section>
            ))}
          </section>
        </nav>
      </section >
      <section className="flex flex-col gap-2 mt-2">
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <section className="flex flex-col">
              <section className="flex flex-col gap-6 my-5">
                <section className="form-row">
                  <InputComponent
                    id="first_name"
                    label="Nombre"
                    type="text"
                    placeholder="Cristina"
                    value={registerDoctorData.first_name}
                    onChange={handleInputChange}
                    error={errors.first_name && errors.first_name[0]}
                  />
                  <InputComponent
                    id="last_name"
                    label="Apellido"
                    type="text"
                    placeholder="Bosa"
                    value={registerDoctorData.last_name}
                    onChange={handleInputChange}
                    error={errors.last_name && errors.last_name[0]}
                  />
                </section>
                <section className="form-row">
                  <InputComponent
                    id="number_identification"
                    label="Número de identificación"
                    type="text"
                    placeholder="45125809P"
                    value={registerDoctorData.birthdate}
                    onChange={handleInputChange}
                    error={errors.birthdate && errors.birthdate[0]}
                  />
                  <InputComponent
                    id="phone"
                    label="Teléfono"
                    type="tel"
                    placeholder="689808956"
                    value={registerDoctorData.phone}
                    onChange={handleInputChange}
                    error={errors.phone && errors.phone[0]}
                  />
                </section>
                <section className="form-row">
                  <InputComponent
                    id="birthdate"
                    label="Fecha de nacimiento"
                    type="date"
                    placeholder="11/11/1995"
                    value={registerDoctorData.birthdate}
                    onChange={handleInputChange}
                    error={errors.birthdate && errors.birthdate[0]}
                  />
                  <SelectComponent
                    id="genre"
                    value={genre}
                    label="Género"
                    options={optsGenre}
                    onChange={(e) => setGenre(e.target.value)}
                  />
                </section>
                <section className="form-row">
                  <SelectComponent
                    id="city"
                    label="Ciudad"
                    className="select--full"
                    value={genre}
                    options={optsGenre}
                    onChange={(e) => setGenre(e.target.value)}
                  />
                </section>
                <section className="form-row">
                  <InputComponent
                    id="email"
                    label="E-mail"
                    type="email"
                    placeholder="cristina.bosa@vitalia.es"
                    value={registerDoctorData.email}
                    onChange={handleInputChange}
                    error={errors.email && errors.email[0]}
                  />
                  <InputComponent
                    id="repeat_email"
                    label="Confirme e-mail"
                    type="email"
                    placeholder="cristina.bosa@vitalia.es"
                    value={registerDoctorData.email}
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
                    value={registerDoctorData.password}
                    onChange={handleInputChange}
                    error={errors.password && errors.password[0]}
                  />
                  <InputComponent
                    id="repeat_password"
                    label="Confirme contraseña"
                    type="password"
                    placeholder="Introduce tu contraseña"
                    value={registerDoctorData.password}
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
              <h2 className="text-2xl font-bold text-center">Datos profesionales</h2>
              <section className="flex flex-col gap-6 my-5">
                <section className="form-row">
                  <InputComponent
                    id="professional_number"
                    label="Número de colegiado"
                    type="text"
                    placeholder="Introduce el número de colegiado"
                    value={registerDoctorData.professional_number}
                    onChange={handleInputChange}
                    error={errors.professional_number && errors.professional_number[0]}
                  />
                  <SelectComponent
                    id="speciality"
                    options={optsGenre}
                    label="Especialidad"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  />
                </section>
                <section className="form-row">
                  <InputComponent
                    id="start_schedule"
                    label="Horario inicio"
                    type="time"
                    value={registerDoctorData.start_schedule}
                    onChange={handleInputChange}
                    error={errors.start_schedule && errors.start_schedule[0]}
                  />
                  <InputComponent
                    id="end_schedule"
                    label="Horario fin"
                    type="time"
                    value={registerDoctorData.end_schedule}
                    onChange={handleInputChange}
                    error={errors.end_schedule && errors.end_schedule[0]}
                  />
                </section>
                <section className="form-row">
                  <InputComponent
                    id="price"
                    label="Coste"
                    type="number"
                    value={registerDoctorData.price}
                    onChange={handleInputChange}
                    error={errors.price && errors.price[0]}
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
              <h2 className="text-2xl font-bold text-center">Finalizar</h2>
              <section className="flex flex-col gap-6 my-5">
                <h3>¡Gracias por registrarte en Vitalia!</h3>
                <p>Nuestro departamento de admisiones se pondrá en contacto contigo con el menor tiempo posible.</p>
              </section>
            </>
          )}

        </form>
      </section>
    </section>
  );
}
export default DoctorRegister;
