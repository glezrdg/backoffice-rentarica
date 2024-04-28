import { Card } from '../../../components/shared'
import { useEffect, useState } from 'react'
import { getBestWinnings } from '../services'
import { IShopping } from '../models'
import ShoppingTable from './tables/ShoppingTable'

const InformationCards = () => {
  const [bestWinnings, setBestWinnigs] = useState<IShopping[]>([])

  useEffect(() => {
    handleGetBestWinnings()
  }, [])

  console.log('BEST WINNINGS: ', bestWinnings)

  const handleGetBestWinnings = async () => {
    try {
      const shoppings = await getBestWinnings()
      setBestWinnigs(shoppings)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  return (
    <div className='grid grid-cols-2 gap-6 mt-6'>
      <Card title='Mejores ganancias'></Card>
      <Card title='Mayores inversiones' bodyClassName='mt-4'>
        <ShoppingTable shoppings={bestWinnings} showLess />
      </Card>
    </div>
  )
}

export default InformationCards
