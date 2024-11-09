import './App.css';
import Footer from './components/Footer';
import Faq from './components/Faq';
import WhyUs from './components/WhyUs';
import Features from './components/Features';
import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {
  useEffect(()=>{
    Aos.init({duration: 2000})
  })
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Features />
      <WhyUs />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
