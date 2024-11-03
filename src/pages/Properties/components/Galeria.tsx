import React, { useState, useEffect } from 'react'
import { Galleria } from 'primereact/galleria'
import { API_URL } from '../../../utility/constants'

export default function Galeria(props: any) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [images, setImages] = useState([
    {
      itemImageSrc:
        'https://as1.ftcdn.net/v2/jpg/02/91/45/12/1000_F_291451260_DTtmKxG4ph9X8FP22HawITByfdPDG5ZK.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
  ])

  const itemTemplate = (item: any) => {
    return (
      <img
        src={API_URL + `uploads/${item.itemImageSrc}`}
        alt={item.alt}
        className='w-[100%] h-[300px] md:h-[450px] lg:h-[650px] rounded-3xl text-center object-contain'
      />
    )
  }
  const thumbItemTemplate = (item: any) => {
    return (
      <img
        src={API_URL + `uploads/${item.itemImageSrc}`}
        alt={item.alt}
        className='h-[100px] text-center object-contain'
      />
    )
  }

  return (
    <div className='card'>
      <Galleria
        value={props?.images?.map((p: any) => ({
          itemImageSrc: p,
          thumbnailImageSrc: p,
          alt: 'Description for Image 1',
          title: 'Title 1',
        }))}
        className='w-[100%] rounded-3xl text-center'
        showItemNavigatorsOnHover
        autoPlay
        showItemNavigators
        onItemChange={(e) => setSelectedImage(e.index)}
        activeIndex={selectedImage}
        circular
        item={itemTemplate}
        thumbnail={thumbItemTemplate}
        showThumbnails
        numVisible={6}
      />
    </div>
  )
}
