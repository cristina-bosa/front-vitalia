import React from "react";

interface CardHistoricalAppointmentInformation {
	appointmentInformation:any
}
const CardHistoricalAppointmentInformation:React.FC <CardHistoricalAppointmentInformation> = ({appointmentInformation}) => {
	return (
		<section className={"historical-clinic__list__medical"}>
			<section className={"card"}>
				<h3 className={"text-xl text-color-secondary"}>Información sobre la cita</h3>
				<section className={"historical-clinic__list__medical"}>
				<section className={"historical-clinic__appointment-information-item"}>
					<span className={"text-l text-color-primary-dark"}>Motivo de consulta</span>
					<p>{appointmentInformation.reason_consultation}</p>
				</section>
				<section className={"historical-clinic__appointment-information-item"}>
					<span className={"text-l text-color-primary-dark"}>Síntomas</span>
					{appointmentInformation.symptoms ? <p>{appointmentInformation.symptoms}</p> : <p>No hay información </p>}
				</section>
				<section className={"historical-clinic__appointment-information-item"}>
					<span className={"text-l text-color-primary-dark"}>Medicación</span>
					{appointmentInformation.medications ? <p>{appointmentInformation.medications}</p> : <p>No hay información </p>}

				</section>
				<section className={"historical-clinic__appointment-information-item"}>
					<span className={"text-l text-color-primary-dark"}>Tratamiento</span>
					{appointmentInformation.treatment ? <p>{appointmentInformation.treatment}</p> : <p>No hay información </p>}

				</section>
				<section className={"historical-clinic__appointment-information-item"}>
					<span className={"text-l text-color-primary-dark"}>Recomendaciones</span>
					{appointmentInformation.recommendations ? <p>{appointmentInformation.recommendations}</p> : <p>No hay información </p>}
				</section>
				</section>
			</section>
		</section>
	)
}
export default CardHistoricalAppointmentInformation