import { ConfirmPopup } from 'primereact/confirmpopup'
import { useRef, useState } from 'react'
import { FaCheck, FaPencilAlt, FaTrash } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { toast } from '../../../App'
import { usePropertyState } from '../context'
import CreatePropertyModal from './modals/CreatePropertyModal'

const Toolbar = () => {
  const { property, handleRemoveProperty, handlePutProperty } =
    usePropertyState()
  const [create, setCreate] = useState(false)
  const [remove, setRemove] = useState(false)
  const [activate, setActivate] = useState(false)
  const removeBtn: any = useRef(null)
  const activeBtn: any = useRef(null)

  const acceptRemove = async () => {
    try {
      await handleRemoveProperty(property?._id!)
      toast.current.show({
        severity: 'info',
        summary: 'Confirmed',
        detail: 'Has eliminado la propiedad',
        life: 3000,
      })
    } catch (error: any) {
      toast.current.show({
        severity: 'error',
        summary: 'Rejected',
        detail: 'Ha ocurrido un error',
        life: 3000,
      })
    }
  }

  const acceptActivation = async () => {
    try {
      await handlePutProperty({ _id: property?._id, active: !property?.active })
      toast.current.show({
        severity: 'info',
        summary: 'Confirmed',
        detail: 'Has activado la propiedad',
        life: 3000,
      })
    } catch (error: any) {
      toast.current.show({
        severity: 'error',
        summary: 'Rejected',
        detail: 'Ha ocurrido un error',
        life: 3000,
      })
    }
  }

  const reject = () => {
    toast.current.show({
      severity: 'warn',
      summary: 'Rejected',
      detail: 'You have rejected',
      life: 3000,
    })
  }

  return (
    <>
      <div className='w-[60px] h-[240px] lg:w-[80px] lg:h-[300px] grid bg-white text-xl lg:text-2xl fixed top-[30%] overflow-hidden right-2 rounded-xl super-shadow'>
        <div
          onClick={() => setCreate(true)}
          className='grid place-items-center cursor-pointer transition-all hover:bg-blue-400 hover:text-blue-800'
        >
          <FaPencilAlt />
        </div>
        <div
          ref={activeBtn}
          onClick={() => setActivate(true)}
          className='grid place-items-center border-y cursor-pointer transition-all hover:bg-green-400 hover:text-green-800'
        >
          <ConfirmPopup
            target={removeBtn.current}
            visible={activate}
            onHide={() => setActivate(false)}
            message={`Deseas ${
              property?.active ? 'desactivar' : 'activar'
            } la propiedad?`}
            icon='pi pi-exclamation-triangle'
            accept={acceptActivation}
            footer={({ accept, reject }) => (
              <div className='flex justify-end items-center px-6'>
                <button
                  onClick={reject}
                  className='p-3 w-[60px] uppercase shadow-sm'
                >
                  no
                </button>
                <button
                  onClick={accept}
                  className='p-3 w-[60px] uppercase bg-green-200 shadow-sm'
                >
                  si
                </button>
              </div>
            )}
            reject={reject}
          />
          {property?.active ? <IoClose /> : <FaCheck />}
        </div>
        <button
          ref={removeBtn}
          onClick={() => setRemove(true)}
          className='grid place-items-center cursor-pointer transition-all hover:bg-red-400 hover:text-red-800'
        >
          <ConfirmPopup
            target={removeBtn.current}
            visible={remove}
            onHide={() => setRemove(false)}
            message='Estas seguro de proceder a eliminar?'
            icon='pi pi-exclamation-triangle'
            accept={acceptRemove}
            footer={({ accept, reject }) => (
              <div className='flex justify-end items-center px-6'>
                <button
                  onClick={reject}
                  className='p-3 w-[60px] uppercase shadow-sm'
                >
                  no
                </button>
                <button
                  onClick={accept}
                  className='p-3 w-[60px] uppercase bg-red-200 shadow-sm'
                >
                  si
                </button>
              </div>
            )}
            reject={reject}
          />
          <FaTrash />
        </button>
      </div>

      {create ? (
        <CreatePropertyModal
          visible={create}
          onHide={() => setCreate(false)}
          property={property!}
        />
      ) : (
        ''
      )}
    </>
  )
}

export default Toolbar
