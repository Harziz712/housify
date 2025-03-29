import { useState } from "react"
import { links } from "../../lib/data"
import { images } from "../../assets/images"
import { ArrowRight, Heart } from "lucide-react"
import { cn } from "../../lib/utils"
import { Button } from "./button"
import { motion } from "framer-motion"

export const Logo = ({className}:{className?:string}) => {
    return (
        <h2 className={`  ${className}`}>HOUSIFY.</h2>
        // <img   className={`h-15 w-20 ${className}`} data-aos="fade-right" alt="Housify"/>
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

  export const HomeDetail = () =>{
    return (
        <div className="text-muted-foreground text-center md:text-left space-y-5 md:w-[50%]">
           <h2 className="text-5xl md:text-[70px] md:leading-[1.2] font-bold text-primary-foreground text-shadow">
    Find Your Dream House Today
</h2>

            <p className="text-sm text-primary-foreground text-shadow "> Welcome to our real estate agency, where your dream home awaits.
            Browse our listings and find the perfect property for you.</p>
        <div className="md:flex-row justify-between items-center space-x-2">    <Button className="text-1xl  rounded-4xl bg-primary-foreground p-5  text-primary hover:text-primary-foreground">View</Button>     <Button className="text-1xl  rounded-4xl  border-2 bg-transparent border-primary-foreground p-5 ">Learn more</Button></div>
    </div>
    )
} 
 export const HomeMessage = () =>{
    return (
      
//   <div className="bg-primary-foreground rounded-4xl h-[30%] w-[30%] absolute bottom-0 right-0">
//   </div>
    <div className="absolute bottom-6 right-6 bg-white rounded-3xl p-6 shadow-md shadow-foreground w-[300px] md:w-[350px] ">
    <h3 className="text-md md:text-xl font-semibold">Who We Are?</h3>
    <p className="text-sm text-gray-600 mt-2">
      We offer a range of services including buying, selling, and property
      management.
    </p>
    <div className="mt-4 flex justify-between text-gray-800 font-semibold">
      <div>
        <p className="text-md md:text-xl text-primary" >80+</p>
        <p className="text-xs text-gray-500">Premium House</p>
      </div>
      <div>
        <p className="text-md md:text-xl text-primary" >500+</p>
        <p className="text-xs text-gray-500">Agent House</p>
      </div>
      <div>
        <p className="text-md md:text-xl text-primary" >2K+</p>
        <p className="text-xs text-gray-500">Happy Clients</p>
      </div>
    </div>
  </div>
    )
}
  
export const DiscoverDetail = () => {
    return (
        <div className="flex flex-col md:flex-row justify-evenly items-top  w-full  ">
        <h1 className="text-5xl md:text-[60px]  font-bold text-foreground md:w-[50%]">Discover Your Perfect <br /> <span className="text-primary">Property Match</span></h1>
        <p className="text-sm text-foreground  md:w-[50%]"> Discover your perfect property match with our expert real estate services.  
  Whether you're searching for a luxurious villa, a cozy apartment, or a modern family home,  
  we provide top-tier listings and personalized guidance to help you find the ideal space.  
  Start your journey to homeownership with us today!</p>
    </div>
    )}

export const AnimatedButton = () => {
  return (
    <Button className="bg-primary p-2 rounded-full shadow-md relative overflow-hidden">
      <motion.div
        className="flex items-center"
        initial={{ x: 0 }}
        animate={{ x: [0, 5, 0] }} // Moves right and back
        transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
      >
        <ArrowRight className="text-white h-5 w-5" />
      </motion.div>
    </Button>
  );
};



      
export const PropertyCard = () => {
          const [liked, setLiked] = useState(false);
        
          return (
            <div className="grid grid-cols-2 gap-4 p-6">
              <div className="relative col-span-1 w-full h-[100%] rounded-3xl overflow-hidden">
                <img
                  src={images.house3}
                  alt="Modern House"
                  className="w-full h-full object-cover"
                />
                <Button
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
                  onClick={() => setLiked(!liked)}
                >
                  <Heart
                    className={cn("h-6 w-6 transition-all", liked ? "text-red-500 fill-red-500" : "text-gray-500")}
                  />
                </Button>
        
                <div className="absolute bottom-4 left-4 bg-white p-4 rounded-2xl shadow-md w-[90%] flex flex-col">
                  <p className="text-xl font-semibold">$930,000</p>
                  <p className="text-sm text-gray-500">
                    289 Lombard Street, San Francisco, CA 94133
                  </p>
                  <div className="flex justify-between mt-2 text-gray-700 text-sm">
                    <p>2,218 Sq.Ft</p>
                    <p>3 Beds</p>
                    <p>2 Baths</p>
                  </div>
                  <div className="flex justify-end mt-2">
                    {/* <Button className="bg-primary p-2 rounded-full shadow-md">
                      <ArrowRight className="text-white h-5 w-5" />
                    </Button> */}
                    <AnimatedButton />
                  </div>
                </div>
              </div>
        
              <div className="grid grid-cols-2 gap-3">
                {[images.interior2, images.property1].map((src, index) => (
                  <div key={index} className="relative  w-full h-[100%] rounded-3xl overflow-hidden">
                    <img src={src} alt="House Interior" className="w-full h-full object-cover" />
                    <Button
                      className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md"
                      onClick={() => setLiked(!liked)}
                    >
                      <Heart
                        className={cn("h-5 w-5 transition-all", liked ? "text-red-500 fill-red-500" : "text-gray-500")}
                      />
                    </Button>
                  </div>
                ))}
                    <div className="relative col-span-2  w-full h-[100%] rounded-3xl overflow-hidden">
                    <img src={ images.housels} alt="House Interior" className="w-full h-full object-cover" />
                    <Button
                      className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md"
                      onClick={() => setLiked(!liked)}
                    >
                      <Heart
                        className={cn("h-5 w-5 transition-all", liked ? "text-red-500 fill-red-500" : "text-gray-500")}
                      />
                    </Button>
                  </div>
              </div>
            </div>
        
    )}
