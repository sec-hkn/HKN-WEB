"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import timelines from "./timelineData";


export default function VerticalTimeline() {
  const [selectedTimeline, setSelectedTimeline] = useState("Day 1");
  const [selectedImage, setSelectedImage] = useState(timelines[selectedTimeline][0]);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const timelineRef = useRef(null);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  // Intersection Observer to check if component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of component is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    if (autoScroll && isInView) {
      intervalRef.current = setInterval(() => {
        const currentItems = timelines[selectedTimeline];
        const currentIndex = currentItems.findIndex(item => item.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % currentItems.length;
        setSelectedImage(currentItems[nextIndex]);
        
        // Scroll to the selected item within the timeline
        if (timelineRef.current) {
          const itemElement = timelineRef.current.children[nextIndex];
          if (itemElement) {
            itemElement.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'nearest'
            });
          }
        }
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoScroll, selectedImage, selectedTimeline, isInView]);

  const handleTimelineChange = (category) => {
    setSelectedTimeline(category);
    setSelectedImage(timelines[category][0]);
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000);
  };

  const handleItemClick = (item) => {
    setSelectedImage(item);
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000);
  };

  return (
    <div className="w-full flex flex-col p-10 items-center" ref={containerRef}>
      {/* Left-aligned Header Title */}
      <div className="w-full text-left">
        <h1 className="text-4xl font-bold mb-4 pt-4">Timeline</h1>
      </div>
      
      {/* Navigation Bar */}
      <div className="flex gap-6 mb-6">
        {Object.keys(timelines).map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-lg font-semibold rounded-lg transition-all ${
              selectedTimeline === category ? "bg-gray-800 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleTimelineChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Timeline Section */}
      <div className="flex w-full">
        {/* Left Content */}
        <div className="w-1/3 p-10">
          <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
          <p className="mt-2 text-gray-600">{selectedImage.description}</p>
        </div>

        {/* Middle Timeline (Vertical Thumbnails) */}
        <div 
          className="w-1/10 flex flex-col items-center overflow-y-auto h-[400px]"
          ref={timelineRef}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {timelines[selectedTimeline].map((item) => (
            <motion.div
              key={item.id}
              className={`p-2 w-full cursor-pointer transition-all ${
                selectedImage.id === item.id ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleItemClick(item)}
            >
              <img src={item.image} alt={item.title} className="w-full w-[120px] object-cover rounded-md" />
            </motion.div>
          ))}
        </div>

        {/* Right Large Image Display */}
        <div className="w-1/2 p-10">
          <motion.img
            key={selectedImage.id}
            src={selectedImage.image}
            alt={selectedImage.title}
            className="w-full w-[85%] object-cover rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}