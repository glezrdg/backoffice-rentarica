import { toast } from '../../../../../App'
import { InitialProps } from '../../../context'
import { IShopping } from '../../../models'

export class ShoppingService {
  shopping: Partial<IShopping>
  shoppingState: InitialProps

  constructor(shopping: Partial<IShopping>, shoppingState: InitialProps) {
    this.shopping = shopping
    this.shoppingState = shoppingState
  }

  handleCreateShopping = async (e: any) => {
    const {
      shoppingList,
      total
    } = this.shopping
    e.preventDefault()
    if (!shoppingList) {
      toast.current?.show({
        severity: 'error',
        summary: 'Llena el campo encabezado',
        detail: `Debes de llenar el campo para agregar una categoria!`,
      })
    } else {
      await this.shoppingState.createShopping({
        shoppingList,
        total
      })
      toast.current?.show({
        severity: 'success',
        summary: 'Compra registrada!',
        detail: 'Has registrado la compra exitosamente!',
      })
    }
  }

  // handleUpdateshopping = (e: any) => {
  //   const {
  //     shoppingList,
  //     total
  //   } = this.shopping
  //   e.preventDefault()
  //   if (!name || !price) {
  //     toast.current?.show({
  //       severity: 'error',
  //       summary: 'Llena todos los campos',
  //       detail: `Debes de llenar el campo para agregar una categoria!`,
  //     })
  //   } else {
  //     this.shoppingState.updateShopping({
  //       _id: this.shoppingState.shopping?._id,
  //       shoppingList,
  //       total
  //     })
  //     toast.current?.show({
  //       severity: 'success',
  //       summary: 'Agencia actualizada!',
  //       detail: `Has agregado la oferta ${name} exitosamente!`,
  //     })
  //   }
  // }

  // handleRemoveshopping = () => {
  //   this.shoppingState.removeShopping(this.shoppingState.shopping?._id!)
  //   toast.current?.show({
  //     severity: 'success',
  //     summary: 'Agencia borrada',
  //     detail: `Has borrado una agencia!`,
  //   })
  // }
}
