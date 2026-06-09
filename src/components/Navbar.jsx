import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Menu, X, ArrowUpRight } from 'lucide-react'
import logo from '../assets/images/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Causes', path: '/causes' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-[#245331] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo Section */}
          <div className="flex-shrink-0 pl-4 md:pl-8">
            <Link to="/" className="flex items-center ">
              <img
                src={logo}
                alt="RKCT Logo"
                className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
              <span className="text-brand-gold font-bold text-lg md:text-2xl hidden sm:block">RKCT</span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-2 text-sm font-semibold tracking-wide transition-colors duration-300 ${isActive(link.path)
                    ? 'text-white border-b-2 border-white'
                    : 'text-white hover:text-white/80'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section: Search & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Icon Trigger */}
            <div className="relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 border border-white/20 rounded-full text-white hover:bg-white/10 transition-all duration-300"
              >
                <Search size={18} />
              </button>
              {showSearch && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl p-2 border border-slate-100 flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-3 py-1 text-sm focus:outline-none text-charcoal"
                    autoFocus
                  />
                  <button className="text-brand-gold hover:text-brand-gold-dark p-1">
                    <Search size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* Donate Now Button */}
            <Link
              to="/donate"
              className="bg-brand-gold text-white hover:bg-brand-gold-dark px-6 py-3 rounded-full text-sm font-bold tracking-wide flex items-center gap-1.5 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              Donate Now
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 border border-white/20 rounded-full text-white"
            >
              <Search size={18} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Search input */}
      {showSearch && (
        <div className="md:hidden bg-white px-4 py-3 border-t border-slate-100 flex items-center">
          <input
            type="text"
            placeholder="Search our campaigns..."
            className="w-full px-3 py-2 text-sm focus:outline-none text-charcoal"
            autoFocus
          />
          <button className="text-brand-gold p-2">
            <Search size={18} />
          </button>
        </div>
      )}

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#245331] border-t border-white/10 transition-all duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-semibold transition-colors ${isActive(link.path)
                    ? 'bg-white/10 text-white'
                    : 'text-white hover:bg-white/5'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-3">
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="w-full bg-brand-gold text-white text-center py-3 rounded-full font-bold tracking-wide flex items-center justify-center gap-1.5 shadow-md"
              >
                Donate Now
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
