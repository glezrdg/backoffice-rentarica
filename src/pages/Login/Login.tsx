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

const loginSocials = [
  {
    name: 'Continue with Facebook',
    href: '#',
    icon: 'https://ciseco-reactjs.vercel.app/static/media/facebook.8291c7f7c187e8f09292cced2ed0278d.svg',
  },
  {
    name: 'Continue with Google',
    href: '#',
    icon: 'https://ciseco-reactjs.vercel.app/static/media/Google.b9361a382296ba2cbc182016085b0cc8.svg',
  },
]

const PageLogin: FC<PageLoginProps> = ({ className = '' }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.auth)
  // const { login, auth } = useAuthState()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (user) {
      localStorage.removeItem('stripe_url')
      navigate('/admin/dashboard')
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
            <div className='grid gap-3'>
              {loginSocials.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className='flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]'
                >
                  <img
                    className='flex-shrink-0 w-5'
                    src={item.icon}
                    alt={item.name}
                  />
                  <h3 className='flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm'>
                    {item.name}
                  </h3>
                </a>
              ))}
            </div>
            {/* OR */}
            <div className='relative text-center'>
              <span className='relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900'>
                OR
              </span>
              <div className='absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800'></div>
            </div>
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

            {/* ==== */}
            <span className='block text-center text-neutral-700 dark:text-neutral-300'>
              No tienes cuenta? {` `}
              <Link className='text-green-600' to='/register'>
                Registrate aqui
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageLogin
