import Habilities from "./components/Habilities"
import Home from "./components/Home"
import Projects from "./components/Projects"
import About from "./components/About"

function App() {

  return (
    <div className="flex flex-col justify-between gap-10 items-center ">
    <Home/>
    
    <Habilities/>

    <Projects/>

    <About/>
    </div>
  )
}

export default App
