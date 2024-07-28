'use client'

import { useState } from 'react'
import { z } from 'zod'

const PatientSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
  lastName: z.string().min(2, { message: 'El apellido debe tener al menos 2 caracteres' }),
  dateBrith: z.string().datetime({ message: 'La fecha de nacimiento no es válida' }),
  genre: z.string(),
  email: z.string().email().endsWith('.com', { message: 'El email debe terminar en .com' }),
  password: z.string().min(6),

}).required()



const RegisterFormPatient = () => {
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
  const [currentStep, setCurrentStep] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <h1>RegisterFormPatient</h1>
    </div>
  )
}

export default RegisterFormPatient