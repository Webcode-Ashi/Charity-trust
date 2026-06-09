import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ArrowRight, ArrowUpRight, Gift, Users, Award, Heart, Clock, HeartHandshake, Globe, GraduationCap, HeartPulse, Utensils, Flower2, Shirt, Star, ChevronDown, ChevronUp, Play } from 'lucide-react'

// Import local images from assets
import dadiPassportImg from '../assets/images/dadi_passport.png'
import working1 from '../assets/images/working1.png'
import working2 from '../assets/images/working5.png'
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
import aboutHeroVideo from '../assets/video/about_hero.mp4'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import presentOwnerImg from '../assets/images/present_owner1.png'

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleServiceCards(1)
      else if (window.innerWidth < 1024) setVisibleServiceCards(2)
      else setVisibleServiceCards(3)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [activeFaq, setActiveFaq] = useState(1)

  const faqVideo1Ref = useRef(null)
  const faqVideo2Ref = useRef(null)
  const [isPlaying1, setIsPlaying1] = useState(false)
  const [isPlaying2, setIsPlaying2] = useState(false)

  const toggleVideo1 = () => {
    if (faqVideo1Ref.current) {
      if (isPlaying1) {
        faqVideo1Ref.current.pause()
        setIsPlaying1(false)
      } else {
        faqVideo1Ref.current.play()
        setIsPlaying1(true)
      }
    }
  }

  const toggleVideo2 = () => {
    if (faqVideo2Ref.current) {
      if (isPlaying2) {
        faqVideo2Ref.current.pause()
        setIsPlaying2(false)
      } else {
        faqVideo2Ref.current.play()
        setIsPlaying2(true)
      }
    }
  }

  const faqs = [
    {
      question: "What Is Charity, And Why Is It Important ?",
      answer: "Charity Not Only Helps To Reduce Suffering But Also Fosters A Sense Of Unity And Shared Responsibility In Society."
    },
    {
      question: "How Can I Get Involved In Charity Work ?",
      answer: "Charity Not Only Helps To Reduce Suffering But Also Fosters A Sense Of Unity And Shared Responsibility In Society."
    },
    {
      question: "Dedication for charitable Donations ?",
      answer: "Charity Not Only Helps To Reduce Suffering But Also Fosters A Sense Of Unity And Shared Responsibility In Society."
    },
    {
      question: "My Donations Are Going To A Charity ?",
      answer: "Charity Not Only Helps To Reduce Suffering But Also Fosters A Sense Of Unity And Shared Responsibility In Society."
    },
    {
      question: "Is my donation actually being put to use?",
      answer: "Charity Not Only Helps To Reduce Suffering But Also Fosters A Sense Of Unity And Shared Responsibility In Society."
    },
    {
      question: "Can I Volunteer For The Charity ?",
      answer: "Charity Not Only Helps To Reduce Suffering But Also Fosters A Sense Of Unity And Shared Responsibility In Society."
    },
    {
      question: "How Do I Organize A Fundraiser ?",
      answer: "Charity Not Only Helps To Reduce Suffering But Also Fosters A Sense Of Unity And Shared Responsibility In Society."
    }
  ]

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
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2 }
    )
      .fromTo(descRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        '-=0.8'
      )
      .fromTo(btnGroupRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(statsRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 },
        '-=0.4'
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

  const testimonials = [
    {
      quote: "The Ramvati Kasana Charitable Trust is doing incredible work for the community. Their dedication to providing education and healthcare to those in need is truly inspiring. I've seen firsthand the positive impact they've made on countless lives.",
      author: "Aarti Sharma",
      role: "Volunteer"
    },
    {
      quote: "Donating to RKCT has been one of the most fulfilling experiences. Their transparency and the way they ensure every penny reaches the underprivileged is commendable. Proud to be associated with such a noble cause.",
      author: "Rajesh Kumar",
      role: "Regular Donor"
    },
    {
      quote: "The holistic health and yoga camps organized by the trust have brought so much awareness and wellness to our neighborhood. It's beautiful to see a team so committed to uplifting society physically and mentally.",
      author: "Vikram Singh",
      role: "Beneficiary"
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [fadeTestimonial, setFadeTestimonial] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeTestimonial(false);
      setTimeout(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        setFadeTestimonial(true);
      }, 300);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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
          onCanPlay={(e) => { e.target.playbackRate = 0.5 }}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-20 flex flex-col items-start px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl flex flex-col items-start">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm bg-brand-gold/10 px-4 py-1.5 rounded-full border border-brand-gold/30 inline-block w-fit self-start">
              Welcome to RKCT
            </span>
            <h1
              ref={titleRef}
              className="text-[32px] sm:text-5xl md:text-6xl lg:text-[70px] font-extrabold tracking-tight mt-6 leading-[1.15] text-left"
            >
              Serving Humanity, <br />
              <span className="text-brand-gold mt-1 sm:mt-0 inline-block">Empowering Lives</span>
            </h1>
            <p
              ref={descRef}
              className="mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl text-left"
            >
              Ramvati Kasana Charitable Trust (RKCT) strives to create positive, sustainable changes through welfare initiatives, health camps, education support, and spiritual wellness.
            </p>
            <div ref={btnGroupRef} className="mt-8 sm:mt-12 flex flex-wrap justify-start gap-4">
              <Link
                to="/donate"
                className="bg-brand-gold hover:bg-brand-gold-dark text-charcoal font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base transition-colors flex items-center gap-2 shadow-lg hover:shadow-brand-gold/20"
              >
                Donate Now
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/50 hover:border-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-bold transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>


      </section>

      {/* Stats Section */}
      <section className="bg-brand-gold py-8 sm:py-12 text-charcoal shadow-inner relative z-10 -mt-8 mx-4 max-w-6xl lg:mx-auto rounded-2xl">
        <div ref={statsRef} className="max-w-7xl mx-auto px-3 sm:px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
              <div className="relative sm:absolute mt-6 sm:mt-0 sm:-bottom-6 sm:-right-6 mx-auto sm:mx-0 bg-brand-green text-white p-5 sm:p-6 rounded-2xl shadow-lg max-w-[260px] sm:max-w-[240px] border border-brand-green-light z-20 text-center sm:text-left">
                <p className="text-xs uppercase tracking-widest text-brand-gold font-bold">In Loving Memory</p>
                <p className="font-extrabold text-base sm:text-lg mt-1">Smt. Ramvati Kasana</p>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">Our guiding light and source of eternal inspiration.</p>
              </div>
            </div>

            {/* Right Column: Text */}
            <div className="space-y-6 lg:pl-6 mt-12 lg:mt-0">
              <span className="text-brand-green font-bold uppercase tracking-widest text-sm bg-brand-green/10 px-4 py-1.5 rounded-full border border-brand-green/20 inline-block mb-1">
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

      {/* Shri K.P. Singh Kasana Section (Moved from About) */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left Text Column (Shortened) */}
            <div className="space-y-4 order-2 lg:order-1">
              <span className="text-brand-green font-bold uppercase tracking-widest text-sm bg-brand-green/10 px-4 py-1.5 rounded-full border border-brand-green/20 inline-block mb-1">
                Our Visionary Leader
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal leading-tight">
                Shri K.P. Singh Kasana
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Shri K.P. Singh Kasana is a respected social reformer, visionary leader, and successful entrepreneur dedicated to the service of society and nation-building. Guided by the principles of integrity, compassion, and inclusive development, he has consistently worked to improve education, healthcare, environmental sustainability, and community welfare.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Through his leadership, he has inspired countless individuals and contributed to initiatives that create opportunities and empower communities. His efforts reflect a deep belief in collective progress and the well-being of every individual.
              </p>
            </div>

            {/* Right Video Column (Enlarged Height) */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative group w-full max-w-sm lg:max-w-md">
                <div className="absolute inset-0 bg-brand-green rounded-2xl rotate-3 scale-95 transition-all duration-300 group-hover:rotate-0"></div>
                <div className="relative overflow-hidden rounded-2xl bg-charcoal shadow-xl border-4 border-white aspect-[4/3] flex items-center justify-center">
                  <img
                    src={presentOwnerImg}
                    alt="Shri K.P. Singh Kasana"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Premium Health Section */}
      <section className="py-10 lg:py-10 bg-[#245331] text-white relative overflow-hidden">
        {/* Subtle Background Pattern / Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-green-light/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="text-brand-gold font-bold uppercase tracking-widest text-sm bg-brand-gold/10 px-4 py-1.5 rounded-full border border-brand-gold/30 inline-block mb-1">
                Expert Medical Care
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Healing Hands of <br /> <span className="text-brand-gold">Dr. K.P. Sharma</span>
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                Beyond being a visionary leader, Dr. K.P. Sharma is a dedicated medical professional. He personally conducts free health checkups and examines patients at our charitable medical camps, bringing expert care directly to those who need it most.
              </p>

              {/* Feature Points */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="p-3 bg-brand-gold/20 rounded-xl text-brand-gold">
                    <HeartPulse size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">Personal Patient Care</h4>
                    <p className="text-sm text-slate-400">Direct consultations and accurate diagnoses.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="p-3 bg-brand-gold/20 rounded-xl text-brand-gold">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">Expert Medical Advice</h4>
                    <p className="text-sm text-slate-400">Years of medical experience dedicated to charity.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual / Image */}
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-[3rem] overflow-hidden border-4 border-brand-gold/20 shadow-2xl group">
              <img
                src={working6}
                alt="Dr. K.P. Sharma checking patient"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#245331]/90 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 sm:p-6 rounded-3xl inline-block shadow-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={16} className="fill-brand-gold text-brand-gold" />
                      ))}
                    </div>
                    <span className="text-brand-gold font-bold text-sm tracking-wide">Trusted Care</span>
                  </div>
                  <p className="text-white font-medium text-sm sm:text-base leading-snug">"Providing free, high-quality medical treatment to the underprivileged."</p>
                </div>
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
                <span className="text-brand-green my-10 font-bold uppercase tracking-widest text-sm bg-brand-green/10 px-4 py-1.5 rounded-full border border-brand-green/20 inline-block mb-1">
                  Our Working Model
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal leading-tight">
                  Our goal is to save more lives with your help.
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:hidden max-w-2xl mx-auto w-full">
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[3/4]">
                  <img
                    src={working1}
                    alt="Welfare outreach"
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[3/4]">
                  <img
                    src={working2}
                    alt="Smiling child"
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[3/4]">
                  <img
                    src={working3}
                    alt="Blanket distribution"
                    className="w-full h-full object-cover transition-all duration-300"
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
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>

                {/* Middle-Right Image with Overlapping Splash Shape */}
                <div className="absolute top-[80px] right-0 w-[54%] aspect-[3/4] rounded-[2.8rem] overflow-hidden shadow-xl border-4 border-white z-10">
                  <img
                    src={working2}
                    alt="Smiling child"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>



                {/* Bottom-Left Image with Clipped Bottom-Left Corner */}
                <div
                  className="absolute bottom-[20px] left-[5%] w-[54%] aspect-square overflow-hidden shadow-lg border-4 border-white rounded-[2.2rem] z-20"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50px 100%, 0 calc(100% - 50px))' }}
                >
                  <img
                    src={working3}
                    alt="Blanket distribution"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Charity Services Section */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100 overflow-hidden relative">


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
                transform: `translateX(calc(-${activeServiceIndex * (100 / visibleServiceCards)}% - ${(activeServiceIndex * 24) / visibleServiceCards}px))`
              }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 relative pt-20 px-8 pb-12 rounded-[2rem] shadow-lg border border-slate-100/50 mt-14 transition-all duration-700 select-none flex flex-col items-center text-center justify-between group"
                    style={{
                      width: `calc(${100 / visibleServiceCards}% - ${(visibleServiceCards - 1) * 24 / visibleServiceCards}px)`,
                    }}
                  >
                    {/* Background clipping wrapper (restricting overlay to rounded corners, allowing icon to overflow on top) */}
                    <div className="absolute inset-0 bg-brand-gold sm:bg-white border border-slate-200/80 shadow-md rounded-[2rem] overflow-hidden -z-20">
                      {/* Sliding Gold Background Overlay on Hover (slides from top) */}
                      <div className="absolute inset-0 bg-brand-gold origin-top transform scale-y-0 transition-transform duration-[800ms] ease-out group-hover:scale-y-100 sm:block hidden" />
                    </div>

                    {/* Circle Icon overlapping the top */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full border-4 border-brand-gold sm:border-slate-50 text-brand-green flex items-center justify-center shadow-md transition-all duration-500 group-hover:border-brand-gold z-10">
                      <Icon size={40} />
                    </div>

                    <div className="flex-grow flex flex-col justify-center mt-4 relative z-10">
                      <h3 className="font-extrabold text-2xl mb-4 text-charcoal transition-colors duration-700">
                        {service.title}
                      </h3>
                      <p className="text-base leading-relaxed mb-8 px-2 text-slate-700 sm:text-slate-500 transition-colors duration-700 group-hover:text-charcoal/90">
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
          <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
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
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
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
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
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

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 sm:mb-16 space-y-4 max-w-2xl">
            <span className="text-brand-green font-bold uppercase tracking-widest text-xs bg-brand-green/10 px-4 py-1.5 rounded-full border border-brand-green/20 inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-green leading-tight">
              What people say about charity.
            </h2>
          </div>

          {/* Testimonial Card Container */}
          <div className="bg-[#FAF8F3] rounded-[2rem] sm:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row relative z-10 shadow-lg">
            {/* Left side Image */}
            <div className="w-full lg:w-[45%] h-[350px] sm:h-[400px] lg:h-auto relative">
              <img
                src={working6}
                alt="Testimonial"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side Content */}
            <div className="w-full lg:w-[55%] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              {/* Stars */}
              <div className="flex gap-1.5 text-brand-gold mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className={`transition-opacity duration-300 ${fadeTestimonial ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-10">
                  "{testimonials[activeTestimonial].quote}"
                </p>

                {/* Author */}
                <div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-brand-green font-serif">{testimonials[activeTestimonial].author}</h4>
                  <span className="text-slate-400 text-sm mt-1 block">{testimonials[activeTestimonial].role}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-slate-200/80 my-8 sm:my-10"></div>

              {/* Stats / Partners */}
              <div>
                <p className="text-slate-500 text-sm sm:text-base font-bold">
                  Total Raising Money In This Year <span className="text-charcoal ml-1">&gt; ₹4,50,000</span>
                </p>
                {/* Fake logos row using lucide icons as placeholders for now */}
                <div className="flex items-center gap-6 sm:gap-10 mt-6 opacity-30 pointer-events-none">
                  <Globe size={40} className="stroke-[1.5px]" />
                  <Shirt size={40} className="stroke-[1.5px]" />
                  <HeartPulse size={40} className="stroke-[1.5px]" />
                  <HeartHandshake size={40} className="stroke-[1.5px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">

            {/* Left side: Header & Accordion */}
            <div className="w-full lg:w-1/2 flex flex-col">
              {/* Header */}
              <div className="mb-8 space-y-5">
                <span className="text-brand-green font-bold uppercase tracking-widest text-xs bg-white px-4 py-1.5 rounded-full border border-brand-green/30 inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                  OUR FAQ
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F4239] leading-tight font-serif">
                  Explore our faqs for quick and helpful guidance
                </h2>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  Charity Not Only Helps To Reduce Suffering But Also Fosters A Sense Of Unity And Shared Responsibility In Society. It Reminds Us Of The Can Make It Your Significant Difference In Someone's Life.
                </p>
              </div>

              {/* Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, idx) => {
                  const isActive = activeFaq === idx;
                  return (
                    <div key={idx} className="flex flex-col overflow-hidden">
                      <button
                        onClick={() => setActiveFaq(isActive ? null : idx)}
                        className={`w-full flex items-center justify-between p-5 sm:p-6 text-left transition-all duration-300 font-extrabold text-base sm:text-lg ${isActive
                          ? 'bg-[#0F4239] text-brand-gold'
                          : 'bg-[#F8F5EB] text-charcoal hover:bg-[#f0eee6]'
                          }`}
                      >
                        <span>{faq.question}</span>
                        <span className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isActive ? 'text-brand-gold' : 'text-charcoal'}`}>
                          {isActive ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                        </span>
                      </button>

                      {/* Answer Area */}
                      <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${isActive ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                      >
                        <div className="p-5 sm:p-6 bg-white border-b text-slate-500 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right side: Videos */}
            <div className="w-full lg:w-1/2 flex flex-col">
              {/* Two Videos Stacked Layout */}
              <div className="flex flex-col gap-6 sm:gap-8 w-full flex-1 h-full">

                {/* Video 1 */}
                <div 
                  className="relative w-full flex-1 min-h-[250px] sm:min-h-[300px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-xl cursor-pointer group"
                  onClick={toggleVideo1}
                >
                  <video
                    ref={faqVideo1Ref}
                    src={aboutHeroVideo}
                    loop
                    playsInline
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  {/* Play Button Overlay */}
                  {!isPlaying1 && (
                    <div className="absolute inset-0 bg-charcoal/20 flex items-center justify-center transition-colors duration-500">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-gold/40 rounded-full flex items-center justify-center animate-pulse">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center text-brand-gold shadow-md group-hover:scale-110 transition-transform duration-300">
                          <Play size={24} className="fill-current ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Video 2 */}
                <div 
                  className="relative w-full flex-1 min-h-[250px] sm:min-h-[300px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-xl cursor-pointer group"
                  onClick={toggleVideo2}
                >
                  <video
                    ref={faqVideo2Ref}
                    src={heroVideo}
                    loop
                    playsInline
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  {/* Play Button Overlay */}
                  {!isPlaying2 && (
                    <div className="absolute inset-0 bg-charcoal/20 flex items-center justify-center transition-colors duration-500">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-gold/40 rounded-full flex items-center justify-center animate-pulse">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center text-brand-gold shadow-md group-hover:scale-110 transition-transform duration-300">
                          <Play size={24} className="fill-current ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dynamic CTA Banner */}
      <section className="bg-brand-green text-white relative py-12 sm:py-20 overflow-hidden px-4">
        {/* Subtle overlay to give it depth */}
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
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
