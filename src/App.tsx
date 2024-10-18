import { Header } from "./components/header"

function App() {

  return (
    <div>
      <Header />
      <main className="w-full">
        <div className="m-auto w-full p-4 max-w-[40rem]">
          <input
            className="block w-full h-12 m-auto mb-4 -mt-10 p-4 text-gray-600 bg-white rounded-full border border-green-700 outline-none"
            type="number"
            placeholder="Ex: 1000 kW/h"
          />

          <div className="border border-gray-200 p-2 rounded-md shadow-sm">
            Fornecedores
          </div>
        </div>
      </main>
    </div >
  )
}

export default App
