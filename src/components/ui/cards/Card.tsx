import React from 'react'

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <article className="flex flex-col card">
      <header className="card__header">
        <h3 className="text-xl font-bold text-secondary">{title}</h3>
      </header>
      <section className="card__body">
        <p>{description}</p>
      </section>
      <section className="card__footer">
        {icon}
      </section>
    </article>
  )
}
export default Card