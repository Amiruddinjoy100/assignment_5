import { useState } from 'react';
import { Layers, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex md:hidden items-center justify-between w-full">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <a href="#" className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white">
                <Layers size={20} />
              </div>
              <span className="font-bold text-lg text-gradient">Dev Stack</span>
            </a>

            <div className="flex items-center gap-2">
              <button className="text-xs font-semibold px-2.5 py-1.5 text-gray-700 hover:text-purple-600">
                Sign In
              </button>
              <button className="btn-gradient text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">
                Sign Up
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white shadow-md">
              <Layers size={22} />
            </div>
            <span className="font-extrabold text-xl text-gradient tracking-tight">Dev Stack</span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
            <a href="#home" className="text-purple-600 transition-colors">
              Home
            </a>
            <a href="#technologies" className="hover:text-purple-600 transition-colors">
              Technologies
            </a>
            <a href="#projects" className="hover:text-purple-600 transition-colors">
              Projects
            </a>
            <a href="#about" className="hover:text-purple-600 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-semibold text-gray-700 hover:text-purple-600 transition-colors px-3 py-2">
              Sign In
            </button>
            <button className="btn-gradient text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all">
              Sign Up
            </button>
          </div>

        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 space-y-3 font-medium text-gray-700">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-purple-600">
            Home
          </a>
          <a href="#technologies" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-purple-600">
            Technologies
          </a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-purple-600">
            Projects
          </a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-purple-600">
            About
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-purple-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}