
export default function Filters() {
  return (
    <div className="grid gap-3">
      <h2 className="text-xl">Filters</h2>
      <form action="" method="get" className="flex gap-4">
        <label className="flex gap-2">
          <span className="self-center">Min Price</span>
          <input
          type="text"
          name="min-price"
          placeholder="0"
          value={0}
          className="border border-white rounded-xl py-1 px-2 w-15"
          />
        </label>
        <label className="flex gap-2">
          <span className="self-center">Max Price</span>
          <input
          type="text"
          name="max-price"
          placeholder="1000"
          className="border border-white rounded-xl py-1 px-2 w-15"
          />
        </label>
      </form>
    </div>
  )
}
