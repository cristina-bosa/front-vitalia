import {EyeIcon} from "lucide-react";

const HistoricalPage = ({ historicalInfo }: { historicalInfo: any }) => {
  console.log(historicalInfo);  
  return (
    <section className="bg-slate-100 p-2 rounded-md">
      <h1 className="text-3xl font-bold text-dark">Mi histórico</h1>
      <table>
        <thead>
          <tr>
            <th className="text-sm text-secondary font-semibold">Id.Cita</th>
            <th className="text-sm text-secondary font-semibold">Médico</th>
            <th className="text-sm text-secondary font-semibold">Especialidad</th>
            <th className="text-sm text-secondary font-semibold">Fecha</th>
            <th className="text-sm text-secondary font-semibold">Hora</th>
            <th className="text-sm text-secondary font-semibold">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-info-dark">1</td>
            <td className="text-info-dark">Dr. Juan Pérez</td>
            <td className="text-info-dark">Cardiología</td>
            <td className="text-info-dark">12/10/2021</td>
            <td className="text-info-dark">10:00</td>
            <td>
              <button><EyeIcon/></button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default HistoricalPage