"use client"
import React, { useRef, useState } from 'react';
// import Carousal from '../Components/Carousal';
import "animate.css/animate.min.css";
import 'animate.css';
import { SlPlane } from "react-icons/sl";
import { TiDelete } from "react-icons/ti";
import { FaCcVisa } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { RiHotelLine } from "react-icons/ri";
import { IoIosAirplane } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import Form from '../Components/Form';
import { useEffect } from 'react';
import AOS from 'aos';
// import moment from 'moment';
import { motion } from 'framer-motion';
import InquiryButton from '../Components/InquiryButton';
import Kuwait from '../../public/Country/kuwait.svg'
import Dubai from "../../public/Country/Dubai.svg";
import Austria from "../../public/Country/Austria.svg";
import Belgium from "../../public/Country/Belgium.svg";
import CzechRepublic from "../../public/Country/Czech-Republic.svg";
import Denmark from "../../public/Country/Denmark.svg";
import Estonia from "../../public/Country/Estonia.svg";
import Finland from "../../public/Country/Finland.svg";
import Germany from "../../public/Country/Germany.svg";
import Greece from "../../public/Country/Greece.svg";
import Hungary from "../../public/Country/Hungary.svg";
import IceLand from "../../public/Country/Ice-land.svg";
import Italy from "../../public/Country/Italy.svg";
import Latvia from "../../public/Country/Latvia.svg";
import Liechtenstein from "../../public/Country/Liechtenstein.svg";
import Lithuania from "../../public/Country/Lithuania.svg";
import Luxembourg from "../../public/Country/Luxembourg.svg";
import Malta from "../../public/Country/Malta.svg";
import Netherlands from "../../public/Country/Netherlands.svg";
import Norway from "../../public/Country/Norway.svg";
import Poland from "../../public/Country/Poland.svg";
import Portugal from "../../public/Country/Portugal.svg";
import Slovakia from "../../public/Country/Slovakia.svg";
import Slovenia from "../../public/Country/Slovenia.svg";
import Spain from "../../public/Country/Spain.svg";
import Switzerland from "../../public/Country/Switzerland.svg";
import Thailand from "../../public/Country/Thailand.svg";
import Malasya from "../../public/Country/Malasya.svg";
import Australia from "../../public/Country/Australia.svg";
// import Modal from '../Components/Modal';
// import { useAlert } from 'react-alert'



const Header = ({ theme }) => {

    const [flightToggle, setFlightToggle] = useState("flight")
    const [multiFlight, setMultiFlight] = useState(["flight 1"]);
    const [crossVal, setCrossVal] = useState("flight 1");
    const [radioVal, setRadioVal] = useState("return")
    const [inputHeight, setInputHeight] = useState(0);
    const [searchVal, setSearchVal] = useState("")
    const [dropVal, setDropVal] = useState({})
    const [scrollVal, setScrollVal] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [returnForm, setReturnForm] = useState({
        fromReturn: "",
        toReturn: "",
        departureDateReturn: "",
        returnDate: "",
        adultsReturn: 0,
        childrenReturn: 0,
        infantsReturn: 0
    });
    const [oneWayForm, setOneWayForm] = useState({
        fromOneWay: "",
        toOneWay: "",
        departureDateOneWay: "",
        adultsOneWay: 0,
        childrenOneWay: 0,
        infantsOneWay: 0
    });
    const [multiForm, setMultiForm] = useState({
        fromOne: "",
        fromTwo: "",
        fromThree: "",
        fromFour: "",
        fromFive: "",
        toOne: "",
        toTwo: "",
        toThree: "",
        toFour: "",
        toFive: "",
        departureDateOne: "",
        departureDateTwo: "",
        departureDateThree: "",
        departureDateFour: "",
        departureDateFive: "",
        adultsOne: 0,
        adultsTwo: 0,
        adultsThree: 0,
        adultsFour: 0,
        adultsFive: 0,
        childrenOne: 0,
        childrenTwo: 0,
        childrenThree: 0,
        childrenFour: 0,
        childrenFive: 0,
        infantsOne: 0,
        infantsTwo: 0,
        infantsThree: 0,
        infantsFour: 0,
        infantsFive: 0,
    })


    const handleClose = () => {
        setIsOpen(false);
    }


    console.log('theme: ', theme);

    const inputRef = useRef()
    // const alert = useAlert()
    console.log('inputRef: ', inputRef);


    // ----------- UseEffects Start -------------

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 150,
        });
    }, [])

    useEffect(() => {
        if (flightToggle === "visas") {
            setInputHeight(20)
        } else {
            setInputHeight(44)
        }
    }, [flightToggle])


    useEffect(() => {
        country?.filter((val) => {
            if (searchVal === "") {
                return val;
            } else if (val?.name?.toUpperCase()?.includes(searchVal?.toUpperCase())) {
                return val
            }
        })?.map((e, index = 1) => {
            setScrollVal(index + 1)
        })
    }, [searchVal])

    // ----------- UseEffects End -------------


    // ----------- Variables Start -------------

    let index = 1;

    let lastElement = multiFlight[multiFlight.length - 1];

    // ----------- Variables End -------------


    // ----------- Functions Start -------------

    const addFlightHandler = () => {
        if (multiFlight?.length === 5) {
            return
        } else {

            setMultiFlight([...multiFlight, `flight ${index + 1}`])
        }
    }

    const deleteHandler = (e, i) => {
        e.stopPropagation();
        const temp = multiFlight?.filter((elem) => elem !== i);
        setMultiFlight(temp)
    }


    const dropHandler = (e) => {
        setSearchVal(e.target.value)
    }

    const selectHandler = (name) => {
        setDropVal(name)
        setSearchVal("")
    }

    const clearHandler = () => {
        setDropVal("")
        inputRef.current.value = ""
    }

    // ----------- Functions End -------------

    //   ----------- Country Data --------------


    const country = [
        {
            name: "Dubai Visit Visa",
            image: Dubai
        },
        {
            name: "Dubai 02 Year Visa",
            image: Dubai
        },
        {
            name: "Kuwait",
            image: Kuwait
        },
        {
            name: "Austria",
            image: Austria
        },
        {
            name: "Belgium",
            image: Belgium
        },
        {
            name: "Czech Republic",
            image: CzechRepublic
        },
        {
            name: "Denmark",
            image: Denmark
        },
        {
            name: "Estonia",
            image: Estonia
        },
        {
            name: "Finland",
            image: Finland
        },
        {
            name: "Germany",
            image: Germany
        },
        {
            name: "Greece",
            image: Greece
        },
        {
            name: "Hungary",
            image: Hungary
        },
        {
            name: "Ice Land",
            image: IceLand
        },
        {
            name: "Italy",
            image: Italy
        },
        {
            name: "Latvia",
            image: Latvia
        },
        {
            name: "Liechtenstein",
            image: Liechtenstein
        },
        {
            name: "Lithuania",
            image: Lithuania
        },
        {
            name: "Luxembourg",
            image: Luxembourg
        },
        {
            name: "Malta",
            image: Malta
        },
        {
            name: "Netherlands",
            image: Netherlands
        },
        {
            name: "Norway",
            image: Norway
        },
        {
            name: "Poland",
            image: Poland
        },
        {
            name: "Portugal",
            image: Portugal
        },
        {
            name: "Slovakia",
            image: Slovakia
        },
        {
            name: "Slovenia",
            image: Slovenia
        },
        {
            name: "Spain",
            image: Spain
        },
        {
            name: "Switzerland",
            image: Switzerland
        },
        {
            name: "Thailand",
            image: Thailand
        },
        {
            name: "Malasya",
            image: Malasya
        },
        {
            name: "Australia",
            image: Australia
        },

    ]


    //   ----------- Country Data --------------

    return (
        <>
            <div className="w-full h-[88vh] mt-1 ">
                < div className='crausal-main relative'>
                    <img src='https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg' className="w-[100%] object-cover object-center  h-[88.2vh] -z-10 " />

                    {/* form button  */}
                    <div className='top-port absolute top-4 md:top-[5rem] z-[2] w-[100%] ' data-aos="fade-up" data-aos-delay="150" >

                        <div className={`sec-port flex justify-between items-center w-[60%] bg-[#fff] lg:w-[20%] rounded-[0.4rem] mx-auto my-0  `} style={{ boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px", transition: "all 1s ease-in" }} >
                            <div className={`flex justify-between flex-col ${flightToggle === "flight" ? "bg-[#F58820] text-white ease-in-out duration-500 btn-bottom" : "bg-[#fff]"} items-center text-[2.5rem] p-4 rounded-[0.4rem] cursor-pointer w-[33.33%] text-[#F58820] `} onClick={() => setFlightToggle("flight")}>
                                <SlPlane />
                                <p className='text-[1.3rem]'>Flights</p>
                            </div>
                            <div className={`flex justify-between flex-col items-center text-[2.5rem] ${flightToggle === "Visa" ? "bg-[#F58820] text-white ease-in-out duration-500 btn-bottom" : "bg-[#fff]"} p-4 rounded-lg cursor-pointer w-[33.33%] text-[#F58820]`} onClick={() => setFlightToggle("Visa")}>

                                <TfiWorld />
                                <p className='text-[1.3rem]'>Visa</p>
                            </div>
                            <div className={`flex justify-between flex-col items-center text-[2.5rem] ${flightToggle === "Hotel" ? "bg-[red] btn-bottom" : "bg-[#fff]"} p-4 rounded-lg cursor-pointer w-[33.33%] text-[#F58820]`} disabled={true}>
                                <RiHotelLine />
                                <p className='text-[1.3rem]'>Hotels</p>
                            </div>
                        </div>
                    </div>

                    {/* main form  */}
                    <motion.div
                        animate={{ height: `${inputHeight}rem` }} transition={{ type: "spring", stiffness: 400, damping: 70 }}
                        className='form-flights absolute top-24 md:top-[10rem] z-[1] w-[100%] h-[44rem] mb-[5rem]' data-aos="fade-up" data-aos-delay="300"
                        style={{ height: `${inputHeight}rem` }}
                    >

                        {
                            flightToggle === "flight" ? <div className='input-forms bg-white p-[2rem] w-[95%] lg:w-[65%] my-0 mx-auto h-[500px] rounded-[4rem] mb-[5rem] opacity-90' style={{ boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" }}>


                                <div className='flight-form'>
                                    <div className='radios flex items-center w-[100%] mt-4'>
                                        <label class="form-control  text-[1.4rem] leading-[1.1] flex gap-2">
                                            <input type="radio" className='' style={{ background: theme === "Dark" && "black", transition: "all 1s ease-in" }} name="radio" checked={radioVal === "return" ? true : false} onClick={() => setRadioVal("return")} />
                                            <p className='text-[1.3rem] text-[#333333c6]'>Return</p>
                                        </label>
                                        <label class="form-control control ml-8 text-[1.4rem] leading-[1.1] flex gap-2">
                                            <input type="radio" className='' name="radi o" style={{ background: theme === "Dark" && "black", transition: "all 1s ease-in" }} checked={radioVal === "one-way" ? true : false} onClick={() => setRadioVal("one-way")} />
                                            <p className='text-[1.3rem] text-[#333333c6]'>One-way</p>
                                        </label>
                                        <label class="form-control control ml-8 text-[1.4rem] leading-[1.1] flex gap-2">
                                            <input type="radio" className='' name="radio" style={{ background: theme === "Dark" && "black", transition: "all 1s ease-in" }} checked={radioVal === "multi-city" ? true : false} onClick={() => setRadioVal("multi-city")} />
                                            <p className='text-[1.3rem] text-[#333333c6]'>Multi-city</p>
                                        </label>
                                    </div>
                                    {

                                        radioVal === "multi-city" ?
                                            <div className='multiFlight-scenerio flex items-center w-[98%] my-0 mx-auto mt-6'>
                                                {
                                                    multiFlight?.map((elem, i) => {

                                                        index = i === 0 ? 1 : i + 1;

                                                        return (
                                                            <div className='added-Top relative flex justify-center w-[9rem] mr-8' onClick={() => setCrossVal(elem)} style={{ borderBottom: elem === crossVal && "5px solid #F58220" }}>
                                                                <div className='added-bottom flex justify-around w-[95%]'>
                                                                    <div className='plane-icon text-[1.5rem]' style={{ color: theme === "Dark" && "white", transition: "all 1s ease-in" }}><IoIosAirplane /></div>
                                                                    <p className='flight-added text-[1.2rem] font-medium cursor-pointer text-[#333333c6]' style={{ color: theme === "Dark" && "white", transition: "all 1s ease-in" }}>{elem}</p>
                                                                </div>
                                                                {
                                                                    elem === lastElement && elem !== "flight 1" ?
                                                                        <div className='cross-icon text-[1.5rem] text-gray-700 absolute -top-6 -right-2 cursor-pointer hover:text-[#F73B59]' onClick={(e) => deleteHandler(e, elem)}><TiDelete /></div>
                                                                        : null
                                                                }
                                                            </div>
                                                        )
                                                    })
                                                }
                                                <div className='add-flight cursor-pointer flex justify-between text-[1.4rem] text-[#F58820] w-[8rem] font-medium' onClick={addFlightHandler}>
                                                    <p className='add-flight-para text-[1.2rem] text-[#F58820] font-semibold'>Add Flight</p>
                                                    <FaPlus />
                                                </div>
                                            </div>
                                            :
                                            <div className='multiFlight-scenerio2 mt-[5.3rem]'></div>
                                    }

                                    {
                                        radioVal === "one-way" ?
                                            <>
                                                <Form
                                                    from={"FromOneWay"}
                                                    to={"toOneWay"}
                                                    date={"departureDateOneWay"}
                                                    fromVal={oneWayForm?.fromOneWay}
                                                    toVal={oneWayForm?.toOneWay}
                                                    dateVal={oneWayForm?.departureDateOneWay}
                                                    adults={oneWayForm?.adultsOneWay}
                                                    children={oneWayForm?.childrenOneWay}
                                                    infants={oneWayForm?.infantsOneWay}
                                                    returnVal={false}
                                                    sendFrom={(e) => setOneWayForm({ ...oneWayForm, fromOneWay: e.target.value })}
                                                    sendTo={(e) => setOneWayForm({ ...oneWayForm, toOneWay: e.target.value })}
                                                    sendDate={(e) => setOneWayForm({ ...oneWayForm, departureDateOneWay: e })}
                                                    minusFuncOne={() => { oneWayForm?.adultsOneWay <= 0 ? setOneWayForm({ ...oneWayForm, adultsOneWay: 0 }) : setOneWayForm({ ...oneWayForm, adultsOneWay: oneWayForm?.adultsOneWay - 1 }) }}
                                                    plusFuncOne={() => setOneWayForm({ ...oneWayForm, adultsOneWay: oneWayForm?.adultsOneWay + 1 })}
                                                    minusFuncTwo={() => { oneWayForm?.childrenOneWay <= 0 ? setOneWayForm({ ...oneWayForm, childrenOneWay: 0 }) : setOneWayForm({ ...oneWayForm, childrenOneWay: oneWayForm?.childrenOneWay - 1 }) }}
                                                    plusFuncTwo={() => setOneWayForm({ ...oneWayForm, childrenOneWay: oneWayForm?.childrenOneWay + 1 })}
                                                    minusFuncThree={() => { oneWayForm?.infantsOneWay <= 0 ? setOneWayForm({ ...oneWayForm, infantsOneWay: 0 }) : setOneWayForm({ ...oneWayForm, infantsOneWay: oneWayForm?.infantsOneWay - 1 }) }}
                                                    plusFuncThree={() => setOneWayForm({ ...oneWayForm, infantsOneWay: oneWayForm?.infantsOneWay + 1 })}
                                                    theme={theme}
                                                />
                                                <InquiryButton />
                                            </>
                                            :
                                            radioVal === "return" ?
                                                <>
                                                    <Form
                                                        from={"FromReturn"}
                                                        to={"toReturn"}
                                                        date={"departureDateReturn"}
                                                        fromVal={returnForm?.fromReturn}
                                                        toVal={returnForm?.toReturn}
                                                        dateVal={returnForm?.departureDateReturn}
                                                        returnDateVal={returnForm?.returnDate}
                                                        adults={returnForm?.adultsReturn}
                                                        children={returnForm?.childrenReturn}
                                                        infants={returnForm?.infantsReturn}
                                                        returnVal={true}
                                                        sendFrom={(e) => setReturnForm({ ...returnForm, fromReturn: e.target.value })}
                                                        sendTo={(e) => setReturnForm({ ...returnForm, toReturn: e.target.value })}
                                                        sendDate={(e) => setReturnForm({ ...returnForm, departureDateReturn: e })}
                                                        sendDateReturn={(e) => setReturnForm({ ...returnForm, returnDate: e })}
                                                        minusFuncOne={() => { returnForm?.adultsReturn <= 0 ? setReturnForm({ ...returnForm, adultsReturn: 0 }) : setReturnForm({ ...returnForm, adultsReturn: returnForm?.adultsReturn - 1 }) }}
                                                        plusFuncOne={() => setReturnForm({ ...returnForm, adultsReturn: returnForm?.adultsReturn + 1 })}
                                                        minusFuncTwo={() => { returnForm?.childrenReturn <= 0 ? setReturnForm({ ...returnForm, childrenReturn: 0 }) : setReturnForm({ ...returnForm, childrenReturn: returnForm?.childrenReturn - 1 }) }}
                                                        plusFuncTwo={() => setReturnForm({ ...returnForm, childrenReturn: returnForm?.childrenReturn + 1 })}
                                                        minusFuncThree={() => { returnForm?.infantsReturn <= 0 ? setReturnForm({ ...returnForm, infantsReturn: 0 }) : setReturnForm({ ...returnForm, infantsReturn: returnForm?.infantsReturn - 1 }) }}
                                                        plusFuncThree={() => setReturnForm({ ...returnForm, infantsReturn: returnForm?.infantsReturn + 1 })}
                                                        theme={theme}
                                                    />
                                                    <InquiryButton />
                                                </>

                                                : radioVal === "multi-city" ?
                                                    <>

                                                        {
                                                            crossVal === "flight 1" ?
                                                                <Form
                                                                    from={"FromOne"}
                                                                    to={"toOne"}
                                                                    date={"departureDateOne"}
                                                                    fromVal={multiForm?.fromOne}
                                                                    toVal={multiForm?.toOne}
                                                                    dateVal={multiForm?.departureDateOne}
                                                                    adults={multiForm?.adultsOne}
                                                                    children={multiForm?.childrenOne}
                                                                    infants={multiForm?.infantsOne}
                                                                    returnVal={false}
                                                                    sendFrom={(e) => setMultiForm({ ...multiForm, fromOne: e.target.value })}
                                                                    sendTo={(e) => setMultiForm({ ...multiForm, toOne: e.target.value })}
                                                                    sendDate={(e) => setMultiForm({ ...multiForm, departureDateOne: e })}
                                                                    minusFuncOne={() => { multiForm?.adultsOne <= 0 ? setMultiForm({ ...multiForm, adultsOne: 0 }) : setMultiForm({ ...multiForm, adultsOne: multiForm?.adultsOne - 1 }) }}
                                                                    plusFuncOne={() => setMultiForm({ ...multiForm, adultsOne: multiForm?.adultsOne + 1 })}
                                                                    minusFuncTwo={() => { multiForm?.childrenOne <= 0 ? setMultiForm({ ...multiForm, childrenOne: 0 }) : setMultiForm({ ...multiForm, childrenOne: multiForm?.childrenOne - 1 }) }}
                                                                    plusFuncTwo={() => setMultiForm({ ...multiForm, childrenOne: multiForm?.childrenOne + 1 })}
                                                                    minusFuncThree={() => { multiForm?.infantsOne <= 0 ? setMultiForm({ ...multiForm, infantsOne: 0 }) : setMultiForm({ ...multiForm, infantsOne: multiForm?.infantsOne - 1 }) }}
                                                                    plusFuncThree={() => setMultiForm({ ...multiForm, infantsOne: multiForm?.infantsOne + 1 })}
                                                                    theme={theme}
                                                                />
                                                                : crossVal === "flight 2" ?
                                                                    <Form
                                                                        from={"FromTwo"}
                                                                        to={"toTwo"}
                                                                        date={"departureDateTwo"}
                                                                        fromVal={multiForm?.fromTwo}
                                                                        toVal={multiForm?.toTwo}
                                                                        dateVal={multiForm?.departureDateTwo}
                                                                        adults={multiForm?.adultsTwo}
                                                                        children={multiForm?.childrenTwo}
                                                                        infants={multiForm?.infantsTwo}
                                                                        returnVal={false}
                                                                        sendFrom={(e) => setMultiForm({ ...multiForm, fromTwo: e.target.value })}
                                                                        sendTo={(e) => setMultiForm({ ...multiForm, toTwo: e.target.value })}
                                                                        sendDate={(e) => setMultiForm({ ...multiForm, departureDateTwo: e })}
                                                                        minusFuncOne={() => { multiForm?.adultsTwo <= 0 ? setMultiForm({ ...multiForm, adultsTwo: 0 }) : setMultiForm({ ...multiForm, adultsTwo: multiForm?.adultsTwo - 1 }) }}
                                                                        plusFuncOne={() => setMultiForm({ ...multiForm, adultsTwo: multiForm?.adultsTwo + 1 })}
                                                                        minusFuncTwo={() => { multiForm?.childrenTwo <= 0 ? setMultiForm({ ...multiForm, childrenTwo: 0 }) : setMultiForm({ ...multiForm, childrenTwo: multiForm?.childrenTwo - 1 }) }}
                                                                        plusFuncTwo={() => setMultiForm({ ...multiForm, childrenTwo: multiForm?.childrenTwo + 1 })}
                                                                        minusFuncThree={() => { multiForm?.infantsTwo <= 0 ? setMultiForm({ ...multiForm, infantsTwo: 0 }) : setMultiForm({ ...multiForm, infantsTwo: multiForm?.infantsTwo - 1 }) }}
                                                                        plusFuncThree={() => setMultiForm({ ...multiForm, infantsTwo: multiForm?.infantsTwo + 1 })}
                                                                        theme={theme}
                                                                    />
                                                                    : crossVal === "flight 3" ?
                                                                        <Form
                                                                            from={"FromThree"}
                                                                            to={"toThree"}
                                                                            date={"departureDateThree"}
                                                                            fromVal={multiForm?.fromThree}
                                                                            toVal={multiForm?.toThree}
                                                                            dateVal={multiForm?.departureDateThree}
                                                                            adults={multiForm?.adultsThree}
                                                                            children={multiForm?.childrenThree}
                                                                            infants={multiForm?.infantsThree}
                                                                            returnVal={false}
                                                                            sendFrom={(e) => setMultiForm({ ...multiForm, fromThree: e.target.value })}
                                                                            sendTo={(e) => setMultiForm({ ...multiForm, toThree: e.target.value })}
                                                                            sendDate={(e) => setMultiForm({ ...multiForm, departureDateThree: e })}
                                                                            minusFuncOne={() => { multiForm?.adultsThree <= 0 ? setMultiForm({ ...multiForm, adultsThree: 0 }) : setMultiForm({ ...multiForm, adultsThree: multiForm?.adultsThree - 1 }) }}
                                                                            plusFuncOne={() => setMultiForm({ ...multiForm, adultsThree: multiForm?.adultsThree + 1 })}
                                                                            minusFuncTwo={() => { multiForm?.childrenThree <= 0 ? setMultiForm({ ...multiForm, childrenThree: 0 }) : setMultiForm({ ...multiForm, childrenThree: multiForm?.childrenThree - 1 }) }}
                                                                            plusFuncTwo={() => setMultiForm({ ...multiForm, childrenThree: multiForm?.childrenThree + 1 })}
                                                                            minusFuncThree={() => { multiForm?.infantsThree <= 0 ? setMultiForm({ ...multiForm, infantsThree: 0 }) : setMultiForm({ ...multiForm, infantsThree: multiForm?.infantsThree - 1 }) }}
                                                                            plusFuncThree={() => setMultiForm({ ...multiForm, infantsThree: multiForm?.infantsThree + 1 })}
                                                                            theme={theme}
                                                                        />
                                                                        : crossVal === "flight 4" ?
                                                                            <Form
                                                                                from={"FromFour"}
                                                                                to={"toFour"}
                                                                                date={"departureDateFour"}
                                                                                fromVal={multiForm?.fromFour}
                                                                                toVal={multiForm?.toFour}
                                                                                dateVal={multiForm?.departureDateFour}
                                                                                adults={multiForm?.adultsFour}
                                                                                children={multiForm?.childrenFour}
                                                                                infants={multiForm?.infantsFour}
                                                                                returnVal={false}
                                                                                sendFrom={(e) => setMultiForm({ ...multiForm, fromFour: e.target.value })}
                                                                                sendTo={(e) => setMultiForm({ ...multiForm, toFour: e.target.value })}
                                                                                sendDate={(e) => setMultiForm({ ...multiForm, departureDateFour: e })}
                                                                                minusFuncOne={() => { multiForm?.adultsFour <= 0 ? setMultiForm({ ...multiForm, adultsFour: 0 }) : setMultiForm({ ...multiForm, adultsFour: multiForm?.adultsFour - 1 }) }}
                                                                                plusFuncOne={() => setMultiForm({ ...multiForm, adultsFour: multiForm?.adultsFour + 1 })}
                                                                                minusFuncTwo={() => { multiForm?.childrenFour <= 0 ? setMultiForm({ ...multiForm, childrenFour: 0 }) : setMultiForm({ ...multiForm, childrenFour: multiForm?.childrenFour - 1 }) }}
                                                                                plusFuncTwo={() => setMultiForm({ ...multiForm, childrenFour: multiForm?.childrenFour + 1 })}
                                                                                minusFuncThree={() => { multiForm?.infantsFour <= 0 ? setMultiForm({ ...multiForm, infantsFour: 0 }) : setMultiForm({ ...multiForm, infantsFour: multiForm?.infantsFour - 1 }) }}
                                                                                plusFuncThree={() => setMultiForm({ ...multiForm, infantsFour: multiForm?.infantsFour + 1 })}
                                                                                theme={theme}
                                                                            />
                                                                            : crossVal === "flight 5" ?
                                                                                <Form
                                                                                    from={"FromFive"}
                                                                                    to={"toFive"}
                                                                                    date={"departureDateFive"}
                                                                                    fromVal={multiForm?.fromFive}
                                                                                    toVal={multiForm?.toFive}
                                                                                    dateVal={multiForm?.departureDateFive}
                                                                                    adults={multiForm?.adultsFive}
                                                                                    children={multiForm?.childrenFive}
                                                                                    infants={multiForm?.infantsFive}
                                                                                    returnVal={false}
                                                                                    sendFrom={(e) => setMultiForm({ ...multiForm, fromFive: e.target.value })}
                                                                                    sendTo={(e) => setMultiForm({ ...multiForm, toFive: e.target.value })}
                                                                                    sendDate={(e) => setMultiForm({ ...multiForm, departureDateFive: e })}
                                                                                    minusFuncOne={() => { multiForm?.adultsFive <= 0 ? setMultiForm({ ...multiForm, adultsFive: 0 }) : setMultiForm({ ...multiForm, adultsFive: multiForm?.adultsFive - 1 }) }}
                                                                                    plusFuncOne={() => setMultiForm({ ...multiForm, adultsFive: multiForm?.adultsFive + 1 })}
                                                                                    minusFuncTwo={() => { multiForm?.childrenFive <= 0 ? setMultiForm({ ...multiForm, childrenFive: 0 }) : setMultiForm({ ...multiForm, childrenFive: multiForm?.childrenFive - 1 }) }}
                                                                                    plusFuncTwo={() => setMultiForm({ ...multiForm, childrenFive: multiForm?.childrenFive + 1 })}
                                                                                    minusFuncThree={() => { multiForm?.infantsFive <= 0 ? setMultiForm({ ...multiForm, infantsFive: 0 }) : setMultiForm({ ...multiForm, infantsFive: multiForm?.infantsFive - 1 }) }}
                                                                                    plusFuncThree={() => setMultiForm({ ...multiForm, infantsFive: multiForm?.infantsFive + 1 })}
                                                                                    theme={theme}
                                                                                />
                                                                                : null
                                                        }
                                                        <InquiryButton />
                                                    </> : null
                                    }

                                </div>




                            </div> : null
                        }
                        {
                            flightToggle === "Visa" ? <div className='input-forms bg-[#fff] p-[2rem] w-[65%] my-0 mx-auto h-[45%] rounded-[4rem] mb-[5rem] opacity-90' style={{ boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" }}>

                                <div className='visa-Top w-[80%] h-[100%] my-0 mx-auto relative flex justify-between items-center'>
                                    <div className='visa-flex flex justify-between items-center w-[100%]'>
                                        {
                                            dropVal?.name?.length > 0 ?
                                                <div className='render-div'>
                                                    <img src={dropVal?.image} className='render-img' alt='country icon' />
                                                    <p className='render-para'>{dropVal?.name}</p>
                                                </div>
                                                :
                                                <input className='w-[69%] h-[4.5rem] pl-4 pr-4 rounded-[0.8rem] border border-[#333333c6] focus:text-[#495057] focus:bg-[#fff] focus:border-[#F58820] focus:outline-0 focus:shadow-[#F58820]' type='text' ref={inputRef} placeholder='Enter your Nationality to Begin' onChange={dropHandler} />

                                        }
                                        <div className='cross-icon' onClick={clearHandler}>{dropVal?.name?.length > 0 && <MdOutlineCancel />}</div>
                                        <div className='visa-btn'>
                                            <motion.button whileHover={{ scale: 1.1 }} className='btn-check'
                                                onClick={() => {
                                                    if (dropVal?.name?.length > 0) {
                                                        setIsOpen(true);
                                                    } else {
                                                        alert.show('Please select country!', {
                                                            timeout: 2000,
                                                            type: 'info',
                                                        })
                                                    }

                                                }}
                                            >Check requirements</motion.button>
                                        </div>
                                    </div>
                                </div>
                            </div> : null
                        } {
                            flightToggle === "visas" &&
                            searchVal?.length > 0 &&
                            <div className='country-drop-top'>
                                {
                                    searchVal?.length > 0 &&
                                    <ul className='drop-ul' style={{ overflowY: scrollVal >= 5 && "scroll" }}>
                                        {
                                            country?.filter((val) => {
                                                if (searchVal === "") {
                                                    return val;
                                                } else if (val?.name?.toUpperCase()?.includes(searchVal?.toUpperCase())) {
                                                    return val;
                                                }
                                            })?.map((elem) => (
                                                <li className='drop-li' onClick={() => selectHandler(elem)}>
                                                    <img src={elem?.image} className='drop-img' alt='country icon' />
                                                    <p className='drop-para'>{elem?.name}</p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                }
                            </div>
                        }
                    </motion.div>
                </div>
            </div>
            {/* <Modal open={isOpen} handleClose={handleClose} country={dropVal?.name} /> */}
        </>
    )
}

export default Header