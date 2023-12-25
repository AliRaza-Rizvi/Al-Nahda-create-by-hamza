import {GiWorld} from "react-icons/gi";
import {FaRegHandshake} from "react-icons/fa";
import {BsDiagram2} from "react-icons/bs";
import {SiMicrosoftteams} from "react-icons/si";
import {MdMiscellaneousServices} from "react-icons/md";
import {CgEyeAlt} from "react-icons/cg";
// import rock from "../assets/rock.jpg";
import oman from "../../public/assets/oman.jpg";
import armenia from "../../public/assets/armenia.jpg";
import maldives from "../../public/assets/maldives.jpg";
import airport from "../../public/assets/airport.jpg";

const profileData = [
    {
        icon: <FaRegHandshake/>,
        heading: "Introduction",
        description: "Established in 2020, Al Nahda Travels revolutionizes B2B travel solutions. Trusted partner, catering to modern industry needs, fostering extraordinary reputation and growth."
    },
    {
        icon: <GiWorld/>,
        heading: "Our Story",
        description: "Established in Dubai, Al Nahda Travels is a renowned global travel wholesaler. With extensive experience, it has become one of the largest and most reputable players in the tourism industry."
    },
    {
        icon: <BsDiagram2/>,
        heading: "Why Al Nahda",
        description: "Al Nahda Travels: Expertly managed travel arrangements with specialized knowledge. Hotels, sightseeing, car rental, and transfers worldwide for an unforgettable experience."
    },
    {
        icon: <SiMicrosoftteams/>,
        heading: "Our Teem",
        description: "Personalized travel service with knowledgeable staff, latest tech, unbeatable value. Attention to detail and unique partnerships for seamless, unforgettable booking experiences."
    },
    {
        icon: <MdMiscellaneousServices/>,
        heading: "Our Mission",
        description: "Simplified B2B solution for tourism services, sourcing from multiple suppliers. Preferred provider for travel agencies, fostering healthy growth and profitability."
    },
    {
        icon: <CgEyeAlt/>,
        heading: "Our Vision",
        description: "Leading travel wholesaler provider, benchmarking international standards in products, technology, and service. Setting the bar for excellence in the industry."
    },
]


const visaData = [
    {
        heading: "Airpot-To-Airpot Visa Change",
        price: "1300",
        image: airport
    },
    {
        heading: "Armenia | UAE Visa Change",
        price: "1300",
        image: armenia
    },
    {
        heading: "Oman | UAE Visa Change",
        price: "1300",
        image: oman
    },
    {
        heading: "Maldives | UAE Visa Change",
        price: "1300",
        image: maldives
    },
]

export {
    profileData,
    visaData
}