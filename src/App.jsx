import Home from "./componets/Home"
import "./App.css"
import Navbar from "./componets/Navbar"
import TimeLine from "./componets/TimeLine"
import Awards from "./componets/Awards"
import ContactUs from "./componets/ConatactUs"
import Footer from "./componets/Footer"
import Info from "./componets/Info"
import Guidelines from "./componets/Guidelines"
import Team from "./componets/Team"
import Partners from "./componets/Partners"

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <Info />
      <Guidelines />
      <TimeLine />
      <Awards />
      <Team />
      <Partners />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
