import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

// Layout components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import Loader from './components/Loader'

// Page components
import Home from './pages/Home'
import About from './pages/About'
import Causes from './pages/Causes'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import Contact from './pages/Contact'
import DonatePage from './pages/DonatePage'

// ScrollToTop component to reset scroll on route transition
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const [loading, setLoading] = useState(true);

  // Prevent scrolling while loader is active
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  return (
    <Router>
      <ScrollToTop />
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<DonatePage />} />
        </Routes>
      </main>
      <FloatingActions />
      <Footer />
    </Router>
  )
}
export default App
