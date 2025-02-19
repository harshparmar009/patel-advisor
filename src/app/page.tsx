
import Navbar from "@/components/pages/Navbar";
import Achieve from "@/components/pages/Achieve";
import Footer from "../components/pages/Footer";
import Facilities from "@/components/pages/Facilities";
import WhyYouChooseUs from "@/components/pages/WhyYouChooseUs";
// import AboutPage from "./about/page";
import AboutUs from "@/components/pages/AboutUs";
import ServiceSection from "@/components/pages/ServiceSection";


export default function Home() {
  return (
  <div> 
    <Navbar/>
    <AboutUs/>
    <Achieve/>  
    <ServiceSection/>

    <WhyYouChooseUs/>
    
    <Facilities/>
    <Footer/>
  </div>
  );
}
