"use client"
import React, {useState} from "react";
import InputComponent from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import {Edit, Save} from "lucide-react";
import {fetchUpdateProfile} from "@/actions/patients/profile";
import {HTTPStatus} from "@/types/enum";
import toast from "react-hot-toast";

interface ConfigurationScheduleProps {
	profile: any;
}

const ConfigurationSchedule: React.FC<ConfigurationScheduleProps> = ({ profile }) => {
	const [isDisabled, setIsDisabled] = useState(true);
	const [schedule, setSchedule] = useState({
		start_schedule: profile.start_schedule,
		end_schedule: profile.end_schedule
	});

	const handleEditSchedule = async (event: any) => {
		event.preventDefault();
		try {
			const response = await fetchUpdateProfile(schedule);
			if (response && response.status === HTTPStatus.OK) {
				toast.success("Horario actualizado");
				setIsDisabled(true);
			} else {
				toast.error("Error al actualizar el horario");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<section>
			<section>
				<h3 className={"text-xl text-color-primary"}>Horario laboral</h3>
				<form className={"forms"} onSubmit={handleEditSchedule}>
					<section className={"form-row"}>
						<InputComponent
							label={"Inicio de jornada"}
							id={"start_schedule"}
							value={schedule.start_schedule}
							onChange={(event) => setSchedule({...schedule, start_schedule: event.target.value})}
							type={"time"}
							isDisabled={isDisabled}
						/>
						<InputComponent
							label={"Fin de jornada"}
							id={"end_schedule"}
							value={schedule.end_schedule}
							onChange={(event) => setSchedule({...schedule, end_schedule: event.target.value})}
							type={"time"}
							isDisabled={isDisabled}
						/>
					</section>
					<section>
						{!isDisabled ? (
							<Button type="submit">
								<Save/>
								Guardar
							</Button>
						) :
							null
						}
					</section>
				</form>
				<section>
					{!isDisabled ? 	null : (
						<Button type="button" onClick={() => setIsDisabled(false)}>
							<Edit/>
							Editar
						</Button>
					)}
				</section>
			</section>
		</section>
	);
};

export default ConfigurationSchedule;
