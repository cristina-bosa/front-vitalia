import React from "react";

interface HistoricalItemProps {
	name: string
	historicalItem: any
}
const HistoricalClinicItem:React.FC <HistoricalItemProps> = ({name, historicalItem}) => {
	return (
		<details>
			<summary>{name}</summary>
			<article>
			<ul>
			{historicalItem.map((data:string, index:number) => (
				<li key={index}>
					{data}
				</li>
			))}
			</ul>
			</article>
		</details>
	)
}
export default HistoricalClinicItem