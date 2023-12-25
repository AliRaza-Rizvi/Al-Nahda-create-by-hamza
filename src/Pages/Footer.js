"use client"
import React, { useEffect } from 'react';
// import Logo from "../assets/logo2.png";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineClockCircle, AiOutlineInstagram, AiTwotonePhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaMap, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AOS from 'aos';
import { motion } from "framer-motion";

const Footer = () => {


    // ----------- UseEffcets Start -------------

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 150,
        });
    }, [])

    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    // ----------- UseEffcets End -------------

    return (
        <div className='footer-top bg-[#000D2D] w-[100%]' id='contact'>
            <div className="footer-bottom w-[90%] lg:h-[40rem] mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 pt-20 ">
                <div className='info-footer w-full mb-12' data-aos="fade-right" data-aos-delay="150">
                    <p className='social-para text-[2.5rem] text-white font-semibold'>Social Links</p>
                    <p className='footer-para text-gray-500 text-[1.3rem] mt-8'>Connect with social platforms.</p>
                    <div className='footer-icons flex mb-4'>
                        <div className='icon text-[2rem] border-2 border-[#F58820] rounded-full w-[4rem] h-[4rem] flex justify-center items-center text-[#F58820] cursor-pointer mr-4 mt-6 hover:bg-[#F58820] hover:text-white hover:transition-all hover:duration-300 hover:ease-in' onClick={() => window.open("https://www.facebook.com/Alnahdatourism.Dubai", '_blank', 'noreferrer')}><CgFacebook /></div>
                        <div className='icon text-[2rem] border-2 border-[#F58820] rounded-full w-[4rem] h-[4rem] flex justify-center items-center text-[#F58820] cursor-pointer mr-4 mt-6 hover:bg-[#F58820] hover:text-white hover:transition-all hover:duration-300 hover:ease-in' onClick={() => window.open("https://www.instagram.com/alnahdagroup.uae/", '_blank', 'noreferrer')}><AiOutlineInstagram /></div>
                        <div className='icon text-[2rem] border-2 border-[#F58820] rounded-full w-[4rem] h-[4rem] flex justify-center items-center text-[#F58820] cursor-pointer mr-4 mt-6 hover:bg-[#F58820] hover:text-white hover:transition-all hover:duration-300 hover:ease-in' onClick={() => window.open("https://www.tiktok.com/@alnahdatravels", '_blank', 'noreferrer')}><FaTiktok /></div>
                        <div className='icon text-[2rem] border-2 border-[#F58820] rounded-full w-[4rem] h-[4rem] flex justify-center items-center text-[#F58820] cursor-pointer mr-4 mt-6 hover:bg-[#F58820] hover:text-white hover:transition-all hover:duration-300 hover:ease-in'onClick={() => window.open("https://wa.me/+971503102049", '_blank', 'noreferrer')}><BsWhatsapp /></div>
                    </div>
                </div>
                <div className='quick-links' data-aos="fade-right" data-aos-delay="300">
                    <p className='link-para text-[2.5rem] text-white font-semibold'>Quick Links</p>
                    <ul className='mt-6'>
                        <div className='link-flex flex mb-4 items-center'>
                            <div className='icon text-[2rem] text-[#F58820]'><BiRightArrowAlt /></div>
                            <motion.li className='text-[1.5rem] text-gray-500 list-none ml-2 hover:text-[#F58820]'  whileHover={{ paddingLeft: 10 }} transition={{ duration: 0.2 }}><a href="/"
                                onClick={e => {
                                    let home = document.getElementById("home");
                                    e.preventDefault();
                                    home && home.scrollIntoView({ behavior: "smooth", block: "start" });
                                    window.history.pushState("home", "home", "/home");
                                }}>
                                Home
                            </a>
                            </motion.li>
                        </div>
                        <div className='link-flex flex mb-4 items-center'>
                            <div className='icon text-[2rem] text-[#F58820]'><BiRightArrowAlt /></div>
                            <motion.li  className='text-[1.5rem] text-gray-500 ml-2 hover:text-[#F58820]'  whileHover={{ paddingLeft: 10 }} transition={{ duration: 0.2 }} ><a href="/"
                                onClick={e => {
                                    let visa = document.getElementById("visa");
                                    e.preventDefault();
                                    visa && visa.scrollIntoView({ behavior: "smooth", block: "start" });
                                    window.history.pushState("visa", "visa", "/visa");
                                }}>
                                Visa
                            </a>
                            </motion.li>
                        </div>
                        <div className='link-flex flex mb-4 items-center'>
                            <div className='icon text-[2rem] text-[#F58820]'><BiRightArrowAlt /></div>
                            <motion.li  className='text-[1.5rem] text-gray-500 ml-2 hover:text-[#F58820]'  whileHover={{ paddingLeft: 10 }} transition={{ duration: 0.2 }} ><a href="/"
                                onClick={e => {
                                    let tours = document.getElementById("tours");
                                    e.preventDefault();
                                    tours && tours.scrollIntoView({ behavior: "smooth", block: "start" });
                                    window.history.pushState("tours", "tours", "/tours");
                                }}>
                                Tours
                            </a>
                            </motion.li>
                        </div>
                        <div className='link-flex flex mb-4 items-center'>
                            <div className='icon text-[2rem] text-[#F58820]'><BiRightArrowAlt /></div>
                            <motion.li  className='text-[1.5rem] text-gray-500 ml-2 hover:text-[#F58820]'  whileHover={{ paddingLeft: 10 }} transition={{ duration: 0.2 }} ><a href="/"
                                onClick={e => {
                                    let type = document.getElementById("type");
                                    e.preventDefault();
                                    type && type.scrollIntoView({ behavior: "smooth", block: "start" });
                                    window.history.pushState("tours type", "tours type", "/tours type");
                                }}>
                                Tours Types
                            </a>
                            </motion.li>
                        </div>
                        <div className='link-flex flex mb-4 items-center'>
                            <div className='icon text-[2rem] text-[#F58820]'><BiRightArrowAlt /></div>
                            <motion.li  className='text-[1.5rem] text-gray-500 ml-2 hover:text-[#F58820]'  whileHover={{ paddingLeft: 10 }} transition={{ duration: 0.2 }} ><a href="/"
                                onClick={e => {
                                    let branches = document.getElementById("branches");
                                    e.preventDefault();
                                    branches && branches.scrollIntoView({ behavior: "smooth", block: "start" });
                                    window.history.pushState("branches", "branches", "/branches");
                                }}>
                                Our Branches
                            </a>
                            </motion.li>
                        </div>
                        <div className='link-flex flex mb-4 items-center'>
                            <div className='icon text-[2rem] text-[#F58820]'><BiRightArrowAlt /></div>
                            <motion.li  className='text-[1.5rem] text-gray-500 ml-2 hover:text-[#F58820]'  whileHover={{ paddingLeft: 10 }} transition={{ duration: 0.2 }} ><a href="/"
                                onClick={e => {
                                    let feedback = document.getElementById("feedback");
                                    e.preventDefault();
                                    feedback && feedback.scrollIntoView({ behavior: "smooth", block: "start" });
                                    window.history.pushState("feedback", "feedback", "/feedback");
                                }}>
                                Feedback
                            </a>
                            </motion.li>
                        </div>
                        <div className='link-flex flex mb-4 items-center'>
                            <div className='icon text-[2rem] text-[#F58820]'><BiRightArrowAlt /></div>
                            <motion.li  className='text-[1.5rem] text-gray-500 ml-2 hover:text-[#F58820]'  whileHover={{ paddingLeft: 10 }} transition={{ duration: 0.2 }} ><a href="/"
                                onClick={e => {
                                    let about = document.getElementById("about");
                                    e.preventDefault();
                                    about && about.scrollIntoView({ behavior: "smooth", block: "start" });
                                    window.history.pushState("about", "about", "/about");
                                }}>
                                About US
                            </a>
                            </motion.li>
                        </div>
                    </ul>
                </div>
                <div className='address w-full' data-aos="fade-right" data-aos-delay="450">
                    <p className='address-para text-[2.5rem] text-white font-semibold'>Contact Info</p>
                    <div className='contact-top mt-6'>
                        <div className='list-contact  flex items-center mb-4'>
                            <div className='icon text-[2rem] text-[#F58820]'><FaMap /></div>
                            <p className='text-[1.5rem] text-gray-600 ml-4'>Deria dubai, UAE</p>
                        </div>
                        <div className='list-contact  flex items-center mb-4'>
                            <div className='icon text-[2rem] text-[#F58820]'><AiTwotonePhone /></div>
                            <p  className='text-[1.5rem] text-gray-600 ml-4'>+971 4 554 8841</p>
                        </div>
                        <div className='list-contact  flex items-center mb-4'>
                            <div className='icon text-[2rem] text-[#F58820]'><MdEmail /></div>
                            <p className='text-[1.5rem] text-gray-600 ml-4'>info@alnahdatourism.com</p>
                        </div>
                        <div className='list-contact  flex items-center mb-4'>
                            <div className='icon text-[2rem] text-[#F58820]'><AiOutlineClockCircle /></div>
                            <p className='text-[1.5rem] text-gray-600 ml-4'>24/7</p>
                        </div>
                    </div>
                </div>
                <div className='contact-box w-full' data-aos="fade-right" data-aos-delay="600">
                    <p className='para-con text-[2.5rem] text-white font-semibold'>Newsletter</p>
                    <p className='para-cont text-[1.5rem] text-gray-500 mt-4'>Subscribe For Latest Updates</p>
                    <input type='email' placeholder='enter your email' className='text-gray-500 text-[1.5rem] border-2 border-[#F58820] w-[30rem] h-[5rem] pl-4 pr-4 mt-3 rounded-[1rem] bg-transparent focus:outline-none placeholder:text-gray-500' />
                    <div className='con-btn '>
                        <motion.button  className='py-[0.7rem] px-[3rem] rounded-[10rem] text-[1.6rem] bg-transparent border-2 border-[#F58820] text-[#F58820] mt-8 hover:bg-[#F58820] hover:text-white hover:cursor-pointer ' whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>Subscribe</motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
