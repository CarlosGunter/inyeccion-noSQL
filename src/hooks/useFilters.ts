import { useActionState } from "react"
import { fetchListings } from "@/services/apiService"

export function useFilters() {
  const filterListings = async (prevState: unknown, formData: FormData) => {
    const { minPrice, maxPrice } = Object.fromEntries(formData.entries())
    const listings = await fetchListings({
      priceMin: Number(minPrice) || 0,
      priceMax: Number(maxPrice) || 10000
    }) as typeListings[]
    return listings
  }
  const [state, formAction, isPending] = useActionState(
    filterListings,
    [] as typeListings[]
  )

  return { state, isPending, formAction }
}