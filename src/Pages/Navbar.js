"use client"
import React, { useEffect, useState } from 'react'
import { FcMenu } from 'react-icons/fc'
import { MdClose } from 'react-icons/md'
// import Image from 'next/image'
import GroupLogo from '../../public/SVG/GroupLogo'
import { motion } from 'framer-motion'
// import AOS from 'aos';
// import 'aos/dist/aos.css';







const Navbar = () => {
    const [nav, setNav] = useState(true)



    const hundleNav = () => {
        setNav(!nav)
    }


    // ----------- UseEffcets Start -------------

    // useEffect(() => {
    //     AOS.init({
    //         duration: 800,
    //         offset: 150,
    //     });
    // }, [])

    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    // ----------- UseEffcets End -------------

    return (
        <>
            <nav className='sticky top-0 px-20 shadow  h-32 w-full bg-white flex justify-between items-center z-50'  >
                {/* logo div  */}
                <motion.div
                    initial={{
                        x: 100,
                        opacity: 0,

                    }}
                    animate={{
                        opacity: 1,
                        x: 0,

                    }}

                    transition={{
                        duration: 1
                    }}
                    className=' navbarLogo'>
                    {/* <Image src={GroupLogo} /> */}
                    <GroupLogo />
                </motion.div>
                {/* links div  */}
                <div className=''>
                    <ul className='hidden  sm:flex sm:gap-5 md:justify-between md:items-center md:gap-10   lg:flex lg:justify-between lg:items-center lg:gap-0'>
                        <motion.li
                            initial={{
                                x: 100,
                                opacity: 0,

                            }}
                            animate={{
                                opacity: 1,
                                x: 0,

                            }}

                            transition={{
                                duration: 1.5
                            }}
                            className='md:text-[2vw] lg:text-[1.6rem] ml-[1.5rem] mr-[1.5rem] hover:text-[#F58820] cursor-pointer font-normal sm:text-[2.5vw]  text-[#BABABA] ' ><a href="/"
                                onClick={e => {
                                    let home = document.getElementById("home");
                                    e.preventDefault();
                                    home && home.scrollIntoView({ behavior: "smooth", block: "start" });
                                    window.history.pushState("home", "home", "/home");
                                }}>
                                Home
                            </a>
                        </motion.li>
                        <motion.li
                            initial={{
                                x: 100,
                                opacity: 0,

                            }}
                            animate={{
                                opacity: 1,
                                x: 0,

                            }}

                            transition={{
                                duration: 2
                            }}
                            className='md:text-[2vw] lg:text-[1.6rem] ml-[1.5rem] mr-[1.5rem] hover:text-[#F58820] cursor-pointer font-normal sm:text-[2.5vw]  text-[#BABABA] '
                        ><a href="/"
                            onClick={e => {
                                let visa = document.getElementById("visa");
                                e.preventDefault();
                                visa && visa.scrollIntoView({ behavior: "smooth", block: "start" });
                                window.history.pushState("visa", "visa", "/visa");
                            }}>
                                Visa
                            </a>
                        </motion.li>
                        <motion.li
                            initial={{
                                x: 100,
                                opacity: 0,

                            }}
                            animate={{
                                opacity: 1,
                                x: 0,

                            }}

                            transition={{
                                duration: 2.5
                            }}
                            className='md:text-[2vw] lg:text-[1.6rem] ml-[1.5rem] mr-[1.5rem] hover:text-[#F58820] cursor-pointer font-normal sm:text-[2.5vw]  text-[#BABABA] '
                        ><a href="/"
                            onClick={e => {
                                let tours = document.getElementById("tours");
                                e.preventDefault();
                                tours && tours.scrollIntoView({ behavior: "smooth", block: "start" });
                                window.history.pushState("tours", "tours", "/tours");
                            }}>
                                Tours
                            </a>
                        </motion.li>
                        <motion.li
                            initial={{
                                x: 100,
                                opacity: 0,

                            }}
                            animate={{
                                opacity: 1,
                                x: 0,

                            }}

                            transition={{
                                duration: 3
                            }}
                            className='md:text-[1vw] lg:text-[1.6rem] ml-[1.5rem] mr-[1.5rem] hover:text-[#F58820] cursor-pointer font-normal sm:hidden lg:block text-[#BABABA] '
                        ><a href="/"
                            onClick={e => {
                                let type = document.getElementById("type");
                                e.preventDefault();
                                type && type.scrollIntoView({ behavior: "smooth", block: "start" });
                                window.history.pushState("tours type", "tours type", "/tours type");
                            }}>
                                Tours Types
                            </a>
                        </motion.li>
                        <motion.li
                            initial={{
                                x: 100,
                                opacity: 0,

                            }}
                            animate={{
                                opacity: 1,
                                x: 0,

                            }}

                            transition={{
                                duration: 3.5
                            }}
                            className='md:text-[1vw] lg:text-[1.6rem] ml-[1.5rem] mr-[1.5rem] hover:text-[#F58820] cursor-pointer font-normal sm:hidden lg:block text-[#BABABA] '
                        ><a href="/"
                            onClick={e => {
                                let branches = document.getElementById("branches");
                                e.preventDefault();
                                branches && branches.scrollIntoView({ behavior: "smooth", block: "start" });
                                window.history.pushState("branches", "branches", "/branches");
                            }}>
                                Our Branches
                            </a>
                        </motion.li>
                        <motion.li
                            initial={{
                                x: 100,
                                opacity: 0,

                            }}
                            animate={{
                                opacity: 1,
                                x: 0,

                            }}

                            transition={{
                                duration: 4
                            }}
                            className='md:text-[1vw] lg:text-[1.6rem] ml-[1.5rem] mr-[1.5rem] hover:text-[#F58820] cursor-pointer font-normal sm:hidden lg:block text-[#BABABA] '
                        ><a href="/"
                            onClick={e => {
                                let feedback = document.getElementById("feedback");
                                e.preventDefault();
                                feedback && feedback.scrollIntoView({ behavior: "smooth", block: "start" });
                                window.history.pushState("feedback", "feedback", "/feedback");
                            }}>
                                Feedback
                            </a>
                        </motion.li>
                        <motion.li
                            initial={{
                                x: 100,
                                opacity: 0,

                            }}
                            animate={{
                                opacity: 1,
                                x: 0,

                            }}

                            transition={{
                                duration: 4.5
                            }}
                            className='md:text-[1vw] lg:text-[1.6rem] ml-[1.5rem] mr-[1.5rem] hover:text-[#F58820] cursor-pointer font-normal sm:hidden lg:block text-[#BABABA] '
                        ><a href="/"
                            onClick={e => {
                                let about = document.getElementById("about");
                                e.preventDefault();
                                about && about.scrollIntoView({ behavior: "smooth", block: "start" });
                                window.history.pushState("about", "about", "/about");
                            }}>
                                About Us
                            </a>
                        </motion.li>

                    </ul>
                </div>
                {/* button div  */}
                <div className='flex justify-between items-center gap-5'>
                    <motion.button className='hidden  lg:block w-[17rem] h-[4.5rem] rounded-[10rem] text-[1.6rem]  border-2 border-[#F58220] text-[#F58220]  hover:bg-[#F58220] hover:text-white '
                        initial={{
                            x: 200,
                            opacity: 0,

                        }}
                        animate={{
                            opacity: 1,
                            x: 0,

                        }}

                      
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 ,duration: 1}}
                    ><a href="/"
                        onClick={e => {
                            let contact = document.getElementById("contact");
                            e.preventDefault();
                            contact && contact.scrollIntoView({ behavior: "smooth", block: "start" });
                            window.history.pushState("contact", "contact", "/contact");
                        }}>
                            Contact US
                        </a></motion.button>
                    {/* <motion.button  whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}   className='hidden lg:block w-[17rem] h-[4.5rem] rounded-[10rem] text-[1.6rem]  border-2 border-[#F58220] text-[#F58220]  hover:bg-[#F58220] hover:text-white '>Contact US</motion.button> */}
                    <div className='lg:hidden z-50' onClick={() => hundleNav()}>
                        {
                            !nav ? <MdClose className='text-4xl transition-all ease-in-out duration-500' /> : <FcMenu className='text-4xl transition-all ease-in-out duration-500' />
                        }

                    </div>
                </div>



                {/* mobile nav  */}

                {
                    !nav ? <motion.div
                        initial={{ y: -700, }}
                        animate={{ y: 0, }}
                        transition={{ duration: 0.5, }}
                        className='transition-all ease-in-out duration-500 fixed top-[70px] bg-[#FAF5EE] left-0 w-full h-full  py-10'>
                        <ul className=''>
                            <motion.li whileHover={{ scale: 1.1 }} className='text-[5vw] w-fit   px-5  opacity-[0.5] py-2 rounded-[10rem]  border-2 border-[#F58220] text-[#F58220]  hover:bg-[#F58220] hover:text-white'>Home</motion.li>
                            <motion.li whileHover={{ scale: 1.1 }} className='text-[5vw] w-fit mt-3   px-5  opacity-[0.5] py-2 rounded-[10rem]  border-2 border-[#F58220] text-[#F58220]  hover:bg-[#F58220] hover:text-white'>  Visa</motion.li>
                            <motion.li whileHover={{ scale: 1.1 }} className='text-[5vw] w-fit mt-3   px-5  opacity-[0.5] py-2 rounded-[10rem]  border-2 border-[#F58220] text-[#F58220]  hover:bg-[#F58220] hover:text-white'>  Tours</motion.li>
                            <motion.li whileHover={{ scale: 1.1 }} className='text-[5vw] w-fit mt-3   px-5  opacity-[0.5] py-2 rounded-[10rem]  border-2 border-[#F58220] text-[#F58220]  hover:bg-[#F58220] hover:text-white'>   Tours Types</motion.li>
                            <motion.li whileHover={{ scale: 1.1 }} className='text-[5vw] w-fit mt-3   px-5  opacity-[0.5] py-2 rounded-[10rem]  border-2 border-[#F58220] text-[#F58220]  hover:bg-[#F58220] hover:text-white'>   Our Branches</motion.li>
                            <motion.li whileHover={{ scale: 1.1 }} className='text-[5vw] w-fit mt-3   px-5  opacity-[0.5] py-2 rounded-[10rem]  border-2 border-[#F58220] text-[#F58220]  hover:bg-[#F58220] hover:text-white'>   Feedback</motion.li>
                            <motion.li whileHover={{ scale: 1.1 }} className='text-[5vw] w-fit mt-3   px-5  opacity-[0.5] py-2 rounded-[10rem]  border-2 border-[#F58220] text-[#F58220]  hover:bg-[#F58220] hover:text-white'>  About Us</motion.li>
                        </ul>
                    </motion.div> : null
                }




            </nav>
        </>
    )
}

export default Navbar
