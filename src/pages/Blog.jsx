import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Calendar, User, Clock, ArrowRight, X, Search, BookOpen } from 'lucide-react'

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

export default function Blog() {
  const [filter, setFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPost, setSelectedPost] = useState(null)
  const gridRef = useRef(null)

  const blogPosts = [
    {
      id: 1,
      title: 'Empowering Communities: Our Winter Blanket Distribution Drive',
      excerpt: 'As winter set in, RKCT volunteers reached out to the most vulnerable families, distributing warm blankets and hope across rural communities.',
      content: `Our recent winter relief drive was a heartwarming success. With the drop in temperatures, thousands of underprivileged families in greater Noida and surrounding rural areas faced the harsh cold without adequate bedding or warm clothes. 

Under our relief program, our dedicated team of volunteers identified families in need and distributed over 1,000 high-quality warm blankets. This initiative was not just about providing warmth, but about showing our community that they are not alone. Through generous support from our donors, we hope to expand this program to cover more remote villages in the coming seasons.`,
      category: 'Relief Drives',
      image: working1,
      date: 'Dec 15, 2025',
      readTime: '4 min read',
      author: 'RKCT Team'
    },
    {
      id: 2,
      title: 'Nurturing Health: Free Health and Medical Support Camps',
      excerpt: 'Bringing quality healthcare and health screenings directly to villages to ensure wellness for every individual in our region.',
      content: `Access to basic healthcare remains a significant challenge in rural parts of our region. To address this, Ramvati Kasana Charitable Trust organized a day-long Free Medical Support Camp.

A team of doctors, including general physicians, pediatricians, and gynecologists, volunteered their time. Over 350 residents received checkups, basic diagnostic tests, and free essential medicines. We also conducted workshops on hygiene, basic sanitization, and clean drinking water practices. Early detection of minor ailments during these camps saves lives, and we plan to make these clinics a monthly fixture in our outreach program.`,
      category: 'Health & Yoga',
      image: working4,
      date: 'Jan 22, 2026',
      readTime: '6 min read',
      author: 'Dr. R. K. Kasana'
    },
    {
      id: 3,
      title: 'Education for All: Brightening Futures with Educational Kits',
      excerpt: 'Providing essential notebooks, stationery, and learning materials to children in rural schools to keep their dreams alive.',
      content: `Education is the most powerful tool to break the cycle of poverty. However, many rural families struggle to afford basic stationery and school supplies, which sometimes leads to children dropping out of school.

RKCT launched the "Bright Minds" initiative, distributing complete educational kits to over 200 children. Each kit contains notebooks, pens, pencils, geometry boxes, and drawing sets. Seeing the bright smiles and excitement in the eyes of these young learners was incredibly rewarding. By removing these minor financial barriers, we encourage parents to keep their children enrolled and motivated.`,
      category: 'Education',
      image: work2,
      date: 'Feb 10, 2026',
      readTime: '5 min read',
      author: 'Edu-Care Committee'
    },
    {
      id: 4,
      title: 'Finding Inner Peace: Community Yoga & Wellness Sessions',
      excerpt: 'Promoting a balanced and healthy lifestyle through community-led yoga workshops and spiritual direction sessions.',
      content: `In today's fast-paced world, mental and spiritual wellness are as critical as physical health. At RKCT, we promote a holistic approach to wellness.

Our community yoga sessions are designed to be accessible to all ages and experience levels. Led by certified yoga instructors, participants learn breathing techniques (pranayama), basic postures (asanas), and mindfulness meditation. These early-morning events also serve as a space for community building, fostering strong bonds among village residents and helping them cultivate a daily wellness routine.`,
      category: 'Health & Yoga',
      image: yogaImg,
      date: 'Mar 05, 2026',
      readTime: '4 min read',
      author: 'Yoga Acharya Sharma'
    },
    {
      id: 5,
      title: 'Feeding Hope: Daily Nutrition Support Initiatives',
      excerpt: 'Serving hot, nutritious meals to low-income families and children to combat malnutrition in our local neighborhoods.',
      content: `Hunger and lack of proper nutrition are persistent obstacles to a healthy community. RKCT's daily food relief shelter acts as a lifeline for daily wage laborers and low-income families.

We source fresh, local ingredients to prepare balanced, hygienic vegetarian meals daily. We focus specifically on child nutrition, ensuring growing kids receive adequate protein, vitamins, and minerals. Through our collaborative network, we also share nutrition education with mothers, helping them make optimal health decisions even on limited budgets.`,
      category: 'Relief Drives',
      image: working3,
      date: 'Apr 12, 2026',
      readTime: '5 min read',
      author: 'Food Relief Team'
    },
    {
      id: 6,
      title: 'Rebuilding Heritage: Temple Rehabilitation Projects',
      excerpt: 'Preserving our community’s spiritual roots and spaces for gatherings by restoring historical temple premises.',
      content: `Temples and spiritual centers are the cultural backbone of our local communities, serving as vital spaces for social harmony, festivals, and community gatherings.

Over time, several local structures have fallen into disrepair. RKCT has taken active steps to rebuild and renovate these premises, ensuring they remain clean, structurally safe, and inviting. Our latest project involved restoring a historic community temple, including painting, repair works, and installing clean drinking water facilities for visitors. These efforts help preserve our heritage and give communities a sense of pride.`,
      category: 'Events & Awards',
      image: templeImg,
      date: 'May 18, 2026',
      readTime: '7 min read',
      author: 'Heritage Committee'
    }
  ]

  const categories = ['All', 'Relief Drives', 'Health & Yoga', 'Education', 'Events & Awards']

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = filter === 'All' || post.category === filter
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  useEffect(() => {
    // GSAP grid stagger animation on filter or search changes
    if (gridRef.current && gridRef.current.children.length > 0) {
      gsap.fromTo(gridRef.current.children,
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.08, ease: 'power2.out' }
      )
    }
  }, [filter, searchQuery])

  return (
    <div className="flex-grow bg-slate-50 min-h-screen pb-20">
      
      {/* Hero Header */}
      <section 
        className="bg-charcoal text-white py-32 sm:py-48 lg:py-64 text-center relative bg-no-repeat bg-cover bg-top flex flex-col justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.9)), url(${work1})`
        }}
      >
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Trust Blog & Updates</h1>
          <p className="text-brand-gold font-semibold tracking-wider uppercase text-sm mt-3">
            Stories of Impact, Welfare Drives, and Community Service
          </p>
          <div className="w-20 h-1 bg-brand-gold mx-auto mt-6 rounded-full"></div>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Controls: Search and Categories */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 w-full lg:w-auto">
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

          {/* Search Bar */}
          <div className="relative w-full lg:w-80">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold text-charcoal"
            />
          </div>
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 shadow-sm max-w-lg mx-auto">
            <BookOpen size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-lg font-bold text-slate-700">No Articles Found</h3>
            <p className="text-slate-500 text-sm mt-1">Try resetting the filter or search term</p>
          </div>
        )}

        {/* Blog Post Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-gold text-charcoal text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Meta Tags */}
                  <div className="flex items-center text-xs text-slate-400 gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-charcoal leading-snug group-hover:text-brand-gold transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="pt-6 border-t border-slate-50 mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <div className="w-6 h-6 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center font-bold">
                      {post.author[0]}
                    </div>
                    {post.author}
                  </div>
                  
                  <button 
                    onClick={() => setSelectedPost(post)}
                    className="text-brand-gold hover:text-brand-gold-dark text-xs font-bold tracking-wider uppercase flex items-center gap-1 transition-colors group/btn"
                  >
                    Read More 
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </section>

      {/* Lightbox / Post Detail View */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 backdrop-blur-xs">
          
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-100 flex flex-col">
            
            {/* Header Close button */}
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 text-charcoal hover:text-brand-gold bg-slate-100 p-2.5 rounded-full transition-colors focus:outline-none shadow-sm"
            >
              <X size={20} />
            </button>

            {/* Banner Image */}
            <div className="relative aspect-video w-full bg-slate-100">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="bg-brand-gold text-charcoal text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider self-start shadow mb-3">
                  {selectedPost.category}
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
                  {selectedPost.title}
                </h2>
              </div>
            </div>

            {/* Post Detail Body */}
            <div className="p-8 space-y-6">
              {/* Meta bar */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center font-bold">
                    {selectedPost.author[0]}
                  </div>
                  <span className="font-semibold text-charcoal">{selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={15} />
                  {selectedPost.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={15} />
                  {selectedPost.readTime}
                </div>
              </div>

              {/* Text content */}
              <div className="prose max-w-none text-slate-600 text-base leading-relaxed whitespace-pre-line">
                {selectedPost.content}
              </div>

              {/* Footer CTA */}
              <div className="bg-slate-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                <div className="text-center sm:text-left">
                  <h4 className="font-bold text-charcoal">Support our causes</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Your support helps us fund welfare initiatives like these.</p>
                </div>
                <a
                  href="/donate"
                  onClick={() => setSelectedPost(null)}
                  className="bg-brand-gold text-white hover:bg-brand-gold-dark px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all shadow-md"
                >
                  Donate Now
                </a>
              </div>
            </div>
            
          </div>
        </div>
      )}

    </div>
  )
}
