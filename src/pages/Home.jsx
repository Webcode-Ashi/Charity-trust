import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ArrowRight, ArrowUpRight, Gift, Users, Award, Heart, Clock, HeartHandshake, Globe, GraduationCap, HeartPulse, Utensils, Flower2, Shirt } from 'lucide-react'

// Import local images from assets
import dadiPassportImg from '../assets/images/dadi_passport.png'
import working1 from '../assets/images/working1.png'
import working2 from '../assets/images/working2.png'
import working3 from '../assets/images/working3.png'
import working4 from '../assets/images/working4.png'
import working5 from '../assets/images/working5.png'
import working6 from '../assets/images/working6.png'
import work1 from '../assets/images/work1.png'
import work2 from '../assets/images/work2.png'
import work3 from '../assets/images/work3.png'
import yogaImg from '../assets/images/yoga.png'
import templeImg from '../assets/images/temple.png'
import heroVideo from '../assets/video/Hero_section.mp4'
import shapeImg from '../assets/images/shape.png'

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

  const [activeServiceIndex, setActiveServiceIndex] = useState(0)
  const [visibleServiceCards, setVisibleServiceCards] = useState(3)

  const services = [
    {
      title: 'Education',
      description: 'Supporting poor children with bags, school stationery, textbooks, and fees support to help them study.',
      icon: GraduationCap,
      isHighlighted: false
    },
    {
      title: 'Medical Help',
      description: 'Organizing free health checkup camps, blood donor drives, and distributing free medicines to families.',
      icon: HeartPulse,
      isHighlighted: true
    },
    {
      title: 'Healthy Foods',
      description: 'Running daily hot meal centers and distributing nutritional food kits to poor neighborhoods.',
      icon: Utensils,
      isHighlighted: false
    },
    {
      title: 'Yoga & Wellness',
      description: 'Spreading healthy living habits through ancient yoga and meditation workshops for all age groups.',
      icon: Flower2,
      isHighlighted: true
    },
    {
      title: 'Winter Relief',
      description: 'Distributing warm blankets and woolen clothing to homeless individuals during harsh winter nights.',
      icon: Shirt,
      isHighlighted: false
    }
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleServiceCards(1)
      } else if (window.innerWidth < 1024) {
        setVisibleServiceCards(2)
      } else {
        setVisibleServiceCards(3)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
      const targets = {
        lives: 0,
        volunteers: 0,
        projects: 0,
        transparency: 0
      }

      gsap.to(targets, {
        lives: 25000,
        volunteers: 21500,
        projects: 22000,
        transparency: 35000,
        duration: 2.5,
        ease: 'power2.out',
        onUpdate: () => {
          setDisplayStats({
            lives: Math.floor(targets.lives),
            volunteers: Math.floor(targets.volunteers),
            projects: Math.floor(targets.projects),
            transparency: Math.floor(targets.transparency)
          })
        }
      })
    }

    // Start counter animation after initial animations
    const timer = setTimeout(animateCounters, 1000)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    { number: '25,000+', label: 'Lives Impacted', icon: Users },
    { number: '21,500+', label: 'Volunteer Hours', icon: Clock },
    { number: '22,000+', label: 'Blankets Distributed', icon: Gift },
    { number: '35,000+', label: 'Meals Served', icon: Heart }
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
    },
    {
      title: "Healthy Food & Nutrition",
      image: working1,
      desc: "Distributing nutritious meals and food kits to families in underprivileged neighborhoods to fight hunger.",
      raised: "₹1,50,000",
      goal: "₹2,00,000",
      percent: 75
    }
  ]

  const completedProjects = [
    {
      image: work1,
      title: "Rural Education Initiative",
      desc: "RKCT distributed textbooks, bags, and stationery to school children in remote rural communities.",
      category: "Education"
    },
    {
      image: work2,
      title: "Free Healthcare & Medicine Camp",
      desc: "Over 500 local residents received free health checkups, diagnostics, and essential medicines.",
      category: "Healthcare"
    },
    {
      image: work3,
      title: "Nutritional Meal Service",
      desc: "Distribution of healthy, fresh hot meals and nutrient-rich grains to daily wage workers and families.",
      category: "Nutrition"
    },
    {
      image: working4,
      title: "Winter Relief Outreach",
      desc: "RKCT volunteers distributed heavy woolen blankets and winter clothing to homeless individuals in Greater Noida.",
      category: "Social Relief"
    },
    {
      image: working5,
      title: "Community Welfare Project",
      desc: "Clean drinking water projects and basic infrastructure support for low-income village schools.",
      category: "Infrastructure"
    },
    {
      image: working6,
      title: "Holistic Health & Yoga Workshop",
      desc: "A series of yoga, breathing exercises, and meditation workshops focused on community health and wellness.",
      category: "Wellness"
    }
  ]

  return (
    <div className="flex-grow">

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-charcoal text-white overflow-hidden py-24 lg:py-36 px-4 min-h-[500px] lg:min-h-[650px] flex items-center"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={working1}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-20 text-center flex flex-col items-center">
          <div className="max-w-3xl flex flex-col items-center">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm bg-brand-gold/10 px-4 py-1.5 rounded-full border border-brand-gold/30 inline-block w-fit self-center">
              Welcome to RKCT
            </span>
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight mt-6 leading-tight text-center"
            >
              Serving Humanity, <br />
              <span className="text-brand-gold">Empowering Lives</span>
            </h1>
            <p
              ref={descRef}
              className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto text-center"
            >
              Ramvati Kasana Charitable Trust (RKCT) strives to create positive, sustainable changes through welfare initiatives, health camps, education support, and spiritual wellness.
            </p>
            <div ref={btnGroupRef} className="mt-6 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
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

        {/* Decorative Shape Image in Bottom-Left Corner */}
        <div className="absolute bottom-0 left-0 z-10 w-[240px] h-[90px] sm:w-[320px] sm:h-[120px] md:w-[400px] md:h-[150px] lg:w-[460px] lg:h-[175px] pointer-events-none overflow-hidden">
          <img
            src={shapeImg}
            alt="decorative shape"
            className="w-full absolute top-0 left-0 object-fill"
            style={{ height: '390.6%' }}
          />
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
              <Clock size={20} sm:size={24} className="text-charcoal" />
            </div>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold block text-charcoal">
              {displayStats.volunteers > 0 ? displayStats.volunteers.toLocaleString() : '0'}+
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-charcoal/80 mt-1 uppercase">
              Volunteer Hours
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
              Blankets Distributed
            </span>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="p-2 sm:p-3 bg-charcoal/10 rounded-full mb-2 sm:mb-3">
              <Heart size={20} sm:size={24} className="text-charcoal" />
            </div>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold block text-charcoal">
              {displayStats.transparency > 0 ? displayStats.transparency.toLocaleString() : '0'}+
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-charcoal/80 mt-1 uppercase">
              Meals Served
            </span>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Column: Image with details */}
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-brand-gold rounded-3xl rotate-3 scale-95 group-hover:rotate-1 group-hover:scale-100 transition-all duration-300"></div>
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl aspect-[4/3] border-4 border-white">
                <img
                  src={dadiPassportImg}
                  alt="Smt. Ramvati Kasana (Dadiji)"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-brand-green text-white p-4 sm:p-6 rounded-2xl shadow-lg max-w-[200px] sm:max-w-[240px] border border-brand-green-light z-20">
                <p className="text-xs uppercase tracking-widest text-brand-gold font-bold">In Loving Memory</p>
                <p className="font-extrabold text-base sm:text-lg mt-1">Smt. Ramvati Kasana</p>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">Our guiding light and source of eternal inspiration.</p>
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

      {/* Working Section */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text & Features */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-brand-green font-bold uppercase tracking-widest text-sm bg-brand-green/10 px-4 py-1.5 rounded-full border border-brand-green/20">
                  Our Working Model
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal leading-tight">
                  Our goal is to save more lives <br className="hidden sm:inline" />
                  with your help.
                </h2>
                <p className="text-slate-600 leading-relaxed text-base max-w-xl">
                  Ramvati Kasana Charitable Trust is committed to breaking the cycle of poverty and distress by acting as a direct channel of support. Through targeted campaigns, local field operations, and community involvement, we make sure every donation creates a tangible impact.
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-6">
                {/* Fundraising */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-green">
                    <HeartHandshake size={24} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-charcoal">Fundraising</h3>
                    <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-lg">
                      We mobilize financial resources from benevolent donors to fund critical relief work, student materials, and medical drives.
                    </p>
                  </div>
                </div>

                {/* Welfare & Outreach */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-charcoal">Donation Marketing</h3>
                    <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-lg">
                      Spreading awareness of our causes, tracking impact, and ensuring transparency in all our charity campaigns.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  to="/about"
                  className="bg-brand-green hover:bg-brand-green-dark text-white font-bold px-8 py-4 rounded-full text-base inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  More About Us
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Right Column: Dynamic Image Collage */}
            <div className="w-full lg:mt-0 mt-8">
              {/* Mobile/Tablet 3-Column Layout */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:hidden max-w-2xl mx-auto w-full">
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[3/4]">
                  <img 
                    src={working1} 
                    alt="Welfare outreach" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[3/4]">
                  <img 
                    src={working2} 
                    alt="Smiling child" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[3/4]">
                  <img 
                    src={working3} 
                    alt="Blanket distribution" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Desktop Large Overlapping Collage (No Gap on Left Side) */}
              <div className="hidden lg:block relative h-[550px] sm:h-[650px] w-full max-w-[620px] mx-auto">
                {/* Top-Left Image */}
                <div className="absolute top-[20px] left-0 w-[54%] aspect-square rounded-[2.2rem] overflow-hidden shadow-lg border-4 border-white z-0">
                  <img 
                    src={working1} 
                    alt="Welfare outreach" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Middle-Right Image with Overlapping Splash Shape */}
                <div className="absolute top-[80px] right-0 w-[54%] aspect-[3/4] rounded-[2.8rem] overflow-hidden shadow-xl border-4 border-white z-10">
                  <img 
                    src={working2} 
                    alt="Smiling child" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Decorative Splash Shape overlapping the right edge of Middle-Right Image */}
                <img
                  src={shapeImg}
                  alt="splash decoration"
                  className="absolute right-[-54px] top-[160px] w-[180px] h-auto rotate-90 z-20 pointer-events-none select-none"
                />

                {/* Bottom-Left Image with Clipped Bottom-Left Corner */}
                <div 
                  className="absolute bottom-[20px] left-[5%] w-[54%] aspect-square overflow-hidden shadow-lg border-4 border-white rounded-[2.2rem] z-20"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50px 100%, 0 calc(100% - 50px))' }}
                >
                  <img 
                    src={working3} 
                    alt="Blanket distribution" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Charity Services Section */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-100 overflow-hidden relative">
        {/* Subtle decorative splash on the left edge, matching the design style */}
        <div className="absolute left-[-60px] top-[15%] z-0 w-[200px] h-[80px] pointer-events-none overflow-hidden select-none opacity-30">
          <img
            src={shapeImg}
            alt="splash decoration"
            className="w-full absolute top-0 left-0 object-fill"
            style={{ height: '390.6%' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 sm:space-y-4 px-2 sm:px-0">
            <span className="text-brand-green font-bold uppercase tracking-widest text-xs sm:text-sm bg-brand-green/10 px-4 py-1.5 rounded-full border border-brand-green/20 inline-block">
              Charity Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-green leading-tight">
              Providing Humanist services to all <br className="hidden sm:inline" />
              people is what we do
            </h2>
          </div>

          {/* Carousel Slider Window */}
          <div className="relative overflow-hidden w-full pb-6">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${activeServiceIndex * (100 / visibleServiceCards)}%)`,
              }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 relative pt-20 px-8 pb-12 rounded-[2rem] shadow-lg border border-slate-100/50 mt-14 transition-all duration-300 select-none flex flex-col items-center text-center justify-between group"
                    style={{
                      width: `calc(${100 / visibleServiceCards}% - ${(visibleServiceCards - 1) * 24 / visibleServiceCards}px)`,
                    }}
                  >
                    {/* Background clipping wrapper (restricting overlay to rounded corners, allowing icon to overflow on top) */}
                    <div className="absolute inset-0 bg-white border border-slate-100/80 shadow-md rounded-[2rem] overflow-hidden -z-20">
                      {/* Sliding Gold Background Overlay on Hover (slides from top) */}
                      <div className="absolute inset-x-0 top-0 h-0 bg-brand-gold transition-all duration-300 ease-in-out group-hover:h-full" />
                    </div>

                    {/* Circle Icon overlapping the top */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full border-4 border-slate-50 text-brand-green flex items-center justify-center shadow-md transition-all duration-500 group-hover:border-brand-gold z-10">
                      <Icon size={40} />
                    </div>

                    <div className="flex-grow flex flex-col justify-center mt-4 relative z-10">
                      <h3 className="font-extrabold text-2xl mb-4 text-charcoal transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-base leading-relaxed mb-8 px-2 text-slate-500 transition-colors duration-300 group-hover:text-charcoal/90">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-auto relative z-10">
                      <Link
                        to="/about"
                        className="bg-brand-green hover:bg-brand-green-dark text-white font-bold px-8 py-3.5 rounded-full text-sm inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls (Arrows & Dots) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            {/* Prev Arrow */}
            <button
              onClick={() => {
                if (activeServiceIndex > 0) {
                  setActiveServiceIndex(prev => prev - 1)
                } else {
                  setActiveServiceIndex(services.length - visibleServiceCards)
                }
              }}
              className="p-3 rounded-full bg-white border border-slate-200 text-charcoal hover:bg-brand-green hover:text-white hover:border-brand-green transition-all shadow-sm cursor-pointer"
            >
              <ArrowRight size={18} className="rotate-180" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: services.length - visibleServiceCards + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveServiceIndex(idx)}
                  className={`transition-all duration-300 cursor-pointer ${activeServiceIndex === idx ? 'bg-brand-green w-6 h-2 rounded-full' : 'bg-slate-300 w-2 h-2 rounded-full'}`}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={() => {
                if (activeServiceIndex < services.length - visibleServiceCards) {
                  setActiveServiceIndex(prev => prev + 1)
                } else {
                  setActiveServiceIndex(0)
                }
              }}
              className="p-3 rounded-full bg-white border border-slate-200 text-charcoal hover:bg-brand-green hover:text-white hover:border-brand-green transition-all shadow-sm cursor-pointer"
            >
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* Causes Preview Section */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Split Header (mockup format) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-4 max-w-2xl">
              <span className="text-brand-green font-bold uppercase tracking-widest text-xs bg-brand-green/10 px-4 py-1.5 rounded-full border border-brand-green/20 inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
                LETS START DONATING
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-green leading-tight">
                See you impact transparent <br className="hidden sm:inline" />
                donation causes
              </h2>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/causes"
                className="bg-brand-green hover:bg-brand-green-dark text-white font-bold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                Learn More
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Causes Cards Grid - 2 columns for horizontal layout */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10">
            {causesPreview.map((cause, idx) => {
              const isGoldBar = idx % 2 !== 0;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[2rem] border border-slate-100/80 shadow-md p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-stretch hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Left Side: Image with Splash Shape */}
                  <div className="relative w-full sm:w-[45%] aspect-square rounded-3xl overflow-hidden flex-shrink-0 border border-slate-100">
                    <img
                      src={cause.image}
                      alt={cause.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Splash shape rotated 90 degrees clockwise aligned on the right edge */}
                    <img 
                      src={shapeImg} 
                      alt="splash decoration" 
                      className="absolute right-[-30px] sm:right-[-35px] top-1/2 -translate-y-1/2 w-[100px] sm:w-[115px] h-auto rotate-90 z-20 pointer-events-none select-none" 
                    />
                  </div>

                  {/* Right Side: Content details */}
                  <div className="flex-grow flex flex-col justify-between w-full space-y-4">
                    <div className="space-y-2.5">
                      <h3 className="font-extrabold text-xl sm:text-2xl text-charcoal group-hover:text-brand-green transition-colors duration-300 leading-snug line-clamp-2">
                        {cause.title}
                      </h3>
                      <p className="text-slate-500 text-sm sm:text-base leading-relaxed line-clamp-2">
                        {cause.desc}
                      </p>
                    </div>

                    {/* Progress Bar & percentage badge at the end of progress */}
                    <div className="relative pt-4 pb-1">
                      {/* Progress Track */}
                      <div className="w-full bg-slate-100 rounded-full h-2.5 relative">
                        <div
                          className={`h-2.5 rounded-full transition-all duration-500 ${isGoldBar ? 'bg-brand-gold' : 'bg-brand-green'}`}
                          style={{ width: `${cause.percent}%` }}
                        />
                        {/* Percentage Tooltip Badge (vertically centered overlaying the bar) */}
                        <div 
                          className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm ${isGoldBar ? 'bg-brand-gold' : 'bg-brand-green'}`}
                          style={{ left: `${cause.percent}%` }}
                        >
                          {cause.percent}%
                        </div>
                      </div>
                      
                      {/* Fixed goals & raised data at the bottom */}
                      <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-500 mt-4">
                        <span>Goal : {cause.goal}</span>
                        <span>Raised: {cause.raised}</span>
                      </div>
                    </div>

                    {/* Action Button: left-aligned below, no top border divider */}
                    <div className="pt-1 flex items-center">
                      <Link
                        to="/donate"
                        className={`font-bold px-7 py-3 rounded-full text-sm sm:text-base inline-flex items-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${isGoldBar ? 'bg-brand-gold hover:bg-brand-gold-dark text-charcoal' : 'bg-brand-green hover:bg-brand-green-dark text-white'}`}
                      >
                        Donate Now
                        <ArrowUpRight size={16} className="stroke-[3px]" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/causes"
              className="bg-brand-green hover:bg-brand-green-dark text-white font-bold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              See All Campaigns
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* Completed Projects Ticker Section */}
      <section className="py-20 bg-white border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <span className="text-brand-green font-bold uppercase tracking-widest text-xs bg-brand-green/10 px-4 py-1.5 rounded-full border border-brand-green/20 inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
            COMPLETE PROJECT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-green leading-tight mt-4">
            Our recent compiled project
          </h2>
        </div>

        {/* Infinite Carousel Ticker */}
        <div className="relative w-full overflow-hidden">
          {/* Subtle gradient overlays on left and right for fade out effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex w-max gap-6 animate-marquee py-4">
            {/* First render of completedProjects */}
            {completedProjects.map((project, idx) => (
              <div
                key={`project-1-${idx}`}
                className="w-[280px] sm:w-[340px] md:w-[400px] h-[380px] sm:h-[440px] md:h-[500px] rounded-[2rem] overflow-hidden relative group flex-shrink-0 shadow-md border border-slate-100/80 cursor-pointer"
              >
                {/* Grayscale to Color Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Details slide up overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/70 to-transparent p-6 flex flex-col justify-end text-white">
                  {/* Category Tag */}
                  <span className="text-brand-gold font-bold uppercase tracking-widest text-[10px] bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20 inline-block w-fit mb-2">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-extrabold text-lg sm:text-xl md:text-2xl text-white leading-snug group-hover:text-brand-gold transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Slide-out details section */}
                  <div className="max-h-0 group-hover:max-h-[200px] overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                    <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed font-medium mt-3">
                      {project.desc}
                    </p>
                    <div className="pt-3 flex items-center gap-1.5 text-brand-gold font-bold text-xs sm:text-sm">
                      <span>Explore Impact</span>
                      <ArrowUpRight size={14} className="stroke-[2.5px]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Second render of completedProjects for seamless loop */}
            {completedProjects.map((project, idx) => (
              <div
                key={`project-2-${idx}`}
                className="w-[280px] sm:w-[340px] md:w-[400px] h-[380px] sm:h-[440px] md:h-[500px] rounded-[2rem] overflow-hidden relative group flex-shrink-0 shadow-md border border-slate-100/80 cursor-pointer"
              >
                {/* Grayscale to Color Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Details slide up overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/70 to-transparent p-6 flex flex-col justify-end text-white">
                  {/* Category Tag */}
                  <span className="text-brand-gold font-bold uppercase tracking-widest text-[10px] bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20 inline-block w-fit mb-2">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-extrabold text-lg sm:text-xl md:text-2xl text-white leading-snug group-hover:text-brand-gold transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Slide-out details section */}
                  <div className="max-h-0 group-hover:max-h-[200px] overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                    <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed font-medium mt-3">
                      {project.desc}
                    </p>
                    <div className="pt-3 flex items-center gap-1.5 text-brand-gold font-bold text-xs sm:text-sm">
                      <span>Explore Impact</span>
                      <ArrowUpRight size={14} className="stroke-[2.5px]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
