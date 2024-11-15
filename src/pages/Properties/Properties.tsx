import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'
import { Button } from '../../components/shared'
import CreatePropertyModal from './components/modals/CreatePropertyModal'
import ProjectCard from './components/ProjectCard'
import { usePropertyState } from './context'
import { CiCircleRemove } from 'react-icons/ci'
import { VscSettings } from 'react-icons/vsc'
import FilterProperties from './components/Filter/FilterProperties'
import { Dialog } from 'primereact/dialog'

interface IPropertiesProps {
  children?: React.ReactNode
}

const Properties: React.FC<IPropertiesProps> = (props) => {
  const { properties, handleGetProperties } = usePropertyState()
  const [create, setCreate] = useState(false)
  const [visible, setVisible] = useState(false)
  const [filters, setFilters] = useState({
    category: '',
    title: '',
    propertyType: '',
    zone: '', // Agregamos el filtro de zona
    priceMin: 0,
    priceMax: 8000000,
    bedMin: 1,
    bedMax: 3,
    floorMin: 1,
    floorMax: 3,
    sizeMin: 1,
    sizeMax: 5000,
    bathMin: 1,
    bathMax: 6,
    selectedPropertyType: '',
    selectedFeatures: [],
    active: '',
  })

  const handleCleanFilters = () => {
    setFilters({
      category: '',
      title: '',
      zone: '',
      propertyType: '',
      priceMin: 0,
      priceMax: 8000000,
      bedMin: 1,
      bedMax: 3,
      floorMin: 1,
      floorMax: 3,
      sizeMin: 1,
      sizeMax: 5000,
      bathMin: 1,
      bathMax: 6,
      selectedFeatures: [],
      selectedPropertyType: '',
      active: '',
    })
  }

  function updateFilter(filterName: string, value: any) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }))
  }

  return (
    <>
      <div className='mb-6 flex justify-between items-center'>
        <InputText
          className=' w-[40vw] px-10'
          placeholder='Buscar por nombre o codigo'
        />
        {/* FILTERS */}
        <div className='flex items-center gap-4'>
          <div
            className='flex items-center justify-center cursor-pointer self-start mt-10 lg:my-0 lg:self-autocursor-pointer rounded-xl border border-zinc-200 py-4 px-6 lg:px-3 hover:border-zinc-500 hover:bg-zinc-100 transition-button '
            onClick={() => setVisible(true)}
          >
            <VscSettings className='text-xl mr-2' />
            <span className='font-semibold transition-all'>Más Filtros:</span>
          </div>
          <div
            className='flex items-center cursor-pointer justify-center self-start mt-10 lg:my-0 lg:self-autocursor-pointer rounded-xl border border-zinc-200 py-4 px-6 lg:px-3 hover:border-zinc-500 hover:bg-zinc-100 transition-button '
            onClick={() => {
              handleCleanFilters()
              handleGetProperties({}) // Fetch properties with cleared filters
            }}
          >
            <CiCircleRemove className='text-xl mr-2' />
            <span className='font-semibold transition-all'>
              Limpiar Filtros
            </span>
          </div>
        </div>

        <Button
          className='text-xl px-4'
          onClick={() => setCreate(true)}
          text='Crear'
        />
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {properties?.map((p) => (
          <ProjectCard project={p} />
        ))}
      </div>
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        className=' px-0'
        header='Filtros'
      >
        <div className='flex items-center flex-col '>
          <FilterProperties filters={filters} updateFilters={updateFilter} />
          <div className='flex justify-between w-full pt-5'>
            <div
              className='flex items-center justify-center self-start lg:my-0 lg:self-auto cursor-pointer rounded-xl border border-zinc-200 py-2 px-6 lg:px-3 hover:border-zinc-500 hover:bg-zinc-100 transition-button '
              onClick={() => {
                handleCleanFilters()
                handleGetProperties({}) // Fetch properties with cleared filters
              }}
            >
              <CiCircleRemove className='text-xl mr-2' />
              <span className='font-semibold transition-all'>
                Limpiar Filtros
              </span>
            </div>
            <button
              className='px-4 py-2 text-lg font-semibold rounded-lg bg-accent-yellow-base text-black  shadow-sm self-end'
              onClick={() => {
                handleGetProperties(filters)
                setVisible(false)
              }}
            >
              Ver Propiedades Filtradas
            </button>
          </div>
        </div>
      </Dialog>
      <CreatePropertyModal visible={create} onHide={() => setCreate(false)} />
    </>
  )
}

export default Properties
