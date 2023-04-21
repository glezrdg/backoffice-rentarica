import { toast } from '../../../../../App'
import { InitialStateProps, } from '../../../context'
import { ICompany } from '../../../models'

export class CompanyService {
  company: ICompany
  deliveryState: InitialStateProps

  constructor(ofert: ICompany, deliveryState: InitialStateProps) {
    this.company = ofert
    this.deliveryState = deliveryState
  }

  handleCreateCompany = (e: any) => {
    const {
      name,
      price,
      disable,
    } = this.company
    e.preventDefault()
    if (!name || !price) {
      toast.current?.show({
        severity: 'error',
        summary: 'Llena el campo encabezado',
        detail: `Debes de llenar el campo para agregar una categoria!`,
      })
    } else {
      this.deliveryState.addCompany({
        name,
        price,
        disable,
      })
      toast.current?.show({
        severity: 'success',
        summary: 'Agencia agregada!',
        detail: `Has agregado la agencia ${name} exitosamente!`,
      })
    }
  }

  handleUpdateCompany = (e: any) => {
    const {
      name,
      price,
      disable,
    } = this.company
    e.preventDefault()
    if (!name || !price) {
      toast.current?.show({
        severity: 'error',
        summary: 'Llena todos los campos',
        detail: `Debes de llenar el campo para agregar una categoria!`,
      })
    } else {
      this.deliveryState.updateCompany({
        _id: this.deliveryState.company?._id,
        name,
        price,
        disable,
      })
      toast.current?.show({
        severity: 'success',
        summary: 'Agencia actualizada!',
        detail: `Has agregado la oferta ${name} exitosamente!`,
      })
    }
  }

  handleRemoveCompany = () => {
    this.deliveryState.removeCompany(this.deliveryState.company?._id!)
    toast.current?.show({
      severity: 'success',
      summary: 'Agencia borrada',
      detail: `Has borrado una agencia!`,
    })
  }
}
