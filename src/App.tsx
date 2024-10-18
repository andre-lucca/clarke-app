function App() {

  return (
    <div>
      <header className="flex flex-col items-center justify-between p-4 bg-gradient-to-r from-green-800 to-neutral-700 h-[20rem]">
        <div className="text-center text-emerald-500 text-4xl pt-24">
          Clarke Energia
          <hr className="border border-white" />
          Fornecedores
        </div>
        <p className="text-white text-lg mb-8">
          Preparado para economizar?
        </p>
      </header>
      <main className="w-full">
        <div className="m-auto w-full p-4 max-w-[40rem]">
          <input
            className="block w-full h-12 m-auto mb-4 -mt-10 p-4 text-green-800 bg-white rounded-full border border-green-700 outline-none"
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
