import './App.css';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Recommemd from './Components/Recommemd';
import ScrollToUp from './Components/ScrollToUp';
import Services from './Components/Services';
import Testimonials from './Components/Testinomial';
import { useEffect } from 'react';
import scrollreveal from 'scrollreveal';
function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin : 'top',
      distance : '80px',
      duration : 2000,
      reset : true
    })
    sr.reveal(
      `nav,
      #hero,
      #services,
      #recommend,
      #testimonials,
      footer`,{
        opacity: 0,
        interval :300
      }
    )
  },[])
  return (
    <>
    <ScrollToUp/>
    <Navbar/>
    <Hero/>
    <Services/>
    <Recommemd/>
    <Testimonials/>
    <Footer/>
    </>
  );
}

export default App;
