import { useState } from 'react'

export const useForm = initialState => {
  const [formValues, setFormValues] = useState(initialState)
  const [formValid, setFormValid] = useState(true)

  const onInputChange = ({ target: { name, value } }) => {
    setFormValues({
      ...formValues,
      [name]: value,
    })
    setFormValid(true)
  }

  const onReset = () => {
    setFormValues(initialState)
  }

  const onValidError = () => {
    setFormValid(false)
  }

  return {
    formValues,
    onInputChange,
    onReset,
    formValid,
    onValidError,
  }
}
