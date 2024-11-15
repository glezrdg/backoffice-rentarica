import React from 'react'
import { propertyTypes } from '../../../../utility/data'

interface IPropertyTypeSelectorProps {
  selectedType: string
  onSelectType: (type: string) => void
}
const PropertyTypeSelector: React.FC<IPropertyTypeSelectorProps> = ({
  selectedType,
  onSelectType,
}) => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {propertyTypes.map((type) => (
        <button
          key={type.value}
          onClick={() => onSelectType(type.value)}
          className={`flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-100 transition-colors border border-zinc-100  ${
            selectedType === type.value ? 'bg-blue-300 ' : 'bg-white'
          }`}
        >
          <img src={type.icon} alt={type.label} className='w-6 h-6' />
          <span className='font-semibold'>{type.label}</span>
        </button>
      ))}
    </div>
  )
}

export default PropertyTypeSelector
