import { toast } from '../../../../../App'
import { InitialStateProps, useOfertState } from '../../../context'
import { IOfert } from '../../../models/IOfert'

export class Service {
  ofert: IOfert
  ofertState: InitialStateProps

  constructor(ofert: IOfert, ofertState: InitialStateProps) {
    this.ofert = ofert
    this.ofertState = ofertState
  }

  handleCreateOfert = (e: any) => {
    const {
      code,
      description,
      discount,
      category,
      brand,
      provinces,
      expireDate,
      disable,
    } = this.ofert
    e.preventDefault()
    if (!code) {
      toast.current?.show({
        severity: 'error',
        summary: 'Llena el campo encabezado',
        detail: `Debes de llenar el campo para agregar una categoria!`,
      })
    } else {
      this.ofertState.addOfert({
        code,
        description,
        discount,
        category,
        brand,
        provinces,
        expireDate,
        disable,
      })
      toast.current?.show({
        severity: 'success',
        summary: 'Producto agregado',
        detail: `Has agregado el producto ${code} exitosamente!`,
      })
    }
  }

  handleUpdateOfert = (e: any) => {
    const {
      code,
      description,
      discount,
      category,
      brand,
      provinces,
      expireDate,
      disable,
    } = this.ofert
    e.preventDefault()
    if (!code) {
      toast.current?.show({
        severity: 'error',
        summary: 'Llena el campo encabezado',
        detail: `Debes de llenar el campo para agregar una categoria!`,
      })
    } else {
      this.ofertState.updateOfert({
        _id: this.ofertState.ofert?._id,
        code,
        discount,
        description,
        category,
        brand,
        provinces,
        expireDate,
        disable,
      })
      toast.current?.show({
        severity: 'success',
        summary: 'Oferta agregada',
        detail: `Has agregado la oferta ${name} exitosamente!`,
      })
    }
  }

  handleRemoveOfert = () => {
    this.ofertState.removeOfert(this.ofertState.ofert?._id!)
  }
}
