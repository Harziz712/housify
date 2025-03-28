import { Button } from './ui/button'
import { Menu,  } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Logo, NavLinks } from './ui/ui'


const Navbar = () => {
  return (
    <div className="w-full fixed  top-0 left-0 z-50  backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center py-3 md:py-4 px-14 ">
  <Logo className='md:scale-[1.5] brightness-[80]'/>
{/* Desktop */}
        <div className="hidden md:flex justify-between items-center gap-20 md:w-[50%]">
          <NavLinks />
          <Button className={"hidden md:flex px-6 py-3 font-bold text-sm rounded-2xl"} data-aos="fade-left">Order now !</Button>
        </div>
{/* Mobile */}
        <div className="md:hidden z-100 relative text-accent ">
          <Sheet >
            <SheetTrigger >
              <Menu className="w-9 h-9 " />
              
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col items-left">
            <div className='m-10'><Logo/></div>
              <div className="flex flex-col items-center gap-4 mt-6 px-10">
                <NavLinks />
                <Button className="w-full py-3 rounded" data-aos="fade-left" >Order now !</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
         
        </div>
        
      </div> 
{/*    
      <div className="h-[2px] w-full bg-primary mb-3"></div> */}
    </div>
  )
}

export default Navbar