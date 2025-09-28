import { FaCalendarAlt } from "react-icons/fa";
import { itemVariants } from "../../Contexts/framer-varients";
import { motion } from "framer-motion";
import ImageViewModal from "../Modal/ImageViewModal";
import { useState } from "react";

export default function CertificationCard({ cert }: { cert: any }) {
  const [certificateModal, setCertificateModal] = useState(false);

  return (
    <>
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition-all group"
      >
        <div className="relative">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div
              className={`w-16 cursor-pointer flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
              onClick={() => setCertificateModal(true)}
            >
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
                alt=""
                className="object-cover aspect-square rounded-2xl shadow"
              />
            </div>

            <div className="text-right">
              <span className="inline-flex items-center text-sm font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                <FaCalendarAlt className="mr-1" />
                {cert.date}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="mb-4">
            <h3
              className="text-xl font-bold text-gray-900 mb-2 transition-colors 
             group-hover:text-transparent group-hover:bg-clip-text 
              group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:via-violet-600 group-hover:to-purple-600"
            >
              {cert.title}
            </h3>

            <h4 className="text-lg font-semibold text-gray-700 mb-3">
              {cert.issuer}
            </h4>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {cert.description}
            </p>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div>
                <span className="font-medium">ID:</span> {cert.credentialId}
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">Valid until:</span>
                <span className="text-green-600 font-semibold">
                  {cert.validUntil}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {certificateModal && (
        <ImageViewModal
          images={[
            {
              src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
            },
          ]}
          selectedImage={0}
          closeLightbox={() => setCertificateModal(false)}
        />
      )}
    </>
  );
}
