import Habilities from "./components/Abilities"
import Home from "./components/Home"
import Projects from "./components/Projects"
import About from "./components/About"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"

function App() {

  return (
    <div className="flex flex-col items-center bg-[#fafbff]">
      <Home/>

      <div className="w-full max-w-5xl section-divider" />

      <Habilities/>

      <div className="w-full max-w-5xl section-divider" />

      <Projects/>

      <div className="w-full max-w-5xl section-divider" />

      <About/>

      <Footer/>

      <BackToTop/>
    </div>
  )
}

export default App
