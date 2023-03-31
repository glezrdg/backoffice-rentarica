import React, { useState } from 'react'
import { SideNavbar } from '../../components/layout/SideNavbar'
import { TopMenuBar } from '../../components/layout/TopMenuBar'

// Components
import Button from '../../components/shared/Button'

interface IDashboardProps {
  children?: React.ReactNode
}

const Dashboard: React.FC<IDashboardProps> = (props) => {
  const [sidenav, setSidenav] = useState(false)

  return (
    <>
      <TopMenuBar handleOpen={() => setSidenav(!sidenav)} />
      <SideNavbar active={sidenav} />
      <main className={`p-4 transition-all ${sidenav ? 'ml-[280px]' : ''}`}>
        <div className={`bg-white shadow-md w-full h-[60vh]`}></div>
      </main>
    </>
  )
}

export default Dashboard
