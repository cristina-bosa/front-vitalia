import React, {useState} from "react";
import Select from "react-select";
import Button from "@/components/ui/Button";
import {Minus, PlusIcon} from "lucide-react";

interface HistoricalItemProps {
	name: string;
	historicalItem: any;
	optsSelect: any;
	onChange: (selectedItems: any) => void;
	onClick?: () => void;
	onRemove: any;
}

const HistoricalClinicItemAddData: React.FC<HistoricalItemProps> = ({name,historicalItem,optsSelect,onClick,onChange, onRemove}) => {
const [selected, setSelected] = useState<any[]>([]);
const handleChange = (selectedItems: any) => {
	setSelected(selectedItems);
	onChange(selectedItems);
};
console.log(historicalItem)
	return (
		<details>
			<summary>{name}</summary>
			<article>
					<section className={"form-row"}>
					<Select
						instanceId={name.toLowerCase()}
						isMulti={true}
						onChange={handleChange}
						options={optsSelect}
						isSearchable={false}
						placeholder={`Selecciona ${name.toLowerCase()}`}
					/>
					<Button className={"btn--primary--small"} type="button" onClick={onClick}><PlusIcon/></Button>
					</section>
				<ul>
					{historicalItem.length === 0 && <li className="badge">No hay información adicional de {name.toLowerCase()}</li>}
					{historicalItem.map((data: string, index: number) => (
						<li className="badge flex--space-between" key={index} onClick={() => onRemove(data)}>
							<p>{data}</p>
							<Minus onClick={() => onRemove(data)} className={"badge badge--cancelled"}/>
						</li>
					))}
				</ul>
			</article>
		</details>
	);
};

export default HistoricalClinicItemAddData;
