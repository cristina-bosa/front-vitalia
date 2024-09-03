import Image from "next/image"
import Button from "../Button"
import { Star, XIcon } from "lucide-react";

const ModalProfileDoctor = ({ doctor, isOpen, handleCloseModal }: { doctor: any, isOpen: boolean, handleCloseModal: () => void }) => {
  if (doctor) {
    const stars = Array.from({ length: doctor.stars }, (_, index) => index);
    return (
      <section className={`modal ${isOpen ? 'modal--overlay' : ''}`}>
        <section className={`modal--content p-12 ${isOpen ? 'modal--content--open' : 'modal--content--close'}`}>
          <section className="modal--content__header flex flex-row gap-6">
            <span className="modal--content__header__close"><XIcon onClick={handleCloseModal}/></span>
            <Image src="/assets/images/doctor.png" alt="Doctor" width={150} height={500} className="rounded-md" />
            <section className="modal--content__header__content">
              <h2 className="text-2xl font-bold text-primary">{doctor.first_name} {doctor.last_name}</h2>
              <section className="flex flex-col gap-3">
                <span className="text-dark-lighter text-sm">Especialidad</span>
                <span className="text-primary-darker font-semibold">{doctor.specialty}</span>
              </section>
              <section className="flex flex-col gap-3">
                <span className="text-dark-lighter text-sm">Ciudad</span>
                <span className="text-primary-darker font-semibold">{doctor.city}</span>
              </section>
              <section className="flex flex-col gap-3">
                <span className="text-dark-lighter text-sm">Estrellas</span>
                <section className="flex flex-row gap-2">
                  {stars.map((_, index) => (
                    <Star key={index} className="text-yellow-500" size={20} />
                  ))}
                </section>
              </section>
              <section className="flex flex-col gap-3">
                <span className="text-dark-lighter text-sm">Coste</span>
                <span className="bg-info-lighter px-2 py-2 text-info-dark rounded-lg text-xl">{doctor.price}€</span>
              </section>
            </section>
          </section>
          <section className="modal--content__body">
            <h3 className="text-xl font-bold text-primary">Seleccione el día</h3>
            <section>
              mostrar las horas disponibles
            </section>
            motivo de consulta
            <Button className="btn--secondary self-end">Solicitar cita</Button>
          </section>
          <section>

            <Button className="btn--outline" onClick={handleCloseModal}>Cerrar modal</Button>
          </section>
        </section>
      </section>
    )
  }
}

export default ModalProfileDoctor