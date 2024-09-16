"use client";

import React, {useState} from "react";
import {useUser} from "@/context/useUser";

const AdminProfile:React.FC = () => {
	const user = useUser()
	const [adminProfile, setAdminProfile] =useState(user);
	console.log(adminProfile)

	return (
		<p>HOLA</p>
	)
}

export default AdminProfile;