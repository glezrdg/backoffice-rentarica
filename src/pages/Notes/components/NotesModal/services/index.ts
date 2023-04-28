import { toast } from '../../../../../App'
import { InitialStateProps, } from '../../../context'
import { INotes } from '../../../models/INotes'

export class NoteService {
  note: INotes
  noteState: InitialStateProps

  constructor(note: INotes, noteState: InitialStateProps) {
    this.note = note
    this.noteState = noteState
  }

  handleCreateNote = (e: any) => {
    const {
      title,
      description,
      label,
      favorite
    } = this.note
    e.preventDefault()
    if (!title || !description) {
      toast.current?.show({
        severity: 'error',
        summary: 'Llena el campo encabezado',
        detail: `Debes de llenar el campo para agregar una categoria!`,
      })
    } else {
      this.noteState.addNote({
        title,
        description,
        label,
        favorite
      })
      toast.current?.show({
        severity: 'success',
        summary: 'Nota agregada!',
        detail: `Has agregado una nota ${title}`,
      })
    }
  }

  handleUpdateNote = (e: any) => {
    const {
      title,
      description,
      label,
      favorite
    } = this.note
    e.preventDefault()
    if (!title || !description) {
      toast.current?.show({
        severity: 'error',
        summary: 'Llena todos los campos',
        detail: `Debes de llenar el campo para agregar una categoria!`,
      })
    } else {
      this.noteState.updateNote({
        _id: this.noteState.note?._id,
        title,
        description,
        label,
        favorite
      })
      toast.current?.show({
        severity: 'success',
        summary: 'Nota actualizada!',
        detail: `Has actualizado una nota exitosamente!`,
      })
    }
  }

  handleRemoveNote = () => {
    this.noteState.removeNote(this.noteState.note?._id!)
    toast.current?.show({
      severity: 'success',
      summary: 'Agencia borrada',
      detail: `Has borrado una agencia!`,
    })
  }
}
