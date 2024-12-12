import Navbar from "../Navbar/Navbar"
import NavigateButtons from "../NavigateButtons/NavigateButtons"
import ProductSection from "../ProductSection/ProductSection"
import Slider from "../Slider/Slider"
import Footer from "../Footer/Footer"

const Main = () => {
  return (
    <div>
        <Navbar />
        <Slider />
        <NavigateButtons />
        <ProductSection />
        <Footer />
    </div>
  )
}

export default Main