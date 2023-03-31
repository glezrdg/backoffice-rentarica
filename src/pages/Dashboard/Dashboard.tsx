import React from 'react'
import { TopMenuBar } from '../../components/layout/TopMenuBar'

// Components
import Button from '../../components/shared/Button'

interface IDashboardProps {
  children?: React.ReactNode
}

const Dashboard: React.FC<IDashboardProps> = (props) => {
  return (
    <>
      <TopMenuBar />
    </>
  )
}

export default Dashboard
