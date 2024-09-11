import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { fetchProducts } from '../../../redux/reducers/products'
import { Filters } from './components/Filters'
import { PaymentInfo } from './components/PaymentInfo'
import { addOrder } from '../../../pages/Orders/services'
import { Dialog } from 'primereact/dialog'
import { Button } from '../../../components/shared'
import { useCategoryBrandState } from '../../CategoryBrand/context'
import { toast } from '../../../App'

export interface CajaProps {
  open: boolean
  onClose: () => void
}

const Caja = (props: CajaProps) => {
  const dispatch = useAppDispatch()
  const { categories } = useCategoryBrandState()
  const { products } = useAppSelector((state) => state.products)
  const { user } = useAppSelector((state) => state.auth)

  const [paymentMethod, setPaymentMethod] = useState('Efectivo')
  const [cash, setCash] = useState(0)
  const [card, setCard] = useState(0)
  const [transfer, setTransfer] = useState(0)
  const [client, setClient] = useState('')
  const [clientName, setClientName] = useState('')
  const [category, setCategory] = useState<string>('')
  const [tarifa, setTarifa] = useState<{ id: number; selectedProducts: any[] }>(
    {
      selectedProducts: [],
      id: 1,
    }
  )
  const [tarifas, setTarifas] = useState<
    { id: number; selectedProducts: any[] }[]
  >([{ selectedProducts: [], id: 1 }])

  let subtotal = tarifa.selectedProducts.reduce((acc, current: any) => {
    return acc + current.price * current.qty
  }, 0)
  let itbis = subtotal * 0.18
  let tip = subtotal * 0.1
  // let total = subtotal + itbis + tip
  let total = subtotal
  let itemsQty = tarifa.selectedProducts.reduce(
    (acc, current: any) => acc + current.qty,
    0
  )

  const items = tarifa.selectedProducts

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const handleAddTarifa = () => {
    if (tarifa.selectedProducts.length) {
      setTarifas((prev) => [
        ...prev,
        { selectedProducts: [], id: prev[prev.length - 1].id + 1 },
      ])
    }
  }

  const handleAddProduct = (
    name: string,
    price: number,
    qty: number,
    id: string
  ) => {
    let exist = tarifa.selectedProducts.filter(
      (product) => product.name === name
    )[0]
    let currentItems: any
    if (exist) {
      exist.qty = exist.qty + 1
      currentItems = [...tarifa.selectedProducts]
    } else {
      currentItems = [
        ...tarifa.selectedProducts,
        { name, price, qty, product: id },
      ]
    }
    setTarifa((prev) => ({ ...prev, selectedProducts: currentItems }))
    setTarifas((prev) => [
      ...prev.map((item) =>
        item.id === tarifa.id
          ? { ...tarifa, selectedProducts: currentItems }
          : item
      ),
    ])
  }

  const handleDelete = (name: string) => {
    let exist = tarifa.selectedProducts.filter(
      (product) => product.name === name
    )[0]
    let currentItems: any
    if (exist) {
      if (exist.qty === 1) {
        console.log(exist)
        let items = tarifa.selectedProducts.filter(
          (item) => item.name !== exist.name
        )
        currentItems = [...items]
      } else {
        exist.qty = exist.qty - 1
        currentItems = [...tarifa.selectedProducts]
      }
    } else {
      currentItems = [...tarifa.selectedProducts]
    }
    setTarifa((prev) => ({ ...prev, selectedProducts: currentItems }))
  }

  const handleCreateOrder = async (e: any) => {
    e.preventDefault()

    if (!paymentMethod.length) return console.log('Falta el metodo de pago')

    try {
      if (window.confirm('Estas seguro de realizar esta orden?')) {
        if (tarifa.selectedProducts.length > 0 && paymentMethod) {
          const createdOrder = await addOrder({
            orderItems: tarifa.selectedProducts,
            totalPrice: total.toFixed(2),
            paymentMethod: paymentMethod,
            section: 'local',
            user: user._id,
          })

          toast.current?.show({
            severity: 'success',
            summary: 'Factura realizada!',
            detail: `Has hecho la venta exitosamente!`,
          })

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
          if (tarifas.length > 1) {
            setTarifas((prev) => [
              ...prev.filter((item) => item.id !== tarifa.id),
            ])
            setTarifa(tarifas.filter((item) => item.id !== tarifa.id)[0])
          } else {
            setTarifa({ id: 1, selectedProducts: [] })
            setTarifas([{ id: 1, selectedProducts: [] }])
          }
          setPaymentMethod('Efectivo')
        }
      }
    } catch (error: any) {
      console.log('error out ds', error)
      toast.current?.show({
        severity: 'error',
        summary: 'Ocurrio un error',
        detail: error.message,
      })
    }
  }

  const handleChangeTarifa = (body: any) => {
    if (tarifas.length > 1) {
      setTarifas((prev) => [
        ...prev.map((item) =>
          tarifa.id === item.id ? { ...tarifa } : { ...item }
        ),
      ])
      setTarifa(body)
    }
  }

  return (
    <Dialog
      visible={props.open}
      // style={{ width: '50vw' }}
      className='w-[90vw] lg:w-[60vw]'
      contentClassName='!p-0'
      headerClassName='!bg-slate-200 !py-3'
      header={
        <div className='grid grid-cols-12 w-full'>
          <div className='col-span-5'>
            <div className='flex gap-4'>
              <Button
                icon='fa fa-receipt text-base -mt-2 mr-2'
                color='warning'
                // onClick={() => setOpenCaja(true)}
                text='Ticket'
                className='!px-3 !h-[4rem] !w-[10rem] !hover:shadow-none !shadow-none border transition-all hover:!bg-purple-900 hover:!text-white border-purple-900 !bg-white !text-purple-900'
              />
              <Button
                icon='fa fa-receipt text-base -mt-2 mr-2'
                color='warning'
                // onClick={() => setOpenCaja(true)}
                text='Ticket'
                className='!px-3 !h-[4rem] !w-[10rem] !hover:shadow-none !shadow-none border transition-all hover:!bg-purple-900 hover:!text-white border-purple-900 !bg-white !text-purple-900'
              />
              <Button
                icon='fa fa-cash-register text-base -mt-2 mr-2'
                color='warning'
                // onClick={() => setOpenCaja(true)}
                text='Dividir factura'
                className='!px-3 !h-[4rem] !w-full !hover:shadow-none !shadow-none border transition-all hover:!bg-purple-900 hover:!text-white border-purple-900 !bg-white !text-purple-900'
              />
            </div>
          </div>
          <div className='flex justify-between items-center  col-span-7 mx-8'>
            <div className='flex-1 flex gap-2'>
              <Button
                icon='fa fa-arrow-up text-base -mt-2 mr-2'
                color='warning'
                onClick={() => setCategory('')}
                iconButton
                className='!px-3 !h-[4rem] !w-[5rem] !hover:shadow-none !shadow-none border transition-all hover:!bg-purple-900 hover:!text-white border-purple-900 !bg-white !text-purple-900 !rounded-none'
              />
              <Button
                icon='fa fa-cash-register text-base -mt-2 mr-2'
                color='warning'
                // onClick={() => setOpenCaja(true)}
                text='Cajon'
                className='!px-3 !h-[4rem] hidden xl:block !w-[10rem] !hover:shadow-none !shadow-none border transition-all hover:!bg-purple-900 hover:!text-white border-purple-900 !bg-white !text-purple-900'
              />
            </div>
            <div className='flex gap-4'>
              <Button
                icon='fa fa-receipt text-base -mt-2 mr-2'
                color='warning'
                // onClick={() => setOpenCaja(true)}
                text='Ticket'
                className='!px-3 !h-[4rem] !w-[10rem] !hover:shadow-none !shadow-none border transition-all hover:!bg-purple-900 hover:!text-white border-purple-900 !bg-white !text-purple-900'
              />
              <Button
                icon='fa fa-check text-base -mt-2 mr-2'
                color='warning'
                onClick={handleCreateOrder}
                text='Completar factura'
                className='!px-3 !h-[4rem] !w-[18rem] !hover:shadow-none !shadow-none border transition-all hover:!bg-purple-900 hover:!text-white border-purple-900 !bg-white !text-purple-900'
              />
            </div>
          </div>
        </div>
      }
      onHide={props.onClose}
      maximized
    >
      <div className='grid grid-cols-12'>
        <div className='col-span-1 h-full px-3 flex-col gap-4 bg-slate-50 py-2 hidden lg:flex'>
          <div
            onClick={handleAddTarifa}
            className=' shadow-md w-full rounded-lg bg-yellow-400 text-white h-[4rem] cursor-pointer grid place-items-center transition-all hover:text-3xl'
          >
            <i className='fa fa-plus' />
          </div>
          {tarifas.map((item, index) => (
            <div
              onClick={() => handleChangeTarifa(item)}
              className={`shadow-md w-full rounded-lg text-white ${
                tarifa.id === item.id
                  ? 'bg-yellow-300'
                  : 'bg-yellow-100 !text-slate-300'
              } h-[4rem] cursor-pointer  grid place-items-center transition-all text-3xl`}
            >
              {item.id}
            </div>
          ))}
        </div>
        <div className='col-span-4 border-x-4 border-slate-200'>
          <PaymentInfo
            products={items}
            handleDelete={handleDelete}
            subtotal={subtotal}
            itbis={itbis}
            tip={tip}
            total={total}
            tarifaId={tarifa.id}
            //  itemsQty={itemsQty}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            handleCreateOrder={handleCreateOrder}
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
        <div className='col-span-7 bg-slate-50 pl-8 pt-2'>
          {/* <Filters /> */}
          {!category ? (
            <div className='grid grid-cols-4 h-fit gap-3 w-full mb-20'>
              {categories?.map((item, idx) => {
                // let color = addClassColor(item.price)
                return (
                  <div
                    key={item._id}
                    className={`h-32 bg-indigo-700 text-white cursor-pointer grid place-items-center rounded-md`}
                    onClick={() => setCategory(item._id!)}
                  >
                    {item.name}
                  </div>
                )
              })}
            </div>
          ) : (
            <div className='grid grid-cols-4 h-fit gap-3 w-full mb-20'>
              {products
                ?.filter((p) => p.category === category)
                ?.map((item, idx) => {
                  // let color = addClassColor(item.price)
                  return (
                    <div
                      key={item._id}
                      className={`h-32 bg-indigo-700 text-white cursor-pointer grid place-items-center rounded-md`}
                      onClick={() =>
                        handleAddProduct(item.name, item.price, 1, item._id!)
                      }
                    >
                      {item.name}
                    </div>
                  )
                })}
            </div>
          )}
        </div>
      </div>
    </Dialog>
  )
}

export default Caja
