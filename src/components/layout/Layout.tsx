import React, { ReactNode, useEffect, useState } from 'react'

import { BarChart } from '../charts'

// Components
import { FloatToolbar } from './FloatToolbar'
import { SideNavbar } from './SideNavbar'
import { TopMenuBar } from './TopMenuBar'
import { NotesModal } from '../../pages/Notes/components/NotesModal'
import { useAppSelector } from '../../redux/store'
import { useNavigate } from 'react-router-dom'
import CreateProductModal from '../../pages/Products/components/modal/CreateProductModal'

export interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user } = useAppSelector((state) => state.auth)
  const navigate = useNavigate()

  const [sidenav, setSidenav] = useState(true)

  return (
    <>
      {user ? (
        <>
          <TopMenuBar
            active={sidenav}
            handleOpen={() => setSidenav(!sidenav)}
          />
          <SideNavbar
            active={sidenav}
            handleOpen={() => setSidenav(!sidenav)}
          />
          <div>
            {/* <FloatToolbar /> */}
            {/* <NotesModal />
            <CreateProductModal /> */}
          </div>
          <main
            className={`md:px-4 pt-[75px] ml-0 md:ml-[3rem] transition-all dark:bg-slate-700 ${
              sidenav ? 'lg:ml-[14rem]' : 'md:ml-[3.5rem]'
            }`}
          >
            <div className='p-4'>{children}</div>
          </main>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default Layout
