import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Members from "@/app/members/page";
import EtaKappaNu from "components/EtaKappaNu";
import { Metadata } from "next";
import NuEtaSectionOne from "@/components/NuEta/NuEtaSectionOne";

export const metadata: Metadata = {
  title: "SEC IEEE HKN",
  description: "SEC IEEE HKN Description",
};

export default function Home() {
    return (
        <>
            <ScrollUp/>
            <Hero/>
            <EtaKappaNu/>
            <AboutSectionOne/>
            <AboutSectionTwo/>
            <NuEtaSectionOne/>
            {/* <Members/>
            <Contact/> */}
        </>
    );
}
