import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SubMenuItem } from '../SubMenuItem'
import './styles.css'

interface IMenuItemProps {
  children?: React.ReactNode
  title: string
  icon: React.ReactNode
  url: string
  active?: boolean
  activeMenu?: boolean
}

const MenuItem: React.FC<IMenuItemProps> = ({
  children,
  title,
  icon,
  url,
  active = false,
  activeMenu,
}) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <li className='relative'>
      <Link
        to={url}
        className='sidenav-menu__submenu cursor-pointer transition-all relative'
      >
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className={`sidenav-menu__submenu_title relative h-[3rem] ${
            active ? 'bg-blue-50' : ''
          } ${children ? '' : ''}`}
        >
          <div
            className={`flex translate-x-1 items-center h-full w-full transition-all ${
              active ? 'border-r-4 border-blue-200 pl-3 text-blue-500' : ''
            }`}
          >
            {icon}
            <p
              className={`pl-[12px] ${
                activeMenu ? 'hidden lg:block' : 'hidden lg:hidden'
              }`}
            >
              {title}
            </p>
            {children && (
              <i className={`submenu-arrow ${openMenu ? 'active' : ''}`} />
            )}
          </div>
        </div>
        {children && (
          <ul
            className={`sidenav-submenu text-center transition-all flex flex-col items-center w-full ${
              openMenu ? 'active' : ''
            }`}
          >
            {children}
          </ul>
        )}
      </Link>

      {/* TOOLTIP */}
      {/* <div className='absolute w-fit right-[-4rem] top-[50%] z-[5000] bg-white shadow-md'>
        <p>{title}</p>
      </div> */}
    </li>
  )
}

export default MenuItem
