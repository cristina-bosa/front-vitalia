"use client"
import React, {useState} from "react";
import Hero from "@/components/ui/Hero";
import InputComponent from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import {Edit, Save} from "lucide-react";

interface ConfigurationScheduleProps {
	profile: any;
}
const ConfigurationSchedule:React.FC <ConfigurationScheduleProps> = ({profile})=> {
	const [isDisabled, setIsDisabled] = useState(true);
	const handleEditSchedule = (event:any) => {
		event.preventDefault()
		setIsDisabled(!isDisabled)
	}
		return (
				<section>

					<section>
							<h3 className={"text-xl text-color-primary"}>Horario laboral</h3>
						<form className={"forms"} onSubmit={handleEditSchedule}>
						<section className={"form-row"}>
						<InputComponent
							label={"Inicio de jornada"}
							id={"start_schedule"}
							value={profile.start_schedule}
							onChange={() => console.log('a')}
							type={'time'}
							isDisabled={isDisabled}
						/>
						<InputComponent
							label={"Fin de jornada"}
							id={"start_schedule"}
							value={profile.end_schedule}
							onChange={() => console.log('a')}
							type={'time'}
							isDisabled={isDisabled}
						/>
						</section>
							<section>
								{!isDisabled ? <Button><Save/>Guardar</Button> : <Button><Edit/>Editar</Button>}
							</section>
						</form>
						</section>

				</section>
		)
}
export default ConfigurationSchedule