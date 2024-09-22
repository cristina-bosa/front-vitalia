import React from "react";

interface CardProfilePatientProps {
	profile: any;
}
const CardProfilePatient :React.FC <CardProfilePatientProps> = ({profile}) => {
	return (
		<section className={"card card__profile"}>
			<section className={"card__profile--info"}>
				<span className={"text-xs text-color-dark-light"}>Datos personales</span>
				<h3 className={"text-xl text-color-primary"}>{profile.user.first_name} {profile.user.last_name}</h3>
				<section className="modal--content__header__content__data">
					<span className="text-color-dark-light text-sm">Email</span>
					<span className="text-color-primary-darker font-semibold">{profile.user.email}</span>
				</section>
				<section className="modal--content__header__content__data">
					<span className="text-color-dark-light text-sm">Identificador personal</span>
					<span className="text-color-primary-darker font-semibold">{profile.user.identification_number}</span>
				</section>
				<section className="modal--content__header__content__data">
					<span className="text-color-dark-light text-sm">Teléfono</span>
					<span className="text-color-primary-darker font-semibold">{profile.user.phone}</span>
				</section>
			</section>
		</section>
	);
}

export default CardProfilePatient;