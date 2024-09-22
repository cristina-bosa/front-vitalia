import React from "react";
import UsersAdmin from "@/pages/admin/UsersAdmin";
import {fetchUsers} from "@/actions/admin/users";
import {HTTPStatus} from "@/types/enum";

const UsersPage: React.FC = async () => {
	const response = await fetchUsers();
	if(response.status === HTTPStatus.OK){
	return (
		<UsersAdmin users={response.data}/>
	)
	}
}

export default UsersPage;