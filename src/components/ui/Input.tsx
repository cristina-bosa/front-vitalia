

interface InputProps {
  id: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  type: string,
  label: string,
  placeholder?: string
  error?: string

}

const InputComponent: React.FC<InputProps> = ({ id, value, onChange, type, label, placeholder, error }) => {
  return (
    <section className="form-group">
      <label htmlFor={id} className={error ? "text-red-500 uppercase text-xs font-semibold" : "text-primary uppercase text-xs font-semibold"}>{label}</label>
      <input
        className={error ? 'input input--error' : 'input'}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </section>
  )
}
export default InputComponent;