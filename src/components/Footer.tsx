import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://i.ibb.co/W9cRk35/438802811-122139959558202824-899852585689881203-n-removebg-preview.png"
                alt="Melny Results Logo"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-black">Melny Results</span>
            </div>
            <p className="text-gray-600">
              Helping local businesses dominate their markets through proven digital marketing strategies.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black mb-4">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Google Ads</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Facebook Ads</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Instagram Ads</a></li>
              <li><a href="#" className="hover:text-black transition-colors">SEO Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-black mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-black mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>(647) 764-6047</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>hello@melnyresults.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>123 Main St, City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2024 Melny Results. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
