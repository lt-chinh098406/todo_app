import styled from 'styled-components'
import { FieldProps } from 'formik'

const TextareaElement = styled.textarea`
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  background: #f8f8f8;
  padding: 8px;

  &:focus {
    outline: none;
    background: #ebebeb;
    border-color: #510077;
  }
`

interface TextAreaProps {
  label?: string
  placeholder: string
}

export const TextArea = ({
  field,
  label,
  placeholder,
}: TextAreaProps & FieldProps) => {
  const { name } = field

  return (
    <div className="m-2 flex items-start">
      <label htmlFor={name} className="min-w-[120px] font-bold mt-3">
        {label}
      </label>
      <TextareaElement
        rows={5}
        id={name}
        {...field}
        placeholder={placeholder}
      />
    </div>
  )
}
