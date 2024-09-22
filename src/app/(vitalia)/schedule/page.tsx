import ScheduleDoctor from "@/pages/doctor/ScheduleDoctor";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/utils";
import {AppointmentStatus, Roles} from "@/types/enum";
import React from "react";
import {fetchMedicalAppointmentByDate} from "@/actions/doctors/medical-appointment";
import {getEndOfDay, getStartOfDay} from "@/utils/utils";

const SchedulePage = async () => {
	const session = await getServerSession(authOptions);
	const userRole = session?.user.groups[0];

	switch (userRole) {
		case Roles.PATIENT:{
			return <>No data</>
		}
		case Roles.DOCTOR:
			const acceptAppointments = await fetchMedicalAppointmentByDate(AppointmentStatus.CONFIRMED, {start_date: getStartOfDay()})
			return <ScheduleDoctor acceptAppointments={acceptAppointments?.data}/>
	}
}

export default SchedulePage;