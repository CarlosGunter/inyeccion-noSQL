import { useActionState } from "react"
import { fetchListings } from "@/services/apiService"

export function useFilters() {
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
    const listings = await fetchListings({
      priceMin: min || 0,
      priceMax: max || 10000
    }) as typeListings[]
    return listings
  }
  const [state, formAction, isPending] = useActionState(
    filterListings,
    [] as typeListings[]
  )

  return { state, isPending, formAction }
}