import React from 'react'
import './styles.css'
import NoteItem from './components/NoteItem/NoteItem'

interface INotesContainerProps {
  children?: React.ReactNode
}

const NotesContainer: React.FC<INotesContainerProps> = (props) => {
  return (
    <>
      <div className='p-4 pb-2 bg-white rounded-lg shadow-sm w-full max-h-[400px] overflow-hidden'>
        <div className='flex items-center justify-between border-b px-2 py-1 mb-4'>
          <h4 className='text-lg text-slate-700 uppercase'>Todos</h4>
        </div>

        <div className='grid grid-cols-2 gap-2 pb-4 px-2'>
          <NoteItem title='Ordenes sin metodo' description='Auxilio' />
          <NoteItem
            color='slate'
            title='Ordenes sin metodo'
            description='Auxilio'
          />
          <NoteItem
            color='red'
            title='Ordenes sin metodo'
            description='Auxilio'
          />
          <NoteItem
            color='purple'
            title='Ordenes sin metodo'
            description='Auxilio'
          />
        </div>
      </div>
    </>
  )
}

export default NotesContainer
