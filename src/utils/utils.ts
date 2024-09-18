
export const getTodayWithHour = () => {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth()+1;
	const year = date.getFullYear();
	const hour = date.getHours();
	const minutes = date.getMinutes();
	return `${year}-${month}-${day} ${hour}:${minutes}`;
}

export const getEndOfDay = () =>{
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth()+1;
	const year = date.getFullYear();
	return `${year}-${month}-${day} 23:59:59`;
}

export const getToday = () => {
	const date = new Date();
	const day = date.getDate();
	const month = date.toLocaleString("default", { month: "long" });
	const year = date.getFullYear();
	return `${day} de ${month} de ${year}`;
}

export const getHour = () => {
	const date = new Date();
	const hour = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	return `${hour}:${minutes}:${seconds}`;
}