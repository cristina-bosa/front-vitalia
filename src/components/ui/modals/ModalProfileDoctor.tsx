import Image from "next/image"
import Button from "../Button"

const ModalProfileDoctor = ({ doctor, isOpen, handleCloseModal }: { doctor: any, isOpen: boolean, handleCloseModal: () => void }) => {
  if (doctor) {
    return (
      <section className={`modal ${isOpen ? 'modal--overlay' : ''}`}>
        <section className={`modal--content p-12 ${isOpen ? 'modal--content--open' : 'modal--content--close'}`}>
          <section className="modal--content__header flex flex-row gap-6">
            <Image src="/assets/images/doctor.png" alt="Doctor" width={150} height={500} className="rounded-md" />
            <section className="flex flex-col gap-6">
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
                <span className="text-primary-darker font-semibold">{doctor.stars}</span>
              </section>
              <section className="flex flex-col gap-3">
                <span className="text-dark-lighter text-sm">Coste</span>
                <span className="bg-info-lighter px-2 py-2 text-info-dark rounded-lg text-xl">{doctor.price}€</span>
              </section>
            </section>
          </section>
          <section className="flex flex-col mt-6">
            seleccionar el día
            <section>
              mostrar las horas disponibles
            </section>
            motivo de consulta
            <Button className="btn--secondary self-end">Solicitar cita</Button>
          </section>
          <section>

            cosas del médico parte 2
            <Button className="btn--outline" onClick={handleCloseModal}>Cerrar modal</Button>
          </section>
        </section>
      </section>
    )
  }
}

export default ModalProfileDoctor