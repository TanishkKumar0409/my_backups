import React from "react";
import { motion } from "framer-motion";
import UserData from "../../../Data/UserData";
import { Link } from "react-router-dom";
import Accordion from "../../../UI/Accordion/Accordion";
import MainHeadings from "../../../UI/Headings/MainHeadings";

const FAQ: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <MainHeadings
          heading="Frequently Asked Questions"
          para="Common questions about my services and process"
        />

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="order-2 lg:order-1">
            {UserData?.faqs.map((faq) => (
              <Accordion
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative align-center">
              <img
                src={UserData?.faqImg}
                alt="FAQ"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent rounded-2xl"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-4">
                  Feel free to reach out. I'm here to help!
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
