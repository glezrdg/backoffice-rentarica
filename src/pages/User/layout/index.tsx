import React from 'react'
import Sidenav from './Sidenav'

const Layout = ({ children }: any) => {
  return (
    <div>
      <Sidenav />
      {children}
    </div>
  )
}

export default Layout
