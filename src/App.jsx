import Home from "./componets/Home"
import "./App.css"
import Navbar from "./componets/Navbar"
import TimeLine from "./componets/TimeLine"
import Awards from "./componets/Awards"
import Partners from "./componets/Partners"
import Town from "./componets/Town"
import ContactUs from "./componets/ConatactUs"
import Footer from "./componets/Footer"
import Info from "./componets/Info"

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <Info />
      <TimeLine />
      <Awards />
      <Partners />
      <ContactUs />
      <Town />
      <Footer />
    </>
  )
}

export default App
