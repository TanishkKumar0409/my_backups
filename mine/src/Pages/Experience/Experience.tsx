import { LuBook } from "react-icons/lu";
import { motion } from "framer-motion";
import UserData from "../../Data/UserData";
import PageBanner from "../../Components/PageBanner/PageBanner";
import MainHeadings from "../../UI/Headings/MainHeadings";
import ExperiencCard from "../../UI/Cards/ExperiencCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import EducationCard from "../../UI/Cards/EducationCard";
import CertificationCard from "../../UI/Cards/CertificationCard";

export default function Experience() {
  return (
    <>
      <PageBanner
        title="My Professional Journey"
        subtitle="Explore my experience, educational background, and certifications that have shaped my skills and career."
        icon={<LuBook />}
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MainHeadings
            heading="Work Experience"
            para="My professional journey and career milestones"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{
                clickable: true,
                dynamicBullets: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
              }}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {UserData?.experience?.map((experience, index) => (
                <SwiperSlide key={index} className="p-1">
                  <ExperiencCard experience={experience} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MainHeadings
            heading="My Education"
            para="  My academic journey and educational achievements"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{
                clickable: true,
                dynamicBullets: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
              }}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {UserData?.education?.map((edu, index) => (
                <SwiperSlide key={index} className="p-2">
                  <EducationCard edu={edu} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MainHeadings
            heading="Certifications & Awards"
            para="Professional certifications and achievements that validate my
            expertise"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {UserData?.certification?.map((cert, index) => (
              <CertificationCard cert={cert} key={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
