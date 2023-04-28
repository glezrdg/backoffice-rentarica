import React from 'react'
import './styles.css'
import { usenotestate } from '../../context'

//Components
import NoteItem from './components/NoteItem/NoteItem'
import ItemModal from '../ItemModal/ItemModal'

interface INotesContainerProps {
  children?: React.ReactNode
}

const NotesContainer: React.FC<INotesContainerProps> = (props) => {
  const { notes } = usenotestate()

  return (
    <>
      <div className='p-4 pb-2 bg-white rounded-lg shadow-sm w-full max-h-[400px] overflow-y-auto'>
        <div className='flex items-center justify-between border-b px-2 py-1 mb-4'>
          <h4 className='text-lg text-slate-700 uppercase'>Todos</h4>
        </div>

        <div className='grid grid-cols-2 gap-2 pb-4 px-2 overflow-y-auto'>
          {notes?.map((note) => (
            <>
              <NoteItem note={note} />
              <ItemModal />
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default NotesContainer
