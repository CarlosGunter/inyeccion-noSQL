import { useFilters } from "@/hooks/useFilters"

export default function Listings() {
  const { state } = useFilters()
  
  return (
    <main>
      <div>Listings</div>
      {
        state && state.map((listing: any) => (
          <div key={listing.id} className="border border-gray-300 rounded-xl p-4 mb-4">
            <h3 className="text-lg font-semibold">{listing.name}</h3>
            <p>{listing.description}</p>
            <p className="text-gray-500">${listing.price}</p>
          </div>
        ))
      }
    </main>
  )
}
