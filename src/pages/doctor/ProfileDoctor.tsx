"use client"

import React, {useState} from "react";
import ConfigurationSchedule from "@/components/doctor/ConfigurationSchedule";
import CardProfileDoctor from "@/components/ui/cards/CardProfileDoctor";
import Hero from "@/components/ui/Hero";

interface ProfileDoctorProps {
	profile: any;
}
const ProfileDoctor : React.FC <ProfileDoctorProps> = ({profile}) => {
	const [user, setUser] = useState(profile)
	return (
		<section>
			<Hero title={"Mi perfil"}
						subtitle={"Configura tu perfil"}/>
			<CardProfileDoctor profile={user}/>
			<ConfigurationSchedule  profile={user}/>
		</section>
	)
}

export default ProfileDoctor;