"use client"
import React, { useEffect } from 'react';
import ALADIL from '../../public/SVG/ALADIL';
import Noor from '../../public/SVG/Noor';
import AlNahdaGroup from '../../public/SVG/AlNahdaGroup';
import ALNahda from '../../public/SVG/ALNahda';
import AOS from 'aos';


const Branches = () => {


    // ----------- UseEffcets Start -------------

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 150,
        });
    }, [])



    // ----------- UseEffcets End -------------

    return (
        <div className='branches-top w-[100%] h-full mb-20' id='branches'>
            <div className='branches-content text-center'>
                <p className='branches-para text-[4rem] text-[#333333c6] font-semibold' data-aos="fade-up" data-aos-delay="150">Business Partner</p>
                <p className='slogon-para text-[2rem] text-[#F58820] font-semibold mb-12' style={{fontFamily:"'Pacifico', cursive",}} data-aos="fade-up" data-aos-delay="250">Our Branches</p>
            </div>
            <div className='branches-logo grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center w-[90%] my-0 mx-auto h-[100%]' >
                <div className='logos w-[80%]  ' data-aos="zoom-in" data-aos-delay="150">
                    <ALADIL />
                </div>
                <div className='logos w-[80%]  ' data-aos="zoom-in" data-aos-delay="250">
                    <Noor />
                </div>
                <div className='logos w-[80%]  ' data-aos="zoom-in" data-aos-delay="350">
                    <AlNahdaGroup />
                </div>
                <div className='logos w-[80%]  ' data-aos="zoom-in" data-aos-delay="450">
                    <ALNahda />
                </div>
            </div>
        </div>
    )
}

export default Branches;
