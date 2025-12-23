import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowWeWork from './components/HowWeWork';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import Team from './components/Team';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <HowWeWork />
      <WhyUs />
      <FAQ />
      <Team />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
