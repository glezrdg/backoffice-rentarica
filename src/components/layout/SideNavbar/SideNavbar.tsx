import React from 'react'
import { MenuItem, SubMenuItem } from './components'
import './styles.css'
import { useAppSelector } from '../../../redux/store'
import { useLocation } from 'react-router-dom'

interface ISideNavbarProps {
  children?: React.ReactNode
  active: boolean
  handleOpen: () => void
}

const SideNavbar: React.FC<ISideNavbarProps> = ({ active, handleOpen }) => {
  const { user } = useAppSelector((state) => state.auth)
  const location = useLocation()

  const current = location.pathname.split('/')[2]
  console.log('current', current)

  return (
    <>
      <div
        className={` hidden md:block overflow-visible sidenav lg:block bg-white h-[100vh] p-4 transition-all ${
          active ? 'w-[3.5rem] lg:w-[14rem]' : 'w-[3.5rem]'
        }`}
      >
        <div
          className='flex items-center cursor-pointer mb-6'
          onClick={() => handleOpen()}
        >
          <i className='fa fa-bars lg:text-2xl mr-1 md:mr-2 lg:mr-4 text-slate-400' />
          <img
            src='/logo.png'
            className={`hidden w-[100px] h-[40px] ${
              active ? 'lg:block' : 'hidden'
            }`}
          />
        </div>
        <p
          className={`hidden lg:block uppercase text-xs my-3 text-purple-700 ${
            active ? '' : 'hidden lg:hidden'
          }`}
        >
          Administracion
        </p>
        <ul className='sidenav-menu'>
          <>
            <MenuItem
              activeMenu={active}
              url='admin/dashboard'
              icon='fa fa-home'
              active={current === 'dashboard'}
              title='Dashboard'
            />
            <MenuItem
              activeMenu={active}
              url='admin/orders'
              icon='fa fa-bag-shopping'
              active={current === 'orders'}
              title='Ventas'
            />
            <MenuItem
              activeMenu={active}
              url='admin/inventory'
              icon='fa fa-box'
              active={current === 'inventory'}
              title='Inventario'
            />
            <MenuItem
              activeMenu={active}
              url='admin/inversiones'
              icon='fa fa-money-bill-trend-up'
              title='Inversiones'
              active={current === 'inversiones'}
            />
            {/* <MenuItem
              activeMenu={active}
              url='admin/gastos'
              icon='fa fa-dollar-sign'
              title='Gastos'
              active={current === 'gastos'}
            /> */}
            {/* <MenuItem
              activeMenu={active}
              url='admin/clients'
              icon='fa fa-user'
              title='Clientes'
            /> */}
            {user.subscriptionId !== 'Plan emprendedor' && (
              <MenuItem
                activeMenu={active}
                url='admin/usuarios'
                icon='fa fa-user'
                title='Usuarios'
                active={current === 'usuarios'}
              />
            )}
            <MenuItem
              activeMenu={active}
              url='admin/reports'
              icon='fa fa-folder'
              active={current === 'reports'}
              title='Reportes'
            />
            {/* <MenuItem
            activeMenu={active} url='admin/oferts' icon='fa fa-percent' title='Ofertas' /> */}
            <MenuItem
              activeMenu={active}
              url='admin/category_brand'
              icon='fa fa-code-branch'
              active={current === 'category_brand'}
              title='Marcas y categorias'
            />
            {/* <MenuItem
              activeMenu={active}
              url='admin/contabilidad'
              icon='fa fa-note-sticky'
              active={current === 'contabilidad'}
              title='Contabilidad'
            /> */}
          </>
        </ul>

        <p
          className={`hidden lg:block uppercase text-xs my-3 text-purple-700 ${
            active ? '' : 'hidden lg:hidden'
          }`}
        >
          Facturacion
        </p>

        <ul className='sidenav-menu'>
          <>
            {/* <MenuItem
              url='admin/caja'
              icon='fa fa-user'
              title='Caja'
              active={current === 'caja'}
              activeMenu={active}
            /> */}
            <MenuItem
              url='admin/cuadre'
              icon='fa fa-folder'
              title='Cuadre'
              active={current === 'cuadre'}
              activeMenu={active}
            />
          </>
        </ul>
      </div>
    </>
  )
}

export default SideNavbar
