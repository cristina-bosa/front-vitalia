import React from "react";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/utils";

import {fetchAllReviews} from "@/actions/doctors/reviews";
import ReviewDoctor from "@/pages/admin/ReviewDoctor";

const ReviewsPage: React.FC = async () => {
	const session = await getServerSession(authOptions);
	const userRole = session?.user.groups[0];
	const data = await fetchAllReviews();
	return <ReviewDoctor reviews={data.data} />

}

export default ReviewsPage;