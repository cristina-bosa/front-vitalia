import React from "react";

interface ClinicHistoricalProfilePatientProps {
	profile:any
}
const ClinicHistoricalProfilePatient : React.FC<ClinicHistoricalProfilePatientProps> = ({profile}) => {
	return(
		<section className={"historical-clinic__profile"}>
			<span className={"text-sm text-color-dark-light"}>Perfil del paciente</span>
			<h2 className={"text-xl text-color-primary"}>{profile.first_name} {profile.last_name}</h2>
			<p className={"text-color-dark"}>{profile.birth_date}</p>
			<p className={"text-color-dark"}>{profile.identification_number}</p>
			<p className={"text-color-dark"}>{profile.genre}</p>
			<p className={"text-color-dark"}>{profile.phone}</p>
			<p className={"text-color-dark"}>{profile.email}</p>
		</section>
	)
}
export default ClinicHistoricalProfilePatient