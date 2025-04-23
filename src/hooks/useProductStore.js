import { useDispatch, useSelector } from 'react-redux'
import { onAddNewProduct, onSetActiveProduct } from '../store'

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
      console.log('Update')
    } else {
      // Crear: guardar a la BBDD (Create)
      // TODO: llevar a la API
      console.log('Create')
      dispatch(onAddNewProduct({ ...product, _id: new Date().getTime() }))
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
