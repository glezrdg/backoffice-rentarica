import React, { ReactNode, useState } from 'react'

import { BarChart } from '../charts'

// Components

import Button from '../shared/Button'
import { FloatToolbar } from './FloatToolbar'
import { SideNavbar } from './SideNavbar'
import { TopMenuBar } from './TopMenuBar'

export interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidenav, setSidenav] = useState(true)

  return (
    <>
      <TopMenuBar handleOpen={() => setSidenav(!sidenav)} />
      <SideNavbar active={sidenav} />
      <FloatToolbar />
      <main
        className={`md:px-4 pt-[75px] ml-0 md:ml-[3rem] transition-all ${
          sidenav ? 'lg:ml-[16rem]' : 'md:ml-[3.5rem]'
        }`}
      >
        <div className='p-4'>{children}</div>
      </main>
    </>
  )
}

export default Layout
