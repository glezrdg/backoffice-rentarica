import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'
import { Button } from '../../components/shared'
import CreatePropertyModal from './components/modals/CreatePropertyModal'
import ProjectCard from './components/ProjectCard'
import { usePropertyState } from './context'

interface IPropertiesProps {
  children?: React.ReactNode
}

const Properties: React.FC<IPropertiesProps> = (props) => {
  const { properties } = usePropertyState()
  const [create, setCreate] = useState(false)

  return (
    <>
      <div className='mb-6 flex justify-between items-center'>
        <div>
          <InputText
            className=' w-[60vw]lg:w-[30vw]'
            placeholder='Buscar por nombre o codigo'
          />
        </div>
        <Button onClick={() => setCreate(true)} text='Crear' />
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {properties?.map((p) => (
          <ProjectCard project={p} />
        ))}
      </div>
      <CreatePropertyModal visible={create} onHide={() => setCreate(false)} />
    </>
  )
}

export default Properties
