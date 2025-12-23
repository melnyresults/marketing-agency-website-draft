import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <img
              src="https://i.ibb.co/W9cRk35/438802811-122139959558202824-899852585689881203-n-removebg-preview.png"
              alt="Melny Results Logo"
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-black">Melny Results</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-black font-medium transition-colors">
              Home
            </a>
            <a href="#newsletter" className="text-gray-700 hover:text-black font-medium transition-colors">
              Newsletter
            </a>
            <a href="#blog" className="text-gray-700 hover:text-black font-medium transition-colors">
              Blog
            </a>
            <a href="#call" className="text-gray-700 hover:text-black font-medium transition-colors">
              Book a Call
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:647-764-6047" className="flex items-center gap-2 text-gray-700 hover:text-black font-medium transition-colors">
              <Phone className="w-5 h-5" />
              <span>(647) 764-6047</span>
            </a>
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all shadow-md hover:shadow-lg">
              Book a Call
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
              <a href="#home" className="text-gray-700 hover:text-black font-medium">
                Home
              </a>
              <a href="#newsletter" className="text-gray-700 hover:text-black font-medium">
                Newsletter
              </a>
              <a href="#blog" className="text-gray-700 hover:text-black font-medium">
                Blog
              </a>
              <a href="#call" className="text-gray-700 hover:text-black font-medium">
                Book a Call
              </a>
              <a href="tel:647-764-6047" className="flex items-center gap-2 text-gray-700 hover:text-black font-medium">
                <Phone className="w-5 h-5" />
                <span>(647) 764-6047</span>
              </a>
              <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold">
                Book a Call
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
