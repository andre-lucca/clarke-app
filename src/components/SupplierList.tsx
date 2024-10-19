export function SupplierList() {
  return (
    <ul>
      {
        Array.from({ length: 5 }).map((_, index) => (
          <li key={index} className="flex gap-4 mb-3 border shadow-md hover:translate-x-4 transition-transform rounded-md p-2 cursor-pointer">
            <img
              src="https://img.freepik.com/vetores-gratis/design-de-logotipo-de-energia_23-2150011349.jpg?t=st=1729295494~exp=1729299094~hmac=c612c236324eedda80d40c2e12762981e42749a3711febafabe3adad92b39d0e&w=826"
              alt=""
              className="w-20 h-20 rounded-md bg-zinc-100"
            />
            <div className="w-full grid grid-cols-3 gap-2 text-gray-600 text-sm font-bold items-center">
              <span>Fornecedor 1</span>
              <span>1000 Clientes total</span>
              <span>R$ 50 / kWh custo</span>
              <span>São Paulo</span>
              <span>7.9</span>
              <span>1000 kWh Mínimo</span>
            </div>
          </li>
        ))
      }
    </ul>
  )
}