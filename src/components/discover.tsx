import { DiscoverDetail, PropertyCard } from "./ui/ui"

const Discover = () => {
  return (
    <div id="discover" className="max-h-full w-full space-y-6 p-5 md:p-16 lg:p-20"> 
      <DiscoverDetail />
      <PropertyCard />
    </div>
  )
}

export default Discover