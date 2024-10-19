import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { SupplierList } from "./components/SupplierList"

function App() {

  return (
    <div>
      <Header />
      <main className="w-full">
        <div className="m-auto w-full p-4 max-w-[40rem]">
          <Input />

          <SupplierList />
        </div>
      </main>
    </div >
  )
}

export default App
