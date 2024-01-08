import React, { useState } from 'react';
import { RiArrowLeftRightFill } from "react-icons/ri";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { DatePicker, Space } from 'antd';
// import "animate.css/animate.min.css";
// import 'animate.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Form = (
    {
        from,
        to,
        fromVal,
        toVal,
        dateVal,
        returnDateVal,
        adults,
        children,
        infants,
        date,
        sendFrom,
        sendTo,
        sendDate,
        sendDateReturn,
        minusFuncOne,
        plusFuncOne,
        minusFuncTwo,
        plusFuncTwo,
        minusFuncThree,
        plusFuncThree,
        returnVal,
        theme
    }
) => {


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
            <div className='form  w-[97.5%] mx-auto md:flex md:justify-between md:items-center md:mt-4 '>
                <div  className='autocomplete w-[90%] md:w-[45%]' data-aos="zoom-in" data-aos-delay="150">
                    <label htmlFor={from} className='label hidden md:inline-block text-[1.6rem] text-[#333333c6]'>From</label>
                    <input type='text' className='w-[100%] h-[5rem] text-[2rem] border border-[#333333c6] md:mt-4 pl-4 pr-4 text-[#333333c6] uppercase font-bold focus:outline-none placeholder:capitalize placeholder:text-[1.5rem] placeholder:font-normal' style={{ background: theme === "Dark" && "black", transition: "all 1s ease-in" }} value={fromVal} placeholder='From' id={from} onChange={(e) => sendFrom(e)} />
                </div>
                <div className='leftRight  text-[3rem] text-[#BABABA] mt-4 md:mt-16' data-aos="zoom-in" data-aos-delay="300">
                    <RiArrowLeftRightFill />
                </div>
                <div className='autocomplete w-[90%] md:w-[45%]' data-aos="zoom-in" data-aos-delay="150">
                    <label htmlFor={to} className='label hidden md:inline-block text-[1.6rem] text-[#333333c6]'>To</label>
                    <input type='text' className='w-[100%] h-[5rem] text-[2rem] border border-[#333333c6] mt-4 pl-4 pr-4 text-[#333333c6] uppercase font-bold focus:outline-none placeholder:capitalize placeholder:text-[1.5rem] placeholder:font-normal' style={{ background: theme === "Dark" && "black", transition: "all 1s ease-in" }} value={toVal} placeholder='To' id={to} onChange={(e) => sendTo(e)} />
                </div>
            </div>
            <div className='form2 w-[97.5%]  flex justify-between items-center my-[2rem] mx-auto' >
                <div className='autocomplete w-[46%] relative' data-aos="zoom-in" data-aos-delay="600">
                    {/* <label htmlFor={date} className='label text-[1.6rem] text-[#333333c6]'>Departure</label> */}
                    <div className='autocomplete w-[100%]' data-aos="zoom-in" data-aos-delay="150">
                        <label htmlFor={date} className='label text-[1.6rem] text-[#333333c6]'>Departure</label>
                        <input type='date' className='w-[98%] h-[5rem] text-[1.5rem] border border-[#333333c6] mt-4 pl-4 pr-4 text-[#333333c6] focus:outline-none placeholder:capitalize placeholder:text-[1.5rem] placeholder:font-normal' style={{ background: theme === "Dark" && "black", transition: "all 1s ease-in" }} value={dateVal} onChange={(e) => sendDate(e)} size={'small'} id={date} />
                    </div>
                    {/* <div className='datepicker-input'>
                        <Space direction="vertical" >
                            <DatePicker   value={dateVal} onChange={(e) => sendDate(e)} size={'small'} id={date} />
                        </Space>
                    </div> */}
                </div>
                {
                    returnVal ?
                        <div className='autocomplete w-[46%] relative' data-aos="zoom-in" data-aos-delay="750">
                            {/* <label htmlFor='return' className='label'>Return</label> */}
                            <div className='autocomplete w-[98%] ' data-aos="zoom-in" data-aos-delay="150">
                                <label htmlFor='return' className='label text-[1.6rem] text-[#333333c6]'>Return</label>
                                <input type='date' className='w-[100%] h-[5rem] text-[1.5rem] border border-[#333333c6] mt-4 pl-4 pr-4 text-[#333333c6] focus:outline-none placeholder:capitalize placeholder:text-[1.5rem] placeholder:font-normal' onChange={(e) => sendDateReturn(e)} value={returnDateVal} style={{ background: theme === "Dark" && "black", transition: "all 1s ease-in" }} size={'small'} id='return'  />
                            </div>
                            {/* <div className='datepicker-input'>
                                <Space direction="vertical">
                                    <DatePicker onChange={(e) => sendDateReturn(e)} value={returnDateVal} style={{ background: theme === "Dark" && "black", transition: "all 1s ease-in" }} size={'small'} id='return' />
                                </Space>
                            </div> */}
                        </div>
                        : null
                }
            </div>
            <div className='formThree w-[97.5%] flex justify-between items-center my-0 mx-auto'>
                <div data-aos="zoom-in" data-aos-delay="900">
                    <p className='inc-para text-[0.8rem] md:text-[1.6rem] text-[#333333c6] mb-4'>ADULTS 12+years</p>
                    <div className='inc-machine flex items-center'>
                        <div className='machine-iconMinus text-[2rem] text-[#333333c6] flex justify-center items-center border border-[#333333c6] h-10 md:h-[4.5rem] w-12 md:w-[6rem] cursor-pointer border-r-0 ' onClick={minusFuncOne}><AiOutlineMinus /></div>
                        <div className='machine-value border border-[#333333c6] h-10 md:h-[4.5rem] w-[3rem] md:w-[10rem] flex justify-center items-center text-[1.6rem] text-[#333333c6]'>{adults}</div>
                        <div className='machine-iconPlus text-[2rem] text-[#333333c6] flex justify-center items-center border border-[#333333c6] h-10 md:h-[4.5rem] w-12 md:w-[6rem] cursor-pointer border-l-0' onClick={plusFuncOne}><AiOutlinePlus /></div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-delay="1050">
                    <p className='inc-para text-[0.8rem] md:text-[1.6rem] text-[#333333c6] mb-4'>CHILDREN 2 - Under 12 years</p>
                    <div className='inc-machine flex items-center'>
                        <div className='machine-iconMinus  text-[2rem] text-[#333333c6] flex justify-center items-center border border-[#333333c6] h-10 md:h-[4.5rem] w-12 md:w-[6rem] cursor-pointer border-r-0 ' onClick={minusFuncTwo}><AiOutlineMinus /></div>
                        <div className='machine-value border border-[#333333c6] h-10 md:h-[4.5rem] w-[3rem] md:w-[10rem]  flex justify-center items-center text-[1.6rem] text-[#333333c6]'>{children}</div>
                        <div className='machine-iconPlus text-[2rem] text-[#333333c6] flex justify-center items-center border border-[#333333c6] h-10 md:h-[4.5rem] w-12 md:w-[6rem] cursor-pointer border-l-0' onClick={plusFuncTwo}><AiOutlinePlus /></div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-delay="1200">
                    <p className='inc-para text-[0.8rem] md:text-[1.6rem] text-[#333333c6] mb-4'>INFANTS Under 2 years</p>
                    <div className='inc-machine flex items-center'>
                        <div className='machine-iconMinus  text-[2rem] text-[#333333c6] flex justify-center items-center border border-[#333333c6] h-10 md:h-[4.5rem] w-12 md:w-[6rem] cursor-pointer border-r-0' onClick={minusFuncThree}><AiOutlineMinus /></div>
                        <div className='machine-value border border-[#333333c6] h-10 md:h-[4.5rem] w-[3rem] md:w-[10rem]  flex justify-center items-center text-[1.6rem] text-[#333333c6]'>{infants}</div>
                        <div className='machine-iconPlus text-[2rem] text-[#333333c6] flex justify-center items-center border border-[#333333c6]  h-10 md:h-[4.5rem] w-12 md:w-[6rem] cursor-pointer border-l-0' onClick={plusFuncThree}><AiOutlinePlus /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;
