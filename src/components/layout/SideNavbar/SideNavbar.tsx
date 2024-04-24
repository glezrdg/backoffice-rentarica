import React from 'react'
import { MenuItem, SubMenuItem } from './components'
import './styles.css'
import { useAppSelector } from '../../../redux/store'

interface ISideNavbarProps {
  children?: React.ReactNode
  active: boolean
}

const SideNavbar: React.FC<ISideNavbarProps> = ({ active }) => {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <>
      <div
        className={` hidden md:block overflow-visible sidenav w-[3.5rem]  lg:w-[16rem] lg:block bg-slate-50 h-[100vh] p-4 transition-all ${
          active ? 'active' : ''
        }`}
      >
        <p className='hidden lg:block uppercase text-xs mb-4'>Main menu</p>
        <ul className='sidenav-menu'>
          {user.role === 'administrador' ? (
            <>
              <MenuItem
                url='admin/dashboard'
                icon='fa fa-home'
                title='Dashboard'
              />
              <MenuItem
                url='admin/orders'
                icon='fa fa-bag-shopping'
                title='Ventas'
              />
              <MenuItem
                url='admin/inventory'
                icon='fa fa-box'
                title='Inventario'
              />
              <MenuItem url='admin/shopping' icon='fa fa-tag' title='Compras' />
              {/* <MenuItem url='admin/clients' icon='fa fa-user' title='Clientes' /> */}
              <MenuItem
                url='admin/delivery'
                icon='fa fa-user'
                title='Empleados'
              />
              <MenuItem
                url='admin/reports'
                icon='fa fa-folder'
                title='Reportes'
              />
              <MenuItem
                url='admin/oferts'
                icon='fa fa-percent'
                title='Ofertas'
              />
              <MenuItem
                url='admin/category_brand'
                icon='fa fa-code-branch'
                title='Marcas y categorias'
              />
              <MenuItem
                url='admin/notes'
                icon='fa fa-note-sticky'
                title='Notas'
              />{' '}
            </>
          ) : (
            <>
              <MenuItem url='empleado/caja' icon='fa fa-user' title='Caja' />
              <MenuItem
                url='empleado/cuadre'
                icon='fa fa-folder'
                title='Cuadre'
              />
            </>
          )}
        </ul>
      </div>
    </>
  )
}

export default SideNavbar
