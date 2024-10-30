import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

// css
import './styles.css'
import { useAppDispatch, useAppSelector } from '../../../../../redux/store'
import { logOut } from '../../../../../redux/reducers/auth'

interface IDropdownProfileProps {
  children?: React.ReactNode
}

const DropdownProfile: React.FC<IDropdownProfileProps> = ({}) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { user } = useAppSelector((state) => state.auth)

  return (
    <div className='user-dropdwon'>
      <figure className='user-dropdwon__info bg-blue-900 text-white'>
        <figcaption>
          <h5>{user.fullname}</h5>
          <p className='!text-[12px] !text-slate-100'>
            {user?.subscriptionId ? user.subscriptionId : 'Prueba gratis'}
          </p>
        </figcaption>
      </figure>
      <ul className='user-dropdwon__links text-slate-500'>
        <li>
          <Link
            to='/admin/perfil'
            className='hover:text-blue-900 hover:bg-blue-400 hover:bg-opacity-50 hover:pl-6'
          >
            <i className='fa fa-user' /> Perfil
          </Link>
        </li>
        <li>
          <Link
            to='/admin/ajustes'
            className='hover:text-blue-900 hover:bg-blue-400 hover:bg-opacity-50 hover:pl-6'
          >
            <i className='fa fa-gear' /> Ajustes
          </Link>
        </li>
      </ul>
      <button
        className='user-dropdwon__bottomAction transition-all text-slate-400 w-full hover:text-white hover:bg-blue-900 hover:shadow-sm'
        onClick={() => {
          dispatch(logOut())
          navigate('/')
        }}
      >
        <i className='fa fa-sign-out' /> Cerrar session
      </button>
      <div data-popper-arrow></div>
    </div>
  )
}

export default DropdownProfile
