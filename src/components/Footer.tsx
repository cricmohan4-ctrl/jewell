import { Gem, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Gem className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold">JewelPledge</span>
            </div>
            <p className="text-gray-400">Securely pledge or sell your jewelry online.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/pledge" className="text-gray-400 hover:text-white">Pledge Jewelry</Link></li>
              <li><Link to="/sell" className="text-gray-400 hover:text-white">Sell Jewelry</Link></li>
              <li><Link to="/branches" className="text-gray-400 hover:text-white">Branch Locator</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400">123 Jewelry Lane, Diamond City</p>
            <p className="text-gray-400">contact@jewelpledge.com</p>
            <p className="text-gray-400">+1 234 567 890</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} JewelPledge. All rights reserved.
        </div>
      </div>
    </footer>
  );
};