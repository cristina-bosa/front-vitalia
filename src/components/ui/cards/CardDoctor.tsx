import React from 'react'

import {ArrowUpRight, Star} from 'lucide-react';

interface CardDoctorProps {
  doctor: any;
  handleClick: () => void;
}
const CardDoctor: React.FC<CardDoctorProps> = ({ doctor, handleClick }) => {
  const stars = Array.from({ length: doctor.stars }, (_, index) => index);
  return (
    <article key={doctor.id} className="card card__doctor">
      <section className="card__doctor__body">
        <h3 className="text-xl text-color-primary">{doctor.first_name} {doctor.last_name}</h3>
        <p className="text-color-dark-light">{doctor.specialty}</p>
        <p className="text-color-dark-light">{doctor.city}</p>
        <section className="card__doctor__body--stars">
          {stars.map((_, index) => (
            <Star key={index} className="text-color-warning" size={20} />
          ))}{doctor.stars}
        </section>
        <section className={"card__doctor__body--schedule"}>
            <span className="text-xs text-color-dark-light">Horario laboral</span>
            <p className={"text-color-primary-dar"}>{doctor.start_schedule.substring(0,5)}-{doctor.end_schedule.substring(0,5)}</p>
        </section>
      <section className="card__doctor__footer">
        <span className="badge badge--default">{doctor.price}€</span>
        <span onClick={handleClick}><ArrowUpRight className="text-color-secondary-darker badge badge--cancelled" size={24} /></span>
      </section>
      </section>
    </article>
  )
}
export default CardDoctor