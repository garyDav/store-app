import { useDispatch, useSelector } from 'react-redux'
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store'
import productApi from '../api'

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
      dispatch(onLogin({ name: data.name, uid: data.uid }))
    } catch (error) {
      dispatch(onLogout('Credenciales incorrectas'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 500)
    }
  }

  // TODO: Métodos para register
  const startRegister = async ({ fullName, email, password }) => {
    dispatch(onChecking())
    try {
      const { data } = await productApi.post('/auth/register', {})
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(onLogin({ name: data.name, uid: data.uid }))
    } catch (error) {
      dispatch(onLogout(error.response.data?.msg || 'Error al crear la cuenta'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 500)
    }
  }
  // TODO: Check auth
  // TODO: Logout

  return {
    startLogin,
  }
}
