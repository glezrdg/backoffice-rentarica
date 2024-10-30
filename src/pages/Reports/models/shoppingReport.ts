

export interface IShoppingReport {
  _id: string
  shoppingQty: number
  totalAmountBuy: number
  categoryQty: [{
    category: string,
    amount: number
    shoppings: string[]
    qty: number,
  }]
  month: number
  year: number
  createdAt: string
}