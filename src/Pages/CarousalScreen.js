"use client"
import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import CustomBtn from '../Components/CustomBtn';


// import required modules
import { Navigation } from 'swiper/modules';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import Desert from '../../public/SVG/Desert.jsx';
import OutboundTour from '../../public/SVG/OutboundTours.jsx';
import MusandamDibba from '../../public/SVG/MusandamDibba.jsx';
import DubaiBurjKhalifa from '../../public/SVG/DubaiBurjKhalifa.jsx';
import AbuDhabi from '../../public/SVG/AbuDhabi.jsx';
import DhowCurise from '../../public/SVG/DhowCurise.jsx';
import FamilyVisa from '../../public/SVG/FamilyVisa.jsx';
import Visa from '../../public/SVG/Visa.jsx';
import InvestorVisa from '../../public/SVG/InvestorVisa.jsx';
import BusinessSetup from '../../public/SVG/BusinessSetup.jsx';
import Hotel from '../../public/SVG/Hotel.jsx';
import FineRemove from '../../public/SVG/FineRemove.jsx';
import Emigartion from '../../public/SVG/Emigration.jsx';
import AOS from 'aos';






const CarousalScreen = () => {

  // const [opacityIcon, setOpacityIcon] = useState(false)
  // console.log('opacityIcon: ', opacityIcon);





  const swiperParams = {
    navigation: true,
    loop: true,
    speed: 800,
    effect: "slide",
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 4,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 5,
      },
    }
  };



  const data = [
    {
      name: "Desert Safari",
      icon: <Desert />
    },
    {
      name: "Outbound Tours",
      icon: <OutboundTour />
    },
    {
      name: "Musandam Dibba",
      icon: <MusandamDibba />
    },
    {
      name: "Dubai City Tour",
      icon: <DubaiBurjKhalifa />
    },
    {
      name: "Abu Dhabi City Tour",
      icon: <AbuDhabi />
    },
    {
      name: "Dhow Cruise",
      icon: <DhowCurise />
    },
    {
      name: "2/3 Year's Visa",
      icon: <Visa />
    },
    {
      name: "Family Visa",
      icon: <FamilyVisa />
    },
    {
      name: "Investor Visa",
      icon: <InvestorVisa />
    },
    {
      name: "Business Setup",
      icon: <BusinessSetup />
    },
    {
      name: "Emigration",
      icon: <Emigartion />
    },
    {
      name: "Hotels",
      icon: <Hotel />
    },
    {
      name: "Fine Remove",
      icon: <FineRemove />
    },
  ]


  // ----------- UseEffcets Start -------------

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 150,
    });
  }, [])



  // ----------- UseEffcets End -------------

  return (
    <>
      <div className='top-carousal w-[100%] h-[50rem] bg-[#FAF5EE]  ' id='type'>
        <div className='carousal-sides w-[80%] h-[100%]  mx-auto relative'>
          <div className='carousal-flex flex flex-col items-center'>
            <p className='head-para text-[2.2rem] lg:text-[4rem] text-black font-semibold mt-20' data-aos="fade-up" data-aos-delay="150">Choose Tour Type & Services</p>
            <p className='slogon text-[1.5rem] font-sans lg:text-[2rem] text-[#F58820] font-semibold mb-24' style={{ fontFamily: "'Pacifico', cursive", }} data-aos="fade-up" data-aos-delay="300">you dream it, We plan it!</p>
          </div>


          <div className="h-80 ">

            <Swiper {...swiperParams} modules={[Navigation]} className='relative'>
              {
                data?.map((elem) => (
                  <SwiperSlide>
                    <div className='deer w-[100%] h-[18rem] bg-white text-[6rem] flex justify-center items-center rounded-2xl cursor-pointer'>
                      <div className='icon z-[11] flex justify-center flex-col items-center w-[100%] h-[100%] text-black  '>
                        {/* <ReactSVG src={svgpic} /> */}
                        {elem?.icon}
                        <p className='text-car hover:text-[#F58820]  text-black text-[1.8rem] font-semibold mt-4'>{elem?.name}</p>
                      </div>
                    </div>
                  </SwiperSlide>

                ))
              }


            </Swiper>

            <div className="swiper-button-next ">
          
              <IoIosArrowForward className=''/>
            </div>
            <div className="swiper-button-prev" >
            
              <IoIosArrowBack />
            </div>


          </div>
        </div>
      </div>

    </>
  )
}

export default CarousalScreen
