
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