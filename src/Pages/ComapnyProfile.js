"use client"
import React from 'react'
import ProfileCards from '../Components/ProfileCards';
import { profileData } from "../Components/StaticData";
import { useEffect } from 'react';
import { useState } from 'react';
import AOS from 'aos';


const ComapnyProfile = () => {

         // ----------- States Start -------------

         const [delayArray,setDelayArray] = useState([]);

         // ----------- States End -------------

         // ----------- Variables Start -------------

         var val = [];
         var temp = 0;
     
          // ----------- Variables End -------------
     
     
     
          // ----------- UseEffects Start -------------

          useEffect(() => {
            AOS.init({
                duration: 800,
                offset:150,
            });
        }, [])
     
         useEffect(() => {
     
             for (let i = 0; i < profileData?.length; i++) {
               
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
        <div className='branches-top text-center mb-20' id='about'>
            <div className='branches-flex'>
                <p className='head-para text-[4rem] text-[#333333c6] font-semibold mb-4' data-aos="fade-up" data-aos-delay="150">Company Profile</p>
                <p className='branch-para text-[2rem] text-[#F58820] font-semibold mb-12' style={{fontFamily:"'Pacifico', cursive",}} data-aos="fade-up" data-aos-delay="300">Al Nahda Group</p>
                {/* <p className='branch-para'>Our Branches</p> */}
                {/* <div className='circle-style'>
                    <div className='line-circle'></div>
                    <div className='circle'></div>
                    <div className='circle'></div>
                    <div className='circle'></div>
                    <div className='line-circle'></div>
                </div> */}
            </div>
            {/* <div className='branches-images'>
                <img src={AlNahda} alt='Al-Nahda Logo' />
                <img src={AlAdil} alt='Al-Adil Logo' />
                <img src={NoorAlKahima} alt='Noor-AlKahima Logo' />
            </div> */}
            <div className='profile grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-3 items-center w-[80%] my-0 mx-auto flex-wrap'>
                {
                    profileData?.map((elem,index) => (
                        <ProfileCards icon={elem?.icon} heading={elem?.heading} description={elem?.description} delay={delayArray} num={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default ComapnyProfile;