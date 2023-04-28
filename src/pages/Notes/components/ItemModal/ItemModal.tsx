import React, { useState, useEffect } from 'react'
import './styles.css'

// Components
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { NoteService } from '../NotesModal/services'
import { usenotestate } from '../../context'

interface IItemModalProps {
  children?: React.ReactNode
}

const ItemModal: React.FC<IItemModalProps> = (props) => {
  const { note } = usenotestate()
  const [title, setTitle] = useState(note?.title || '')
  const [description, setDescription] = useState(note?.description || '')
  const [label, setLabel] = useState(note?.label || '')
  const [favorite, setFavorite] = useState(note?.favorite || false)

  const noteService = new NoteService(
    { title, description, label, favorite },
    usenotestate()
  )

  useEffect(() => {
    fillInputs()
  }, [note])

  const handleAddNote = (e: any) => {
    noteService.handleUpdateNote(e)
  }

  const fillInputs = () => {
    setTitle(note?.title!)
    setDescription(note?.description!)
    setLabel(note?.label!)
    setFavorite(note?.favorite!)
  }

  return (
    <>
      <div
        data-te-modal-init
        className='fixed top-0 left-0 z-[1100] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none'
        id='itemNoteModal'
        tabIndex={-1}
        aria-labelledby='exampleModalCenterTitle'
        aria-modal='true'
        role='dialog'
      >
        <div
          data-te-modal-dialog-ref
          className='pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]'
        >
          <form
            onSubmit={(e) => handleAddNote(e)}
            className='pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600'
          >
            <div className='relative p-4'>
              <div className='flex flex-col mb-1'>
                <InputText
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className='!border-none !text-xl !outline-none uppercase !shadow-none'
                />
              </div>
              <div className='flex flex-col mb-4'>
                <InputTextarea
                  className='min-h-[6rem] !border-none !font-thin !text-lg !outline-none !shadow-none !ring-0'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex flex-col flex-1'>
                  <select
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    className='outline-none !border-50 rounded-md p-3 !focus:border-purple-300 text-sm'
                  >
                    <option>ok</option>
                    <option>ok</option>
                    <option>ok</option>
                  </select>
                </div>
                <i
                  onClick={() => setFavorite(!favorite)}
                  className={`text-3xl self-end mb-2 cursor-pointer transition  fa fa-star block ml-8 ${
                    favorite && 'text-yellow-300'
                  }`}
                />
              </div>
            </div>
            <div className='flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
              <button
                type='button'
                className='inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200'
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color='light'
              >
                Close
              </button>
              <button
                type='button'
                onClick={(e) => handleAddNote(e)}
                className='ml-1 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
                data-te-ripple-init
                data-te-modal-dismiss
                data-te-ripple-color='light'
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ItemModal
