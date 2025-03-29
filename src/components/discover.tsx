import { DiscoverDetail, PropertyCard } from "./ui/ui"

const Discover = () => {
  return (
    <div id="discover" className='max-h-full md:h-[100%] space-y-3 w-full  md:mt-0 p-5 md:p-20'> 
    
     <DiscoverDetail/>
     <PropertyCard/>
    </div>
  )
}

export default Discover