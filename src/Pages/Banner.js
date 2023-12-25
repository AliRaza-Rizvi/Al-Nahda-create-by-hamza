"use client"
import React, { useEffect } from 'react'
import { GiTakeMyMoney } from 'react-icons/gi'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion'



const Banner = () => {



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
            <div className="bg-[#EFEFEF] pt-2 shadow">
                <div className="px-10 md:px-20 h-full py-7 bg-white   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {/* first div   */}
                    <div className="w-[ 33.333%] mb-6 flex justify-around items-center h-[100%]" data-aos="zoom-in">
                        <motion.div whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} className="text-[6rem]  text-[#F58820]"><GiTakeMyMoney /></motion.div>
                        <div className="w-[70%] mb-0">
                            <h3 className="text-[3.5vw] mb-0 md:text-[2rem] text-black font-[600] opacity-[0.5]">Best Price Guarantee</h3>
                            <p className="text-[2.5vw] mb-0 md:text-[1.5rem] text-black">Your one-stop-shop for affordable
                                travel solutions and services.</p>
                        </div>
                    </div>
                    {/* second div  */}
                    <div className="w-[ 33.333%] mb-6 flex justify-around items-center h-[100%]" data-aos="zoom-in">
                    <motion.div whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} className="text-[6rem]  text-[#F58820]"><ConnectWithoutContactIcon sx={{ fontSize: "6rem" }} /></motion.div>
                        <div className="w-[70%] mb-0">
                            <h3 className="text-[3.5vw] mb-0 md:text-[2rem] text-black font-[600] opacity-[0.5]">Best Price Guarantee</h3>
                            <p className="text-[2.5vw] mb-0 md:text-[1.5rem] text-black">Your one-stop-shop for affordable
                                travel solutions and services.</p>
                        </div>
                    </div>
                    {/* third div  */}
                    <div className="w-[ 33.333%] mb-6 flex justify-around items-center h-[100%]" data-aos="zoom-in">
                    <motion.div whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }} className="text-[6rem]  text-[#F58820]"><TravelExploreIcon sx={{ fontSize: "6rem" }} /></motion.div>
                        <div className="w-[70%] mb-0">
                            <h3 className="text-[3.5vw] mb-0 md:text-[2rem] text-black font-[600] opacity-[0.5]">Best Price Guarantee</h3>
                            <p className="text-[2.5vw] mb-0 md:text-[1.5rem] text-black">Your one-stop-shop for affordable
                                travel solutions and services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
