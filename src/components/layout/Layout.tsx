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
        className={`p-4 pt-[75px] transition-all ${
          sidenav ? 'ml-[280px]' : ''
        }`}
      >
        <div className='p-4'>{children}</div>
      </main>
    </>
  )
}

export default Layout
