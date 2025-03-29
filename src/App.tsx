import Discover from "./components/discover"
import Home from "./components/home"
import Navbar from "./components/navbar"

const App = () => {
  return (
    <div className="w-full h-[100%] p-0 m-0 bg-chart-2 overflow-hidden">
    <Navbar/>
    <div className=" h-[70px] absolute top-0 w-full"></div>
    <div >
      <Home/>
      <Discover/>
      </div>
    </div>
  )
}

export default App