"use client"
import React, { useEffect } from 'react'
import permotionPic from "../../public/assets/permotion2.jpg";
import Image from 'next/image';
import AOS from 'aos';
import { motion } from "framer-motion"


const Promotion = () => {


  // ----------- UseEffects Start -------------

  useEffect(() => {
    AOS.init({
        duration: 800,
        offset: 150,
    });
}, [])




// ----------- UseEffects End -------------

    return (
        <>

            <div className='relative w-[100%] mx-auto h-[45rem] rounded-[0.6rem] bg-[#EFEFEF]' data-aos="fade-up"  data-aos-delay="150">
                <div className='absolute top-0 left-0 w-[100%] h-[100%] rounded-[0.6rem] mt-5 md:mt-0 lg:leading-[8rem]'>
                    <div className='w-[100%] h-20 md:h-32 lg:w-[70%] text=[#fff] flex justify-center lg:justify-start items-center gap-3 ' data-aos="fade-up" data-aos-delay="150">
                        <div className='w-[10vw] h-[0.2rem] lg:w-[12vw] lg:h-[0.3rem] bg-[#EFEFEF] lg:mx-[2rem]'></div>
                        <h2 className='text-[8vw] lg:text-[3vw] lg:mb-[0.3rem] text-white font-normal italic' data-aos="zoom-in-left" data-aos-delay="150" >Discount Price</h2>
                        <div className='w-[10vw] h-[0.2rem] lg:w-[12vw] lg:h-[0.3rem] bg-[#EFEFEF] lg:mx-[2rem]'></div>
                    </div>
                    <div className='w-[100%] mt-5 sm:mt-0 h-[80%] lg:w-[55%]  items-center lg:h-[80%] '>
                        <p className='text-center text-[4vw] lg:text-[3.5vw] text-white mb-0' data-aos="fade-up" data-aos-delay="300">UAE 02 Year's Multiple</p>
                        <p className='text-center text-[10vw] lg:text-[7vw] text-yellow-300 font-serif mb-0' data-aos="fade-up" data-aos-delay="400">ENTRY VISA</p>
                        <p className='text-center text-[3rem] lg:text-[4rem] text-white mb-0' data-aos="fade-up" data-aos-delay="500">Be you'r Own Boss</p>
                        <div className="btn-permotion  lg:mt-2 md:mt-0 flex justify-center leading-none "  data-aos="zoom-in" data-aos-delay="500">
                            <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className='text-[3vw]  md:text-[1vw]  h-[4rem] w-[20rem] bg-[#EFEFEF] border-none rounded-[1rem] cursor-pointer  '>See permotion tours</motion.button>
                        </div>
                    </div>
                </div>
                <Image className='block w-[100%] h-[100%]   object-cover rounded-[0.6rem]' src={permotionPic} alt='promotion-image' />
            </div>

        </>
    )
}

export default Promotion
