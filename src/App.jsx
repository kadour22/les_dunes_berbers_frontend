import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import SignatureCoffee from './components/SignatureCoffee'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Landing from './components/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Reservation from './components/Reservation'
import MenuList from './components/MenuList'
import ReservationList from './components/ReservationList'
import Login from './components/Login'
// import AdminRoute from './components/AdminRoute'
export default function App() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path='/menu' element={<MenuList />} />
          <Route path='/reservations-list' element={<ReservationList/>} />
          <Route path='/admin' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
