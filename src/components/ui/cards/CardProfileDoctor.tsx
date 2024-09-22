import React from "react";

interface CardProfileDoctorProps {
	profile: any;
}
const CardProfileDoctor :React.FC <CardProfileDoctorProps> = ({profile}) => {
	console.log('cardprofile', profile);
	return (
		<section className={"card card__profile"}>
			<section className={"card__profile--info"}>
				<span>Datos personales</span>
				<h3 className={"text-xl text-color-primary"}>{profile.first_name} {profile.last_name}</h3>
				<p>{profile.user.email}</p>
				<p>{profile.user.identificacion_number}</p>
				<p>{profile.professional_number}</p>
				<p>{profile.specialty}</p>
				<p>{profile.city}</p>
				<p>{profile.stars}</p>
			</section>
		</section>
	);
}

export default CardProfileDoctor;