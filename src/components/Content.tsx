import Listings from "@/components/Listings"
import Filters from "@/components/Filters"
import { useFilters } from "@/hooks/useFilters"

export default function Content() {
  const { state, formAction, isPending, error } = useFilters();

  return (
    <div className="grid gap-3 p-4 w-full">
      <Filters formAction={formAction} isPending={isPending} />
      {error.isError && <div className="text-red-500 font-bold">{error.message}</div>}
      <Listings data={state} isPending={isPending} />
    </div>
  )
}
