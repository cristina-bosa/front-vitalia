
interface SelectProps {
  id: string,
  label?: string,
  options: { key: string, value: string }[],
  value: string | number,
  className?: string,
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectComponent: React.FC<SelectProps> = ({ id, label, options, value, onChange, className}) => {
  if (label) {
    return (
      <section className="form-group">
        <label htmlFor={id} className="text-primary uppercase text-xs font-semibold">{label}</label>
        <select
          id={id}
          className={`select ${className}`}
          value={value}
          onChange={onChange}>
          {options.map(option => (
            <option key={option.key} value={option.key}>{option.value}</option>
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
            <option key={option.key} value={option.key}>{option.value}</option>
          ))}
        </select>
      </section>
    )
  }
}

export default SelectComponent;