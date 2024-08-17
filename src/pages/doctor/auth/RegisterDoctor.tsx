'use client'

import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";
import InputComponent from "@/components/ui/Input";
import SelectComponent from "@/components/ui/Select";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { RegisterDoctorData } from '@/types';

import { stepRegisterDoctor, typeRegister } from "@/constants";

import { fetchRegister } from "@/actions/auth";
import { fetchGenre, fetchCity, fetchSpecialty } from "@/actions/utils";
import { RegisterSchema, DoctorRegisterSchema } from "@/schemas";

const DoctorRegister = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [steps, setSteps] = useState(stepRegisterDoctor)
  const [optsGenre, setOptsGenre] = useState([]);
  const [optsCity, setOptsCity] = useState([]);
  const [optsSpecialty, setOptsSpecialty] = useState([]);
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [registerDoctorData, setRegisterDoctorData] = useState<RegisterDoctorData>({
    register_type: typeRegister.DOCTOR,
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

    professional_number: '',
    specialty: 0,
    start_schedule: '',
    end_schedule: '',
    price: 0
  });


  useEffect(() => {
    fetchGenre().then((data) => {
      setOptsGenre(data);
    });
    fetchCity().then((data) => {
      setOptsCity(data);
    });
    fetchSpecialty().then((data) => {
      setOptsSpecialty(data);
    });
  }, [])

  useEffect(() => {
    setRegisterDoctorData((prevData) => ({
      ...prevData,
      username: `${prevData.first_name}${prevData.last_name}`.toLowerCase()
    }));
  }, [registerDoctorData.first_name, registerDoctorData.last_name]);



  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setRegisterDoctorData({
      ...registerDoctorData,
      [id]: id === 'city' || id === 'specialty' ? parseInt(value) : value
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
    setRegisterDoctorData({
      ...registerDoctorData,
      [id]: id === 'price' ? parseInt(value) : value
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
    let validationResult;
    if (currentStep === 1) {
      validationResult = RegisterSchema.safeParse(registerDoctorData)
    } else if (currentStep === 2) {
      validationResult = DoctorRegisterSchema.safeParse(registerDoctorData)
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
    setCurrentStep(currentStep - 1)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true)
    const validationResult = RegisterSchema.and(DoctorRegisterSchema).safeParse(registerDoctorData)
    if (!validationResult.success) {
      const formattedErrors = validationResult.error.flatten().fieldErrors;
      setErrors(formattedErrors);
      console.log(registerDoctorData)
      console.log('Validation errors:', formattedErrors);
      return;
    } else {
      setErrors({});

      try {
        const response = await fetchRegister(registerDoctorData)
        setIsLoading(false)
        if (response) {
          setIsValid(true);
          setCurrentStep((prev) => prev + 1);
        } else {
          setIsValid(false);
          setCurrentStep((prev) => prev + 1);
        }
      } catch (error) {
        console.error(error)
      }

    }

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
                    id="identification_number"
                    label="Número de identificación"
                    type="text"
                    placeholder="45125809P"
                    value={registerDoctorData.identification_number}
                    onChange={handleInputChange}
                    error={errors.identification_number && errors.identification_number[0]}
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
                    id="birth_date"
                    label="Fecha de nacimiento"
                    type="date"
                    placeholder="11/11/1995"
                    value={registerDoctorData.birth_date}
                    onChange={handleInputChange}
                    error={errors.birth_date && errors.birth_date[0]}
                  />
                  <section className="form-group">
                    <label htmlFor="genre" className="text-primary uppercase text-xs font-semibold">Género</label>
                    <select
                      id="genre"
                      className={`select`}
                      value={registerDoctorData.genre}
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
                    value={registerDoctorData.city}
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
                    value={registerDoctorData.email}
                    onChange={handleInputChange}
                    error={errors.email && errors.email[0]}
                  />
                  <InputComponent
                    id="repeat_email"
                    label="Confirme e-mail"
                    type="email"
                    placeholder="cristina.bosa@vitalia.es"
                    value={registerDoctorData.repeat_email}
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
                    placeholder="Confirme contraseña"
                    value={registerDoctorData.repeat_password}
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
                  <section className="form-group">

                    <label htmlFor="specialty" className="text-primary uppercase text-xs font-semibold">Especialidad</label>
                    <select
                      id="specialty"
                      className={`select`}
                      value={registerDoctorData.specialty}
                      onChange={handleSelectChange}>
                      {optsSpecialty.map((option: { id: number, name: string }, index) => (
                        <option key={index} value={option.id}>{option.name}</option>
                      ))}
                    </select>
                  </section>
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
              {isLoading && (<>Cargando...</>)}
              {isValid ? (
                <>
                  <h2 className="text-2xl font-bold text-center">Finalizar</h2>
                  <section className="flex flex-col gap-6 my-5">
                    <h3>¡Gracias por registrarte en Vitalia!</h3>
                    <p>Nuestro departamento de admisiones se pondrá en contacto contigo con el menor tiempo posible.</p>
                  </section>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-center">Oh no!</h2>
                  <section className="flex flex-col gap-6 my-5">
                    <h3>Hubo un error en el registro</h3>
                    <p>Inténtelo de nuevo más tarde</p>
                  </section>
                </>
              )}
            </>
          )}

        </form>
      </section>
    </section>
  );
}
export default DoctorRegister;
