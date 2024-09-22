import React from "react";
import Hero from "@/components/ui/Hero";
import {Star} from "lucide-react";

interface ReviewDoctorProps {
	reviews: any;
}

const ReviewDoctor: React.FC<ReviewDoctorProps> = ({ reviews }) => {
	return (
		<section>
			<Hero title={"Reseñas"} subtitle={"Reseñas de los pacientes"} />
			<section className={"historical-clinic__list__medical"}>
				{reviews.map((review: any) => {
					const stars = Array.from({ length: review.rating }, (_, index) => index);
					return (
						<section className={"card card__review"} key={review.id}>
							<section className={"card__review__header"}>
								<h6 className={"text-color-primary"}>{review.patient_name} {review.patient_last_name}</h6>
								<p>{review.created_at}</p>
							</section>
							<section className={"card__review__body"}>
								<section className={"card__review__body--stars"}>
								{stars.map((_, index: number) => (
									<Star key={index} className="text-color-warning" size={20} />
								))}

								</section>
								<p>{review.review}</p>
							</section>
						</section>
					);
				})}
			</section>
		</section>
	);
}

export default ReviewDoctor;
