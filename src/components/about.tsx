import { images } from "../assets/images"
import { AboutDetail } from "./ui/ui"

const About = () => {
  return (
    <div id="about" className="w-full p-5 md:p-20">
      <div className="flex flex-col md:flex-row bg-accent-foreground bg-chart-3 rounded-4xl gap-10 mt-8 relative">
        <AboutDetail />
        <div className="w-full md:w-[60%]">
          <img
            src={images.aboutpic}
            alt="House Interior"
            className="w-full h-full object-cover rounded-4xl"
          />
        </div>
      </div>
    </div>
  )
}

export default About