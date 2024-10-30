import React from 'react'
import DoctorsTable from './components/DoctorsTable'

interface IDoctorsProps {
  children?: React.ReactNode
}

const Doctors: React.FC<IDoctorsProps> = (props) => {
  return (
    <>
      <DoctorsTable />
    </>
  )
}

export default Doctors
