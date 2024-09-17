import ScheduleDoctor from "@/pages/doctor/ScheduleDoctor";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/utils";
import {Roles} from "@/types/enum";
import PatientProfile from "@/pages/patient/Profile";
import ProfileDoctor from "@/pages/doctor/ProfileDoctor";
import React from "react";

const SchedulePage = async () => {
	const session = await getServerSession(authOptions);
	const userRole = session?.user.groups[0];

	switch (userRole) {
		case Roles.PATIENT:{
			return <>No data</>
		}
		case Roles.DOCTOR:
			return <ScheduleDoctor/>
	}
}

export default SchedulePage;