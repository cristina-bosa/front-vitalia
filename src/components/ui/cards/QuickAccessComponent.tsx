"use client";

import { CircleArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const QuickAccessComponent = () => {
  const router = useRouter();
  return (
    <section className="dashboard__quick__access">
      <section>
        <span className="text-color-dark-light">Acceso rápido</span>
      </section>
      <section className="list">

        <article className="card card__quick-access" onClick={() => router.push('/appointments')}>
          <header className="card__header">
            <h6 className="font-semibold">Reservar cita</h6>
            <CircleArrowRight className="size-6 text-primary-dark" />
          </header>
        </article>

        <article className="card card__quick-access" onClick={() => router.push('/medical-history')}>
          <header className="card__header">
            <h6 className="font-semibold">Historial médico</h6>
            <CircleArrowRight className="size-6 text-color-secondary" />
          </header>
        </article>

      </section>
    </section>
  );
};

export default QuickAccessComponent;
