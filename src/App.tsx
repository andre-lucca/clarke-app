import { Header } from "./components/Header"
import { Input } from "./components/Input"

function App() {

  return (
    <div>
      <Header />
      <main className="w-full">
        <div className="m-auto w-full p-4 max-w-[40rem]">
          <Input />

          <div className="border border-gray-200 p-2 rounded-md shadow-sm">
            Fornecedores
          </div>
        </div>
      </main>
    </div >
  )
}

export default App
