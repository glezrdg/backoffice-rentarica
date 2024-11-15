'use client'

import { Slider } from 'primereact/slider'
import { Dropdown } from 'primereact/dropdown'
import React, { useEffect, useState } from 'react'
import PropertyTypeSelector from './PropertiesType'
import PropertyFeaturesSelector from './PropertyFeaturesSelector'
import { InputText } from 'primereact/inputtext'
import { provincias } from '../../../../utility/data'
import { SelectButton } from 'primereact/selectbutton'

const states = [
  { label: 'Todos', value: '' },
  { label: 'Publicados', value: true },
  { label: 'En Draft', value: false },
]

const FilterProperties = ({ filters, updateFilters }: any) => {
  const [bathroomCount, setBathroomCount] = useState<number>(
    filters.bathMin || 1
  )
  const [roomCount, setRoomCount] = useState<number>(filters.bedMin || 1)
  const [floors, setFloors] = useState<any>([
    filters.floorMin,
    filters.floorMax,
  ])
  const [price, setPrice] = useState<any>([filters.priceMin, filters.priceMax])
  const [size, setSize] = useState<any>([filters.sizeMin, filters.sizeMax])
  const [zone, setZone] = useState<string>(filters.zone || '')
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>('')
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  useEffect(() => {
    updateFilters('bathMin', bathroomCount)
    updateFilters('bedMin', roomCount)
    updateFilters('priceMin', price[0])
    updateFilters('priceMax', price[1])
    updateFilters('floorMin', floors[0])
    updateFilters('floorMax', floors[1])
    updateFilters('sizeMin', size[0])
    updateFilters('sizeMax', size[1])
    updateFilters('features', [])
    updateFilters('propertyType', '')
    updateFilters('zone', zone)
  }, [bathroomCount, price, size, floors, zone])

  const handleSelectPropertyType = (type: string) => {
    setSelectedPropertyType(type)
    updateFilters('propertyType', type)
  }

  const handleSelectFeature = (features: string[]) => {
    setSelectedFeatures(features)
    updateFilters('features', features)
  }
  const incrementCounter = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number
  ) => {
    setter(value + 1)
  }

  const decrementCounter = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number,
    min: number
  ) => {
    if (value > min) {
      setter(value - 1)
    }
  }

  const footerContent = (
    <div>
      {/* <Button label="Ok" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus /> */}
    </div>
  )

  return (
    <div className='shadow-md rounded-lg p-4 space-y-12 min-h-[60vh] '>
      <div className='w-full flex'>
        <SelectButton
          value={filters.active}
          className='w-full'
          onChange={(e: any) => updateFilters('active', e.value)}
          options={states}
          optionLabel='label'
          optionValue='value'
        />
      </div>
      <PropertyTypeSelector
        selectedType={selectedPropertyType}
        onSelectType={handleSelectPropertyType}
      />
      {/* Zonas Dropdown */}
      <div className='border border-zinc-500 rounded-lg p-1'>
        <Dropdown
          value={zone}
          onChange={(e) => setZone(e.value)}
          options={provincias}
          optionLabel='label'
          optionGroupLabel='label'
          optionGroupChildren='items'
          placeholder='Selecciona una zona'
          className='w-full'
          filter
        />
      </div>
      {/* PRICE */}
      <div>
        <h4 className='text-lg uppercase mb-4'>
          Precio (${price[0].toLocaleString()} - ${price[1].toLocaleString()})
        </h4>
        <Slider
          value={price}
          onChange={(e) => setPrice(e.value)}
          range
          min={20000}
          max={10000000}
        />
      </div>

      {/* BATHROOMS */}
      <div className='flex items-center justify-between'>
        <h4 className='text-lg uppercase '>Baños</h4>
        <div className='flex items-center space-x-4'>
          <button
            className='px-2 py-0 font-semibold text-lg border-zinc-400  hover:border-zinc-700 rounded-full border '
            onClick={() => decrementCounter(setBathroomCount, bathroomCount, 1)}
          >
            -
          </button>
          <span className='text-xl'>{bathroomCount}</span>
          <button
            className='px-2 py-0 font-semibold text-lg border-zinc-400  hover:border-zinc-700 rounded-full border '
            onClick={() => incrementCounter(setBathroomCount, bathroomCount)}
          >
            +
          </button>
        </div>
      </div>
      {/* HABITACIONE */}
      <div className='flex items-center justify-between'>
        <h4 className='text-lg uppercase '>HABITACIONES</h4>
        <div className='flex items-center space-x-4'>
          <button
            className='px-2 py-0 font-semibold text-lg border-zinc-400  hover:border-zinc-700 rounded-full border '
            onClick={() => decrementCounter(setRoomCount, roomCount, 1)}
          >
            -
          </button>
          <span className='text-xl'>{roomCount}</span>
          <button
            className='px-2 py-0 font-semibold text-lg border-zinc-400  hover:border-zinc-700 rounded-full border '
            onClick={() => incrementCounter(setRoomCount, roomCount)}
          >
            +
          </button>
        </div>
      </div>
      <div>
        <span className='text-lg font-semibold pb-5'>Features</span>
        <PropertyFeaturesSelector
          selectedFeatures={selectedFeatures}
          onSelectFeature={handleSelectFeature}
        />
      </div>

      {/* SIZE */}
      <div>
        <h4 className='text-lg uppercase mb-4'>
          Tamaño (Desde {size[0]} m² - Hasta {size[1]} m²)
        </h4>
        <div className='flex gap-4'>
          {/* Input para el tamaño mínimo */}
          <InputText
            value={size[0]}
            onChange={(e) => {
              const minSize = Number(e.target.value)
              if (minSize <= size[1]) {
                setSize([minSize, size[1]])
                updateFilters('sizeMin', minSize)
              }
            }}
            placeholder='Desde m²'
            className='p-2 border rounded-lg w-full bg-white text-black focus:bg-white'
            type='number'
            min={1}
          />
          {/* Input para el tamaño máximo */}
          <InputText
            value={size[1]}
            onChange={(e) => {
              const maxSize = Number(e.target.value)
              if (maxSize >= size[0]) {
                setSize([size[0], maxSize])
                updateFilters('sizeMax', maxSize)
              }
            }}
            placeholder='Hasta m²'
            className='p-2 border rounded-lg w-full bg-white text-black focus:bg-white'
            type='number'
            min={1}
          />
        </div>
      </div>
    </div>
  )
}

export default FilterProperties
