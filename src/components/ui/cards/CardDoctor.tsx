import Image from 'next/image';
import React from 'react'

interface CardDoctorProps {
  doctor: any;
  icon: React.ReactNode;
  handleClick: () => void;
}
const CardDoctor: React.FC<CardDoctorProps> = ({ doctor, icon, handleClick }) => {
  return (
    <article className="flex flex-col card">
      <header className="flex flex-col gap-4">
        <Image src="/assets/images/doctor.png" alt="Doctor" width={80} height={80} className="rounded-md" />
        <h3 className="text-xl font-bold text-secondary">{doctor.first_name} {doctor.last_name}</h3>
      </header>
      <section className="card__body">
        <p className="">{doctor.specialty}</p>
        <p className="">{doctor.city}</p>
      </section>
      <section className="flex flex-row justify-between">
        <span className="bg-info-lighter px-2 py-2 text-info-dark rounded-lg">{doctor.price}€</span>
        <span onClick={handleClick}>{icon}</span>
      </section>
    </article>
  )
}
export default CardDoctor