import React from 'react'
import { MenuItem, SubMenuItem } from './components'
import './styles.css'
import { useAppSelector } from '../../../redux/store'
import { useLocation } from 'react-router-dom'

interface ISideNavbarProps {
  children?: React.ReactNode
  active: boolean
}

const SideNavbar: React.FC<ISideNavbarProps> = ({ active }) => {
  const { user } = useAppSelector((state) => state.auth)
  const location = useLocation()

  const current = location.pathname.split('/')[2]
  console.log('current', current)

  return (
    <>
      <div
        className={` hidden md:block overflow-visible sidenav w-[3.5rem]  lg:w-[16rem] lg:block bg-white h-[100vh] p-4 transition-all ${
          active ? 'active' : ''
        }`}
      >
        <p className='hidden lg:block uppercase text-xs mb-3 text-purple-700'>
          Administracion
        </p>
        <ul className='sidenav-menu'>
          <>
            <MenuItem
              url='admin/dashboard'
              icon='fa fa-home'
              active={current === 'dashboard'}
              title='Dashboard'
            />
            <MenuItem
              url='admin/orders'
              icon='fa fa-bag-shopping'
              active={current === 'orders'}
              title='Ventas'
            />
            <MenuItem
              url='admin/inventory'
              icon='fa fa-box'
              active={current === 'inventory'}
              title='Inventario'
            />
            <MenuItem
              url='admin/shopping'
              icon='fa fa-tag'
              title='Compras'
              active={current === 'shopping'}
            />
            {/* <MenuItem url='admin/clients' icon='fa fa-user' title='Clientes' /> */}
            {user.subscriptionId !== 'Plan emprendedor' && (
              <MenuItem
                url='admin/usuarios'
                icon='fa fa-user'
                title='Usuarios'
                active={current === 'usuarios'}
              />
            )}
            <MenuItem
              url='admin/reports'
              icon='fa fa-folder'
              active={current === 'reports'}
              title='Reportes'
            />
            {/* <MenuItem url='admin/oferts' icon='fa fa-percent' title='Ofertas' /> */}
            <MenuItem
              url='admin/category_brand'
              icon='fa fa-code-branch'
              active={current === 'category_brand'}
              title='Marcas y categorias'
            />
            {/* <MenuItem
              url='admin/notes'
              icon='fa fa-note-sticky'
              active={current === ''}
              title='Notas'
            /> */}
            {!user?.subscriptionId && (
              <MenuItem
                url='admin/planes'
                icon='fa fa-circle-check'
                title='Planes'
                active={current === 'planes'}
              />
            )}
          </>
        </ul>

        <p className='hidden lg:block uppercase text-xs my-3 text-purple-700'>
          Facturacion
        </p>

        <ul className='sidenav-menu'>
          <>
            <MenuItem
              url='admin/caja'
              icon='fa fa-user'
              title='Caja'
              active={current === 'caja'}
            />
            <MenuItem
              url='admin/cuadre'
              icon='fa fa-folder'
              title='Cuadre'
              active={current === 'cuadre'}
            />
          </>
        </ul>
      </div>
    </>
  )
}

export default SideNavbar
