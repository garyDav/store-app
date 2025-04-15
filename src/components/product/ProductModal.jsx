import { useState } from 'react'
import DatePicker from 'react-datepicker'
import Modal from 'react-modal'

import 'react-datepicker/dist/react-datepicker.css'
import { useForm } from '../../hooks'
import { addDays, subDays } from 'date-fns'

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
  expiration_date: addDays(new Date(year, month, day), 15),
  stock: 100,
  price: 0,
  tags: [],
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
  } = useForm(productFormValues)
  const [modalIsOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
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

      <form>
        <div className="form-group mb-2">
          <label>Fecha de compra</label>
          <DatePicker
            selected={product_date}
            className="form-control"
            onChange={date => console.log(date)}
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
            onChange={date => console.log(date)}
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Nombre del producto</label>
          <input
            type="text"
            className="form-control"
            placeholder="Producto"
            value={name}
            onChange={() => {}}
          />
        </div>

        <div className="form-group mb-2">
          <label>Stock</label>
          <input
            type="text"
            className="form-control"
            placeholder="Unidades disponibles"
            value={stock}
            onChange={() => {}}
          />
        </div>

        <div className="form-group mb-2">
          <label>Precio</label>
          <input
            type="text"
            className="form-control"
            placeholder="Bs.-"
            value={price}
            onChange={() => {}}
          />
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
