import Habilities from "./components/Habilities"
import Home from "./components/Home"
import Projects from "./components/Projects"
import About from "./components/About"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"

function App() {

  return (
    <div className="flex flex-col justify-between gap-10 items-center ">
      <Home/>
      
      <Habilities/>

      <Projects/>

      <About/>

      <Footer/>

      <BackToTop/>
    </div>
  )
}

export default App
