import React from 'react'
import { Link } from 'react-router-dom'

// css
import './styles.css'

interface IDropdownProfileProps {
  children?: React.ReactNode
  id: string
}

const DropdownProfile: React.FC<IDropdownProfileProps> = ({ id }) => {
  return (
    <div
      data-popover
      role='tooltip'
      id={id}
      className='user-dropdwon invisible transition-all shadow-md p-3 min-w-[260px] border rounded-md'
    >
      <figure className='user-dropdwon__info'>
        <figcaption>
          <h5>Abdullah Bin Talha</h5>
          <p>UI Expert</p>
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
      <Link
        className='user-dropdwon__bottomAction text-slate-400 bg-slate-50 w-full hover:text-purple-500 hover:shadow-sm'
        to='#'
      >
        <i className='fa fa-sign-out' /> Sign Out
      </Link>
      <div data-popper-arrow></div>
    </div>
  )
}

export default DropdownProfile
