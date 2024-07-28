'use client'
import Button from "@/components/ui/Button";
import InputComponent from "@/components/ui/Input";
import SelectComponent from "@/components/ui/Select";
import { useState } from "react";

const DoctorRegister = () => {
  const steps = [
    {
      id: 1,
      title: 'Datos personales'
    },
    {
      id: 2,
      title: 'Datos profesionales'
    },
    {
      id: 3,
      title: 'Completado'
    }
  ]
  const [currentStep, setCurrentStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateBirth, setDateBirth] = useState('');
  const [email, setEmail] = useState('');
  const [professionalNumber, setProfessionalNumber] = useState('');
  const [repeatEmail, setRepeatEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [genre, setGenre] = useState('');
  const optsGenre = [{
    value: 'M',
    label: 'Masculino'
  },
  {
    value: 'F',
    label: 'Femenino'
  }]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ firstName, lastName, genre, dateBirth, password, repeatPassword, email, repeatEmail })
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }
  const previusStep = () => {
    setCurrentStep(currentStep - 1)
  }
  return (
    <>
      <section>
        <nav aria-label="Progress">
          <section className="multistep">
            {steps.map((step, index) => (
              <>
                <section key={index} className="multistep__item">
                  <section className={`multistep__item ${currentStep >= step.id ? 'multistep__item--active' : 'multistep__item--deactivate'}`}>
                    <p>{step.id}</p>
                  </section>

                  <section className={`multistep__text ${currentStep >= step.id ? 'multistep__text--active' : 'multistep__text--deactivate'}`}>
                    <p>{step.title}</p>
                  </section>
                </section>
                <section className="multistep__line"></section>
              </>
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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <InputComponent
                    id="lastName"
                    label="Apellido"
                    type="text"
                    placeholder="Introduce tu apellido"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </section>
                <section className="form-row">
                  <InputComponent
                    id="dateBirth"
                    label="Fecha de nacimiento"
                    type="date"
                    placeholder="11/11/1995"
                    value={firstName}
                    onChange={(e) => setDateBirth(e.target.value)}
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
                  <InputComponent
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="Introduce tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputComponent
                    id="emailRepeat"
                    label="Email"
                    type="email"
                    placeholder="Repita el email"
                    value={repeatEmail}
                    onChange={(e) => setRepeatEmail(e.target.value)}
                  />
                </section>
                <section className="form-row">
                  <InputComponent
                    id="password"
                    label="Contraseña"
                    type="password"
                    placeholder="Introduce tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputComponent
                    id="repeatPassword"
                    label="Repita la contraseña"
                    type="password"
                    placeholder="Introduce tu contraseña"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                  />
                </section>
              </section>
              <button className="btn btn--primary text-white" onClick={nextStep}>Siguiente</button>
            </section>
          )}
          {currentStep === 2 && (
            <section className="flex flex-col">
              <h2 className="text-2xl font-bold text-center">Datos profesionales</h2>
              <section className="flex flex-col gap-6 my-5">

                <InputComponent
                  id="professionalNumber"
                  label="Número de colegiado"
                  type="text"
                  placeholder="Introduce el número de colegiado"
                  value={professionalNumber}
                  onChange={(e) => setProfessionalNumber(e.target.value)}
                />
                <SelectComponent
                  id="speciality"
                  options={optsGenre}
                  label="Especialidad"
                  value={genre}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <InputComponent
                  id="schedule"
                  label="Horario"
                  type="time"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </section>
              <button className="btn btn--primary text-white" onClick={previusStep}>Volver</button>
              <button className="btn btn--primary text-white" onClick={nextStep}>Siguiente</button>
            </section>

          )}
          {currentStep === 3 && (
            <>
              <h2 className="text-2xl font-bold text-center">Finalizar</h2>
              <section className="flex flex-col gap-6 my-5">
                <h3>¡Gracias por registrarte en Vitalia!</h3>
                <p>Nuestro departamento de admisiones se pondrá en contacto contigo con el menor tiempo posible.</p>
              </section>
              <button type="submit">Aceptar</button>
            </>
          )}

        </form>
      </section>
    </>
  );
}
export default DoctorRegister;