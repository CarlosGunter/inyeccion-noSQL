import Listings from "@/components/Listings"
import Filters from "@/components/Filters"
import { useFilters } from "@/hooks/useFilters"

export default function Content() {
  const { state, formAction, isPending } = useFilters();

  return (
    <div className="grid gap-3 p-4 w-full">
      <Filters formAction={formAction} isPending={isPending} />
      <Listings data={state} />
    </div>
  )
}
