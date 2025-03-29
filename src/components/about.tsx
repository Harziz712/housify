import { images } from "../assets/images"
import { AboutDetail } from "./ui/ui"

const About = () => {
  return (
    <div id="about" className='max-h-full md:h-[100vh] w-full mt-15 md:mt-0 p-5 md:p-20'>
    <div  className="flex flex-col md:flex-row h-[90vh] bg-accent-foreground md:pt-0 md:h-[100%] w-full bg-chart-3 rounded-4xl  gap-10 mt-8 relative ">
        <AboutDetail/>
<div className="w-[60%]">
<img src={images.aboutpic} alt="House Interior" className="w-full h-full object-cover  rounded-4xl" />

</div>
    </div>
    </div>
  )
}

export default About