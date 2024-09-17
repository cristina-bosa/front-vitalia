import React from "react";


interface InputProps {
  id: string,
  value: string | number,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  type: string,
  label?: string,
  placeholder?: string
  error?: string

}

const InputComponent: React.FC<InputProps> = ({ id, value, onChange, type, label, placeholder, error }) => {
  if (label) {
    return (
      <section className="form-group">
        <label htmlFor={id} className={error ? "text-red-500 text-uppercase text-xs font-semibold" : "text-primary" +
          "text-uppercase text-xs font-semibold"}>{label}</label>
        <input
          className={error ? 'input input--error' : 'input'}
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          min={type === 'number' ? 0 : undefined}
          max={type === 'tel' ? 10 : undefined}
           />
        {error && <span className="text-color-error text-xs">{error}</span>}
      </section>
    )
  }
  return (
    <section className="">
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