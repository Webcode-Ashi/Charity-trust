import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ArrowRight, Gift, Users, Award, ShieldAlert } from 'lucide-react'

// Import local images from assets
import ramvatiImg from '../assets/images/ramvati.jpeg'
import working1 from '../assets/images/working1.png'
import working2 from '../assets/images/working2.png'
import yogaImg from '../assets/images/yoga.png'
import templeImg from '../assets/images/temple.png'

export default function Home() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const btnGroupRef = useRef(null)
  const statsRef = useRef(null)
  const [displayStats, setDisplayStats] = useState({
    lives: 0,
    volunteers: 0,
    projects: 0,
    transparency: 0
  })

  useEffect(() => {
    // GSAP Intro animation for Hero section
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    tl.fromTo(titleRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(descRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8 }, 
      '-=0.6'
    )
    .fromTo(btnGroupRef.current, 
      { scale: 0.9, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.6 }, 
      '-=0.4'
    )
    .fromTo(statsRef.current.children, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.6 },
      '-=0.2'
    )

    // Animate counter numbers
    const animateCounters = () => {
      gsap.to(displayStats, {
        lives: 10000,
        volunteers: 500,
        projects: 20,
        transparency: 100,
        duration: 2.5,
        ease: 'power2.out',
        onUpdate: () => {
          setDisplayStats(prev => ({
            lives: Math.floor(prev.lives),
            volunteers: Math.floor(prev.volunteers),
            projects: Math.floor(prev.projects),
            transparency: Math.floor(prev.transparency)
          }))
        }
      })
    }

    // Start counter animation after initial animations
    const timer = setTimeout(animateCounters, 1000)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    { number: '10,000+', label: 'Lives Impacted', icon: Users },
    { number: '500+', label: 'Volunteers', icon: Award },
    { number: '20+', label: 'Active Projects', icon: Gift },
    { number: '100%', label: 'Transparency', icon: ShieldAlert }
  ]

  const causesPreview = [
    {
      title: "Children's Education & Growth",
      image: working2,
      desc: "Providing textbooks, mentorship, and tutoring to underprivileged children to empower their future.",
      raised: "₹1,20,000",
      goal: "₹2,00,000",
      percent: 60
    },
    {
      title: "Yoga & Healthcare Camps",
      image: yogaImg,
      desc: "Promoting physical and mental health through organized free yoga camps and basic health checkups.",
      raised: "₹90,000",
      goal: "₹1,50,000",
      percent: 60
    },
    {
      title: "Temple & Community Service",
      image: templeImg,
      desc: "Supporting rural infrastructure, temple reconstruction projects, and organizing community meals (Bhandara).",
      raised: "₹1,80,000",
      goal: "₹2,50,000",
      percent: 72
    }
  ]

  return (
    <div className="flex-grow">
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative bg-charcoal text-white overflow-hidden py-24 lg:py-36 px-4"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.4)), url(${working1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm bg-brand-gold/10 px-4 py-1.5 rounded-full border border-brand-gold/30">
              Welcome to RKCT
            </span>
            <h1 
              ref={titleRef}
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight mt-6 leading-tight"
            >
              Serving Humanity, <br />
              <span className="text-brand-gold">Empowering Lives</span>
            </h1>
            <p 
              ref={descRef}
              className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              Ramvati Kasana Charitable Trust (RKCT) strives to create positive, sustainable changes through welfare initiatives, health camps, education support, and spiritual wellness.
            </p>
            <div ref={btnGroupRef} className="mt-6 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
              <Link
                to="/donate"
                className="bg-brand-gold hover:bg-brand-gold-dark text-charcoal font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base transition-colors flex items-center gap-2"
              >
                Donate Now
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="bg-transparent hover:bg-white/10 text-white border border-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-gold py-8 sm:py-12 text-charcoal shadow-inner relative z-10 -mt-8 mx-4 max-w-6xl lg:mx-auto rounded-2xl">
        <div ref={statsRef} className="max-w-7xl mx-auto px-3 sm:px-4 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="p-2 sm:p-3 bg-charcoal/10 rounded-full mb-2 sm:mb-3">
              <Users size={20} sm:size={24} className="text-charcoal" />
            </div>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold block text-charcoal">
              {displayStats.lives > 0 ? displayStats.lives.toLocaleString() : '0'}+
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-charcoal/80 mt-1 uppercase">
              Lives Impacted
            </span>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="p-2 sm:p-3 bg-charcoal/10 rounded-full mb-2 sm:mb-3">
              <Award size={20} sm:size={24} className="text-charcoal" />
            </div>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold block text-charcoal">
              {displayStats.volunteers > 0 ? displayStats.volunteers.toLocaleString() : '0'}+
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-charcoal/80 mt-1 uppercase">
              Volunteers
            </span>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="p-2 sm:p-3 bg-charcoal/10 rounded-full mb-2 sm:mb-3">
              <Gift size={20} sm:size={24} className="text-charcoal" />
            </div>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold block text-charcoal">
              {displayStats.projects > 0 ? displayStats.projects.toLocaleString() : '0'}+
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-charcoal/80 mt-1 uppercase">
              Active Projects
            </span>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="p-2 sm:p-3 bg-charcoal/10 rounded-full mb-2 sm:mb-3">
              <ShieldAlert size={20} sm:size={24} className="text-charcoal" />
            </div>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold block text-charcoal">
              {displayStats.transparency > 0 ? displayStats.transparency : '0'}%
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-charcoal/80 mt-1 uppercase">
              Transparency
            </span>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Image with details */}
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-gold rounded-3xl rotate-3 scale-95 group-hover:rotate-1 group-hover:scale-100 transition-all duration-300"></div>
              <div className="relative overflow-hidden rounded-3xl bg-slate-100 shadow-xl aspect-[4/3] border-4 border-white">
                <img 
                  src={ramvatiImg} 
                  alt="Smt. Ramvati Kasana" 
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-green text-white p-6 rounded-2xl shadow-lg max-w-[240px] border border-brand-green-light">
                <p className="text-xs uppercase tracking-widest text-brand-gold font-bold">In Loving Memory</p>
                <p className="font-extrabold text-lg mt-1">Smt. Ramvati Kasana</p>
                <p className="text-sm text-slate-200 mt-1">Our guiding light and source of eternal inspiration.</p>
              </div>
            </div>

            {/* Right Column: Text */}
            <div className="space-y-6 lg:pl-6 mt-12 lg:mt-0">
              <span className="text-brand-green font-bold uppercase tracking-widest text-sm bg-brand-green/10 px-4 py-1.5 rounded-full border border-brand-green/20">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal leading-tight">
                Empowering Lives Through Selfless Service
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Established with a vision to fulfill the dreams of selfless social service, the Ramvati Kasana Charitable Trust (RKCT) actively works in Greater Noida and surrounding areas. We focus on ensuring that poor families get access to essential nutrition, quality children education materials, health workshops, and spiritual direction.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-full bg-brand-gold flex items-center justify-center text-charcoal font-bold text-sm">✓</span>
                  <span className="font-semibold text-slate-700">Dedicated Social Welfare Initiatives</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-full bg-brand-gold flex items-center justify-center text-charcoal font-bold text-sm">✓</span>
                  <span className="font-semibold text-slate-700">Holistic Health and Yoga Camps</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-full bg-brand-gold flex items-center justify-center text-charcoal font-bold text-sm">✓</span>
                  <span className="font-semibold text-slate-700">Transparent & Accountable Operations</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="bg-brand-green hover:bg-brand-green-dark text-white font-bold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  Discover Our Story
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Causes Preview Section */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4 px-2 sm:px-0">
            <span className="text-brand-green font-bold uppercase tracking-widest text-xs sm:text-sm bg-brand-green/10 px-4 py-1.5 rounded-full border border-brand-green/20 inline-block">
              Active Causes
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal">
              Help Us Solve Real Challenges
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Explore the core campaigns and relief packages designed to uplift and support families who need it the most.
            </p>
          </div>

          {/* Causes Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {causesPreview.map((cause, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col hover:-translate-y-1.5 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-56 bg-slate-100">
                  <img 
                    src={cause.image} 
                    alt={cause.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-brand-green text-white text-xs font-bold uppercase tracking-wider py-1 px-3.5 rounded-full">
                    Charity
                  </span>
                </div>
                {/* Info */}
                <div className="p-6 flex-grow flex flex-col space-y-4">
                  <h3 className="font-extrabold text-xl text-charcoal group-hover:text-brand-green transition-colors duration-300 line-clamp-1">
                    {cause.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow line-clamp-3">
                    {cause.desc}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="space-y-1.5 pt-2">
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div 
                        className="bg-brand-gold h-2 rounded-full" 
                        style={{ width: `${cause.percent}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs font-bold text-slate-500">
                      <span>Raised: {cause.raised}</span>
                      <span>Goal: {cause.goal}</span>
                    </div>
                  </div>
                  
                  {/* Action Link */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-brand-green font-bold text-xs bg-brand-green/5 py-1 px-2.5 rounded">
                      Active Campaign
                    </span>
                    <Link
                      to="/causes"
                      className="text-charcoal group-hover:text-brand-gold font-bold text-sm flex items-center gap-1 transition-colors"
                    >
                      Read Details
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center  mt-12">
            <Link
              to="/causes"
              className="border-2 bg-brand-gold border-charcoal hover:bg-charcoal hover:text-white text-charcoal font-bold px-8 py-3.5 rounded-full text-sm inline-flex items-center gap-2 transition-all"
            >
              See All Campaigns
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* Dynamic CTA Banner */}
      <section className="bg-charcoal text-white relative py-12 sm:py-20 overflow-hidden px-4">
        <div className="absolute inset-0 bg-brand-green/20 mix-blend-overlay"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-4 sm:space-y-6">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-xs sm:text-sm block">
            Join Our Hands
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
            Become a Catalyst of Positive Change Today
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base lg:text-lg">
            Whether through direct donation, sharing our causes, or signing up as an active volunteer, you can make a meaningful difference.
          </p>
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              to="/donate"
              className="bg-brand-gold hover:bg-brand-gold-dark text-charcoal font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base transition-colors">
              Donate Now
            </Link>
            <Link
              to="/contact"
              className="bg-transparent hover:bg-white/10 text-white border border-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold transition-all">
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
