import React from 'react'
import Header from '../components/Common/Header'
import Hero from '../components/MainPage/Hero'
import About from '../components/MainPage/About'
import Features from '../components/MainPage/Features'
import HowWork from '../components/MainPage/HowWork'
import Faqs from '../components/MainPage/Faqs'
import Footer from '../components/Common/Footer'
const MainPage = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Features/>
      <HowWork/>
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default MainPage