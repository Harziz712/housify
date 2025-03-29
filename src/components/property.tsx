import { Button } from "./ui/button"
import { PropertySearch } from "./ui/ui"

const Property = () => {
  return (
    <div id="properties" className='max-h-full md:h-[100vh] w-full mt-15 md:mt-5 p-5 md:p-20 justify-center text-center'>
            <h1 className="text-4xl md:text-[50px]  font-bold text-foreground ">Property <span className="text-primary">Showcase</span></h1>
            <div className="w-full flex flex-row justify-center items-center mt-5 gap-2">
                <Button className="bg-transparent border-none text-accent-foreground hove:bg-primary hover:text-primary-foreground">Buy</Button>
                 <Button className="bg-transparent border-none text-accent-foreground hove:bg-primary hover:text-primary-foreground">Rent</Button>
                 <Button className="bg-transparent border-none text-accent-foreground hove:bg-primary hover:text-primary-foreground">Sell</Button>

                <div className="flex w-full max-w-sm items-center space-x-2">
      <PropertySearch/>
    </div>
            </div>
    <div  className="flex flex-col md:flex-row h-[90vh] bg-accent-foreground md:pt-0 md:h-[100%] w-full bg-chart-3 rounded-4xl  gap-10 mt-8 relative ">
      
<div className="w-[50%]">
</div>
    </div>
    </div>
  )
}

export default Property