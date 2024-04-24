import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { fetchProducts } from '../../../redux/reducers/products'
import { Filters } from './components/Filters'
import { PaymentInfo } from './components/PaymentInfo'
import { addOrder } from '../../../pages/Orders/services'

export interface CajaProps {}

const Caja = ({}: CajaProps) => {
  const dispatch = useAppDispatch()
  const { products } = useAppSelector((state) => state.products)

  const [selectedCategory, setSelectedCategory] = useState('empanadas')
  const [selectedProducts, setSelectedProducts] = useState<any[]>([])
  const [paymentMethod, setPaymentMethod] = useState<any[]>([])
  const [office, setOffice] = useState('Jorge')
  const [cash, setCash] = useState(0)
  const [card, setCard] = useState(0)
  const [transfer, setTransfer] = useState(0)
  const [client, setClient] = useState('')
  const [clientName, setClientName] = useState('')

  let subtotal = selectedProducts.reduce((acc, current: any) => {
    return acc + current.price * current.qty
  }, 0)
  let itbis = subtotal * 0.18
  let tip = subtotal * 0.1
  let total = subtotal + itbis + tip
  let itemsQty = selectedProducts.reduce(
    (acc, current: any) => acc + current.qty,
    0
  )

  const items = selectedProducts

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const handleAddProduct = (
    name: string,
    price: number,
    qty: number,
    id: string
  ) => {
    let exist = selectedProducts.filter((product) => product.name === name)[0]
    let currentItems
    if (exist) {
      exist.qty = exist.qty + 1
      currentItems = [...selectedProducts]
    } else {
      currentItems = [...selectedProducts, { name, price, qty, product: id }]
    }
    setSelectedProducts(currentItems)
  }

  const handleDelete = (name: string) => {
    let exist = selectedProducts.filter((product) => product.name === name)[0]
    let currentItems
    if (exist) {
      if (exist.qty === 1) {
        console.log(exist)
        let items = selectedProducts.filter((item) => item.name !== exist.name)
        currentItems = [...items]
      } else {
        exist.qty = exist.qty - 1
        currentItems = [...selectedProducts]
      }
    } else {
      currentItems = [...selectedProducts]
    }
    setSelectedProducts(currentItems)
  }

  const handleSetPaymentMethod = (method: any) => {
    const current = [...paymentMethod]
    const exist = paymentMethod.filter((i) => i === method)[0]
    if (exist) {
      setPaymentMethod([...current.filter((i) => i !== method)])
    } else {
      setPaymentMethod([...paymentMethod, method])
    }
  }

  const handleCreateOrder = async (e: any) => {
    e.preventDefault()

    if (!paymentMethod.length) return console.log('Falta el metodo de pago')

    if (window.confirm('Estas seguro de realizar esta orden?')) {
      if (selectedProducts.length > 0 && paymentMethod.length > 0) {
        const createdOrder = await addOrder({
          orderItems: selectedProducts,
          totalPrice: total.toFixed(2),
          paymentMethod: paymentMethod[0],
          amount: cash,
        })

        console.log('CREATED ORDER', createdOrder)

        // if (paymentMethod.includes('Efectivo')) {
        //   dispatch(
        //     getPrintData({
        //       orderItems: selectedProducts,
        //       totalPrice: total.toFixed(2),
        //       itbis: itbis.toFixed(2),
        //       tip: tip.toFixed(2),
        //       time: new Date(),
        //       paymentMethod,
        //       cash,
        //     })
        //   )
        // } else {
        //   dispatch(
        //     getPrintData({
        //       orderItems: selectedProducts,
        //       totalPrice: total.toFixed(2),
        //       itbis: itbis.toFixed(2),
        //       tip: tip.toFixed(2),
        //       time: new Date(),
        //     })
        //   )
        // }
        setSelectedProducts([])
      }
    }
  }

  return (
    <>
      <Filters />
      <div className='grid grid-cols-12 gap-8 mt-10'>
        <div className='col-span-9 grid grid-cols-4 h-fit gap-3 w-full mb-20'>
          {products?.map((item, idx) => {
            // let color = addClassColor(item.price)
            return (
              <div
                key={item._id}
                className={`h-32 bg-green-300 cursor-pointer grid place-items-center rounded-md`}
                onClick={() =>
                  handleAddProduct(item.name, item.price, 1, item._id!)
                }
              >
                {item.name}
              </div>
            )
          })}
        </div>
        <PaymentInfo
          products={items}
          handleDelete={handleDelete}
          subtotal={subtotal}
          itbis={itbis}
          tip={tip}
          total={total}
          //  itemsQty={itemsQty}
          paymentMethod={paymentMethod}
          setPaymentMethod={handleSetPaymentMethod}
          handleCreateOrder={handleCreateOrder}
          setOffice={setOffice}
          office={office}
          cash={cash}
          card={card}
          transfer={transfer}
          setCash={setCash}
          setCard={setCard}
          setTransfer={setTransfer}
          //  handleAddPendingOrder={handleAddPendingOrder}
          client={client}
          clientName={clientName}
          setClientName={setClientName}
        />
      </div>
    </>
  )
}

export default Caja
