import React from "react";

interface CardProfilePatientProps {
	profile: any;
}
const CardProfilePatient :React.FC <CardProfilePatientProps> = ({profile}) => {
	return (
		<section className={"card card__profile"}>
			<section className={"card__profile--info"}>
				<span>Datos personales</span>
				<h3 className={"text-xl text-color-primary"}>{profile.user.first_name} {profile.user.last_name}</h3>
				<p>{profile.user.email}</p>
				<p>{profile.user.identification_number}</p>
				<p>{profile.user.phone}</p>
			</section>
		</section>
	);
}

export default CardProfilePatient;