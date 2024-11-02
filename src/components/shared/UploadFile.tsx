import { API_URL } from '../../utility/constants'
import { useEffect, useState } from 'react'

export default function UploadFile({ setFiles, imgFiles, images }: any) {
  // IMAGE JS

  useEffect(() => {
    if (images.length) {
      const imgInputHelper: any = document.getElementById('add-single-img')!
      const imgInputHelperLabel = document.getElementById('add-img-label')!
      const imgContainer = document.querySelector('.custom__image-container')!

      images.map((i: string) => {
        const newImg = document.createElement('img')
        newImg.src = `${API_URL}uploads/${i}`
        imgContainer.insertBefore(newImg, imgInputHelperLabel)
      })
    }
  }, [images])

  const addImgHandler = () => {
    const imgInputHelper: any = document.getElementById('add-single-img')!
    const imgInputHelperLabel = document.getElementById('add-img-label')!
    const imgContainer = document.querySelector('.custom__image-container')!

    const IMG_FILES: File[] = []

    const fileInput = imgInputHelper.files[0]
    if (!fileInput) return
    // Generate img preview
    const reader = new FileReader()
    reader.readAsDataURL(fileInput)
    reader.onload = () => {
      const newImg = document.createElement('img')
      newImg.src = String(reader.result)
      imgContainer.insertBefore(newImg, imgInputHelperLabel)
    }
    // Store img file
    IMG_FILES.push(fileInput)
    imgFiles((prev: any) => [...prev, fileInput])
    setFiles(IMG_FILES[0])
    // Reset image input
    imgInputHelper.value = ''
    console.log('IMG FILE', IMG_FILES)
    return
  }

  return (
    <div className='flex flex-col my-5'>
      <div className='custom__form'>
        <div className='custom__image-container'>
          <label id='add-img-label' htmlFor='add-single-img'>
            +
          </label>
          <input
            type='file'
            id='add-single-img'
            name='images'
            accept='image/jpeg image/png image/webp'
            onChange={addImgHandler}
          />
        </div>
        <input
          type='file'
          id='image-input'
          name='images'
          accept='image/jpeg image/png image/webp'
          multiple
        />
        <br />
      </div>
    </div>
  )
}
