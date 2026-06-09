import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Landmark, QrCode, Copy, Check, Heart, ShieldCheck } from 'lucide-react'

// Import local image for background
import donateImg from '../assets/images/donation.avif'

export default function DonatePage() {
  const [copiedBank, setCopiedBank] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState('1000')
  const [customAmount, setCustomAmount] = useState('')
  const bankCardRef = useRef(null)
  const upiCardRef = useRef(null)

  useEffect(() => {
    // GSAP fade in animations
    gsap.fromTo(bankCardRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    gsap.fromTo(upiCardRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  const bankDetails = {
    name: "RAMVATI KASANA CHARITABLE TRUST",
    account: "12345678901234",
    ifsc: "BARB0GRENOI", // Bank of Baroda mock
    bank: "Bank of Baroda",
    branch: "Alpha II, Greater Noida Branch"
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopiedBank(true)
    setTimeout(() => setCopiedBank(false), 2000)
  }

  const handleRegisterDonation = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="flex-grow bg-slate-50">
      
      {/* Page Header */}
      <section 
        className="bg-charcoal text-white py-32 sm:py-48 lg:py-64 text-left relative bg-no-repeat bg-cover bg-center flex flex-col justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${donateImg})`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm bg-brand-gold/10 px-4 py-1.5 rounded-full border border-brand-gold/30 inline-block w-fit self-start mb-4">
            Make an Impact
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg text-left">
            Support Our Cause
          </h1>
          <p className="text-brand-gold font-bold tracking-widest uppercase text-sm sm:text-base mt-2 sm:mt-3 drop-shadow-md">
            Your Contribution Shapes a Better Tomorrow
          </p>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl text-left">
            Every donation directly supports our initiatives in healthcare, education, and community welfare. Join hands with us to build a brighter, more sustainable future for those in need.
          </p>
          <div className="w-20 h-1 bg-brand-gold mt-8 sm:mt-10 rounded-full shadow-lg"></div>
        </div>
      </section>

      {/* Main Donation Container */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Donation options columns (Left/Middle) */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Amount choosing grid */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
              <h3 className="font-extrabold text-2xl text-charcoal flex items-center gap-2">
                <Heart className="text-brand-gold" size={24} /> Choose Contribution Amount
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Select an amount below or enter a custom sum to allocate resources to child welfare, education, bhandara food programs, or health clinics.
              </p>
              
              {/* Grid buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['500', '1000', '2500', '5000'].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amt)
                      setCustomAmount('')
                    }}
                    className={`py-3.5 rounded-2xl text-base font-extrabold border transition-all duration-300 ${
                      selectedAmount === amt && !customAmount
                        ? 'bg-brand-green border-brand-green text-white shadow-md scale-105'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-brand-green hover:text-brand-green'
                    }`}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>

              {/* Custom input amount */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Custom Amount (INR)</label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-slate-500 font-bold text-lg">₹</span>
                  <input
                    type="number"
                    placeholder="Enter other amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setSelectedAmount('')
                    }}
                    className="w-full pl-8 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-brand-green focus:bg-white transition-all text-charcoal font-bold"
                  />
                </div>
              </div>
            </div>

            {/* Direct Bank Account Details Card */}
            <div 
              ref={bankCardRef}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-extrabold text-2xl text-charcoal flex items-center gap-2.5">
                  <Landmark className="text-brand-green" size={24} /> Direct Bank Transfer
                </h3>
                <button
                  onClick={() => copyToClipboard(JSON.stringify(bankDetails, null, 2))}
                  className="text-xs font-bold text-brand-green hover:text-brand-green-dark flex items-center gap-1 bg-brand-green/5 py-1.5 px-3 rounded-lg border border-brand-green/10"
                >
                  {copiedBank ? <Check size={14} className="text-brand-gold" /> : <Copy size={14} />}
                  {copiedBank ? 'Copied!' : 'Copy Info'}
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Account Holder Name</span>
                    <span className="font-extrabold text-sm text-charcoal">{bankDetails.name}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Account Number</span>
                    <span className="font-extrabold text-sm text-charcoal tracking-wide">{bankDetails.account}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">IFSC Code</span>
                    <span className="font-extrabold text-sm text-charcoal tracking-wider">{bankDetails.ifsc}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Bank Name & Branch</span>
                    <span className="font-extrabold text-sm text-charcoal">{bankDetails.bank}, {bankDetails.branch}</span>
                  </div>
                </div>
              </div>

              <div className="bg-brand-gold/10 border border-brand-gold/20 p-4 rounded-xl text-xs text-brand-gold-dark leading-relaxed">
                <strong>Tax Benefits:</strong> Donations to Ramvati Kasana Charitable Trust are eligible for tax deductions under Section 80G of the Income Tax Act.
              </div>
            </div>

          </div>

          {/* QR Code and Register Transfer form (Right) */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Mock QR container */}
            <div 
              ref={upiCardRef}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center space-y-6"
            >
              <h3 className="font-extrabold text-xl text-charcoal flex items-center justify-center gap-2">
                <QrCode className="text-brand-green" size={22} /> Scan QR to Pay
              </h3>
              
              {/* QR Image Placeholder */}
              <div className="bg-slate-50 border border-dashed border-slate-200 p-6 rounded-2xl inline-block shadow-inner">
                <div className="bg-white p-4 rounded-xl inline-block border border-slate-100 relative">
                  {/* Decorative QR vector */}
                  <div className="h-44 w-44 bg-slate-100 flex items-center justify-center text-slate-300 font-extrabold uppercase text-center border-4 border-double border-slate-200">
                    <span className="text-xs p-2">UPI QR Code <br /> Placeholder</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <p className="font-bold text-sm text-charcoal">UPI ID: rkctrust@upi</p>
                <p className="text-xs text-slate-400 leading-normal max-w-xs mx-auto">
                  Scan the QR code using BHIM, Google Pay, PhonePe, Paytm, or any other UPI applications.
                </p>
              </div>
            </div>

            {/* Donation Registration Form */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              {formSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="h-14 w-14 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto text-brand-green">
                    <ShieldCheck size={28} />
                  </div>
                  <h4 className="font-extrabold text-lg text-charcoal">Transfer Details Submitted!</h4>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[220px] mx-auto">
                    We will verify the reference id and send your tax exemption receipt to your email address shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-brand-green hover:underline focus:outline-none"
                  >
                    Register Another Transaction
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRegisterDonation} className="space-y-4">
                  <h4 className="font-extrabold text-lg text-charcoal mb-4">Register Your Donation</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-2">
                    Once you make a bank transfer or scan UPI QR, register transaction details below for tax receipts.
                  </p>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Donor Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-brand-green text-charcoal"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Email (for receipts)</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. donor@email.com"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-brand-green text-charcoal"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Transaction Ref / UTR ID</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter 12 digit UTR number"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-brand-green text-charcoal"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Amount Contributed (₹)</label>
                    <input
                      type="text"
                      readOnly
                      value={customAmount ? customAmount : selectedAmount}
                      className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-lg text-xs text-charcoal font-bold focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-charcoal text-white hover:bg-charcoal-light font-bold py-3 rounded-lg text-xs tracking-wider uppercase transition-all duration-300"
                  >
                    Submit Donation Details
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
