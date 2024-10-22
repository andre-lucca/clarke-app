import { useForm } from "react-hook-form"
import { api } from "../services/api"

import { ArrowRight } from "@phosphor-icons/react"
import { useContext } from "react"
import { supplierContext } from "../contexts/supplierContext"

export function Input() {
  const { register, handleSubmit, watch, setValue } = useForm<{ monthlyUsage: string }>({ defaultValues: { monthlyUsage: "" } })
  const { setSuppliers } = useContext(supplierContext)

  const handleFetchSuppliers = async ({ monthlyUsage }: { monthlyUsage: string }) => {
    try {
      const response = await api.get(`/suppliers?monthlyUsage=${monthlyUsage}`)

      setSuppliers(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className="relative" onSubmit={handleSubmit(handleFetchSuppliers)}>
      <input
        data-cy="monthlyUsage"
        className="block w-full h-12 m-auto mb-6 -mt-10 py-4 px-5 pr-16 text-gray-600 bg-white rounded-full border-2 border-green-600 outline-none"
        type="text"
        placeholder="Ex: 1000 kWh"
        {...register("monthlyUsage", {
          onChange: () => {
            setValue("monthlyUsage", watch("monthlyUsage").replace(/\D/g, ""))
          }
        })}
      />
      <button
        disabled={!Number(watch("monthlyUsage"))}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-green-600 hover:bg-green-500 p-0.5 rounded-full cursor-pointer hover:scale-105 transition-colors disabled:cursor-not-allowed disabled:hover:scale-100 disabled:bg-zinc-500"
        type="submit"
      >
        <ArrowRight
          size={31}
        />
      </button>
    </form>
  )
}