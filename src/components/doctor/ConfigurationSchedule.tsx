import React, {useState} from "react";

interface ConfigurationScheduleProps {
	profile: any
}
const ConfigurationSchedule:React.FC<ConfigurationScheduleProps> = ({profile}) => {
		const [profileDoctor, setProfileDoctor] = useState(profile)
		return (
				<section>
					<h2>Configuración de consulta</h2>
					<section>
						<h3>Horario laboral</h3>
						<p>Configura tu horario laboral</p>

						</section>


				</section>
		)
}
export default ConfigurationSchedule