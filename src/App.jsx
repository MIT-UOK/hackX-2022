import Home from "./componets/Home"
import "./App.css"
import Navbar from "./componets/Navbar"
import TimeLine from "./componets/TimeLine"
import Awards from "./componets/Awards"
import Partners from "./componets/Partners"
import ContactUs from "./componets/ConatactUs"
import Footer from "./componets/Footer"
import Info from "./componets/Info"
import Guidelines from "./componets/Guidelines"
import Team from "./componets/Team"

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <Info />
      <Guidelines />
      <TimeLine />
      <Awards />
      <Partners />
      <Team />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
