import React from 'react'
import { orders } from '../../../../utility/data'
import { dateFormat } from '../../../../utility/dateFormat'

// Components
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { useOfertState } from '../../context'
import { IOfert } from '../../models/IOfert'

interface OfertsTableProps {
  openCreate: () => void
}

const OfertsTable: React.FC<OfertsTableProps> = ({ openCreate }) => {
  const { oferts, setOfert } = useOfertState()

  const updateOfert = (ofert: IOfert) => {
    setOfert(ofert)
    openCreate()
  }

  return (
    <div className='overflow-hidden rounded-xl'>
      <DataTable
        value={oferts}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: '50rem' }}
        className='hover:bg-slate-200'
      >
        <Column field='code' header='#Codigo' className='text-sm'></Column>
        <Column
          field='discount'
          header='Descuento'
          className='text-sm'
        ></Column>
        <Column
          field='provinces'
          header='Provincia'
          className='text-sm'
          body={(data) => <p>{data.provinces[0]}</p>}
        ></Column>
        <Column field='discount' header='Uso' className='text-sm'></Column>
        <Column
          field='status'
          header='Estado'
          className='text-sm'
          style={{ width: '20%' }}
          body={(data) => (
            <div
              className={`text-xs bg-${
                data.disable ? 'red' : 'green'
              }-400 w-[60%] text-white rounded-2xl p-[0.4rem] text-center`}
            >
              {data.disable ? 'Desabilitado' : 'Habilitado'}
            </div>
          )}
        ></Column>
        <Column
          field='expireDate'
          header='Expira'
          className='text-sm'
          body={(data) => (
            <p>{dateFormat(new Date(data.expireDate), 'date')}</p>
          )}
        ></Column>
        <Column
          body={(data) => (
            <div className='flex'>
              <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
              <i
                onClick={() => updateOfert(data)}
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

export default OfertsTable
