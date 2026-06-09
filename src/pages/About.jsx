import { useEffect, useRef } from 'react'
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

  return (
    <div className="flex-grow bg-slate-50">
      
      {/* Header Banner */}
      <section 
        ref={headerRef}
        className="bg-charcoal text-white py-20 text-center relative"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9))'
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">About Our Trust</h1>
          <p className="text-brand-gold font-semibold tracking-wider uppercase text-sm mt-3">
            Ramvati Kasana Charitable Trust (RKCT)
          </p>
          <div className="w-20 h-1 bg-brand-gold mx-auto mt-6 rounded-full"></div>
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

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col space-y-4 hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                <Target size={24} />
              </div>
              <h3 className="font-extrabold text-xl text-charcoal">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                To create a healthy, educated, and self-reliant society by facilitating resources, conducting free medical drives, spreading ancient yoga wisdom, and supporting under-resourced families.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col space-y-4 hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                <Eye size={24} />
              </div>
              <h3 className="font-extrabold text-xl text-charcoal">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                A world where basic health facilities, children's education, and community support systems are accessible to all without distinction of social or financial standing.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col space-y-4 hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                <Heart size={24} />
              </div>
              <h3 className="font-extrabold text-xl text-charcoal">Core Values</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">
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
            <div className="grid grid-cols-2 gap-4">
              {/* Large image top-left */}
              <div className="col-span-2 sm:col-span-1 lg:row-span-2">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg border-4 border-white h-full aspect-[3/4]">
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
