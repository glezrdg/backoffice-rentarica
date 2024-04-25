import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

// css
import './styles.css'
import { useAppDispatch, useAppSelector } from '../../../../../redux/store'
import { logOut } from '../../../../../redux/reducers/auth'

interface IDropdownProfileProps {
  children?: React.ReactNode
  id: string
}

const DropdownProfile: React.FC<IDropdownProfileProps> = ({ id }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { user } = useAppSelector((state) => state.auth)

  return (
    <div
      data-popover
      role='tooltip'
      id={id}
      className='user-dropdwon invisible transition-all shadow-md p-3 min-w-[260px] border rounded-md'
    >
      <figure className='user-dropdwon__info'>
        <figcaption>
          <h5>{user.fullname}</h5>
          <p>{user?.subscriptionId ? 'Subscrito' : 'Prueba gratis'}</p>
        </figcaption>
      </figure>
      <ul className='user-dropdwon__links text-slate-500'>
        <li>
          <Link
            to='#'
            className='hover:text-purple-400 hover:bg-purple-50 hover:bg-opacity-50 hover:pl-6'
          >
            <i className='fa fa-user' /> Profile
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className='hover:text-purple-400 hover:bg-purple-50 hover:bg-opacity-50 hover:pl-6'
          >
            <i className='fa fa-gear' /> Settings
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className='hover:text-purple-400 hover:bg-purple-50 hover:bg-opacity-50 hover:pl-6'
          >
            <i className='fa fa-wallet' /> Billing
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className='hover:text-purple-400 hover:bg-purple-50 hover:bg-opacity-50 hover:pl-6'
          >
            <i className='fa fa-users' />
            Activity
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className='hover:text-purple-400 hover:bg-purple-50 hover:bg-opacity-50 hover:pl-6'
          >
            <i className='fa fa-bell' />
            Help
          </Link>
        </li>
      </ul>
      <button
        className='user-dropdwon__bottomAction text-slate-400 bg-slate-50 w-full hover:text-purple-500 hover:shadow-sm'
        onClick={() => {
          dispatch(logOut())
          navigate('/home')
        }}
      >
        <i className='fa fa-sign-out' /> Sign Out
      </button>
      <div data-popper-arrow></div>
    </div>
  )
}

export default DropdownProfile
