import { DataService } from "../../../config/api";
import { INotes } from "../models/INotes";
import { notes } from "../utils/data";

export const getNotes = async (): Promise<INotes[]> => {
  try {
    // const { data } = await DataService.get('/Companys')
    // return data as INotes[] || Companys
    return notes
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const addNotes = async (body: INotes): Promise<INotes> => {
  try {
    // const { data } = await DataService.post('/notes', body)
    // return data as INotes
    return notes[0]
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const updateNotes = async (id: string, body: INotes): Promise<INotes> => {
  try {
    const { data } = await DataService.put(`/notes/:${id}`, body)
    return data as INotes
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const removeNotes = async (id: string): Promise<INotes> => {
  try {
    const { data } = await DataService.delete(`/notes/:${id}`)
    return data as INotes
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}