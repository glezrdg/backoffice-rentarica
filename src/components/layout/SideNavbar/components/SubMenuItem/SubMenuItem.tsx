import React from 'react'
import './styles.css'

interface ISubMenuItemProps {
  children?: React.ReactNode
  title: string
}

const SubMenuItem: React.FC<ISubMenuItemProps> = ({ title }) => {
  return (
    <>
      <li className='sidenav-menu__submenu cursor-pointer'>
        <div className='sidenav-menu__submenu_title h-[3rem] p-3 hover:bg-blue-50 hover:text-blue-500'>
          <p className='pl-[20px]'>{title}</p>
        </div>
      </li>
    </>
  )
}

export default SubMenuItem
