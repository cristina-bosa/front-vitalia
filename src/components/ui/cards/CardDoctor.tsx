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
        <h3 className="text-xl text-color-primary">{doctor.first_name} {doctor.last_name.substring(0, 4)}...</h3>
        <p className="text-color-dark-light">{doctor.specialty}</p>
        <p className="text-color-dark-light">{doctor.city}</p>
        <section className="card__doctor__body--stars">
          {stars.map((_, index) => (
            <Star key={index} className="text-color-warning" size={20} />
          ))}
        </section>
        <section className={"card__doctor__body--schedule"}>
            <span className="text-xs text-color-dark-light">Horario laboral</span>
            <p className={"text-color-primary-dar"}>{doctor.end_schedule.substring(0,5)}-{doctor.start_schedule.substring(0,5)}</p>
        </section>
      <section className="card__doctor__footer">
        <span className="badge badge--default">{doctor.price}€</span>
        <span onClick={handleClick}><CircleArrowRight className="text-color-secondary" size={24} /></span>
      </section>
      </section>
    </article>
  )
}
export default CardDoctor