import { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import Modal from 'react-modal'

import 'react-datepicker/dist/react-datepicker.css'
import { useForm } from '../../hooks'
import { addDays, subDays } from 'date-fns'

import { es } from 'date-fns/locale'
import { useMemo } from 'react'

registerLocale('es', es)

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

Modal.setAppElement('#root')

const today = new Date()

const year = today.getFullYear()
const month = today.getMonth()
const day = today.getDate()

const productFormValues = {
  name: '',
  product_date: today,
  expiration_date: addDays(new Date(year, month, day), 30),
  stock: 100,
  price: '',
  tags: [],
}

const productValidations = {
  name: [value => value.length > 2, 'Debe ingresar producto valido'],
  stock: [
    [value => +value, 'Debe ingresar número'],
    [value => +value > 29, 'Debe ingresar mínimo 30 unidades'],
  ],
  price: [value => +value > 0, 'Debe ingresar precio'],
}

export const ProductModal = () => {
  const {
    name,
    product_date,
    expiration_date,
    stock,
    price,
    tags,
    formValues,
    onInputChange,
    onResetForm,

    isFormValid,
    nameValid,
    stockValid,
    priceValid,
  } = useForm(productFormValues, productValidations)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(true)

  const nameClass = useMemo(() => {
    if (!formSubmitted) return ''

    return !nameValid ? '' : 'is-invalid'
  }, [formSubmitted, nameValid])

  const stockClass = useMemo(() => {
    if (!formSubmitted) return ''

    return !stockValid ? '' : 'is-invalid'
  }, [formSubmitted, stockValid])

  const priceClass = useMemo(() => {
    if (!formSubmitted) return ''

    return !priceValid ? '' : 'is-invalid'
  }, [formSubmitted, priceValid])

  const onDateChange = (value, changing) => {
    onInputChange({ target: { name: changing, value } })
  }

  function closeModal() {
    setIsOpen(false)
  }

  const onSubmit = event => {
    event.preventDefault()
    setFormSubmitted(true)

    console.log(stockValid)
    return

    // TODO: Validaciones de fecha
    // TODO: Si el form es invalid no dejar pasar
    // TODO: Armar nuesta data
    // TODO: Enviar esta data por HTTP

    onResetForm()
    closeModal()
    setFormSubmitted(false)
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}>
      <h1>Nuevo Producto</h1>
      <hr />

      <form onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label>Fecha de compra</label>
          <DatePicker
            minDate={subDays(new Date(), 10)}
            selected={product_date}
            className="form-control"
            onChange={value => {
              onDateChange(value, 'product_date')
            }}
            locale="es"
            timeCaption="Hora"
            dateFormat="Pp"
            showTimeSelect
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha de expiración</label>
          <DatePicker
            minDate={addDays(new Date(), 10)}
            selected={expiration_date}
            className="form-control"
            onChange={value => {
              onDateChange(value, 'expiration_date')
            }}
            locale="es"
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Producto</label>
          <input
            type="text"
            className={`form-control ${nameClass}`}
            placeholder="Nombre del producto"
            name="name"
            autoComplete="off"
            value={name}
            onChange={onInputChange}
          />
          {nameValid && formSubmitted && (
            <small className="invalid-feedback">{nameValid}</small>
          )}
        </div>

        <div className="form-group mb-2">
          <label>Stock</label>
          <input
            type="text"
            className={`form-control ${stockClass}`}
            placeholder="Unidades disponibles"
            name="stock"
            autoComplete="off"
            value={stock}
            onChange={onInputChange}
          />
          {stockValid?.length > 0 &&
            formSubmitted &&
            stockValid.map(msgError => (
              <div key={msgError}>
                <small className="invalid-feedback">{msgError}</small>
              </div>
            ))}
        </div>

        <div className="form-group mb-2">
          <label>Precio</label>
          <input
            type="text"
            className={`form-control ${priceClass}`}
            placeholder="Bs.-"
            name="price"
            value={price}
            onChange={onInputChange}
          />
          {priceValid && formSubmitted && (
            <small className="invalid-feedback">{priceValid}</small>
          )}
        </div>

        <div className="form-group mb-2">
          <label>Características</label>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  )
}
