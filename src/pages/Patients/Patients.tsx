import React from 'react'
import PatientsTable from './components/PatientsTable'

interface IPatientsProps {
  children?: React.ReactNode
}

const Patients: React.FC<IPatientsProps> = (props) => {
  return (
    <>
      <PatientsTable />
    </>
  )
}

export default Patients
