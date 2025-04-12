import { tryCatch } from "@/utils/try-catch"

interface fetchListingsProps {
  priceMin: number | FormDataEntryValue
  priceMax: number | FormDataEntryValue
}

export async function fetchListings({
  priceMin,
  priceMax
}: fetchListingsProps) {
  const response = await fetch("/api/filter-listings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "price": { "$gte": priceMin, "$lte": priceMax }
    })
  })
  if (!response.ok) {
    throw new Error("Failed to fetch listings")
  }
  const { data, error, success } = await tryCatch(response.json())
  if (!success) throw error
  
  const listings = data.listings as typeListings[]
  return listings
}