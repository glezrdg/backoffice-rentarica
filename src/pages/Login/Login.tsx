import { InputText } from 'primereact/inputtext'
import { FC, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from '../../App'
import { Button } from '../../components/shared'
import { loginUser } from './services'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { setAuth } from '../../redux/reducers/auth'

export interface PageLoginProps {
  className?: string
}

const PageLogin: FC<PageLoginProps> = ({ className = '' }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.auth)
  // const { login, auth } = useAuthState()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (user) {
      navigate('/admin/propiedades')
    }
  }, [user])

  const handleLogin = async (e: any) => {
    e.preventDefault()
    try {
      if (!email || !password) {
        toast.current?.show({
          severity: 'error',
          summary: 'Llena todos los campos!',
        })
        return
      }
      let loggedUser = await loginUser({ email, password })
      localStorage.setItem('auth', JSON.stringify(loggedUser))
      dispatch(setAuth(loggedUser))
      toast.current?.show({
        severity: 'success',
        summary: 'Has iniciado session',
      })
      navigate('/admin/propiedades')
    } catch (error: any) {
      toast.current?.show({
        severity: 'error',
        summary: error.message,
      })
      console.log('error registering user', error.message)
    }
  }

  return (
    <>
      <div className={`nc-PageLogin ${className}`} data-nc-id='PageLogin'>
        <div className='container mx-auto'>
          <h2 className='my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center'>
            Iniciar Sesion
          </h2>
          <div className='max-w-md mx-auto space-y-6'>
            {/* FORM */}
            <form className='grid grid-cols-1 gap-6 w-[450px]'>
              <label className='grid grid-rows-2'>
                <span className='text-neutral-800 dark:text-neutral-200'>
                  Correo Electronico
                </span>
                <InputText
                  type='email'
                  placeholder='ejemplo@email.com'
                  className='mt-1'
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                />
              </label>
              <label className='grid grid-rows-2'>
                <span className='flex justify-between items-center text-neutral-800 dark:text-neutral-200 flex-1'>
                  Contraseña
                  <Link to='/forgot-pass' className='text-sm text-green-600'>
                    olvidaste la contraseña?
                  </Link>
                </span>
                <InputText
                  type='password'
                  className='mt-1'
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                />
              </label>
              <Button
                onClick={(e) => handleLogin(e)}
                className='p-4'
                buttonType='button'
                text='Iniciar sesion'
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageLogin
