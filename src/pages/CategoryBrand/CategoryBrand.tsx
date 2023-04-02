import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { InputText } from 'primereact/inputtext'
import { MultiSelect } from 'primereact/multiselect'
import { Accordion, AccordionTab } from 'primereact/accordion'
import React, { useState } from 'react'
import Button from '../../components/shared/Button'
import { orders } from '../../utility/data'
import './styles.css'

interface ICategoryBrandProps {
  children?: React.ReactNode
}

const CategoryBrand: React.FC<ICategoryBrandProps> = (props) => {
  const [selectedCities, setSelectedCities] = useState(null)
  const [selectedCity, setSelectedCity] = useState(null)

  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ]
  return (
    <>
      {/* Header */}
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-2xl text-slate-800 uppercase'>
          Marcas y categorias
        </h3>

        <div className='flex'>
          <Button
            icon='fa fa-plus'
            color='success'
            text='Marcas'
            className='!px-3 !hover:shadow-none mr-2'
            // onClick={() => setCreateCategoryBrand(true)}
          />
          <Button
            icon='fa fa-plus'
            color='warning'
            text='Categorias'
            className='!px-3 !hover:shadow-none'
            // onClick={() => setCreateCategoryBrand(true)}
          />
        </div>
      </div>

      <div className='flex items-center p-2 mb-6'>
        <div className='flex items-center self-end px-2 rounded-2xl h-fit w-fit mr-10 flex-1'>
          <span className='p-input-icon-left w-full'>
            <i className=' fa fa-search' />

            <InputText
              placeholder='Buscar por nombre...'
              className='rounded-lg placeholder:text-xs outline-none p-2 w-full'
            />
          </span>
        </div>

        <div className='flex items-center'>
          <div className='flex flex-col mr-3'>
            <label className='text-xs mb-1'>Provincias</label>
            <MultiSelect
              value={selectedCities}
              onChange={(e) => setSelectedCities(e.value)}
              options={cities}
              optionLabel='name'
              display='chip'
              placeholder='Provincias'
              maxSelectedLabels={3}
              className='w-full min-w-[300px] md:w-20rem'
            />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-[2fr_1fr] gap-5'>
        <div className='p-4 bg-white rounded-lg shadow-sm w-full'>
          <div className='flex items-center justify-between border-b px-2 py-3'>
            <h4 className='text-lg text-slate-700 uppercase'>Categorias</h4>
            <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full text-purple-500 bg-purple-200 hover:text-purple-700 hover:bg-purple-300'></i>
          </div>
          <Accordion className='mt-4'>
            <AccordionTab header='Hombres'>
              <ul className='ml-4'>
                <li>Pantalones</li>
                <li>Camisas</li>
                <li>Tenis</li>
              </ul>
            </AccordionTab>
            <AccordionTab header='Mujeres'>
              <ul className='ml-4'>
                <li>Pantalones</li>
                <li>Camisas</li>
                <li>Tenis</li>
              </ul>
            </AccordionTab>
            <AccordionTab header='Niños'>
              <ul className='ml-4'>
                <li>Pantalones</li>
                <li>Camisas</li>
                <li>Tenis</li>
              </ul>
            </AccordionTab>
          </Accordion>
        </div>
        <div className='p-4 pb-8 bg-white rounded-lg shadow-sm w-full max-h-[400px] overflow-hidden'>
          <div className='flex items-center justify-between border-b px-2 py-3'>
            <h4 className='text-lg text-slate-700 uppercase'>Marcas</h4>
            <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full text-purple-500 bg-purple-200 hover:text-purple-700 hover:bg-purple-300'></i>
          </div>
          <div className='overflow-y-auto max-h-[350px]'>
            <div className='bg-purple-100 w-full mt-4 mb-1 p-3 rounded-2xl text-center flex items-center justify-between'>
              <p className='text-purple-600 text-xl'>Adidas</p>
              <span className='text-slate-500 text-xs flex flex-col'>
                2,145
              </span>
            </div>
            <div className='bg-purple-100 w-full mt-2 mb-1 p-3 rounded-2xl text-center flex items-center justify-between'>
              <p className='text-purple-600 text-xl'>Nike</p>
              <span className='text-slate-500 text-xs flex flex-col'>
                1,645
              </span>
            </div>
            <div className='bg-purple-100 w-full mt-2 mb-1 p-3 rounded-2xl text-center flex items-center justify-between'>
              <p className='text-purple-600 text-xl'>Sara</p>
              <span className='text-slate-500 text-xs flex flex-col'>
                1,145
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryBrand
