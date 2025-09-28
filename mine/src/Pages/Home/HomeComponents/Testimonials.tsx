import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFlip } from "swiper/modules";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import UserData from "../../../Data/UserData";

import TestimonialsCard from "../../../UI/Cards/TestimonialsCard";
import MainHeadings from "../../../UI/Headings/MainHeadings";

const Testimonials: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  useEffect(() => {
    setIsSwiperReady(true);
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MainHeadings
          heading="What Our Clients Say"
          para="Discover why clients love working with us"
        />

        <div className="relative">
          {isSwiperReady && (
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFlip]}
              effect="flip"
              flipEffect={{
                slideShadows: true,
                limitRotation: true,
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onSwiper={(swiper) => {
                if (
                  swiper.params.navigation &&
                  typeof swiper.params.navigation !== "boolean"
                ) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              }}
              loop={true}
              className="testimonial-swiper"
            >
              {UserData?.testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} >
                  <TestimonialsCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <button
            ref={prevRef}
            className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center transition-all duration-300 hover:shadow-md cursor-pointer"
          >
            <LuChevronLeft className="w-5 h-5 text-gray-600 transition-colors" />
          </button>

          <button
            ref={nextRef}
            className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center transition-all duration-300 hover:shadow-md"
          >
            <LuChevronRight className="w-5 h-5 text-gray-600 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
