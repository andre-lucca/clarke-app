import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { SupplierList } from "./components/SupplierList"
import { SupplierProvider } from "./components/SupplierProvider"

function App() {
  return (
    <div>
      <Header />
      <main className="w-full">
        <div className="m-auto w-full p-4 max-w-[40rem]">
          <SupplierProvider>
            <Input />

            <SupplierList />
          </SupplierProvider>
        </div>
      </main>
    </div >
  )
}

export default App
