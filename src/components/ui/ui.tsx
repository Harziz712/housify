import { links } from "../../lib/data"

export const Logo = ({className}:{className?:string}) => {
    return (
        // <h2 className='md:w-[30%]'>LOGO.</h2>
        <img   className={`h-15 w-20 ${className}`} data-aos="fade-right" alt="LOGO."/>
    )
}

export const NavLinks = () => {
    return (
      <div  className="sm: grid md:flex justify-between items-center p-4 gap-12 " >
      {links.map((link)=> (
          <a href={`${link.href}`} className="relative before:absolute before:-bottom-2 before:left-0 before:w-[100%] before:h-1 
          before:rounded-[5px] before:bg-accent before:scale-x-0 before:transform-origin-bottom-right before:transition-transform before:ease-in-out
          hover:before:scale-[1] hover:before:transform-origin-bottom-left   " data-aos="fade-down">{link.name}</a>
      ))  }
      
  
      </div>
    )
  }
  