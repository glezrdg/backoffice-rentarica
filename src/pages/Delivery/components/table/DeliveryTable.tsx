import React from 'react'

// Components
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useDeliveryState } from '../../context'
import { ICompany } from '../../models'

interface DeliveryTableProps {
  openCreate: () => void
}

const DeliveryTable: React.FC<DeliveryTableProps> = ({ openCreate }) => {
  const { companies, setCompany } = useDeliveryState()

  const updateCompany = (company: ICompany) => {
    setCompany(company)
    openCreate()
  }

  return (
    <div className='overflow-hidden rounded-xl'>
      <DataTable
        value={companies}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        className='hover:bg-slate-200'
      >
        <Column
          field='name'
          header='Nombre de agencia'
          className='text-sm'
        ></Column>
        <Column
          field='price'
          header='Precio promedio'
          className='text-sm'
        ></Column>
        <Column
          field='status'
          header='Uso'
          className='text-sm'
          style={{ width: '30%' }}
          body={(data) => (
            <div className='text-xs bg-purple-400 w-[30%] text-white rounded-2xl p-[0.4rem] text-center'>
              100
            </div>
          )}
        ></Column>
        <Column
          body={(data) => (
            <div className='flex'>
              <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
              <i
                onClick={() => updateCompany(data)}
                className='fa fa-regular fa-edit cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'
              ></i>
              <i className='fa fa-ellipsis-vertical cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
            </div>
          )}
        ></Column>
      </DataTable>
    </div>
  )
}

export default DeliveryTable
