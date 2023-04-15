import React from 'react'
import './styles.css'
import { Card } from '../../../../../components/shared'

interface IReportsTableProps {
  children?: React.ReactNode
}

const ReportsTable: React.FC<IReportsTableProps> = (props) => {
  return (
    <>
      <div className='mt-10 bg-white rounded-lg shadow-sm w-full'>
        <Card title='Historial' toolbar></Card>

        <div className='px-2 md:px-6'>
          <div className='py-8 text-sm md:text-base'>
            <div className='bg-slate-100 text-slate-700 rounded-lg h-14 mb-3 grid grid-cols-5 place-items-center'>
              <p>Fecha</p>
              <p>Monto</p>
              <p>Ganancias</p>
              <p>Clientes</p>
              <p> </p>
            </div>
            <div className='bg-purple-50 cursor-pointer transition text-slate-600 rounded-lg h-14 mb-3 grid grid-cols-5 place-items-center hover:scale-[1.02] hover:shadow-md hover:font-medium hover:text-purple-700'>
              <p>27/01/2023</p>
              <p>$64,000</p>
              <p>$55,000</p>
              <p>240</p>
              <p>
                <i className='fa fa-eye transition cursor-pointer text-slate-600 hover:bg-purple-300 p-2 rounded-full mr-1 md:mr-2' />
                <i className='fa fa-file-export transition cursor-pointer text-slate-600 hover:bg-purple-300 p-2 rounded-full' />
              </p>
            </div>
            <div className='bg-purple-50 cursor-pointer transition text-slate-600 rounded-lg h-14 mb-3 grid grid-cols-5 place-items-center hover:scale-[1.02] hover:shadow-md hover:font-medium hover:text-purple-700'>
              <p>27/01/2023</p>
              <p>$64,000</p>
              <p>$55,000</p>
              <p>240</p>
              <p>
                <i className='fa fa-eye transition cursor-pointer text-slate-600 hover:bg-purple-300 p-2 rounded-full mr-1 md:mr-2' />
                <i className='fa fa-file-export transition cursor-pointer text-slate-600 hover:bg-purple-300 p-2 rounded-full' />
              </p>
            </div>
            <div className='bg-purple-50 cursor-pointer transition text-slate-600 rounded-lg h-14 mb-3 grid grid-cols-5 place-items-center hover:scale-[1.02] hover:shadow-md hover:font-medium hover:text-purple-700'>
              <p>27/01/2023</p>
              <p>$64,000</p>
              <p>$55,000</p>
              <p>240</p>
              <p>
                <i className='fa fa-eye transition cursor-pointer text-slate-600 hover:bg-purple-300 p-2 rounded-full mr-1 md:mr-2' />
                <i className='fa fa-file-export transition cursor-pointer text-slate-600 hover:bg-purple-300 p-2 rounded-full' />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReportsTable