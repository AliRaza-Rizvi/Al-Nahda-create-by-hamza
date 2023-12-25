"use client"
import React, { useEffect, useState, useRef } from 'react';

const Progress = () => {
  const [destination, setDestination] = useState(0);
  const [booking, setBooking] = useState(0);
  const [travel, setTravel] = useState(0);
  const [award, setAward] = useState(0);

  const progressRef = useRef(null);

  useEffect(() => {
    const targetCount1 = 1200000;
    const duration1 = 2000;
    const step1 = Math.ceil(targetCount1 / (duration1 / 10));
    let currentCount1 = 0;

    const targetCount2 = 1000000;
    const duration2 = 2000;
    const step2 = Math.ceil(targetCount2 / (duration2 / 10));
    let currentCount2 = 0;

    const targetCount3 = 245200;
    const duration3 = 2000;
    const step3 = Math.ceil(targetCount3 / (duration3 / 10));
    let currentCount3 = 0;

    const targetCount4 = 200;
    const duration4 = 2000;
    const step4 = Math.ceil(targetCount4 / (duration4 / 10));
    let currentCount4 = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer1 = setInterval(() => {
              currentCount1 += step1;
              if (currentCount1 >= targetCount1) {
                currentCount1 = targetCount1;
                clearInterval(timer1);
              }
              setBooking(currentCount1);
            }, 15);

            const timer2 = setInterval(() => {
              currentCount2 += step2;
              if (currentCount2 >= targetCount2) {
                currentCount2 = targetCount2;
                clearInterval(timer2);
              }
              setDestination(currentCount2);
            }, 15);

            const timer3 = setInterval(() => {
              currentCount3 += step3;
              if (currentCount3 >= targetCount3) {
                currentCount3 = targetCount3;
                clearInterval(timer3);
              }
              setTravel(currentCount3);
            }, 15);

            const timer4 = setInterval(() => {
              currentCount4 += step4;
              if (currentCount4 >= targetCount4) {
                currentCount4 = targetCount4;
                clearInterval(timer4);
              }
              setAward(currentCount4);
            }, 15);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="progress-top bg-[#fff] w-[95%] md:w-[80%] my-0 mx-auto h-[100%] rounded-b-[0.8rem] rounded-bl-[0.8rem] mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center p-4" data-aos="fade-up" data-aos-delay="200" ref={progressRef}>
      <div className="progress-content w-[100%]  border-r border-[#707070] one-content">
        <p className="progress-para-1 text-[4rem] text-[#F58820] text-center">{booking.toLocaleString()}</p>
        <p className="progress-para-2 text-[2rem] text-[#333333c6] text-center">Bookings</p>
      </div>
      <div className="progress-content w-[100%]  border-r border-[#707070] one-content">
        <p className="progress-para-1 text-[4rem] text-[#F58820] text-center">{destination.toLocaleString()}</p>
        <p className="progress-para-2 text-[2rem] text-[#333333c6] text-center">Destinations Explored</p>
      </div>
      <div className="progress-content w-[100%]  border-r border-[#707070] one-content">
        <p className="progress-para-1 text-[4rem] text-[#F58820] text-center">{travel.toLocaleString()}</p>
        <p className="progress-para-2 text-[2rem] text-[#333333c6] text-center">Happy Travellers</p>
      </div>
      <div className="progress-content w-[100%]  ">
        <p className="progress-para-1 text-[4rem] text-[#F58820] text-center">{award}</p>
        <p className="progress-para-2 text-[2rem] text-[#333333c6] text-center">Awards Won</p>
      </div>
    </div>
  );
};

export default Progress;
