"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '@/Pages/Navbar'
import Header from '@/Pages/Header'
import Banner from '@/Pages/Banner'
import HolidaysCards from '@/Pages/HolidaysCards'
import Promotion from '@/Pages/Promotion'
import Visa from '@/Pages/Visa'
import About from '@/Pages/About'
import CarousalScreen from '@/Pages/CarousalScreen'
import Feedback from '@/Pages/Feedback'
import Footer from '@/Pages/Footer'
import Branches from '@/Pages/Branches'
import ComapnyProfile from '@/Pages/ComapnyProfile'
import Progress from '@/Pages/Progress'


const page = () => {




  return (

    <div>

      <Navbar />
      <Header />
      <Banner />
      <HolidaysCards />
      <Promotion />
      <Progress />
      <Visa />
      <About />
      {/* <ComapnyProfile /> */}
      <CarousalScreen />
      <Feedback />
      <Branches />
      <Footer />

    </div>

  )
}

export default page


{/* <Header /> */ }
{/* <About /> */ }
{/* <CarousalScreen /> */ }
{/* <Branches /> */ }