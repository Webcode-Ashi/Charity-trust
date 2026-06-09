import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const infoRef = useRef(null)
  const formRef = useRef(null)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    // GSAP animation for elements
    gsap.fromTo(infoRef.current.children,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
    )
    gsap.fromTo(formRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="flex-grow bg-slate-50">
      
      {/* Page Header */}
      <section 
        className="bg-charcoal text-white py-20 text-center relative"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9))'
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Contact Us</h1>
          <p className="text-brand-gold font-semibold tracking-wider uppercase text-sm mt-3">
            Reach Out to Ramvati Kasana Charitable Trust
          </p>
          <div className="w-20 h-1 bg-brand-gold mx-auto mt-6 rounded-full"></div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Column (Left) */}
          <div ref={infoRef} className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-brand-green font-bold uppercase tracking-widest text-xs bg-brand-green/10 px-4 py-1.5 rounded-full border border-brand-green/20">
                Get In Touch
              </span>
              <h2 className="text-3xl font-extrabold text-charcoal mt-4">
                We'd Love to Hear From You
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mt-3">
                Have questions regarding volunteering? Want to verify details or explore collaborations? Reach out using our contact details or fill the form.
              </p>
            </div>

            {/* Office location */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-sm transition-shadow">
              <div className="p-3 bg-brand-gold/10 rounded-xl text-brand-gold">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-charcoal">Main Office</h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  Ramvati Kasana Charitable Trust, <br />
                  Kasana Bhawan, Greater Noida, <br />
                  Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-sm transition-shadow">
              <div className="p-3 bg-brand-green/10 rounded-xl text-brand-green">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-charcoal">Call Us</h3>
                <p className="text-sm text-slate-500 mt-1">
                  +91 99999 XXXXX
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Mon - Sat (9:00 AM - 6:00 PM)</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-sm transition-shadow">
              <div className="p-3 bg-slate-100 rounded-xl text-slate-600">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-charcoal">Email Us</h3>
                <p className="text-sm text-slate-500 mt-1">
                  info@rkctrust.org
                </p>
                <p className="text-sm text-slate-500">
                  support@rkctrust.org
                </p>
              </div>
            </div>
          </div>

          {/* Form Column (Right) */}
          <div ref={formRef} className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm">
            {formSubmitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="h-16 w-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto text-brand-green">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-extrabold text-charcoal">Message Sent Successfully!</h3>
                <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. A representative from Ramvati Kasana Charitable Trust will contact you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-brand-gold text-charcoal hover:bg-brand-gold-dark font-bold text-sm px-6 py-2.5 rounded-full shadow transition-all duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <h3 className="font-extrabold text-2xl text-charcoal mb-6">Send A Message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-gold focus:bg-white transition-all text-charcoal"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-gold focus:bg-white transition-all text-charcoal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 XXXXX XXXXX"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-gold focus:bg-white transition-all text-charcoal"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Volunteering Inquiry"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-gold focus:bg-white transition-all text-charcoal"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Message</label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Describe how we can collaborate or answer your queries..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-gold focus:bg-white transition-all text-charcoal resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-bold py-4 rounded-xl text-sm tracking-wide flex items-center justify-center gap-2 shadow hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Map iframe section */}
      <section className="h-96 w-full bg-slate-200 border-t border-slate-350 relative">
        <iframe
          title="RKCT Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112196.22440114006!2d77.3898490076722!3d28.497375796245353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1b402ef4657%3A0xe54d9095bb765b21!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

    </div>
  )
}
