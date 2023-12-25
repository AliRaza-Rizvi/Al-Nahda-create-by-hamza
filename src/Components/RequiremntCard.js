"use client"
import React from 'react'

const RequiremntCard = ({icon,heading,para}) => {
    return (
        <>
            <div className="pass-card">
                <div className="icon">
                    {icon}
                </div>
                <p className="pas-heading">{heading}</p>
                <p className="pas-para">{para}</p>
            </div>
        </>
    )
}

export default RequiremntCard;
