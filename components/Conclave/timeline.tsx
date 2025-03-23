"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import { FaAngleDoubleRight, FaSearch } from "react-icons/fa";

const images = [
  "/images/members/24/harishvp.png",
  "/images/members/24/rahulv.png",
  "images/resource/special-3.jpg",
  "images/resource/special-1.jpg"
];

const thumbs = [
  "images/resource/special-thumb-3.jpg",
  "images/resource/special-thumb-1.jpg",
  "images/resource/special-thumb-2.jpg",
  "images/resource/special-thumb-4.jpg"
];

export default function SpecializeSection() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Title Column */}
          <div>
            <div className="text-left mb-6">
              <span className="text-gray-400 uppercase tracking-widest">Services</span>
              <h2 className="text-3xl font-bold mt-2">Our Specialization</h2>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Architectural Design</h4>
              <p className="mt-2 text-gray-600">
                Quality over quantity, so the saying goes. With so many concepts floating
                around the architectural profession, it can be difficult to keep up with
                all the ideas which you’re expected to know.
              </p>
              <p className="mt-2 text-gray-600">
                Far far away, behind the word mountains, far from the countries Vokalia
                and Consonantia, there live the blind texts. Separated they.It has
                survived not only five centuries. When an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="mt-4">
              <a href="#" className="text-blue-600 font-semibold flex items-center">
                Read More <FaAngleDoubleRight className="ml-2" />
              </a>
            </div>
          </div>

          {/* Carousel Column */}
          <div>
            <Swiper
              spaceBetween={10}
              navigation={true}
              modules={[Navigation, Thumbs]}
              className="mb-4"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <a href={src} className="lightbox-image">
                    <img src={src} alt="" className="rounded-lg shadow-lg w-full" />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              watchSlidesProgress
              modules={[Thumbs]}
              className="thumbs-carousel"
            >
              {thumbs.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="relative group cursor-pointer">
                    <img
                      src={src}
                      alt=""
                      className="rounded-lg shadow-md w-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaSearch className="text-white text-lg" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}