import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'

const initialFormValues = {
  email: 'algo@algo.com',
  password: '123456',
}

function LoginPage() {
  const { counter } = useSelector(state => state.counter)
  const { formValues, onInputChange } = useForm(initialFormValues)
  const { email, password } = formValues

  console.log(counter)

  return (
    <>
      <main>
        <section>
          <h1>Iniciar sesión</h1>

          <form onSubmit={() => {}}>
            <div>
              <label htmlFor="txtEmail">Ingrese correo.</label>
              <input
                id="txtEmail"
                type="text"
                placeholder="Ingrese correo"
                name="email"
                value={email}
                onChange={onInputChange}
                autoComplete="off"
                spellCheck="false"
              />
            </div>

            <div>
              <label htmlFor="txtPassword">Ingrese contraseña.</label>
              <input
                id="txtPassword"
                type="password"
                placeholder="Ingrese contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
                autoComplete="off"
                spellCheck="false"
              />
            </div>

            <div>
              <span>Reglas de password.</span>
            </div>

            <div>
              <button type="submit">Iniciar sesión</button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}

export default LoginPage
