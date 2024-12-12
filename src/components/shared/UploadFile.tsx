import { API_URL } from '../../utility/constants'
import { useEffect, useState } from 'react'

export default function UploadFile({
  setFiles,
  imgFiles,
  images,
  imageId,
  labelId,
  containerClass,
  removeImage,
}: any) {
  // IMAGE JS

  useEffect(() => {
    if (images.length) {
      const imgInputHelperLabel = document.getElementById(labelId)!
      const imgContainer = document.querySelector(`.${containerClass}`)!

      images.map((i: string) => {
        const newImg = document.createElement('img')
        newImg.src = `${API_URL}uploads/${i}`
        newImg.alt = i
        newImg.onclick = (ev) => {
          removeImage(i)
          newImg.remove()
        }
        imgContainer.insertBefore(newImg, imgInputHelperLabel)
      })
    }
  }, [])

  const addImgHandler = () => {
    const imgInputHelper: any = document.getElementById(imageId)!
    const imgInputHelperLabel = document.getElementById(labelId)!
    const imgContainer = document.querySelector(`.${containerClass}`)!

    const IMG_FILES: File[] = []

    const fileInput = imgInputHelper.files[0]
    if (!fileInput) return
    // Generate img preview
    const reader = new FileReader()
    reader.readAsDataURL(fileInput)
    reader.onload = () => {
      const newImg = document.createElement('img')
      newImg.src = String(reader.result)
      newImg.onclick = (ev) => {
        removeImage(fileInput)
        newImg.remove()
      }
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
        <div className={containerClass}>
          <label id={labelId} htmlFor={imageId}>
            +
          </label>
          <input
            type='file'
            id={imageId}
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
