import { DataService } from "../../../config/api"
import { CreatePropertyDto, Property } from "../models/property.model"


export const getProperties = async (): Promise<Property[]> => {
  try {
    const { data } = await DataService.get('/properties')
    return data
  } catch (error: any) {
    console.log('error', error)
    throw new Error(error.response.data.message || error.message)
  }
}

export const getProperty = async (id: string): Promise<Property> => {
  try {
    const { data } = await DataService.get(`/properties/${id}`)
    return data
  } catch (error: any) {
    console.log('error', error)
    throw new Error(error.response.data.message || error.message)
  }
}

export const deleteProperty = async (id: string): Promise<Property> => {
  try {
    const { data } = await DataService.delete(`/properties/${id}`)
    return data
  } catch (error: any) {
    console.log('error', error)
    throw new Error(error.response.data.message || error.message)
  }
}


export const postProperty = async (body: CreatePropertyDto): Promise<Property> => {
  try {
    const { data: property } = await DataService.post('/properties', body)
    await handleAddImages(property._id, body.images)
    await handleAddTitleImages(property._id, body.titleImages)
    let data = await handleAddCaptacionImages(property._id, body.captacionImages)

    return data
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

const handleAddImages = async (id: string, images: any[]) => {
  var formData = new FormData();

  for (let i = 0; i < images.length; i++) {
    formData.append('images', images[i]); // 'images' es el nombre que el servidor espera.
  }

  try {
    const { data } = await DataService.post(`/properties/${id}/images`, formData, {
      'Content-Type': 'multipart/form-data'
    })
    return data
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}
const handleAddTitleImages = async (id: string, images: any[]) => {
  var formData = new FormData();

  for (let i = 0; i < images.length; i++) {
    formData.append('images', images[i]); // 'images' es el nombre que el servidor espera.
  }

  try {
    const { data } = await DataService.post(`/properties/${id}/title_images`, formData, {
      'Content-Type': 'multipart/form-data'
    })
    return data
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}
const handleAddCaptacionImages = async (id: string, images: any[]) => {
  var formData = new FormData();

  for (let i = 0; i < images.length; i++) {
    formData.append('images', images[i]); // 'images' es el nombre que el servidor espera.
  }

  try {
    const { data } = await DataService.post(`/properties/${id}/captacion_images`, formData, {
      'Content-Type': 'multipart/form-data'
    })
    return data
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const putProperty = async (body: Partial<Property>): Promise<Property> => {
  try {
    const { data: property } = await DataService.patch(`/properties/${body?._id}`, body)

    return property
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}