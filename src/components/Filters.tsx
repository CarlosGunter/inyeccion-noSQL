
export default function Filters({ formAction, isPending }: { formAction: (payload: FormData) => void, isPending: boolean }) {

  return (
    <div className="grid gap-3 p-4 w-full">
      <h2 className="text-xl">Filters</h2>
      <form action={formAction} className="flex justify-between">
        <div className="flex gap-4">
          <label className="flex gap-2">
            <span className="self-center">Min Price:</span>
            <input
            type="text"
            name="min-price"
            placeholder="0"
            defaultValue={0}
            className="border border-white rounded-xl py-1 px-2 w-15"
            />
          </label>
          <label className="flex gap-2">
            <span className="self-center">Max Price:</span>
            <input
            type="text"
            name="max-price"
            placeholder="1000"
            className="border border-white rounded-xl py-1 px-2 w-15"
            />
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded-xl py-1 px-4 hover:bg-blue-600 transition-colors duration-300">
          Search
        </button>
      </form>
    </div>
  )
}
