"use client"
import React, { useEffect } from 'react';
import {motion} from "framer-motion";
import AOS from 'aos';

const Feedback = () => {


        // ----------- UseEffcets Start -------------

        useEffect(() => {
            AOS.init({
                duration: 800,
                offset: 150,
            });
        }, [])
    

    
        // ----------- UseEffcets End -------------


    return (


        <div className='feedback-top  w-[100%] h-[40rem] bg-red-300 mb-20' id='feedback'>
            <div className='feed-content flex flex-col items-center w-[100%] h-[100%] pt-24'>
                <p className='feed-para text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] font-semibold text-white text-center pt-8 mb-4' data-aos="fade-up" data-aos-delay="150">WE DON’T JUST WIN AWARDS, <br ></br> WE WIN HEARTS!</p>
                <div className="btn-feed" data-aos="zoom-in" data-aos-delay="150">
                    <motion.button className='w-[30rem] h-[6rem] text-[2rem] bg-white border-none rounded-2xl cursor-pointer text-black font-medium' whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>SUBMIT YOUR FEEDBACK</motion.button>
                </div>
            </div>
        </div>


    )
}

export default Feedback;
