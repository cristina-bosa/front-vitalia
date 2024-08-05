
interface SelectProps {
  id: string,
  label?: string,
  options: { value: string, label: string }[],
  value: string,
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectComponent: React.FC<SelectProps> = ({ id, label, options, value, onChange }) => {
  if (label) {
    return (
      <section className="form-group">
        <label htmlFor={id} className="text-primary uppercase text-xs font-semibold">{label}</label>
        <select
          id={id}
          className="select"
          value={value}
          onChange={onChange}>
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </section>
    )
  }
  else {
    return (
      <section className="">
        <select
          id={id}
          className="select"
          value={value}
          onChange={onChange}>
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </section>
    )
  }
}

export default SelectComponent;