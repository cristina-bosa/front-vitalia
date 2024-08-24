import { fetchMedicalHistory } from "@/actions/patients/medical-appointment";
import HistoricalPage from "@/pages/patient/Historical";

const PatientHistoricalPage: React.FC = async () => {
  const historicalData = await fetchMedicalHistory();
  if (historicalData.length === 0) {
    return (
      <section className="bg-slate-100 p-2 rounded-md">
        <h1 className="text-3xl font-bold text-dark">Mi histórico</h1>
        <p className="text-info-dark">No tienes citas médicas registradas.</p>
      </section>)
  }
  return (
    <HistoricalPage historicalInfo={historicalData} />
  );
}

export default PatientHistoricalPage;