// import { useReportState } from '../../../../../pages/Reports/context'
import commaNumber from 'comma-number'
import React, { useState } from 'react'
import { InputNumber } from 'primereact/inputnumber'
import { Button } from '../../../../../../components/shared'
import { Textarea } from 'flowbite-react'
import { ISpend } from './model/spend'
import { InputTextarea } from 'primereact/inputtextarea'
import { InputText } from 'primereact/inputtext'
import { postExpenses } from '../../../../../Expenses/services'
import { toast } from '../../../../../../App'
import { Dialog } from 'primereact/dialog'

interface ISpendModalProps {
  children?: React.ReactNode
  orders: ISpend[]
  open: boolean
  onClose: any
}

const SpendModal: React.FC<ISpendModalProps> = (props) => {
  const [title, setTile] = useState('')
  const [cost, setCost] = useState(0)
  const [note, setNote] = useState('')

  const handlePostExpense = async () => {
    try {
      if (!title || !cost || !note) return

      await postExpenses({ title, cost, note, type: 'gasto' })
      toast.current.show({
        severity: 'success',
        summary: 'Has registrado el gasto',
      })
    } catch (error: any) {
      console.error(error.message)
    }
  }

  return (
    <Dialog
      className='w-[90vw] lg:w-[60vw]'
      visible={props.open}
      onHide={props.onClose}
      header='Registro de gastos'
      maximizable
    >
      {true ? (
        <>
          {/* Body */}

          <div className='px-4 mt-4'>
            <div className='grid grid-cols-2 gap-6'>
              <div>
                <p className='mb-2 text-sm font-medium border-b border-slate-200 pb-1 text-gray-600'>
                  Razon
                </p>
                <InputText
                  value={title}
                  onChange={(e) => setTile(e.target.value)}
                  className='h-[38px] w-full'
                />
              </div>
              <div>
                <p className='mb-2 text-sm font-medium border-b border-slate-200 pb-1 text-gray-600'>
                  Monto
                </p>
                <InputNumber
                  min={1}
                  className='h-[38px] w-full'
                  value={cost}
                  onChange={(e) => setCost(e.value!)}
                  mode='currency'
                  currency='USD'
                  locale='en-US'
                />
              </div>
            </div>
          </div>

          <div className='mt-4 px-4'>
            <h4 className='mb-2 text-sm font-medium border-b border-slate-200 pb-1 text-gray-600'>
              Nota
            </h4>

            <div>
              <Textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className='w-full bg-white h-[100px]'
              />
            </div>
          </div>

          <div className='mt-4 px-4'>
            <h4 className='mb-2 text-sm font-medium border-b border-slate-200 pb-1 text-gray-600'>
              Registrar gasto:
            </h4>

            <div>
              <Button
                text='Completar gasto'
                className='!bg-red-800 hover:!bg-red-700'
                onClick={() => handlePostExpense()}
              />
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </Dialog>
  )
}

export default SpendModal
