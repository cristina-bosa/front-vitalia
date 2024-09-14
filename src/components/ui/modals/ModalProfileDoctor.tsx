import React, {FormEvent, useEffect, useState} from "react";
import { Star, XIcon } from "lucide-react";
import Image from "next/image"
import toast from 'react-hot-toast';

import Button from "@/components/ui/Button"
import InputComponent from "@/components/ui/Input";

import {fetchCreateAppointment} from "@/actions/patients/medical-appointment";

import {FormCreateAppointmentPatient} from "@/types";
import {HTTPStatus} from "@/types/enum";
import {fetchAvailableHours} from "@/actions/patients/doctors";

interface ModalProfileDoctorProps {
    doctorData: any;
    isOpen: boolean;
    handleCloseModal: () => void;
}
const ModalProfileDoctor :React.FC<ModalProfileDoctorProps> = ({ doctorData, isOpen, handleCloseModal}) => {
    const [doctor, setDoctor] = useState<any>();
    const [formData, setFormData] = useState<FormCreateAppointmentPatient>({
      patient_appointment: '',
      day_appointment: '',
      date_appointment: '',
      reason_consultation: '',
      doctor_id: 0
    })
    const [availableHours, setAvailableHours] = useState<string[]>([]);
    const actualDay = new Date().toISOString().substring(0, 10);

    useEffect(() => {
      setDoctor(doctorData)
    }, [doctorData])

    const handleAvailableHours =  async (date: string) => {
      try{
        const response = await fetchAvailableHours(doctor.id, date)
        if(response.status === HTTPStatus.OK){
          setAvailableHours(response.data)
        }
      }catch(error){
        console.error(error)
      }
    }
    const handleCreateAppointment = async (event: FormEvent<HTMLFormElement>) =>{
      event.preventDefault();
      try{
        const response = await fetchCreateAppointment({
          patient_appointment: formData.day_appointment+" "+formData.date_appointment,
          doctor_id: doctorData.id,
          reason_consultation: formData.reason_consultation
        })
        switch (response.status){
          case HTTPStatus.CREATED:
            toast.success('Se ha reservado la cita correctamente');
            handleCloseModal();
            break;
          case HTTPStatus.NOT_ACCEPTABLE:
            toast.error('El doctor no tiene disponibilidad para ese día');
            break;
          case HTTPStatus.BAD_REQUEST:
            toast.error('Error al reservar la cita');
            break;
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
    const stars = Array.from({ length: doctorData?.stars }, (_, index) => index);
      return (
          <section className={`modal ${isOpen ? 'modal--overlay' : ''}`}>
            <section className={`modal--content p-12 ${isOpen ? 'modal--content--open' : 'modal--content--close'}`}>
              <section className="modal--content__header flex flex-row gap-6">
                <span className="modal--content__header__close"><XIcon onClick={handleCloseModal}/></span>
                <Image src="/assets/images/doctor.png" alt="Doctor" width={150} height={500} className="rounded-md"/>
                <section className="modal--content__header__content">
                  <h2 className="text-2xl font-bold text-color-primary">{doctorData?.first_name} {doctorData?.last_name}</h2>
                  <section className="flex flex-col gap-3">
                    <span className="text-dark-lighter text-sm">Especialidad</span>
                    <span className="text-primary-darker font-semibold">{doctorData?.specialty}</span>
                  </section>
                  <section className="flex flex-col gap-3">
                    <span className="text-dark-lighter text-sm">Ciudad</span>
                    <span className="text-primary-darker font-semibold">{doctorData?.city}</span>
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
                    <span className="bg-info-lighter px-2 py-2 text-info-dark rounded-lg text-xl">{doctorData?.price}€</span>
                  </section>
                  <section className="flex flex-col gap-3">
                    <span className="text-dark-lighter text-sm">Horario laboral</span>
                    <span className="text-primary-darker font-semibold">{doctorData?.start_schedule.substring(0,5)} - {doctorData?.end_schedule.substring(0,5)}</span>
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
                      onChange={(e) => {
                        handleAvailableHours(e.target.value)
                        setFormData({...formData, day_appointment: e.target.value})
                      }}
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
                         min={doctorData?.start_schedule.substring(0,5)}
                         max={doctorData?.end_schedule.substring(0,5)}
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

export default ModalProfileDoctor