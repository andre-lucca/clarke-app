import { useEffect, useState } from "react"
import { AxiosError } from "axios"
import { api } from "../services/api"

import { Circle } from "@phosphor-icons/react"

export function ApiStatus() {
  const [apiStatus, setApiStatus] = useState({
    isOnline: false,
    isWaiting: true
  })

  const checkApiStatus = async () => {
    try {
      await api.get("/")
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error!.code === "ERR_NETWORK") {
          setApiStatus({
            isOnline: false,
            isWaiting: false
          })
        } else {
          setApiStatus({
            isOnline: true,
            isWaiting: false
          })
        }
      }
    }
  }

  useEffect(() => {
    checkApiStatus()
  }, [])

  return (
    <span className=" flex items-center gap-2 px-4 py-2 border rounded-full text-white text-xs font-bold">
      <span
        className={`${apiStatus.isWaiting
          ? "bg-yellow-500"
          : apiStatus.isOnline
            ? "bg-green-500"
            : "bg-red-500"}
          rounded-full p-0.5`}
      >
        <Circle
          className={`${apiStatus.isWaiting
            ? "text-yellow-700"
            : apiStatus.isOnline
              ? "text-green-700"
              : "text-red-700"}
          animate-ping`}
          size={10}
          weight="fill"
        />
      </span>
      {
        apiStatus.isWaiting
          ? "verificando..."
          : apiStatus.isOnline
            ? "conectado"
            : "desconectado"
      }
    </span>
  )
}