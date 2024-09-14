import Image from "next/image"
import Button from "@/components/ui/Button"
import { Star, XIcon } from "lucide-react";
import {FormEvent, useState} from "react";
import {fetchCreateAppointment} from "@/actions/patients/medical-appointment";
import toast from 'react-hot-toast';
import {FormCreateAppointmentPatient} from "@/types";
import InputComponent from "@/components/ui/Input";

const ModalProfileDoctor = ({ doctor, isOpen, handleCloseModal }: { doctor: any, isOpen: boolean, handleCloseModal: () => void }) => {
    const [formData, setFormData] = useState<FormCreateAppointmentPatient>({
      patient_appointment: '',
      day_appointment: '',
      date_appointment: '',
      reason_consultation: '',
      doctor_id: 0
    })
    const actualDay = new Date().toISOString().substring(0, 10);
    const handleCreateAppointment = async (event: FormEvent<HTMLFormElement>) =>{
      event.preventDefault();
      try{
        const response = await fetchCreateAppointment({
          patient_appointment: formData.day_appointment+" "+formData.date_appointment,
          doctor_id: doctor.id,
          reason_consultation: formData.reason_consultation
        })
        if(response.status === 201){
            toast.success('Cita creada correctamente');
            handleCloseModal();
        }else{
            toast.error('No se ha podido crear la cita');
        }
      }catch(error){
        console.error(error)
      }finally {
        setFormData({
          patient_appointment: '',
          day_appointment: '',
          date_appointment: '',
          reason_consultation: '',
          doctor_id: 0
        })
      }
    }
    if(doctor) {
    const stars = Array.from({ length: doctor.stars }, (_, index) => index);
      return (
          <section className={`modal ${isOpen ? 'modal--overlay' : ''}`}>
            <section className={`modal--content p-12 ${isOpen ? 'modal--content--open' : 'modal--content--close'}`}>
              <section className="modal--content__header flex flex-row gap-6">
                <span className="modal--content__header__close"><XIcon onClick={handleCloseModal}/></span>
                <Image src="/assets/images/doctor.png" alt="Doctor" width={150} height={500} className="rounded-md"/>
                <section className="modal--content__header__content">
                  <h2 className="text-2xl font-bold text-color-primary">{doctor.first_name} {doctor.last_name}</h2>
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
                          <Star key={index} className="text-yellow-500" size={20}/>
                      ))}
                    </section>
                  </section>
                  <section className="flex flex-col gap-3">
                    <span className="text-dark-lighter text-sm">Coste</span>
                    <span className="bg-info-lighter px-2 py-2 text-info-dark rounded-lg text-xl">{doctor.price}€</span>
                  </section>
                  <section className="flex flex-col gap-3">
                    <span className="text-dark-lighter text-sm">Horario laboral</span>
                    <span className="text-primary-darker font-semibold">{doctor.start_schedule.substring(0,5)} - {doctor.end_schedule.substring(0,5)}</span>
                  </section>
                </section>
              </section>
              <section className="modal--content__body">
                <h3 className="text-xl font-bold text-primary">Seleccione el día</h3>
                <form onSubmit={handleCreateAppointment}>
                  <InputComponent
                      id="date"
                      label="Seleccione el día"
                      type="date"
                      placeholder={actualDay}
                      value={formData.day_appointment}
                      onChange={(e) => setFormData({...formData, day_appointment: e.target.value})}
                  />
                    <InputComponent
                        id="reason"
                        label="Motivo de la consulta"
                        type="text"
                        placeholder="Motivo de la consulta"
                        value={formData.reason_consultation}
                        onChange={(e) => setFormData({...formData, reason_consultation: e.target.value})}
                    />
                  <input className="input"
                         type="time"
                         min={doctor.start_schedule.substring(0,5)}
                         max={doctor.end_schedule.substring(0,5)}
                         value={formData.date_appointment}
                         onChange={(e) => setFormData({...formData, date_appointment: e.target.value})}
                         />
                  <Button className="btn--secondary self-end">Solicitar cita</Button>
                </form>
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