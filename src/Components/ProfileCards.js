import React from 'react'

const ProfileCards = ({icon,heading,description,delay,num}) => {
    return (
        <div className='profile-box bg-[#fff] p-8 w-[100%] h-full rounded-[1rem] mb-4 hover:outline-4 hover:outline hover:outline-[#F58820]' style={{boxShadow:" rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",}} data-aos="zoom-in-up" data-aos-delay={delay[num]}>
            <div className='profile-icon text-[4rem] text-[#F58820] flex justify-center  items-center mb-8'>{icon}</div>
            <p className='profile-heading text-[2rem] font-semibold text-[#333333c6]'>{heading}</p>
            <p className='profile-decription text-[1.4rem] text-[#BABABA] text-center mt-4'>{description}</p>
        </div>
    )
}

export default ProfileCards;
