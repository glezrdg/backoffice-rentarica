import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import { INotes } from '../models/INotes'

// Services
import * as service from '../services'

const initialState: InitialStateProps = {
  notes: [],
  searchNote: [],
  note: null,
  addNote: async () => {},
  updateNote: async () => {},
  removeNote: async () => {},
  setSearch: () => {},
  setNote: () => {},
}

const NoteContext = createContext(initialState)

export interface NoteProviderProps {
  children: ReactElement
}

export const NoteProvider: React.FC<NoteProviderProps> = ({ children }) => {
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
      const notesData = await service.getNotes()
      setNotes(notesData)
    } catch (error) {}
  }

  const addNote = async (body: INotes) => {
    try {
      const createdNote = await service.addNotes(body)
      setNotes((prev) => [...prev, createdNote])
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  const updateNote = async (body: INotes) => {
    setNotes((prev) => prev.map((p) => (p._id === body._id ? body : p)))
  }

  const removeNote = async (id: string) => {
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

export const useNoteState = () => useContext(NoteContext)

export interface InitialStateProps {
  notes: INotes[]
  searchNote: INotes[]
  note: INotes | null
  addNote: (note: INotes) => Promise<void>
  updateNote: (note: INotes) => Promise<void>
  removeNote: (id: string) => Promise<void>
  setSearch: (string: string) => void
  setNote: (note: INotes) => void
}
