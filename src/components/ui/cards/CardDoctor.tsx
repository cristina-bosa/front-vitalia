import Image from 'next/image';
import React from 'react'

import { CircleArrowRight, Star } from 'lucide-react';

import { Doctor } from '@/types';
interface CardDoctorProps {
  doctor: Doctor;
  handleClick: () => void;
}
const CardDoctor: React.FC<CardDoctorProps> = ({ doctor, handleClick }) => {
  const stars = Array.from({ length: doctor.stars }, (_, index) => index);
  return (
    <article key={doctor.id} className="card card__doctor">
      <header className="card__doctor__header">
        <Image className="card__doctor__header__image" src="/assets/images/doctor.png" alt="Doctor" width={80} height={80} />
      </header>
      <section className="card__doctor__body">
        <h3 className="text-xl font-bold text-color-primary">{doctor.first_name} {doctor.last_name.substring(0, 4)}...</h3>
        <p className="text-dark-light">{doctor.specialty}</p>
        <p className="text-dark-light">{doctor.city}</p>
        <section className="flex flex-row gap-2">
          {stars.map((_, index) => (
            <Star key={index} className="text-yellow-500" size={20} />
          ))}
        </section>
          <section>
              <span>Horario laboral</span>
              <p>{doctor.end_schedule.substring(0,5)}-{doctor.start_schedule.substring(0,5)}</p>
          </section>
      <section className="card__doctor__footer">
        <span className="bg-info-lighter px-2 py-2  text-info-dark font-semibold rounded-lg">{doctor.price}€</span>
        <span onClick={handleClick}><CircleArrowRight className="text-secondary hover:cursor-pointer" size={24} /></span>
      </section>
      </section>
    </article>
  )
}
export default CardDoctor