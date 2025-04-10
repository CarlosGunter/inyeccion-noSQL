interface fetchListingsProps {
  priceMin: number
  priceMax: number
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
    body: JSON.stringify({ priceMin, priceMax })
  })
  if (!response.ok) {
    throw new Error("Failed to fetch listings")
  }
  const data = await response.json()
  return data.listings as typeListings[]
}