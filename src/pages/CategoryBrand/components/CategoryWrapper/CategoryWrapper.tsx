import React from 'react'
import './styles.css'

// Components
import { Accordion, AccordionTab } from 'primereact/accordion'
import { useCategoryBrandState } from '../../context'

interface ICategoryWrapperProps {
  children?: React.ReactNode
}

const CategoryWrapper: React.FC<ICategoryWrapperProps> = (props) => {
  const { categories } = useCategoryBrandState()

  return (
    <>
      <Accordion>
        {categories?.map((category) => (
          <AccordionTab
            key={category._id}
            headerClassName='relative'
            header={
              <div className='flex justify-between items-center w-full'>
                <h2>{category.header}</h2>
              </div>
            }
          >
            <ul className='ml-4'>
              {category.categories.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </AccordionTab>
        ))}
      </Accordion>
    </>
  )
}

export default CategoryWrapper
