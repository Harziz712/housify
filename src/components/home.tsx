import { images } from "../assets/images"
import { HomeDetail, HomeMessage } from "./ui/ui"

const Home = () => {
  return (
<div id="home" className='max-h-full md:h-[100vh] w-full mt-15 md:mt-0 p-5 md:p-20'>

<div
  className="flex flex-col md:flex-row h-[90vh] pt-[20%] md:pt-0 md:h-[100%] w-full bg-chart-3 rounded-4xl justify-items-normal pl-[5%] items-center gap-10 mt-8 px-6 relative "
  style={{
    backgroundImage: `url(${images.housels})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
>
  <HomeDetail />
<HomeMessage/>
</div>
</div>

  )
}

export default Home