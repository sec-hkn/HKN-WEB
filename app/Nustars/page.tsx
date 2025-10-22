import Nustars from "@/components/Nustars/index";
// import AboutSectionTwo from "@/components/NuEta/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nustars",
    description: "Meet the Twilights of the month",

};

const AboutPage = () => {
    return (
        <>
            {/*<Breadcrumb*/}
            {/*    pageName="About"*/}
            {/*    description="Where innovation meets humanity, IEEE pioneers technology, shaping a better future through excellence, collaboration, and global impact."*/}
            {/*/>*/}
            <Nustars />
            {/*<AboutSectionTwo />*/}
        </>
    );
};

export default AboutPage;
