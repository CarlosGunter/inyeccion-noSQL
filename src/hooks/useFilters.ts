import { useActionState, useState } from "react"
import { tryCatch } from "@/utils/try-catch"
import { fetchListings } from "@/services/apiService"

interface ErrorProps {
  isError: boolean
  message: string
}

export function useFilters() {
  const [error, setError] = useState<ErrorProps>({
    isError: false,
    message: ""
  })
  const filterListings = async (prevState: unknown, formData: FormData) => {
    const { minPrice, maxPrice } = Object.fromEntries(formData.entries())
    // Por cuestiones prácticas, se forzará la inyección de los valores
    // con el fin de facilitar el uso de la inyección
    // De otra forma, se podría usar una herramienta que intercepte la request
    const min = /^\d+$/.test(minPrice as string)
      ? parseInt(minPrice as string)
      : minPrice
    const max = /^\d+$/.test(maxPrice as string)
      ? parseInt(maxPrice as string)
      : maxPrice
    const { data, error, success } = await tryCatch(fetchListings({
      priceMin: min || 0,
      priceMax: max || 10000
    }))
    if (!success) {
      setError({
        isError: true,
        message: error.message
      })
      return []
    }
    return data
  }
  const [state, formAction, isPending] = useActionState(
    filterListings,
    [] as typeListings[]
  )

  return { state, isPending, formAction, error }
}