import { useContext } from "react"
import { supplierContext } from "../contexts/supplierContext"

export function SupplierList() {
  const { suppliers } = useContext(supplierContext)
  const sortedSuppliers = suppliers.sort((a, b) => {
    if (a.couldServe) {
      return -1
    }

    if (b.couldServe) {
      return 1
    }

    return 0
  })

  return (
    <ul data-cy="supplierList">
      {
        sortedSuppliers.map((supplier) => (
          <li
            data-cy={supplier.couldServe}
            key={supplier.id}
            className={`${supplier.couldServe ? "hover:translate-x-4" : "opacity-50 hover:cursor-not-allowed"} flex gap-4 mb-3 border shadow-md transition-transform rounded-md p-2 cursor-pointer`}
          >
            <img
              src={supplier.logo}
              className="w-28 h-28 aspect-square object-contain object-center rounded-md bg-zinc-100"
            />
            <div className="w-full grid grid-cols-3 gap-2 text-gray-600 text-sm items-center">
              <div>
                <span className="font-bold">Nome</span> <br />
                <span>{supplier.name}</span>
              </div>
              <div>
                <span className="font-bold">Total de clientes</span> <br />
                <span>{supplier.totalCustomers}</span>
              </div>
              <div>
                <span className="font-bold">Custo por kWh</span> <br />
                <span>{new Intl.NumberFormat('pt-BR', {
                  style: 'currency', currency: 'BRL'
                }).format(supplier.costPerKwh)}</span>
              </div>
              <div>
                <span className="font-bold">Estado de Origem</span> <br />
                <span>{supplier.originState}</span>
              </div>
              <div>
                <span className="font-bold">Avaliação média dos clientes</span> <br />
                <span>{supplier.averageCustomersRating}</span>
              </div>
              <div>
                <span className="font-bold">Consumo mensal mínimo</span> <br />
                <span className={supplier.couldServe ? "text-green-600" : "text-red-600"}>{supplier.minimumKwhUsage} kWh </span>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}