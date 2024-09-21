"use client"
import Hero from "@/components/ui/Hero";
import React, {useState} from "react";
import {ArrowUpRight} from "lucide-react";
import {AppointmentStatusSpanish, typeUserURI} from "@/types/enum";
import {useRouter} from "next/navigation";
import InputComponent from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const MedicalHistoryPatient = ({ historicalInfo }: { historicalInfo: any }) => {
  const router = useRouter();
  const [historicalData, setHistoricalData] = useState(historicalInfo);
  const [search, setSearch] = useState("")
  const [date, setDate] = useState("")

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    const filteredData = historicalInfo.filter((historicalData: any) => {
      return historicalData.doctor_name.toLowerCase().includes(search.toLowerCase())
    })
    if(search === ""){
      setHistoricalData(historicalInfo)
    }
    setHistoricalData(filteredData)
  }
  const handleFilterByStatus = (status: AppointmentStatusSpanish) => () => {
    const filteredData = historicalInfo.filter((historicalData: any) => {
      return historicalData.status === status
    })
    setHistoricalData(filteredData)
  }
  const handleFilterByDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
    const datee = event.target.value;
    const [year, month, day] = datee.split("-");
    const formatedDate = `${day}-${month}-${year}`;

    const filteredData = historicalInfo.filter((historicalData: any) => {
      const [appointmentDate] = historicalData.patient_appointment.split(" ");
      return appointmentDate === formatedDate;
    });
    setHistoricalData(filteredData);
  };


  return (
    <section>
      <Hero title={"Mi histórico"} subtitle={"Aquí puedes ver tu historial de citas"}/>
      <section className={"history__search"}>
        <InputComponent
          id={"search"}
          value={search}
          onChange={(event) => handleSearch(event)}
          placeholder={"Buscar paciente"}
          type={"text"}/>
        <InputComponent
          id="date"
          type="date"
          placeholder={"Fecha"}
          value={date}
          onChange={(event) => {
            handleFilterByDate(event)
          }}
        />
        <Button className={"btn--primary--soft"} onClick={handleFilterByStatus(AppointmentStatusSpanish.CONFIRMED)}>Citas
          confirmadas</Button>
        <Button className={"btn--primary--soft"} onClick={handleFilterByStatus(AppointmentStatusSpanish.CANCELED)}>Citas
          canceladas</Button>
        <Button className={"btn--primary--soft"} onClick={handleFilterByStatus(AppointmentStatusSpanish.FINISHED)}>Citas
          finalizadas</Button>
        <Button className={"btn--outline"} onClick={() => {
          setHistoricalData(historicalInfo)
          setSearch("")
          setDate("")
        }}>Restablecer filtros</Button>
      </section>
      <section className={"history__body"}>
        <table>
          <thead>
          <tr>
            <th>Identificador de la consulta</th>
            <th>Médico</th>
            <th>Especialidad</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
          </thead>
          <tbody>
          {historicalData.map((appointment: any) => (
            <tr key={appointment.id}
                onClick={() => router.push(`appointments/${typeUserURI.PATIENT}/${appointment.id}`)}>
              <td>{appointment.guid}</td>
              <td>{appointment.doctor_name} {appointment.doctor_last_name}</td>
              <td>{appointment.specialty}</td>
              <td>{appointment.patient_appointment}</td>
              <td>{appointment.status}</td>
              <td>
                <ArrowUpRight className={"badge badge--default"}/>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default MedicalHistoryPatient