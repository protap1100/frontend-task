import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Import your images
import image1 from "../assets/future-img/onee.avif";
import image2 from "../assets/future-img/two.avif";
import image3 from "../assets/future-img/three.avif";
import image4 from "../assets/future-img/four.avif";

const slides = [
  {
    id: 1,
    title: "Customer focused",
    heading: "Enhance customer experience",
    description:
      "Deliver exceptional financial experiences by putting customers at the center of your strategy.",
    image: image1,
  },
  {
    id: 2,
    title: "Agile and adaptable",
    heading: "Stay ahead with agility",
    description:
      "Adapt to market changes quickly with our cutting-edge financial solutions designed for flexibility.",
    image: image2,
  },
  {
    id: 3,
    title: "Compliance ready",
    heading: "Manage compliance with ease",
    description:
      "Navigate the regulatory landscape with confidence using AI-driven compliance management.",
    image: image3,
  },
  {
    id: 4,
    title: "Secure and safe",
    heading: "Unmatched security",
    description:
      "Ensure safety and reliability with our robust security solutions for financial transactions.",
    image: image4,
  },
];

const FutureSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-center">
      <h3 className="text-blue-500 uppercase text-sm">Technology built for you</h3>
      <h1 className="text-4xl font-bold text-gray-900">The future of finance</h1>

      {/* Navigation Tabs */}
      <div className="flex justify-center gap-4 mt-6">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => handleTabClick(index)}
            className={`px-4 py-2 text-sm rounded-full transition-all ${
              activeIndex === index
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {slide.title}
          </button>
        ))}
      </div>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="mt-10"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl p-8 gap-6 items-center">
              {/* Text Content */}
              <div className="md:w-1/2 text-left">
                <h3 className="text-blue-500 uppercase text-sm">{slide.title}</h3>
                <h1 className="text-3xl font-bold text-gray-900">{slide.heading}</h1>
                <p className="text-gray-600 mt-4">{slide.description}</p>
              </div>

              {/* Image */}
              <div className="md:w-1/2">
                <img src={slide.image} alt={slide.heading} className="rounded-lg shadow-md" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FutureSection;
