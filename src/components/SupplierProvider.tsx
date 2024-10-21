import { useState } from 'react'
import { SupplierSchema, supplierContext } from '../contexts/supplierContext'

export function SupplierProvider({ children }: { children: React.ReactNode }) {
  const [suppliers, setSuppliers] = useState<SupplierSchema[]>([])

  return (
    <supplierContext.Provider value={{ suppliers, setSuppliers }}>
      {children}
    </supplierContext.Provider>
  )
}