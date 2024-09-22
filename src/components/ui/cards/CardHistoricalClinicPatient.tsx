import React from "react";
import HistoricalClinicItem from "@/components/ui/HistoricalClinicItem";

interface CardHistoricalClinicPatientProps {
	historicalClinic:any
}
const CardHistoricalClinicPatient:React.FC <CardHistoricalClinicPatientProps> = ({historicalClinic}) => {
	return (
		<section className={"historical-clinic__list__medical"}>
			<span className={"text-sm text-color-dark-light"}>Historia clínica</span>
			<HistoricalClinicItem
				name={"Alergías"}
				historicalItem={historicalClinic.allergies}/>
			<HistoricalClinicItem
				name={"Medicación Actual"}
				historicalItem={historicalClinic.current_medication}/>
			<HistoricalClinicItem
				name={"Operaciones"}
				historicalItem={historicalClinic.medical_intervention}/>
			<HistoricalClinicItem
				name={"Enfermedades Relevantes"}
				historicalItem={historicalClinic.relevant_diseases}/>
		</section>
	)
}
export default CardHistoricalClinicPatient