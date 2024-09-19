import React from "react";
import CardHistoricalClinicPatient from "@/components/ui/cards/CardHistoricalClinicPatient";
import CardHistoricalProfilePatient from "@/components/ui/cards/CardHistoricalProfilePatient";

interface CardHistoricalPatientProps {
	patient:any
}
const CardHistoricalPatient:React.FC <CardHistoricalPatientProps> = ({patient}) => {
	return (
		<section className={"historical-clinic"}>
			<CardHistoricalProfilePatient profile={patient}/>
			<CardHistoricalClinicPatient historicalClinic={patient.medical_history}/>
		</section>
	)
}
export default CardHistoricalPatient