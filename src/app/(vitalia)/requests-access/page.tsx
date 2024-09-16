import RequestsAccess from "@/pages/admin/RequestsAccess";
import {fetchRequests} from "@/actions/admin/requests";
import {HTTPStatus} from "@/types/enum";

const RequestsAccessPage: React.FC = async () => {
	const requests = await fetchRequests()
	if (requests.status === HTTPStatus.OK){
	return (
		<RequestsAccess requestsData = {requests.data} />
	);

	}
}

export default RequestsAccessPage;