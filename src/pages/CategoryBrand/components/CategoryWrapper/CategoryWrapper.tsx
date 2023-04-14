import React from 'react'
import './styles.css'
import { Accordion, AccordionTab } from 'primereact/accordion'

interface ICategoryWrapperProps {
  children?: React.ReactNode
}

const CategoryWrapper: React.FC<ICategoryWrapperProps> = (props) => {
  return (
    <>
      <Accordion>
        <AccordionTab header='Hombres'>
          <ul className='ml-4'>
            <li>Pantalones</li>
            <li>Camisas</li>
            <li>Tenis</li>
          </ul>
        </AccordionTab>
        <AccordionTab header='Mujeres'>
          <ul className='ml-4'>
            <li>Pantalones</li>
            <li>Camisas</li>
            <li>Tenis</li>
          </ul>
        </AccordionTab>
        <AccordionTab header='Niños'>
          <ul className='ml-4'>
            <li>Pantalones</li>
            <li>Camisas</li>
            <li>Tenis</li>
          </ul>
        </AccordionTab>
      </Accordion>
    </>
  )
}

export default CategoryWrapper
