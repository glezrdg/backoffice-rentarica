import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import { INotes } from '../models/INotes'

// Services
import { getNotes } from '../services'

const initialState: InitialStateProps = {
  notes: [],
  searchNote: [],
  note: null,
  addNote: () => {},
  updateNote: () => {},
  removeNote: () => {},
  setSearch: () => {},
  setNote: () => {},
}

const NoteContext = createContext(initialState)

export interface InventoryProviderProps {
  children: ReactElement
}

export const NoteProvider: React.FC<InventoryProviderProps> = ({
  children,
}) => {
  const [notes, setNotes] = useState<INotes[]>(initialState.notes)
  const [searchNote, setSearchNote] = useState<INotes[]>([])
  const [search, setSearch] = useState<string>('')
  const [note, setNote] = useState<INotes | null>(initialState.note)

  let activeNote = search ? searchNote : notes

  useEffect(() => {
    getInitialState()
  }, [])

  useEffect(() => {
    if (search) {
      handleSearchNote()
    }
  }, [search])

  const handleSearchNote = () => {
    let searched = notes.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )

    setSearchNote(searched)
  }

  const getInitialState = async () => {
    try {
      const notesData = await getNotes()
      setNotes(notesData)
    } catch (error) {}
  }

  const addNote = (body: INotes) => {
    setNotes((prev) => [...prev, { _id: `${prev.length + 1}`, ...body }])
  }

  const updateNote = (body: INotes) => {
    setNotes((prev) => prev.map((p) => (p._id === body._id ? body : p)))
  }

  const removeNote = (id: string) => {
    setNotes((prev) => prev.filter((i) => i._id !== id))
  }

  return (
    <NoteContext.Provider
      value={{
        notes: activeNote,
        note,
        addNote,
        updateNote,
        removeNote,
        setNote,
        setSearch,
        searchNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  )
}

export const usenotestate = () => useContext(NoteContext)

export interface InitialStateProps {
  notes: INotes[]
  searchNote: INotes[]
  note: INotes | null
  addNote: (product: INotes) => void
  updateNote: (product: INotes) => void
  removeNote: (id: string) => void
  setSearch: (string: string) => void
  setNote: (product: INotes) => void
}
