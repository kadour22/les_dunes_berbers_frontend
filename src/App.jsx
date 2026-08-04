import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import SignatureCoffee from './components/SignatureCoffee'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <OurStory />
        <SignatureCoffee />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
