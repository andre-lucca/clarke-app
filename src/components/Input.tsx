import { ArrowRight } from "@phosphor-icons/react"

export function Input() {
  return (
    <div className="relative">
      <input
        className="block w-full h-12 m-auto mb-4 -mt-10 p-4 pr-12 text-gray-600 bg-white rounded-full border border-green-700 outline-none"
        type="text"
        placeholder="Ex: 1000"
      />
      <ArrowRight
        size={32}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-green-700 p-0.5 rounded-full cursor-pointer hover:bg-green-600 transition-colors hover:scale-105"
      />
    </div>
  )
}