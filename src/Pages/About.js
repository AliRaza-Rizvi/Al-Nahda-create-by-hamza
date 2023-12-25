"use client"
import React, { useState } from 'react'
import AboutTabs from '../Components/AboutTab';
import { SiMicrosoftteams } from 'react-icons/si';
import { RiTeamLine } from 'react-icons/ri';
import { BsPersonCircle } from 'react-icons/bs';
import Manager from "../../public/assets/manager.jpg"
import Image from 'next/image';

const About = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    console.log('activeIndex: ', activeIndex);

    const tabs = [
        {
            label: 'MANAGER',
            icon: <BsPersonCircle />
        },
        {
            label: 'TEAM LEADERS',
            icon: <SiMicrosoftteams />
        },
        {
            label: 'STAFF',
            icon: <RiTeamLine />
        },
    ];


    const managerData = [
        {
            image: Manager,
            name: "Adeel Akran",
            post: "Managing Director"
        }
    ]

    const teamData = [
        {
            image: Manager,
            name: "Bilal Rajpoot",
            post: "Member"
        },
        {
            image: Manager,
            name: "Rizvi",
            post: "Member"
        },
        {
            image: Manager,
            name: "Ali Hamza",
            post: "Member"
        },
        {
            image: Manager,
            name: "Rana Adnan",
            post: "Member"
        },
    ]

    const staffData = [
        {
            image: Manager,
            name: "Bilal Rajpoot",
            post: "Staff"
        },
        {
            image: Manager,
            name: "Rizvi",
            post: "Staff"
        },
        {
            image: Manager,
            name: "Ali Hamza",
            post: "Staff"
        },
        {
            image: Manager,
            name: "Rana Adnan",
            post: "Staff"
        },
    ]


    return (
        <div className='about-top bg-[#EFEFEF] pb-5' id='about'>
            <div className='about-content  text-center'>
                <p className='about-para text-[4rem] text-black font-semibold ' data-aos="fade-up" data-aos-delay="150">About Us</p>
                <p className='slogon-para  text-[2rem] text-[#F58820] font-semibold mb-[3rem]' data-aos="fade-up" data-aos-delay="250">Al Nahda Group of Company</p>
            </div>
            <div className='about-tabs  relative bg-[#fff] rounded-xl w-[90%] sm:w-[50%] gap-5 md:w-[33%] lg:w-[33%]  mx-auto  shadow  ' >
                <AboutTabs tabs={tabs} sendActiveIndex={(index) => setActiveIndex(index)} />
            </div>
            <div className='show-profiles w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-8'>
                {
                    activeIndex === 0 ?
                        managerData?.map((elem) => (
                            <div className='profiles w-[100%] h-[25rem] mt-4 bg-[#fff] flex justify-around flex-col items-center rounded-2xl'>
                                <Image src={elem?.image} alt='manager' className='w-[15rem] h-[15rem] rounded-full shadow bg-cover' />
                                <p className='profile-name text-[1.6rem] text-black font-medium'>{elem?.name}</p>
                                <p className='profile-para text-[1.6rem] text-[#F58820] font-medium'>({elem?.post})</p>
                            </div>
                        ))
                        :
                        activeIndex === 1 ?
                            teamData?.map((elem) => (
                                <div className='profiles w-[100%] h-[25rem] mt-4 bg-[#fff] flex justify-around flex-col items-center rounded-2xl' >
                                    <Image src={elem?.image} alt='manager' className='w-[15rem] h-[15rem] rounded-full shadow bg-cover' />
                                    <p className='profile-name text-[1.6rem] text-black font-medium'>{elem?.name}</p>
                                    <p className='profile-para text-[1.6rem] text-[#F58820]  font-medium'>({elem?.post})</p>
                                </div>
                            ))
                            :
                            activeIndex === 2 ?
                                staffData?.map((elem) => (
                                    <div className='profiles w-[100%] mt-4 h-[25rem] bg-[#fff] flex justify-around flex-col items-center rounded-2xl' >
                                        <Image src={elem?.image} alt='manager' className='w-[15rem] h-[15rem] rounded-full shadow bg-cover' />
                                        <p className='profile-name text-[1.6rem] text-black font-medium'>{elem?.name}</p>
                                        <p className='profile-para text-[1.6rem] text-[#F58820] font-medium'>({elem?.post})</p>
                                    </div>
                                ))
                                : null

                }
            </div>
        </div>
    )
}

export default About;
