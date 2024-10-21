import { createContext } from 'react'

export type SupplierSchema = {
  name: string
  logo: string
  originState: string
  costPerKwh: number
  minimumKwhUsage: number
  totalCustomers: number
  averageCustomersRating: number
  couldServe: boolean
}

type SupplierContextType = {
  suppliers: SupplierSchema[]
  setSuppliers: (suppliers: SupplierSchema[]) => void
}

export const supplierContext = createContext<SupplierContextType>({
  suppliers: [],
  setSuppliers: () => { }
})
