import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // For mobile menu icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-[10vh] fixed top-0 left-0 z-50 backdrop-blur-md bg-white/60 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="logo" className="h-10 w-10 object-contain" />
          <h2 className="text-2xl font-semibold text-gray-800">Star Properties</h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-gray-800 font-medium">
          <a href="/buy" className="hover:text-blue-600 transition">Buy</a>
          <a href="/rent" className="hover:text-blue-600 transition">Rent</a>
          <a href="/pg" className="hover:text-blue-600 transition">PG</a>
          <a href="/plots" className="hover:text-blue-600 transition">Plots</a>
        </nav>

        {/* Sign In Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 space-y-3 bg-white/80 backdrop-blur-md text-gray-800">
          <a href="/buy" className="block hover:text-blue-600">Buy</a>
          <a href="/rent" className="block hover:text-blue-600">Rent</a>
          <a href="/pg" className="block hover:text-blue-600">PG</a>
          <a href="/plots" className="block hover:text-blue-600">Plots</a>
          <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Sign In
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
