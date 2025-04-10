export default function Listings({ data }: { data: typeListings[] }) {
  return (
    <main>
      <div>Listings</div>
      {
        data && data.map((listing) => (
          <div key={listing.id} className="border border-gray-300 rounded-xl p-4 mb-4">
            <h3 className="text-lg font-semibold">{listing.name}</h3>
            <p>{listing.description}</p>
            <p className="text-gray-500">${listing.price}</p>
          </div>
        ))
      }
      {data && data.length === 0 && <p>No listings available.</p>}
    </main>
  )
}
