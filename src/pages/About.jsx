import { useEffect, useRef,useState } from 'react'
import gsap from 'gsap'
import { Target, Heart, Eye, Award } from 'lucide-react'

// Import local images from assets
import dadiPassportImg from '../assets/images/dadi_passport.png'
import ownerImg from '../assets/images/owner.png'
import owner1Img from '../assets/images/owner1.png'
import owner2Img from '../assets/images/owner2.png'
import cert1 from '../assets/images/certificate1.png'
import cert2 from '../assets/images/certificate2.png'
import cert3 from '../assets/images/certificate3.png'
import awardShow from '../assets/images/awardshow.png'
import working1 from  '../assets/images/working1.png'
import working2 from  '../assets/images/working2.png'
import working3 from  '../assets/images/working3.png'
import working4 from  '../assets/images/working4.png'
import working5 from  '../assets/images/working5.png'
import working6 from  '../assets/images/working6.png'
import aboutHeroVideo from '../assets/video/about_hero.mp4'

export default function About() {
  const headerRef = useRef(null)
  const certificateGridRef = useRef(null)

  useEffect(() => {
    // GSAP page entrance animation
    gsap.fromTo(headerRef.current, 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
  }, [])


  const certificates = [
    { title: 'Trust Registration Certificate', image: cert1 },
    { title: '80G Tax Exemption Certificate', image: cert2 },
    { title: '12A Registration Certificate', image: cert3 },
    { title: 'Outstanding NGO Award Ceremony', image: awardShow }
  ]
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  // Responsive visible cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // IMAGE CONFIGURATION - Replace these URLs with your actual images
  const cardsData = [
  {
    image: working1,
    label: 'Medical Lab',
  },
  {
    image: working2,
    label: 'Education',
  },
  {
    image: working3,
    label: 'Homeless',
  },
  {
    image: working4,
    label: 'Food & Nutrition',
  },
  {
    image: working5,
    label: 'Community',
  },
  {
    image: working6,
    label: 'Healthcare',
  },
];
  const totalSlides = Math.ceil(cardsData.length / visibleCards);

  const updateCarousel = (slideIndex) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cards = carousel.querySelectorAll('[data-card]');
    const cardWidth = cards[0]?.offsetWidth || 0;
    const gap = 24;
    const offset = -(slideIndex * (cardWidth + gap));

    gsap.to(carousel, {
      x: offset,
      duration: 0.6,
      ease: 'power2.inOut',
    });

    setCurrentSlide(slideIndex);
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % totalSlides;
    updateCarousel(next);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel(prev);
  };

  const goToSlide = (index) => {
    updateCarousel(index);
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (totalSlides > 1) {
        const next = (currentSlide + 1) % totalSlides;
        updateCarousel(next);
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [currentSlide, totalSlides]);

  useEffect(() => {
    // Animate cards on mount
    const cards = carouselRef.current?.querySelectorAll('[data-card]');
    if (cards) {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    }
  }, []);


  return (
    <div className="flex-grow bg-slate-50">
      
      {/* Header Banner with Video */}
      <section 
        ref={headerRef}
        className="relative bg-charcoal text-white py-28 sm:py-36 text-center overflow-hidden flex flex-col justify-center min-h-[60vh] lg:min-h-[85vh]"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onEnded={(e) => e.target.play()}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={aboutHeroVideo} type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-20 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
            About Our Trust
          </h1>
          <p className="text-brand-gold font-bold tracking-widest uppercase text-sm sm:text-base mt-4 sm:mt-6 drop-shadow-md">
            Ramvati Kasana Charitable Trust (RKCT)
          </p>
          <div className="w-24 h-1.5 bg-brand-gold mx-auto mt-8 sm:mt-10 rounded-full shadow-lg"></div>
        </div>
      </section>

      {/* Origin & Inspiration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image Column */}
            <div className="flex justify-center">
              <div className="relative group max-w-md w-full">
                <div className="absolute inset-0 bg-brand-gold rounded-3xl -rotate-3 scale-95 transition-all duration-300 group-hover:rotate-0"></div>
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl border-4 border-white aspect-[3/4]">
                  <img 
                    src={dadiPassportImg} 
                    alt="Smt. Ramvati Kasana (Dadiji)" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="space-y-6">
              <span className="text-brand-green font-bold uppercase tracking-widest text-sm bg-brand-green/10 px-4 py-1.5 rounded-full border border-brand-green/20">
                Guiding Inspiration
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal leading-tight">
                Honoring the Legacy of Smt. Ramvati Kasana
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Ramvati Kasana Charitable Trust was established to immortalize and carry forward the values of unconditional love, compassion, and community service champion by Smt. Ramvati Kasana. She firmly believed that real social growth is only possible when we lift the weakest sections of society.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Her vision continues to fuel our operations. Today, RKCT has expanded from a local food relief shelter to a multi-faceted non-governmental organization conducting educational support, medical aid camps, temple rehabilitation services, and wellness yoga camps.
              </p>
            </div>

          </div>
        </div>
      </section>



      {/* Our Philosophy - Replacing Mission & Vision */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm bg-brand-gold/10 px-4 py-1.5 rounded-full border border-brand-gold/30">
              Our Core Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Driven by <span className="text-brand-gold">Purpose</span> & Compassion
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 sm:p-10 rounded-[2rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:border-brand-gold/50">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-gold to-yellow-600 flex items-center justify-center text-charcoal mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Target size={32} className="opacity-90" />
              </div>
              <h3 className="font-extrabold text-2xl mb-4 text-white">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed text-base">
                To create a healthy, educated, and self-reliant society by facilitating resources, conducting free medical drives, spreading ancient yoga wisdom, and supporting under-resourced families.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 sm:p-10 rounded-[2rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:border-brand-green/50">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-green to-teal-700 flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Eye size={32} className="opacity-90" />
              </div>
              <h3 className="font-extrabold text-2xl mb-4 text-white">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed text-base">
                A world where basic health facilities, children's education, and community support systems are accessible to all without distinction of social or financial standing.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 sm:p-10 rounded-[2rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:border-red-500/50">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Heart size={32} className="opacity-90" />
              </div>
              <h3 className="font-extrabold text-2xl mb-4 text-white">Core Values</h3>
              <p className="text-slate-300 leading-relaxed text-base">
                Operate with absolute integrity, dedication, human dignity, and transparent usage of every contribution towards social development projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership - Founder & Managing Director */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-brand-green font-bold uppercase tracking-widest text-sm bg-brand-green/10 px-4 py-1.5 rounded-full border border-brand-green/20">
              Our Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal">
              The Visionary Behind RKCT
            </h2>
            <p className="text-slate-600">
              Meet the founder and driving force of the trust's mission.
            </p>
          </div>

          {/* Leader Profile Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Text Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-charcoal mb-2">
                  Er. K.P. Singh Kasana
                </h3>
                <p className="text-brand-gold font-bold text-lg">Managing Director & Founder</p>
              </div>
              
              <p className="text-slate-600 leading-relaxed">
                Er. K.P. Singh Kasana is a distinguished entrepreneur, philanthropist, and social leader whose life is dedicated to the service of society. With a strong vision for community development, he has made remarkable contributions in the fields of education, healthcare, and social welfare. His unwavering commitment to empowering underprivileged communities has positively impacted countless lives over the years.
              </p>
              
              <p className="text-slate-600 leading-relaxed">
                Through various charitable initiatives and welfare programs, he has supported educational institutions, student welfare projects, free healthcare services, and financial assistance programs for families in need. His efforts have consistently focused on creating opportunities, improving living standards, and promoting social harmony.
              </p>
              
              <p className="text-slate-600 leading-relaxed">
                As the Managing Director of Kasana Buildcon Pvt. Ltd. and an active contributor to several social and educational organizations, Er. K.P. Singh Kasana continues to lead with integrity, compassion, and a deep sense of responsibility. His dedication to public service and community upliftment has earned him widespread respect and recognition, making him an inspiring figure for future generations.
              </p>
            </div>

            {/* Right - Image Collage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4">
              {/* Large image top-left */}
              <div className="lg:row-span-2">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg border-4 border-white h-full aspect-[3/4] sm:aspect-auto">
                  <img 
                    src={ownerImg} 
                    alt="Er. K.P. Singh Kasana - Portrait" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              {/* Top right image */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg border-4 border-white aspect-square">
                <img 
                  src={owner1Img} 
                  alt="Community Service" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Bottom right image */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg border-4 border-white aspect-square">
                <img 
                  src={owner2Img} 
                  alt="Social Initiatives" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* Charity Carousel Section */ }
       <div className="bg-gradient-to-b from-amber-50 to-white py-12 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900 leading-tight">
            Exploring possibilities
            <br />
            alleniting passions
          </h1>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-teal-700 hover:bg-teal-800 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
            aria-label="Previous slide"
          >
            <span className="text-xl">←</span>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-teal-700 hover:bg-teal-800 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
            aria-label="Next slide"
          >
            <span className="text-xl">→</span>
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex gap-6 px-12"
              style={{
                perspective: '1200px',
              }}
            >
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  data-card
                  className="flex-shrink-0 h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                  style={{
                    width: `calc(${100 / visibleCards}% - ${((visibleCards - 1) * 24) / visibleCards}px)`,
                    transform:
                      index % 2 === 0
                        ? 'perspective(1200px) rotateY(-8deg) rotateX(2deg)'
                        : 'perspective(1200px) rotateY(8deg) rotateX(2deg)',
                    transformStyle: 'preserve-3d',
                  }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      y: -8,
                      duration: 0.3,
                      ease: 'power2.out',
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      y: 0,
                      duration: 0.3,
                      ease: 'power2.out',
                    });
                  }}
                >
                  {/* Image */}
                  <img
                    src={card.image}
                    alt={card.label}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* Label Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-start">
                    <h3 className="text-white text-xl font-semibold p-6 w-full">
                      {card.label}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlide
                  ? 'bg-teal-700 w-8'
                  : 'bg-teal-300 w-2 hover:bg-teal-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide}
            />
          ))}
        </div>
      </div>
    </div>

      {/* Trust Credentials & Certificates */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-brand-green font-bold uppercase tracking-widest text-sm bg-brand-green/10 px-4 py-1.5 rounded-full border border-brand-green/20">
              Trust Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal">
              Official Registrations & Awards
            </h2>
            <p className="text-slate-600">
              We operate under standard statutory guidelines. View our official registrations, 12A, 80G tax exemptions, and recognition certificates.
            </p>
          </div>

          {/* Certificates Grid */}
          <div 
            ref={certificateGridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 group text-center flex flex-col"
              >
                {/* Image Container with Zoom effect */}
                <div className="relative overflow-hidden rounded-xl bg-slate-100 border border-slate-100 aspect-[3/4] mb-4">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover icon Overlay */}
                  <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-3 bg-white text-charcoal rounded-full shadow-lg">
                      <Award size={20} className="text-brand-gold animate-bounce" />
                    </span>
                  </div>
                </div>
                <h3 className="font-extrabold text-sm text-charcoal mt-auto">
                  {cert.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}
