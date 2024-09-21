import React from "react";

interface CardProfileDoctorProps {
	profile: any;
}
const CardProfileDoctor :React.FC <CardProfileDoctorProps> = ({profile}) => {
	console.log(profile)
	return (
		<section className={"card card__profile"}>
			<section className={"card__profile--info"}>
				<span className={"text-xs text-color-dark-light"}>Datos personales</span>
				<h3 className={"text-xl text-color-primary"}>{profile.first_name} {profile.last_name}</h3>
				<section className="modal--content__header__content__data">
					<span className="text-color-dark-light text-sm">Email</span>
					<span className="text-color-primary-darker font-semibold">{profile.user.email}</span>
				</section>
				<section className="modal--content__header__content__data">
					<span className="text-color-dark-light text-sm">Identificador profesional</span>
					<span className="text-color-primary-darker font-semibold">{profile.professional_number}</span>
				</section>
				<section className="modal--content__header__content__data">
					<span className="text-color-dark-light text-sm">Especialidad</span>
					<span className="text-color-primary-darker font-semibold">{profile.specialty}</span>
				</section>
				<section className="modal--content__header__content__data">
					<span className="text-color-dark-light text-sm">Ciudad</span>
					<span className="text-color-primary-darker font-semibold">{profile.city}</span>
				</section>
				<section className="modal--content__header__content__data">
					<span className="text-color-dark-light text-sm">Valoración</span>
					<span className="text-color-primary-darker font-semibold">{profile.stars}</span>
				</section>
			</section>
		</section>
	);
}

export default CardProfileDoctor;