import { FieldArray, FastField, Form, Formik, FormikErrors } from 'formik'
import { SelectField } from '@/components/Select'
import { Input } from '@/components/Input'
import { TextArea } from '@/components/TextArea'
import { Todo, Property } from '@/models/Todo'
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'
import { InitialColumn } from '@/factory/column'
import { Button } from '@/components/Button'
import { defaultProperty } from '@/factory/todo'

interface TodoFromProps {
  value: Todo
  status: string
  validate: any
  onClose: () => void
  addTodo?: (values: Todo) => void
  updateTodo?: (values: Todo) => void
  deleteTodo?: (id: string) => void
}

export const TodoForm = ({
  value,
  status,
  validate,
  onClose,
  addTodo,
  updateTodo,
  deleteTodo,
}: TodoFromProps) => {
  const addProperty = (
    event: React.MouseEvent<HTMLOrSVGElement, MouseEvent>,
    push: (defaultProperty: Property) => void
  ): void => {
    event.preventDefault()
    push(defaultProperty)
  }

  const removeProperty = (
    event: React.MouseEvent<HTMLOrSVGElement, MouseEvent>,
    remove: (index: number) => void,
    index: number
  ): void => {
    event.preventDefault()
    remove(index)
  }

  const onDeleteTodo = (id: string): void => {
    deleteTodo!(id)

    onClose()
  }

  const handleSubmitForm = (values: Todo) => {
    if (status === 'create') {
      addTodo!(values)
    } else {
      updateTodo!(values)
    }

    onClose()
  }

  return (
    <Formik
      initialValues={{
        id: value.id,
        title: value.title,
        description: value.description,
        statusId: value.statusId,
        properties: value.properties,
      }}
      validationSchema={validate}
      onSubmit={handleSubmitForm}
    >
      {({ values, errors, touched }) => {
        return (
          <Form>
            <FastField
              name="title"
              component={Input}
              type="text"
              label="Title :"
              placeholder="Please input todo title ..."
            />
            {errors.title && touched.title ? (
              <span className="text-red-500 ml-[130px]">{errors.title}</span>
            ) : null}
            <FastField
              name="description"
              component={TextArea}
              label="Description :"
              placeholder="Please input todo description ..."
            />
            {errors.description && touched.description ? (
              <span className="text-red-500 ml-[130px]">
                {errors.description}
              </span>
            ) : null}
            <FastField
              name="statusId"
              options={InitialColumn}
              component={SelectField}
              label="Status :"
            />
            <FieldArray name="properties">
              {({ remove, push }) => (
                <div className="w-full">
                  {values.properties.length > 0 &&
                    values.properties.map((property, index) => (
                      <div key={index}>
                        <div className="flex items-center">
                          <FastField
                            name={`properties.${index}.value`}
                            component={Input}
                            type="text"
                            label={!index ? 'Properties :' : ''}
                            placeholder="Please input todo property ..."
                          />
                          {!index ? (
                            <div className="h-6 w-6"></div>
                          ) : (
                            <MinusCircleIcon
                              className="h-6 w-6 cursor-pointer"
                              onClick={(event) =>
                                removeProperty(event, remove, index)
                              }
                            />
                          )}
                        </div>
                        {(errors?.properties as FormikErrors<Property>[])?.[
                          index
                        ]?.value &&
                          (touched?.properties as FormikErrors<Property>[])?.[
                            index
                          ]?.value && (
                            <span className="text-red-500 ml-[130px]">
                              {
                                (
                                  errors?.properties as FormikErrors<Property>[]
                                )[index].value
                              }
                            </span>
                          )}
                      </div>
                    ))}
                  {values.properties.length < 3 && (
                    <div className="w-full flex justify-center">
                      <PlusCircleIcon
                        className="h-10 w-10 cursor-pointer"
                        onClick={(event) => addProperty(event, push)}
                      />
                    </div>
                  )}
                </div>
              )}
            </FieldArray>
            <div className="flex items-center justify-center mt-6">
              {status === 'create' ? (
                <Button type="submit">Add Todo</Button>
              ) : (
                <div className="w-full flex justify-around">
                  <Button type="submit">Update Todo</Button>
                  <Button onClick={() => onDeleteTodo(values.id)}>
                    Delete Todo
                  </Button>
                </div>
              )}
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
