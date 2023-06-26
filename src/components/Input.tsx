import styled from 'styled-components'
import { FieldProps } from 'formik'

const InputElement = styled.input`
  display: block;
  flex: 1;
  height: 40px;
  font: inherit;
  border: 1px solid #ccc;
  background: #f8f8f8;
  padding: 8px 12px;

  &:focus {
    outline: none;
    background: #ebebeb;
    border-color: #510077;
  }
`

interface InputProps {
  label?: string
  type: string
  placeholder: string
}

export const Input = ({
  field,
  type,
  label,
  placeholder,
}: InputProps & FieldProps) => {
  const { name } = field

  return (
    <div className="m-2 flex items-center h-[60px] flex-1">
      <label htmlFor={name} className="min-w-[120px] font-bold">
        {label}
      </label>
      <InputElement
        id={name}
        {...field}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}
