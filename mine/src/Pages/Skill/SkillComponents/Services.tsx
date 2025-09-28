import React from "react";
import { motion } from "framer-motion";
import UserData from "../../../Data/UserData";
import { containerVariants } from "../../../Contexts/framer-varients";
import MainHeadings from "../../../UI/Headings/MainHeadings";
import ServiceCard from "../../../UI/Cards/ServiceCard";

const Services: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <MainHeadings
          heading="Services I Offer"
          para="Comprehensive solutions tailored to your needs"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {UserData.services.map((service, index) => (
            <ServiceCard service={service} key={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
