import React from 'react';
import { motion } from 'framer-motion';

const InquiryButton = () => {
    return (
        <>
            <div className='btn-div flex justify-center mt-[2rem]' >
            <motion.button className='text-[2rem] h-[6rem] w-[24rem] text-[#fff] bg-[#F58220] border-none cursor-pointer rounded-[0.4rem]' style={{boxShadow:"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,  rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}} whileHover={{ scale: 1.1 }} >Send Inquiry</motion.button>
            </div>
        </>
    )
}

export default InquiryButton;