export function Header() {
  return (
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
  )
}