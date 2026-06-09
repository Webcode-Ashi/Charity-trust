import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Heart, ShieldCheck, Milestone } from 'lucide-react'

// Import local images from assets
import working2 from '../assets/images/working3.png'
import working4 from '../assets/images/working4.png'
import working5 from '../assets/images/working5.png'
import templeImg from '../assets/images/temple.png'
import img9 from '../assets/images/img9.png'
import causeImg from '../assets/images/casue_section.png'

export default function Causes() {
  const containerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(containerRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
    )
  }, [])

  const campaigns = [
    {
      title: "Children's Primary Education & Support",
      category: "Education",
      image: working2,
      desc: "Many children in our target rural areas lack adequate access to primary textbooks, schools supplies, and basic tutoring systems. Through this initiative, we procure and distribute educational kits, fund regional tutorial centers, and provide educational guidance to ensure they stay in school.",
      raised: "₹1,20,000",
      goal: "₹2,00,000",
      percent: 60,
      impact: "Supplied kits to over 300 students"
    },
    {
      title: "Free Healthcare Clinics & Yoga Workshops",
      category: "Health & Wellness",
      image: working4,
      desc: "Healthcare is a critical challenge. We organize periodical free healthcare clinics with certified doctors, provide basic medication, and conduct routine yoga classes to improve local community hygiene, preventive health awareness, and mental peace.",
      raised: "₹90,000",
      goal: "₹1,50,000",
      percent: 60,
      impact: "Organized 12 health camps in Greater Noida"
    },
    {
      title: "Temple Preservation & Spiritual Outreach",
      category: "Infrastructure & Culture",
      image: templeImg,
      desc: "Preserving cultural hubs and rebuilding damaged local temples represents a core value of the trust. This campaign supports restoration work, community gathering spaces, and organizing communal Bhandaras (meals) during festivals to foster brotherhood.",
      raised: "₹1,80,000",
      goal: "₹2,50,000",
      percent: 72,
      impact: "Restored 1 village community center"
    },
    {
      title: "Food, Clothes & Blanket Distribution Drives",
      category: "Humanitarian Relief",
      image: working5,
      desc: "During extreme winter months and seasons of distress, poor families suffer significantly. We conduct mass distribution drives for warm blankets, clothes, and grocery rations to the homeless, senior citizens, and daily wage laborers.",
      raised: "₹1,45,000",
      goal: "₹2,00,000",
      percent: 72,
      impact: "Distributed 800+ blankets in winter"
    },
    {
      title: "Women Skill Development & Guidance",
      category: "Empowerment",
      image: img9,
      desc: "Empowering women with stitching, sewing, and basic crafts skills to help them gain financial independence. We set up neighborhood centers equipped with sewing machines and tools for free practice.",
      raised: "₹65,000",
      goal: "₹1,20,000",
      percent: 54,
      impact: "25+ women trained and certified"
    }
  ]

  return (
    <div className="flex-grow bg-slate-50">
      
      {/* Hero Header */}
      <section 
        className="bg-charcoal text-white py-32 sm:py-48 text-left relative bg-no-repeat bg-cover bg-center flex flex-col justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${causeImg})`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm bg-brand-gold/10 px-4 py-1.5 rounded-full border border-brand-gold/30 inline-block w-fit self-start mb-4">
            Our Initiatives
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg text-left">
            Our Causes & Campaigns
          </h1>
          <p className="text-brand-gold font-bold tracking-widest uppercase text-sm sm:text-base mt-2 sm:mt-3 drop-shadow-md">
            Driving Change Through Focused Initiatives
          </p>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl text-left">
            Discover the various campaigns and initiatives we are actively running to support education, healthcare, and community welfare.
          </p>
          <div className="w-20 h-1 bg-brand-gold mt-8 sm:mt-10 rounded-full shadow-lg"></div>
        </div>
      </section>

      {/* Main Campaigns List */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div ref={containerRef} className="space-y-16">
            {campaigns.map((camp, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-0 hover:shadow-md transition-shadow duration-300"
              >
                
                {/* Campaign Image */}
                <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[300px] bg-slate-100">
                  <img 
                    src={camp.image} 
                    alt={camp.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-brand-gold text-charcoal font-bold text-xs uppercase tracking-wider py-1.5 px-4 rounded-full shadow-md">
                    {camp.category}
                  </span>
                </div>

                {/* Campaign content */}
                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    <h2 className="text-2xl font-extrabold text-charcoal leading-tight hover:text-brand-green transition-colors">
                      {camp.title}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mt-4">
                      {camp.desc}
                    </p>
                  </div>

                  {/* Impact Highlight */}
                  <div className="flex items-center gap-3 bg-brand-green/5 p-4 rounded-xl border border-brand-green/10">
                    <Milestone size={18} className="text-brand-green shrink-0" />
                    <span className="text-xs font-bold text-brand-green-dark">
                      Impact to Date: {camp.impact}
                    </span>
                  </div>

                  {/* Progress Tracker */}
                  <div className="space-y-3 pt-2">
                    <div className="flex justify-between items-center text-xs font-extrabold text-slate-500">
                      <span>Fund Progress: {camp.percent}%</span>
                      <span className="text-brand-green">{camp.percent}% Completed</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3">
                      <div 
                        className="bg-brand-gold h-3 rounded-full" 
                        style={{ width: `${camp.percent}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-charcoal pt-1">
                      <span>Raised: <span className="text-brand-green">{camp.raised}</span></span>
                      <span>Target: <span>{camp.goal}</span></span>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Trust & Transparency banner */}
      <section className="bg-brand-green text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center mx-auto border border-white/20">
            <ShieldCheck size={28} className="text-brand-gold" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold">100% Transparent Utilization</h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Every donation to Ramvati Kasana Charitable Trust is fully documented. Funds are strictly allocated to buying relief materials, education resources, medical aids, and camp infrastructure.
          </p>
        </div>
      </section>

    </div>
  )
}
