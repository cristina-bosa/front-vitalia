import Image from 'next/image';
import React from 'react'

import { CircleArrowRight, Star } from 'lucide-react';
interface CardDoctorProps {
  doctor: any;
  handleClick: () => void;
}
const CardDoctor: React.FC<CardDoctorProps> = ({ doctor, handleClick }) => {
  const stars = Array.from({ length: doctor.stars }, (_, index) => index);
  return (
    <article className="flex flex-col card">
      <header className="flex flex-col gap-4">
        <Image src="/assets/images/doctor.png" alt="Doctor" width={80} height={80} className="rounded-md" />
        <h3 className="text-xl font-bold text-primary">{doctor.first_name} {doctor.last_name}</h3>
      </header>
      <section className="card__body">
        <p className="text-dark-light">{doctor.specialty}</p>
        <p className="text-dark-light">{doctor.city}</p>
        <section className="flex flex-row gap-2">
          {stars.map((_, index) => (
            <Star key={index} className="text-yellow-500" size={20} />
          ))}
        </section>
      </section>
      <section className="flex flex-row justify-between items-center">
        <span className="bg-info-lighter px-2 py-2  text-info-dark font-semibold rounded-lg">{doctor.price}€</span>
        <span onClick={handleClick}><CircleArrowRight className="text-secondary hover:cursor-pointer" size={24} /></span>
      </section>
    </article>
  )
}
export default CardDoctor