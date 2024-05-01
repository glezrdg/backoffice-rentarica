export interface IExpenses {
  _id: string
  title: string
  type: 'fijo' | 'nomina' | 'gasto'
  cost: number
  note: string
  createdAt: string
};

export interface ExpensesDto {
  title: string
  type: 'fijo' | 'nomina' | 'gasto'
  cost: number
  note?: string
};