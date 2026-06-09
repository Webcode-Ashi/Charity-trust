import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Eye, X, ZoomIn } from 'lucide-react'

// Import local images from assets
import awardShow from '../assets/images/awardshow.png'
import funcImg from '../assets/images/function.png'
import placeImg from '../assets/images/place.png'
import templeImg from '../assets/images/temple.png'
import yogaImg from '../assets/images/yoga.png'
import work1 from '../assets/images/work1.png'
import work2 from '../assets/images/work2.png'
import work3 from '../assets/images/work3.png'
import working1 from '../assets/images/working1.png'
import working3 from '../assets/images/working3.png'
import working4 from '../assets/images/working4.png'
import working6 from '../assets/images/working6.png'

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightboxImg, setLightboxImg] = useState(null)
  const gridRef = useRef(null)

  const galleryItems = [
    { title: 'Winter Blanket Distribution', category: 'Relief Drives', image: working1 },
    { title: 'Food Distribution Service', category: 'Relief Drives', image: working3 },
    { title: 'Medical Support Camp', category: 'Health & Yoga', image: working4 },
    { title: 'Village Health Clinic', category: 'Health & Yoga', image: working6 },
    { title: 'Community Yoga Session', category: 'Health & Yoga', image: yogaImg },
    { title: 'Rural Children Education Material', category: 'Education', image: work1 },
    { title: 'Educational Kit Distribution', category: 'Education', image: work2 },
    { title: 'Youth Guidance Session', category: 'Education', image: work3 },
    { title: 'Trust Office Premises', category: 'Events & Awards', image: placeImg },
    { title: 'Temple Reconstruction Work', category: 'Events & Awards', image: templeImg },
    { title: 'Trust Inaugural Ceremony', category: 'Events & Awards', image: funcImg },
    { title: 'Outstanding Contribution Award', category: 'Events & Awards', image: awardShow }
  ]

  const categories = ['All', 'Relief Drives', 'Health & Yoga', 'Education', 'Events & Awards']

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  useEffect(() => {
    // GSAP stagger grid items on filter change
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
    )
  }, [filter])

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
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Trust Gallery & Events</h1>
          <p className="text-brand-gold font-semibold tracking-wider uppercase text-sm mt-3">
            Capturing Moments of Happiness and Service
          </p>
          <div className="w-20 h-1 bg-brand-gold mx-auto mt-6 rounded-full"></div>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all duration-300 ${
                filter === cat
                  ? 'bg-brand-gold border-brand-gold text-charcoal shadow-md scale-105'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-brand-gold hover:text-brand-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => setLightboxImg(item)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 cursor-pointer group relative aspect-square"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-brand-gold font-bold text-xs uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-white font-extrabold text-base leading-tight flex items-center gap-2">
                  {item.title}
                  <ZoomIn size={16} className="text-brand-gold shrink-0" />
                </h3>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Lightbox / Modal View */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          {/* Close trigger button */}
          <button 
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 text-white hover:text-brand-gold bg-white/10 p-2.5 rounded-full transition-colors focus:outline-none"
          >
            <X size={24} />
          </button>
          
          <div className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center">
            {/* Main Lightbox Image */}
            <img 
              src={lightboxImg.image} 
              alt={lightboxImg.title} 
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-slate-800"
            />
            {/* Title description under image */}
            <div className="text-center mt-4 text-white">
              <span className="text-xs uppercase tracking-wider text-brand-gold font-bold">
                {lightboxImg.category}
              </span>
              <h3 className="text-lg font-bold mt-1">
                {lightboxImg.title}
              </h3>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
