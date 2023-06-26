import TodoColumnModel from '@/models/TodoColumn'
import { FieldProps } from 'formik'
import styled from 'styled-components'

const SelectElement = styled.select`
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
interface SelectProps {
  label: string
  options: TodoColumnModel[]
}

export const SelectField = ({
  field,
  form,
  options,
  label,
}: SelectProps & FieldProps) => {
  const { name, value } = field
  const selectedOption: TodoColumnModel = options.find(
    (option) => option.value === value
  ) || {
    value: 1,
    label: 'New',
  }

  const handleSelectedOptionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const selectedValue = +event.target.value
    form.setFieldValue(name, selectedValue)
  }

  return (
    <div className="m-2 flex items-center h-[60px]">
      <label htmlFor={name} className="min-w-[120px] font-bold">
        {label}
      </label>
      <SelectElement
        id={name}
        {...field}
        value={selectedOption.value}
        onChange={handleSelectedOptionChange}
      >
        {options.map((option) => (
          <option value={option.value} key={option.label}>
            {option.label}
          </option>
        ))}
      </SelectElement>
    </div>
  )
}
