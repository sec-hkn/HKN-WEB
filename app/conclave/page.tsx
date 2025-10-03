import NuEtaSectionOne from "@/components/NuEta/NuEtaSectionOne";
// import AboutSectionTwo from "@/components/NuEta/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Welcome from "@/components/Conclave/welcome";
import Description from "@/components/Conclave/description";
import GuestOfHonor from "@/components/Conclave/guestofhonor";
import SpecializeSection from "@/components/Conclave/timeline";

export const metadata: Metadata = {
    title: "About",
    description: "About IEEE HKN",

};

const imagePaths = [
    '/images/conclave/description/1.JPG',
    '/images/conclave/description/2.JPG',
    '/images/conclave/description/3.JPG',
    '/images/conclave/description/4.JPG',
    '/images/conclave/description/5.JPG',
    '/images/conclave/description/6.JPG',
    '/images/conclave/description/7.JPG',
    '/images/conclave/description/8.JPG',
    '/images/conclave/description/9.JPG',
    '/images/conclave/description/10.JPG',
    '/images/conclave/description/11.JPG'
];

const Conclave = () => {
    return (
        <>
        <Welcome/>
        <Description imagePaths={imagePaths}/>
        <GuestOfHonor/>
        <SpecializeSection/>
        </>
    );
};

export default Conclave;
