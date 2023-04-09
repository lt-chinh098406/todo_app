import * as yup from 'yup'

export const validate = yup.object().shape({
  title: yup.string().max(255).required('Title is required'),
  description: yup.string().max(255).required('Description is required'),
  statusId: yup.number().required('Status is required'),
  properties: yup
    .array()
    .of(
      yup.object().shape({
        value: yup.string().required('Property is required'),
      })
    )
    .required('Must have properties'),
})
