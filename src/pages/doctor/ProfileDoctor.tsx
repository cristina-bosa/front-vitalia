"use client"

import React from "react";
import ConfigurationSchedule from "@/components/doctor/ConfigurationSchedule";
import {useUser} from "@/context/useUser";

const ProfileDoctor : React.FC= () => {
	const {profile} = useUser()
	return (
		<section>
			<ConfigurationSchedule profile={profile} />
		</section>
	)
}

export default ProfileDoctor;