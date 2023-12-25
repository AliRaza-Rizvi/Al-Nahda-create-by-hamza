"use client"

import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import { visaData } from "../Components/StaticData";
import Image from 'next/image';
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { motion } from "framer-motion";



const Visa = () => {






    // ----------- UseEffects Start -------------

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 150,
        });
    }, [])

    return (
        <>



            <div className='visa-top pt-20 bg-[#EFEFEF]' id='visa'>
                <div className='flex justify-center ' >
                    <p className='text-[6vw] md:text-[4rem] text-[#333333c6] font-semibold'>Visa Packages</p>
                </div>
                <p className='text-center px-10 text-[3vw] md:text-[2rem] text-[#F58820] font-semibold mb-[3rem] flex justify-center' style={{ fontFamily: "'Pacifico', cursive", }} >Refreshes the visa packages other beers cannot reach.</p>
                <div className="w-[85%] mt-[5rem] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">



                    {
                        visaData.map((ele, index) => (
                            <div key={index} className="rounded-2xl w-[100%] overflow-hidden mb-[2rem] relative h-[37rem]" >
                                <motion.div whileHover={{ scale: [null, 1.2] }} transition={{ duration: 0.4 }} className="h-[20rem] overflow-hidden w-[100%]">
                                    <Image src={ele.image} className='h-[100%] w-[100%] object-cover' whileHover={{ scale: [null, 1.2] }} transition={{ duration: 0.4 }} alt="" />
                                </motion.div>
                                <div className="p-8 text-center absolute flex flex-col justify-between bg-white h-[20rem] top-[16rem] w-[100%] rounded-t-[3rem] rounded-b-[0.8rem] left-0">
                                    <h3 className='text-[1.6rem] text-black'>{ele.heading}</h3>
                                    <p className='text-[1.4rem] text-black font-medium  mt-[1rem] text-center'>From: <span className='text-[#F58820]'>AED </span><span>price</span></p>
                                    <div className='flex items-center justify-around bg-[#f5832021] w-[95%] h-[5rem] rounded-lg '>
                                        <div className='clock-icon text-[2rem] text-[#F58820]'><AiOutlineClockCircle /></div>
                                        <div className='h-[100%] flex justify-center  items-center cursor-pointer' >
                                            <motion.p className='border-none bg-transparent mt-3 mb-0 text-[1.6rem] h-[70%] w-[100%] flex  text-[#F58820] ' whileHover={{ paddingRight: 10 }} transition={{ duration: 0.2 }} >Explore</motion.p>
                                            <div className='text-[2rem] text-[#F58820] m-0'><BsArrowRightShort className='text-[2rem] text-[#F58820] ' /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }


                </div>

            </div>

        </>
    )
}

export default Visa
