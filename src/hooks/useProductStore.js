import { useDispatch, useSelector } from 'react-redux'
import { onSetActiveProduct } from '../store'

export const useProductStore = () => {
  // Declaraciones de variables
  const dispatch = useDispatch()
  const { products, activeProduct } = useSelector(state => state.product)

  // Definir mis Métodos...
  const setActiveProduct = product => {
    dispatch(onSetActiveProduct(product))
  }

  const startSavingProduct = async product => {
    // TODO: llegar al backend HTTP

    // Todo sale bien
    if (product._id) {
      // Actualizar la BBDD (Update)
    } else {
      // Crear: guardar a la BBDD (Create)
    }
  }

  // Devolución
  return {
    //* Propiedades
    products,
    activeProduct,

    //* Métodos
    setActiveProduct,
    startSavingProduct,
  }
}
