"use client"
import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import yellowGirl from "../../public/./assets/yellow-girl.jpg";
import lake from "../../public/./assets/lake.jpg";
import boat from "../../public/./assets/boat.jpg";
import mountain from "../../public/./assets/mountain.jpg";
import seaGirl from "../../public/./assets/sea-girl.jpg";
import iceMountain from "../../public/./assets/ice-mountain.jpg";
import boatGirl from "../../public/./assets/boat-girl.jpg";
import rock from "../../public/./assets/rock.jpg";
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';



const HolidaysCards = () => {

    const demmyData = [
        {
            heading: "Tours & Travel",
            sample: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius fugiat id accusantium nulla incidunt, rem omnis perferendis itaque similique.",
            image: yellowGirl,
        },
        {
            heading: "Tours & Travel",
            sample: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius fugiat id accusantium nulla incidunt, rem omnis perferendis itaque similique.",
            image: lake,
        },
        {
            heading: "Tours & Travel",
            sample: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius fugiat id accusantium nulla incidunt, rem omnis perferendis itaque similique.",
            image: boat,
        },
        {
            heading: "Tours & Travel",
            sample: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius fugiat id accusantium nulla incidunt, rem omnis perferendis itaque similique.",
            image: mountain,
        },
        {
            heading: "Tours & Travel",
            sample: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius fugiat id accusantium nulla incidunt, rem omnis perferendis itaque similique.",
            image: seaGirl,
        },
        {
            heading: "Tours & Travel",
            sample: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius fugiat id accusantium nulla incidunt, rem omnis perferendis itaque similique.",
            image: iceMountain,
        },
        {
            heading: "Tours & Travel",
            sample: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius fugiat id accusantium nulla incidunt, rem omnis perferendis itaque similique.",
            image: boatGirl,
        },
        {
            heading: "Tours & Travel",
            sample: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius fugiat id accusantium nulla incidunt, rem omnis perferendis itaque similique.",
            image: rock,
        },

    ]



    // ----------- States Start -------------

    const [delayArray, setDelayArray] = useState([]);

    // ----------- States End -------------



    // ----------- Variables Start -------------

    var val = [];
    var temp = 0;

    // ----------- Variables End -------------



    // ----------- UseEffects Start -------------

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 150,
        });
    }, [])

    useEffect(() => {

        for (let i = 0; i < demmyData?.length; i++) {

            const rightVal = () => {
                val.push(temp + 150);
                temp = val[i];

            }
            rightVal();

        }
        setDelayArray(val)
        temp = 0;

    }, [])

    // ----------- UseEffects End -------------

    return (
        <>
            <div class="pt-[5rem] bg-[#EFEFEF] ">

                <div className='text-center' data-aos="fade-up" data-aos-delay="150">
                    <p className='text-[5vw] md:text-[4rem] text-black font-[600]'>Holidays Packages</p>
                    <p className='text-[3vw] md:text-[2rem] text-[#F58820] flex justify-center font-[600] ' style={{ fontFamily: "Pacifico, cursive", }} >you dream it, We plan it!</p>
                </div>


                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 w-[85%] mx-auto py-[5rem]  ">

                    {/* card  */}
                    {
                        demmyData.map((ele, index) => (
                            <div key={index} delay={delayArray}  data-aos="fade-up" className="w-[100%]  rounded-[1rem] overflow-hidden bg-white shadow mb-[2rem]">
                                <motion.div 
                               
                               whileHover={{ scale: [null, 1.2] }}
                                transition={{ duration: 0.4 }}
                                className="h-[20rem] overflow-hidden w-full">
                                    <Image
                                      whileHover={{ scale: [null, 1.2] }}
                                      transition={{ duration: 0.4 }}
                                    src={ele?.image} alt="" className='w-[100%] h-[100%] object-cover ' />
                                </motion.div>
                                <div className="p-[2rem]  text-center">
                                    <h3 className='text-[2rem] text-black'>{ele.heading}</h3>
                                    <p className='py-[1rem] text-[1.4rem] text-[#aaa]'>{ele.description.slice(0, 30)}</p>
                                    <div className='flex items-center justify-center cursor-pointer '>
                                        <motion.p whileHover={{ paddingRight: 10 }} transition={{ duration: 0.2 }} className="text-[1.7rem] mb-0 text-[#F58820]">Read More</motion.p>
                                        <div className='text-[2rem]  text-[#F58820]'><MdKeyboardArrowRight /></div>
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

export default HolidaysCards
