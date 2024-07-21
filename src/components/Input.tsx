

interface InputProps {
  id: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  type: string,
  label: string,
  placeholder?: string

}

const InputComponent: React.FC<InputProps> = ({ id, value, onChange, type, label, placeholder }) => {
  return (
    <section className="form-group">
      <label htmlFor={id} className="text-primary uppercase text-xs font-semibold">{label}</label>
      <input
        className="input"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
    </section>
  )
}
export default InputComponent;