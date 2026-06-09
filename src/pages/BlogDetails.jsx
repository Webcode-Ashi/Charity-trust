import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  MessageCircle, 
  Quote, 
  Search, 
  ChevronRight, 
  Tag, 
  Share2,
  ArrowRight
} from 'lucide-react';

// Import blog-type images
import working1 from '../assets/images/working1.png';
import working2 from '../assets/images/working2.png';
import working3 from '../assets/images/working3.png';
import working4 from '../assets/images/working4.png';
import working5 from '../assets/images/working5.png';
import yogaImg from '../assets/images/yoga.png';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';

export default function BlogDetails() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-grow bg-slate-50 font-sans">
      
      {/* Hero Banner / Page Header */}
      <section className="relative bg-charcoal text-white py-24 sm:py-32 text-center overflow-hidden flex flex-col justify-center min-h-[300px]">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-green/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-gold/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-20 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            News Details
          </h1>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mt-6 text-sm sm:text-base font-semibold tracking-wider text-slate-300">
            <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <ChevronRight size={16} />
            <Link to="#" className="hover:text-brand-gold transition-colors">News</Link>
            <ChevronRight size={16} />
            <span className="text-brand-gold">Details</span>
          </div>
        </div>
      </section>

      {/* Main Blog Details Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            
            {/* =========================================
                LEFT COLUMN: Main Blog Content 
            ========================================= */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Featured Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
                <img 
                  src={working1} 
                  alt="Main Blog Featured" 
                  className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Meta Info Bar */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-sm sm:text-base text-slate-500 font-medium pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2 hover:text-brand-green transition-colors cursor-pointer">
                  <User size={18} className="text-brand-gold" />
                  <span>By RKCT Admin</span>
                </div>
                <div className="flex items-center gap-2 hover:text-brand-green transition-colors cursor-pointer">
                  <Calendar size={18} className="text-brand-gold" />
                  <span>09 Jun, 2026</span>
                </div>
                <div className="flex items-center gap-2 hover:text-brand-green transition-colors cursor-pointer">
                  <MessageCircle size={18} className="text-brand-gold" />
                  <span>3 Comments</span>
                </div>
              </div>

              {/* Blog Title & Content */}
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal leading-tight">
                  How Community Support is Transforming Lives in Rural Areas
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Every small contribution makes a huge impact on the lives of those living in underdeveloped regions. Over the past few months, we have seen an incredible surge in community-led initiatives that focus on providing essential resources to those who need them most. From distributing hot, nutritious meals to supplying educational materials for children, the collaborative effort of volunteers is reshaping rural landscapes.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg">
                  It's not just about immediate relief; it's about building a sustainable future. By establishing local health checkup camps and promoting wellness through ancient practices like yoga, organizations are empowering individuals to take charge of their own well-being.
                </p>
              </div>

              {/* Blockquote */}
              <div className="relative bg-brand-gold/10 p-8 sm:p-10 rounded-2xl border-l-4 border-brand-gold my-10">
                <Quote size={48} className="text-brand-gold/30 absolute top-6 left-6" />
                <p className="relative z-10 text-xl sm:text-2xl font-bold text-charcoal italic leading-relaxed pl-8">
                  "The true measure of any society can be found in how it treats its most vulnerable members. Compassion is not just a feeling; it is an action."
                </p>
                <h4 className="relative z-10 pl-8 mt-4 font-extrabold text-brand-green uppercase tracking-wider text-sm">
                  - Foundation Core Belief
                </h4>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                  <img src={working2} alt="Education Support" className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                  <img src={working3} alt="Winter Relief" className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>

              {/* Additional Content */}
              <div className="space-y-6">
                <h3 className="text-2xl font-extrabold text-charcoal">Empowering the Next Generation</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Education remains the cornerstone of long-term development. Ensuring that every child has access to basic school supplies—like textbooks, stationery, and uniforms—is critical. In our recent outreach, volunteers successfully distributed hundreds of supply kits, bringing smiles to countless faces and hope to their families.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Furthermore, holistic development is being encouraged through community wellness workshops. By introducing yoga and meditation to younger generations, we are helping to cultivate mindfulness and physical health, ensuring they are well-equipped to face future challenges.
                </p>
              </div>

              {/* Tags and Social Share */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 border-t border-b border-slate-200 mt-10">
                {/* Tags */}
                <div className="flex items-center gap-3">
                  <span className="font-bold text-charcoal flex items-center gap-2">
                    <Tag size={18} /> Tags:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm px-3 py-1 bg-slate-100 hover:bg-brand-green hover:text-white transition-colors cursor-pointer rounded-md font-medium text-slate-600">Charity</span>
                    <span className="text-sm px-3 py-1 bg-slate-100 hover:bg-brand-green hover:text-white transition-colors cursor-pointer rounded-md font-medium text-slate-600">Education</span>
                  </div>
                </div>

                {/* Social Share */}
                <div className="flex items-center gap-3">
                  <span className="font-bold text-charcoal flex items-center gap-2">
                    <Share2 size={18} /> Share:
                  </span>
                  <div className="flex items-center gap-2">
                    <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1877F2] hover:text-white transition-colors">
                      <span className="font-bold text-sm leading-none">F</span>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1DA1F2] hover:text-white transition-colors">
                      <span className="font-bold text-sm leading-none">T</span>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0A66C2] hover:text-white transition-colors">
                      <span className="font-bold text-sm leading-none">in</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="pt-8">
                <h3 className="text-2xl font-extrabold text-charcoal mb-8">03 Comments</h3>
                
                <div className="space-y-8">
                  {/* Comment 1 */}
                  <div className="flex gap-4 sm:gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-16 h-16 rounded-full bg-brand-green/20 flex-shrink-0 flex items-center justify-center text-brand-green font-bold text-xl overflow-hidden">
                      <img src={img1} alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-lg text-charcoal">Arjun Kumar</h4>
                        <span className="text-sm text-slate-500">09 Jun, 2026</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed mb-3">
                        Truly inspiring to see such dedicated efforts towards community welfare. The focus on both education and physical wellness is exactly what our rural areas need right now.
                      </p>
                      <button className="text-brand-green font-bold text-sm hover:text-brand-gold transition-colors">REPLY</button>
                    </div>
                  </div>

                  {/* Comment 2 (Nested) */}
                  <div className="flex gap-4 sm:gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 ml-0 sm:ml-12 border-l-4 border-l-brand-gold">
                    <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex-shrink-0 flex items-center justify-center text-brand-gold font-bold text-xl overflow-hidden">
                      RK
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-lg text-charcoal">RKCT Admin</h4>
                        <span className="text-sm text-slate-500">10 Jun, 2026</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed mb-3">
                        Thank you, Arjun! We believe that consistent, holistic support is the key to sustainable development. Your words encourage our volunteers immensely.
                      </p>
                      <button className="text-brand-green font-bold text-sm hover:text-brand-gold transition-colors">REPLY</button>
                    </div>
                  </div>

                  {/* Comment 3 */}
                  <div className="flex gap-4 sm:gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-16 h-16 rounded-full bg-brand-green/20 flex-shrink-0 flex items-center justify-center text-brand-green font-bold text-xl overflow-hidden">
                      <img src={img2} alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-lg text-charcoal">Sneha Sharma</h4>
                        <span className="text-sm text-slate-500">11 Jun, 2026</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed mb-3">
                        I would love to participate in the upcoming yoga camps. Is there a way to register as a volunteer for these specific events?
                      </p>
                      <button className="text-brand-green font-bold text-sm hover:text-brand-gold transition-colors">REPLY</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leave a Reply Form */}
              <div className="pt-10">
                <div className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-lg border border-slate-100">
                  <h3 className="text-2xl font-extrabold text-charcoal mb-2">Leave A Reply</h3>
                  <p className="text-slate-500 mb-8">Your email address will not be published. Required fields are marked *</p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <input 
                          type="text" 
                          placeholder="Your Name *" 
                          className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                          required
                        />
                      </div>
                      <div>
                        <input 
                          type="email" 
                          placeholder="Your Email *" 
                          className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <input 
                        type="text" 
                        placeholder="Website" 
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                      />
                    </div>
                    <div>
                      <textarea 
                        rows="5" 
                        placeholder="Write your comment here..." 
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all resize-none"
                        required
                      ></textarea>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="save-info" className="w-5 h-5 accent-brand-green cursor-pointer" />
                      <label htmlFor="save-info" className="text-slate-500 cursor-pointer text-sm sm:text-base">
                        Save my name, email, and website in this browser for the next time I comment.
                      </label>
                    </div>
                    <button 
                      type="button" 
                      className="bg-brand-green hover:bg-brand-green-dark text-white font-bold px-8 py-4 rounded-full text-base transition-colors flex items-center gap-2 shadow-lg"
                    >
                      Post Comment
                      <ArrowRight size={18} />
                    </button>
                  </form>
                </div>
              </div>

            </div>

            {/* =========================================
                RIGHT COLUMN: Sidebar Widgets 
            ========================================= */}
            <div className="lg:col-span-1 space-y-10">
              
              {/* Search Widget */}
              <div className="bg-white p-8 rounded-[2rem] shadow-md border border-slate-100">
                <h3 className="text-xl font-extrabold text-charcoal mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-brand-gold after:rounded-full">
                  Search
                </h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search here..." 
                    className="w-full px-5 py-4 pr-14 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-brand-green transition-all"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-green hover:bg-brand-green-dark text-white rounded-lg flex items-center justify-center transition-colors">
                    <Search size={18} />
                  </button>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="bg-white p-8 rounded-[2rem] shadow-md border border-slate-100">
                <h3 className="text-xl font-extrabold text-charcoal mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-brand-gold after:rounded-full">
                  Categories
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: "Charity & Donation", count: 12 },
                    { name: "Medical Healthcare", count: 8 },
                    { name: "Children Education", count: 15 },
                    { name: "Healthy Food", count: 6 },
                    { name: "Yoga & Wellness", count: 9 }
                  ].map((cat, idx) => (
                    <li key={idx}>
                      <a href="#" className="flex items-center justify-between group p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                        <span className="text-slate-600 font-medium group-hover:text-brand-green transition-colors flex items-center gap-2">
                          <ChevronRight size={16} className="text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0" />
                          {cat.name}
                        </span>
                        <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-charcoal group-hover:bg-brand-gold group-hover:text-white transition-colors">
                          {cat.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts Widget */}
              <div className="bg-white p-8 rounded-[2rem] shadow-md border border-slate-100">
                <h3 className="text-xl font-extrabold text-charcoal mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-brand-gold after:rounded-full">
                  Recent Posts
                </h3>
                <div className="space-y-6">
                  {/* Post 1 */}
                  <div className="flex gap-4 group cursor-pointer">
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={working4} alt="Recent post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-xs font-semibold text-brand-green mb-1">
                        <Calendar size={12} />
                        05 Jun, 2026
                      </div>
                      <h4 className="font-bold text-charcoal text-sm leading-snug group-hover:text-brand-gold transition-colors">
                        Distributing Blankets to the Homeless This Winter
                      </h4>
                    </div>
                  </div>

                  {/* Post 2 */}
                  <div className="flex gap-4 group cursor-pointer">
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={yogaImg} alt="Recent post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-xs font-semibold text-brand-green mb-1">
                        <Calendar size={12} />
                        02 Jun, 2026
                      </div>
                      <h4 className="font-bold text-charcoal text-sm leading-snug group-hover:text-brand-gold transition-colors">
                        Free Community Yoga Camp Attracts Hundreds
                      </h4>
                    </div>
                  </div>

                  {/* Post 3 */}
                  <div className="flex gap-4 group cursor-pointer">
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={working5} alt="Recent post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-xs font-semibold text-brand-green mb-1">
                        <Calendar size={12} />
                        28 May, 2026
                      </div>
                      <h4 className="font-bold text-charcoal text-sm leading-snug group-hover:text-brand-gold transition-colors">
                        Clean Drinking Water Initiative in Rural Schools
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular Tags Widget */}
              <div className="bg-white p-8 rounded-[2rem] shadow-md border border-slate-100">
                <h3 className="text-xl font-extrabold text-charcoal mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-brand-gold after:rounded-full">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Donation', 'Charity', 'Food', 'Education', 'NGO', 'Medical', 'Volunteer', 'Support'].map((tag, idx) => (
                    <a 
                      key={idx} 
                      href="#" 
                      className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-brand-green hover:text-white hover:border-brand-green transition-all"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
