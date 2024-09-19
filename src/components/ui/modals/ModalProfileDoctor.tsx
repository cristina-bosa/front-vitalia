import React, {FormEvent, useEffect, useState} from "react";
import { Star, XIcon } from "lucide-react";

import toast from 'react-hot-toast';

import Button from "@/components/ui/Button"
import InputComponent from "@/components/ui/Input";

import {fetchCreateAppointment} from "@/actions/patients/medical-appointment";
import {fetchAvailableHours} from "@/actions/patients/doctors";

import {FormCreateAppointmentPatient} from "@/types";
import {HTTPStatus} from "@/types/enum";
import {getHour} from "@/utils/utils";

interface ModalProfileDoctorProps {
    doctorData: any;
    isOpen: boolean;
    handleCloseModal: () => void;
}
const ModalProfileDoctor :React.FC<ModalProfileDoctorProps> = ({ doctorData, isOpen, handleCloseModal}) => {
    const [doctor, setDoctor] = useState<any>();
    const [availableHours, setAvailableHours] = useState<string[]>([]);
    const [selectedHour, setSelectedHour] = useState<string | null>('');
    const [error, setError] = useState<string>('');
    const [formData, setFormData] = useState<FormCreateAppointmentPatient>({
    patient_appointment: '',
    day_appointment: '',
    reason_consultation: '',
    doctor_id: 0
  })

    const actualDay = new Date().toISOString().substring(0, 10);
    useEffect(() => {
      setDoctor(doctorData)
    }, [doctorData])

    const handleAvailableHours =  async (date: string) => {
      const appointmentDate = date+" "+getHour()
      try{
        const response = await fetchAvailableHours(doctor.id, appointmentDate)
        if(response){
        switch (response.status){
          case HTTPStatus.OK:
            setAvailableHours(response.data)
            break;
          case HTTPStatus.NOT_FOUND:
            toast.error('No hay horas disponibles para ese día');
            setError('No hay horas disponibles para ese día')
            break;
          }
        }
      }catch(error){
        console.error(error)
      }
    }
    const handleCreateAppointment = async (event: FormEvent<HTMLFormElement>) =>{
      event.preventDefault();
      try{
        const response = await fetchCreateAppointment({
          patient_appointment: formData.day_appointment+" "+(selectedHour+":00"),
          doctor_id: doctorData.id,
          reason_consultation: formData.reason_consultation
        })
        if(response) {
          switch (response.status) {
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
        }
      }catch(error){
        console.error(error)
      }finally {
        setFormData({
          patient_appointment: '',
          day_appointment: '',
          reason_consultation: '',
          doctor_id: 0
        })
      }
    }
    const stars = Array.from({ length: doctorData?.stars }, (_, index) => index);
      return (
          <section className={`modal ${isOpen ? 'modal--overlay' : ''}`}>
            <section className={`modal--content ${isOpen ? 'modal--content--open' : 'modal--content--close'}`}>
              <section className="modal--content__header">
                <span className="modal--content__header__close"><XIcon onClick={handleCloseModal}/></span>
                <section className="modal--content__header__content">
                  <h2
                    className="text-2xl font-bold text-color-primary">{doctorData?.first_name} {doctorData?.last_name}</h2>
                  <section className="modal--content__header__content__data">
                    <span className="text-color-dark-light text-sm">Especialidad</span>
                    <span className="text-color-primary-darker font-semibold">{doctorData?.specialty}</span>
                  </section>
                  <section className="modal--content__header__content__data">
                    <span className="text-color-dark-light text-sm">Ciudad</span>
                    <span className="text-color-primary-darker font-semibold">{doctorData?.city}</span>
                  </section>
                  <section className="modal--content__header__content__data">
                    <span className="text-color-dark-light text-sm">Valoración</span>
                    <section className="flex flex-row gap-2">
                      {stars.map((_, index) => (
                        <Star key={index} className="text-color-warning" size={20}/>
                      ))}
                    </section>
                  </section>
                  <section className="modal--content__header__content__data">
                    <span className="text-color-dark-light text-sm">Coste</span>
                    <span
                      className="badge badge--default">{doctorData?.price}€</span>
                  </section>
                  <section className="modal--content__header__content__data">
                    <span className="text-color-dark-light text-sm">Horario laboral</span>
                    <span
                      className="text-primary-darker font-semibold">{doctorData?.start_schedule.substring(0, 5)} - {doctorData?.end_schedule.substring(0, 5)}</span>
                  </section>
                </section>
              </section>
              <section className="modal--content__body">
                <h3 className="text-xl font-bold text-color-primary">Datos de la reserva</h3>
                <form className="forms" onSubmit={handleCreateAppointment}>
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
                  <section className="modal--content__header__content__hours">
                  {availableHours.map((hour, index) => {
                    return (
                      <span
                        className={`badge ${selectedHour === hour ? 'badge--selected' : 'badge--default'}`}
                        key={index}
                        onClick={() => setSelectedHour(selectedHour === hour ? null : hour)}
                      >{hour}</span>
                    )
                  })}
                  </section>
                  <InputComponent
                    id="reason"
                    label="Motivo de la consulta"
                        type="text"
                        placeholder="Motivo de la consulta"
                        value={formData.reason_consultation}
                        onChange={(e) => setFormData({...formData, reason_consultation: e.target.value})}
                    />
                  <Button className="btn btn--primary">Solicitar cita</Button>
                </form>
              </section>
            </section>
          </section>
      )
}

export default ModalProfileDoctor