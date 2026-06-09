import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Heart } from 'lucide-react'
import logo from '../assets/images/logo.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-slate-300 border-t-4 border-brand-gold">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Mission Column */}
          <div className="space-y-6">
             <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                          <img
                            src={logo}
                            alt="RKCT Logo"
                            className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
                          />
                          <div className="hidden sm:flex flex-col justify-center -ml-2">
                            <span className="text-brand-gold font-bold text-xl md:text-2xl leading-tight font-heading">RKCT</span>
                            <span className="text-white text-[9px] md:text-[10px] font-semibold tracking-wider uppercase">
                              Ramvati Kasana Charitable Trust
                            </span>
                          </div>
                        </Link>
                      </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Ramvati Kasana Charitable Trust (RKCT) is dedicated to serving humanity, nurturing community welfare, education support, and promoting healthy lifestyles through yoga and wellness programs.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="p-2.5 bg-charcoal-light hover:bg-brand-gold hover:text-charcoal rounded-full text-slate-400 transition-all duration-300 flex items-center justify-center">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="p-2.5 bg-charcoal-light hover:bg-brand-gold hover:text-charcoal rounded-full text-slate-400 transition-all duration-300 flex items-center justify-center">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="p-2.5 bg-charcoal-light hover:bg-brand-gold hover:text-charcoal rounded-full text-slate-400 transition-all duration-300 flex items-center justify-center">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051c-.058 1.28-.072 1.689-.072 4.949s.014 3.67.072 4.949c.2 4.359 2.62 6.781 6.98 6.98 1.28.058 1.689.072 4.948.072 3.261 0 3.67-.014 4.95-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949s-.014-3.67-.073-4.949c-.2-4.359-2.62-6.78-6.979-6.98C15.67.014 15.261 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" className="p-2.5 bg-charcoal-light hover:bg-brand-gold hover:text-charcoal rounded-full text-slate-400 transition-all duration-300 flex items-center justify-center">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.002 3.002 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-brand-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm hover:text-brand-gold transition-colors duration-300 flex items-center">
                  <span className="mr-2 text-brand-gold">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-brand-gold transition-colors duration-300 flex items-center">
                  <span className="mr-2 text-brand-gold">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/causes" className="text-sm hover:text-brand-gold transition-colors duration-300 flex items-center">
                  <span className="mr-2 text-brand-gold">›</span> Causes & Campaigns
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-brand-gold transition-colors duration-300 flex items-center">
                  <span className="mr-2 text-brand-gold">›</span> Blog & Updates
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-brand-gold transition-colors duration-300 flex items-center">
                  <span className="mr-2 text-brand-gold">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-brand-gold">
              Contact Details
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-brand-gold mr-3 shrink-0 mt-0.5" size={18} />
                <span className="text-sm text-slate-400">
                  Ramvati Kasana Charitable Trust, Kasana Bhawan, Greater Noida, UP, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-brand-gold mr-3 shrink-0" size={18} />
                <span className="text-sm text-slate-400">+91 99999 XXXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-brand-gold mr-3 shrink-0" size={18} />
                <span className="text-sm text-slate-400">info@rkctrust.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-brand-gold">
              Newsletter
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Stay updated with our latest causes, health drives, and volunteering initiatives.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2.5 bg-charcoal-light border border-slate-700 rounded-l-md text-sm text-white focus:outline-none focus:border-brand-gold"
              />
              <button 
                type="submit"
                className="bg-brand-gold hover:bg-brand-gold-dark text-charcoal font-bold px-4 rounded-r-md transition-colors duration-300"
              >
                Join
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-charcoal-light border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-slate-500 text-center md:text-left">
            &copy; {currentYear} Ramvati Kasana Charitable Trust. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 text-center md:text-left mt-2 md:mt-0 flex items-center justify-center">
            Made with <Heart size={12} className="text-brand-gold mx-1 animate-pulse" /> for serving humanity.
          </p>
        </div>
      </div>

    </footer>
  )
}
