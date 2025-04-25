import { useDispatch, useSelector } from 'react-redux'
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store'
import { productApi } from '../api'

export const useAuthStore = () => {
  // TODO: Uso de nuestro Store
  const { status, user, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  // TODO: Métodos para login
  const startLogin = async ({ email, password }) => {
    dispatch(onChecking())
    try {
      const { data } = await productApi.post('/auth/login', { email, password })
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())

      console.log(data)
      // dispatch(onLogin({ name: data.name, uid: data.uid }))
    } catch (error) {
      console.error(error)
      dispatch(onLogout('Credenciales incorrectas'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 500)
    }
  }

  // TODO: PRUEBA FINAL, Métodos para register

  // TODO::Check auth
  /*const checkAuthToken = async () => {
    const token = localStorage.getItem('token')
    if (!token) return dispatch(onLogout())

    try {
      const { data } = await productApi.get('/auth/renew')
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(onLogin({ name: data.name, uid: data.uid }))
    } catch (error) {
      localStorage.clear()
      dispatch(onLogout())
    }
  }*/
  // TODO: Logout
  const startLogout = () => {
    localStorage.clear()
    dispatch(onLogout())
  }

  return {
    // TODO: Propiedades
    status,
    user,
    errorMessage,

    // TODO: Métodos
    startLogin,
    startLogout,

    // TODO: PRUEBA FINAL, Método Register
  }
}
