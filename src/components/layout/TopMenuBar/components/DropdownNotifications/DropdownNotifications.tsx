import React from 'react'
import { Link } from 'react-router-dom'

// Css
import './styles.css'

interface IDropdownNotificationsProps {
  children?: React.ReactNode
  id: string
}

const DropdownNotifications: React.FC<IDropdownNotificationsProps> = ({
  id,
}) => {
  return (
    <div
      data-popover
      role='tooltip'
      id={id}
      className='dropdown-messages transition-[all_0.3s_ease] border p-3 shadow-md rounded-md invisible'
    >
      {/* h5 */}
      <h5 className='dropdown-messages__title'>
        <span className='mr-2'>Notificaciones</span>
        <div className='badge badge-success'>3</div>
      </h5>

      {/* Messages */}
      <div className='dropdown-messages-menu pb-3'>
        <ul className='h-[fit] max-h-[260px] overflow-y-auto'>
          <li className='p-3 rounded-md hover:bg-slate-50'>
            <Link to='#'>
              <figure className='flex items-center'>
                <i className='text-2xl fa fa-regular fa-file-lines mr-3 bg-slate-200 px-3 py-1 rounded-md'></i>
                <figcaption className='w-full flex flex-col justify-between'>
                  <h5 className='text-sm mb-1'>Tienes 50 ordenes pendientes</h5>
                  <span className='text-green-400 text-xs'>3 hrs ago</span>
                </figcaption>
                <div className='bg-red-500 rounded-full p-1'></div>
              </figure>
            </Link>
          </li>
          <li className='p-3 rounded-md hover:bg-slate-50'>
            <Link to='#'>
              <figure className='flex items-center'>
                <i className='text-2xl fa fa-regular fa-file-lines mr-3 bg-slate-200 px-3 py-1 rounded-md'></i>
                <figcaption className='w-full flex flex-col justify-between'>
                  <h5 className='text-sm mb-1'>Tienes 50 ordenes pendientes</h5>
                  <span className='text-green-400 text-xs'>3 hrs ago</span>
                </figcaption>
                <div className='bg-red-500 rounded-full p-1'></div>
              </figure>
            </Link>
          </li>
          <li className='p-3 rounded-md hover:bg-slate-50'>
            <Link to='#'>
              <figure className='flex items-center'>
                <i className='text-2xl fa fa-regular fa-file-lines mr-3 bg-slate-200 px-3 py-1 rounded-md'></i>
                <figcaption className='w-full flex flex-col justify-between'>
                  <h5 className='text-sm mb-1'>Tienes 50 ordenes pendientes</h5>
                  <span className='text-green-400 text-xs'>3 hrs ago</span>
                </figcaption>
                <div className='bg-red-500 rounded-full p-1'></div>
              </figure>
            </Link>
          </li>
          <ul />
        </ul>
      </div>

      <button className='w-full text-center text-sm p-3 text-purple-500 hover:bg-purple-500 hover:bg-opacity-5'>
        Ver todos
      </button>
      <div data-popper-arrow></div>
    </div>
  )
}

export default DropdownNotifications
