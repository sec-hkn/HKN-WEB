"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const timelines = {
  "Day 1": [
    { 
        id: 1, 
        title: "PRE-INAUGURAL SESSION – A GRAND BEGINNING", 
        description: "The event commenced with a serene prayer song, followed by a captivating Bharatanatyam performance by students of Sri Sairam Engineering College. The lighting of the Kuthuvilakku symbolized the illumination of knowledge in humanitarian technology. Key dignitaries, including Mr. Rajendran Dhandapani and Mr. Sampath Kumar Veeraraghavan, graced the occasion.", 
        image: "/images/conclave/timeline/day1/lightening.JPG" 
    },
    { 
        id: 2, 
        title: "WELCOME ADDRESS & HONORING GUESTS", 
        description: "Dr. K. Porkumaran, Principal of Sri Sairam Engineering College and Chairman of IEEE Madras Section, delivered an insightful welcome address, recognizing top IEEE student contributors and highlighting the significance of technological innovation. Chief Guest Mr. Rajendran Dhandapani was honored by Dr. Sai Prakash Leo Muthu for his contributions to technology and education.", 
        image: "/images/conclave/timeline/day1/welcome_address.JPG" 
    },
    { 
        id: 3, 
        title: "INAUGURAL ADDRESS BY DR. PALANIVEL THIAGA RAJAN", 
        description: "Dr. Rajan, Minister for IT, Tamil Nadu, shared his vision for digital transformation in the state. He encouraged students to embrace research, technology, and ethical innovation to drive humanitarian progress.", 
        image: "/images/conclave/timeline/day1/inaugural_address.JPG" 
    },
    { 
        id: 4, 
        title: "LAUNCH OF EOMS STANDARDS & FUNDING FOR HUMANITARIAN INITIATIVES", 
        description: "The Sairam Educational Organization Management System (EOMS) was officially launched. A funding cheque of ₹25,00,000 was presented to Brahmam and ARAM Foundation, reinforcing Sairam’s commitment to global humanitarian projects.", 
        image: "/images/conclave/timeline/day1/eoms_launch.JPG" 
    },
    { 
        id: 5, 
        title: "KEYNOTE SPEECH BY MR. SAMPATH KUMAR VEERARAGHAVAN", 
        description: "Mr. Veeraraghavan, an esteemed global technologist, shared his journey in humanitarian engineering and how IEEE’s initiatives have made a global impact. He encouraged students to leverage engineering solutions to address real-world challenges.", 
        image: "/images/conclave/timeline/day1/keynote.JPG" 
    },
    { 
        id: 6, 
        title: "WORKSHOP: TELECOMMUNICATION & HUMANITARIAN TECHNOLOGY", 
        description: "Mr. Thiru Kumaran Ranganathan from Nokia discussed the impact of 5G and 6G on humanitarian technology, emphasizing IoT-powered smart networks for enhanced rural connectivity and emergency response during disasters.", 
        image: "/images/conclave/timeline/day1/telecom_workshop.JPG" 
    },
    { 
        id: 7, 
        title: "WORKSHOP: DRONES IN DISASTER RELIEF & AGRICULTURE", 
        description: "Mr. Madhu GN of Garuda Aerospace demonstrated AI-integrated drones for search-and-rescue missions, flood monitoring, and agricultural advancements through precision farming.", 
        image: "/images/conclave/timeline/day1/drones_workshop.JPG" 
    },
    { 
        id: 8, 
        title: "WORKSHOP: AI & OPEN-SOURCE SOLUTIONS FOR HUMANITARIAN IMPACT", 
        description: "Mr. Ashok Balasubramanian, CEO of Open Weaver, explored how AI-powered chatbots and open-source software enhance crisis response, mental health support, and famine prediction in underserved regions.", 
        image: "/images/conclave/timeline/day1/ai_workshop.JPG" 
    },
    { 
        id: 9, 
        title: "WORKSHOP: HAPTIC TECHNOLOGY & ASSISTIVE DEVICES", 
        description: "Dr. M. Manivannan from IIT Madras introduced haptic feedback gloves for the visually impaired and AI-driven prosthetic limbs, enhancing accessibility and independence for individuals with disabilities.", 
        image: "/images/conclave/timeline/day1/haptic_workshop.JPG" 
    },
    { 
        id: 10, 
        title: "WORKSHOP: AI-DRIVEN ROAD SAFETY & SMART TELEMATICS", 
        description: "Mr. Suresh Venugopal of Cambridge Mobile Telematics discussed AI-powered sensors in vehicles for driver monitoring, crash prevention, and real-time transport safety enhancements.", 
        image: "/images/conclave/timeline/day1/road_safety_workshop.JPG" 
    },
    { 
        id: 11, 
        title: "WORKSHOP: CORPORATE SOCIAL RESPONSIBILITY & TECHNOLOGY", 
        description: "Mr. Stanley George from Hexaware Technologies emphasized the role of corporate responsibility in humanitarian technology, showcasing AI, IoT, and blockchain-driven projects making a global impact.", 
        image: "/images/conclave/timeline/day1/csr_workshop.JPG" 
    }
],
  "Day 2": [
     { id: 11, 
      title: "HONORING THE CHIEF GUEST", 
      description: "Mr. Rajendran Dhandapani, Director Engineering at Zoho Corporation, was honored for his outstanding contributions to technology. He is a visionary leader known for spearheading mobile development at Zoho and promoting alternative education through Zoho Schools of Learning.", 
      image: "/images/conclave/guestofhonor/dhandapani.jpg" 
     },
    { 
        id: 12, 
        title: "KEYNOTE ADDRESS BY MR. ARUN JAIN", 
        description: "Mr. Arun Jain, Founder of Polaris and Intellect Design Arena, emphasized the importance of an entrepreneurial mindset for social impact. He highlighted design thinking, human-centric innovation, and ethical leadership as key drivers for technology-driven social progress.", 
        image: "/images/conclave/guestofhonor/dhandapani.jpg" 
    },
    { 
        "id": 13, 
        "title": "INSIGHTFUL ADDRESS BY MR. HARI BALACHANDRAN", 
        "description": "Mr. Hari Balachandran, CEO of ICT Academy, discussed the evolving digital economy and the role of education in humanitarian progress. He highlighted the need for bridging academia-industry gaps, fostering interdisciplinary learning, and empowering rural students with digital skills.", 
        "image": "/images/conclave/timeline/day1/hari_balachandran.JPG" 
    },
    { 
        id: 14, 
        title: "SPECIAL ADDRESS BY MR. HERBERT LWANGA", 
        description: "Mr. Herbert Lwanga, Chairman of IEEE HTB, shared insights on global humanitarian technology initiatives. He emphasized cross-border collaboration, ethical AI, and sustainable engineering solutions in addressing global challenges such as disaster management, clean energy, and digital inclusion.", 
        image: "/images/conclave/timeline/day1/herbert_lwanga.JPG" 
    },
    { 
        id: 15, 
        title: "CORPORATE SOCIAL RESPONSIBILITY & TECHNOLOGY", 
        description: "Mr. Stanley George from Hexaware Technologies discussed the role of CSR in humanitarian technology and how businesses are integrating sustainability into their models.", 
        image: "/images/conclave/timeline/day1/csr_tech.JPG" 
    }
],
  "Day 3": 
[
    {
        id: 15,
        title: "IEEE HKN Nu Eta Chapter Installation – A New Milestone",
        description: "The National Conclave on Humanitarian Technologies 2023 witnessed the historic installation of the IEEE HKN Nu Eta Chapter at Sri Sairam Engineering College. The ceremony inducted two professional and eleven student members, marking a commitment to technical innovation, ethical engineering, and leadership in IEEE activities.",
        image: "/images/conclave/timeline/day2/hkn_installation.JPG"
    },
    {
        id: 16,
        title: "Keynote Address by Mr. Sampath Kumar Veeraraghavan",
        description: "Mr. Sampath Kumar Veeraraghavan, IEEE HKN Global President and Chair of IEEE HTB Partnerships, emphasized the impact of IEEE HKN in shaping engineering leadership. He highlighted real-world examples where IEEE HKN members have driven innovation and humanitarian service.",
        image: "/images/conclave/timeline/day2/sampath_veeraraghavan.JPG"
    },
    {
        id: 17,
        title: "Fireside Chat with IEEE Global Leaders",
        description: "A high-profile Fireside Chat featured IEEE leaders discussing global collaboration, AI for humanitarian work, and industry trends. Speakers included Mr. Sampath Kumar Veeraraghavan, Mr. Herbert Lwanga, Mr. Marc Beebe, and Dr. Sai Prakash Leo Muthu.",
        image: "/images/conclave/timeline/day2/fireside_chat.JPG"
    },
    {
        id: 18,
        title: "Special Panel Discussion – 'Technology for Sustainable Humanitarian Development'",
        description: "A thought-provoking panel brought together industry leaders to discuss technology-driven sustainable solutions. Speakers included Mr. P.P. Shreyaas, Dr. C.R. Rene Robin, and Ms. Rajashri Sai, addressing AI, IoT, and social entrepreneurship in humanitarian efforts.",
        image: "/images/conclave/timeline/day2/panel_discussion.JPG"
    },
    {
        id: 19,
        title: "Valedictory Ceremony – Honoring Excellence and Commitment",
        description: "The conclave concluded with a powerful valedictory address by Mr. Sujith Kumar, Founder of Maatram Foundation, highlighting the role of CSR and engineering talent in solving humanitarian challenges through technology-driven social impact.",
        image: "/images/conclave/timeline/day3/valedictory.JPG"
    },
    {
        id: 20,
        title: "Closing Remarks & Vote of Thanks",
        description: "Dr. R. Sathish Kumar, Chief Business Officer, Sairam Institutions, delivered the vote of thanks, expressing gratitude to IEEE leadership, guest speakers, and volunteers. The event reinforced the message that technology, when driven by empathy, has the power to transform lives.",
        image: "/images/conclave/timeline/day3/vote_of_thanks.JPG"
    }
],
};

export default function VerticalTimeline() {
  const [selectedTimeline, setSelectedTimeline] = useState("Day 1");
  const [selectedImage, setSelectedImage] = useState(timelines[selectedTimeline][0]);

  return (
    <div className="w-full flex flex-col items-center p-6">
      {/* Navigation Bar */}
      <div className="flex gap-6 mb-6">
        {Object.keys(timelines).map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-lg font-semibold rounded-lg transition-all ${
              selectedTimeline === category ? "bg-gray-800 text-white" : "bg-gray-200"
            }`}
            onClick={() => {
              setSelectedTimeline(category);
              setSelectedImage(timelines[category][0]);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Timeline Section */}
      <div className="flex w-full max-w-6xl">
        {/* Left Content */}
        <div className="w-1/3 p-4">
          <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
          <p className="mt-2 text-gray-600">{selectedImage.description}</p>
        </div>

        {/* Middle Timeline (Vertical Thumbnails) */}
        <div className="w-1/10 flex flex-col items-center overflow-y-auto h-80 scrollbar-hide">
          {timelines[selectedTimeline].map((item) => (
            <motion.div
              key={item.id}
              className={`p-2 w-full cursor-pointer transition-all ${
                selectedImage.id === item.id ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(item)}
            >
              <img src={item.image} alt={item.title} className="w-full h-20 object-cover rounded-md" />
            </motion.div>
          ))}
        </div>

        {/* Right Large Image Display */}
        <div className="w-1/2 p-4">
          <motion.img
            key={selectedImage.id}
            src={selectedImage.image}
            alt={selectedImage.title}
            className="w-full h-80 object-cover rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}
