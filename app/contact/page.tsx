import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Where voices unite and connections thrive - let's build our community together."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
