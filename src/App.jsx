import Advantages from "./Components/Advantages";
import Custmoizable from "./Components/Custmoizable";
import FAQ from "./Components/FAQ";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Testimeniol from "./Components/Testimeniol";

export default function App() {
  return (
    <>
      <div>
        <Header/>
        <Hero/>
        <Features/>
        <Advantages/>
        <Custmoizable/>
        <Testimeniol/>
        <FAQ/>
        <Footer/>
      </div>
    </>
  )
}