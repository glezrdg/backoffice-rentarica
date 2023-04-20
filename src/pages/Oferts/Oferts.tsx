import React, { useState } from 'react'
import './styles.css'

// Components
import { PageHeader } from '../../components/layout'
import { Button } from '../../components/shared'
import { Header, SideCreateOfert } from './components'
import OfertsTable from './components/table/OfertsTable'
import { OfertProvider } from './context'

interface IOfertsProps {
  children?: React.ReactNode
}

const Oferts: React.FC<IOfertsProps> = (props) => {
  const [createOfert, setCreateOfert] = useState(false)

  return (
    <OfertProvider>
      <>
        <SideCreateOfert
          active={createOfert}
          close={() => setCreateOfert(false)}
        />
        {/* Header */}
        <PageHeader
          title='Ofertas'
          right={
            <Button
              icon='fa fa-plus'
              color='success'
              text='Oferta'
              className='!px-3 !hover:shadow-none'
              onClick={() => setCreateOfert(true)}
            />
          }
        />

        <Header />

        {/* TABLE */}
        <OfertsTable openCreate={() => setCreateOfert(true)} />
      </>
    </OfertProvider>
  )
}

export default Oferts
