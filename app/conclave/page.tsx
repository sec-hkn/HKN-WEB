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

const imagePaths = ['/images/members/24/harishvp.png', '/images/members/24/rahulv.png'];

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
