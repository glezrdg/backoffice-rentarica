import React, { useState } from 'react'

import commaNumber from 'comma-number'
import { dateFormat } from '../../../../utility/dateFormat'
import { useOrderState } from '../../context'

// Components
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { IOrder } from '../../models/IOrder'
import { OrderModal } from '../modal'
import { Card } from '../../../../components/shared'
import { useNavigate } from 'react-router-dom'

const CuadresTable = (props: any) => {
  const { orders, selectOrder, cuadres } = useOrderState()
  const [selectedOrder, setSelectedOrder] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate()

  console.log(cuadres)

  return (
    <div className='px-2 md:px-6'>
      <div className='py-8 text-sm md:text-base'>
        <div className='bg-slate-100 text-slate-700 rounded-lg h-14 mb-3 grid grid-cols-6 place-items-center'>
          <p>Fecha</p>
          <p>Ordenes</p>
          <p>Efectivo</p>
          <p>Tarjeta</p>
          <p>Total</p>
          <p> </p>
        </div>
        {cuadres?.map((report) => (
          <div
            onClick={() => navigate(`/admin/cuadres/${report._id}`)}
            className='bg-purple-50 bg-opacity-50 cursor-pointer transition text-slate-600 rounded-lg h-14 mb-3 grid grid-cols-6 place-items-center hover:scale-[1.01] hover:shadow-sm hover:font-medium hover:text-purple-900'
          >
            <p>{dateFormat(new Date(report.createdAt), 'date')}</p>
            <p>{commaNumber(report.orders.length) || 0}</p>
            <p>${commaNumber(report.cash) || 0}</p>
            <p>${commaNumber(report.card) || 0}</p>
            <p>${commaNumber(report.totalAmonutSell) || 0}</p>
            <p>
              <i
                data-te-toggle='modal'
                data-te-target='#reportmodal'
                className='fa fa-eye transition cursor-pointer text-slate-600 hover:bg-purple-900 hover:text-white p-2 rounded-full mr-1 md:mr-2'
              />
              <i className='fa fa-file-export transition cursor-pointer  text-slate-600 hover:bg-purple-900 hover:text-white p-2 rounded-full' />
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CuadresTable
