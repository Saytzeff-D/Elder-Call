import './App.css';
import Footer from './components/Footer';
import Faq from './components/Faq';
import WhyUs from './components/WhyUs';
import Features from './components/Features';
import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
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
