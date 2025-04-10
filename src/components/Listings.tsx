interface ListingsProps {
  data: typeListings[]
  isPending: boolean
}

export default function Listings({ data, isPending }: ListingsProps) {
  return (
    <main className="grid gap-4 p-2 w-full justify-center">
      <h2 className="text-2xl font-bold text-center py-6">Listings</h2>
      {isPending && <p className="text-center text-gray-200 text-lg">Loading listings...</p>}
      {
        data && data.map((listing) => (
          <article key={listing.id} className="border border-gray-300 rounded-xl bg-white/10 grid gap-4 max-w-4xl hover:shadow-lg transition-shadow duration-300 md:grid-cols-5 md:gap-2">
            <img
            src={listing.imageUrl}
            onError={(e) => {
              e.currentTarget.src = '/fallback-img.webp'
            }}
            alt={listing.name}
            className="rounded-t-xl md:col-start-4 md:col-span-2 md:row-[1] md:h-auto md:rounded-r-xl"
            />
            <div className="grid p-4 md:col-span-3">
              <h3 className="text-xl font-semibold">{listing.name}</h3>
              <p className="line-clamp-2 md:line-clamp-3">{listing.description}</p>
              <p className="self-end text-gray-200 font-bold text-lg">${listing.price}</p>
            </div>
          </article>
        ))
      }
      {data && data.length === 0 && <p>No listings available.</p>}
    </main>
  )
}
