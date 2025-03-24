"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const timelines = {
  "Day 1": [
    { id: 1, title: "LIGHTING OF THE KUTHUVILAKKU", description: "The ceremonial lamp lighting was led by esteemed guests, symbolizing the illumination of knowledge and the commitment to humanitarian technology. Mr. Rajendran Dhandapani, along with Dr. Sai Prakash Leo Muthu and other dignitaries, marked this auspicious beginning.", image: "/images/conclave/timeline/day1/lightening.JPG" },
    { id: 2, title: "WELCOME ADDRESS", description: "Dr. K Porkumaran, Principal of Sri Sairam Engineering College and Chairman of IEEE Madras Section, delivered the welcome speech, emphasizing the significance of innovation and technology in humanitarian efforts.", image: "/images/conclave/timeline/day1/welcome_address.JPG" },
  ],
  "Day 2": [
    { id: 1, title: "HONORING THE CHIEF GUEST", description: "Mr. Rajendran Dhandapani, Director Engineering at Zoho Corporation, was honored for his outstanding contributions to technology. He is a visionary leader known for spearheading mobile development at Zoho and promoting alternative education through Zoho Schools of Learning.", image: "/images/conclave/guestofhonor/dhandapani.jpg" },
    { id: 2, title: "INAUGURAL SESSION", description: "Following the pre-inaugural activities, the formal inaugural session commenced with Thamizh Thai Vazhthu, the Tamil anthem, sung by the college choir. A warm welcome speech by Dr. Sai Prakash Leo Muthu, Chairman & CEO of Sairam Institutions, highlighting the role of educational institutions in promoting humanitarian technologies.", image: "/images/conclave/guestofhonor/sampathkumar_veeraraghavan.jpg" },
  ],
  "Day 3": [
    { id: 1, title: "Smart Cities", description: "Technology-driven urban landscapes.", image: "/images/urban1.jpg" },
    { id: 2, title: "Green Spaces", description: "Sustainable city planning.", image: "/images/urban2.jpg" },
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