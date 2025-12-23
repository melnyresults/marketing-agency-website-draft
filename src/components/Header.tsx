import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="bg-black text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">
              M
            </div>
            <span className="text-2xl font-bold text-black">Melny Results</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-black font-medium transition-colors">
              Services
            </a>
            <a href="#results" className="text-gray-700 hover:text-black font-medium transition-colors">
              Results
            </a>
            <a href="#about" className="text-gray-700 hover:text-black font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-black font-medium transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:555-0123" className="flex items-center gap-2 text-gray-700 hover:text-black font-medium transition-colors">
              <Phone className="w-5 h-5" />
              <span>(555) 0123</span>
            </a>
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all shadow-md hover:shadow-lg">
              Free Consultation
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <a href="#services" className="text-gray-700 hover:text-black font-medium">
                Services
              </a>
              <a href="#results" className="text-gray-700 hover:text-black font-medium">
                Results
              </a>
              <a href="#about" className="text-gray-700 hover:text-black font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-black font-medium">
                Contact
              </a>
              <a href="tel:555-0123" className="flex items-center gap-2 text-gray-700 hover:text-black font-medium">
                <Phone className="w-5 h-5" />
                <span>(555) 0123</span>
              </a>
              <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold">
                Free Consultation
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
