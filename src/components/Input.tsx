import { ArrowRight } from "@phosphor-icons/react"

export function Input() {
  return (
    <div className="relative">
      <input
        className="block w-full h-12 m-auto mb-4 -mt-10 py-4 px-5 pr-1 text-gray-600 bg-white rounded-full border-2 border-green-600 outline-none"
        type="text"
        placeholder="Ex: 1000 kWh"
      />
      <ArrowRight
        size={31}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-green-600 hover:bg-green-500 p-0.5 rounded-full cursor-pointer hover:scale-105 transition-colors"
      />
    </div>
  )
}