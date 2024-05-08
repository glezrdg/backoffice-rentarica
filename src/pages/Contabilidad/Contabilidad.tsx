import commaNumber from 'comma-number'
import { Card } from '../../components/shared'
import React from 'react'
import { Filters } from './components/Filters'
import { PageHeader } from '../../components/layout'
import CardWidget from '../Reports/components/CardWidget'

export interface ContabilidadProps {}

const Contabilidad = ({}: ContabilidadProps) => {
  return (
    <>
      {/* Header */}
      <PageHeader
        title='Contabilidad'
        right={
          <div>
            <i
              data-te-toggle='modal'
              data-te-target='#spendModal'
              data-te-ripple-init
              data-te-ripple-color={'dark'}
              className='btn text-white bg-purple-900 !shadow-red-100 cursor-pointer'
            >
              <i className='fa fa-plus mr-2' />
              Exportar
            </i>
          </div>
        }
      />

      {/* <Header /> */}
      <div className='flex h-full gap-6 mt-2 mb-4'>
        <Card title='' className='flex-1'>
          <Filters />
        </Card>
      </div>

      <Card title='' className='my-6 mb-0 py-3'>
        <div className='grid sm:grid-cols-3 gap-5 w-full'>
          <CardWidget
            color='green'
            background='green'
            title='Ganancias'
            value={0}
          />
          <CardWidget color='red' background='red' title='Gastos' value={0} />
          <CardWidget
            color='blue'
            background='blue'
            title='Utilidad'
            value={0}
          />
        </div>
      </Card>

      {/* INFORMATION */}
    </>
  )
}

export default Contabilidad
