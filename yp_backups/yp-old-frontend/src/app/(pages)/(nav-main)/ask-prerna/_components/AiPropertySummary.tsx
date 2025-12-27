"use client";

import React, { useState } from "react";
import { PropertyProps } from "@/types/types";
import { generateSlug, stripHtmlNoLimit } from "@/contexts/Callbacks";
import {
  FaStar,
  FaCommentDots,
  FaArrowUpRightFromSquare,
  FaPaperPlane,
} from "react-icons/fa6";
import { LuTrendingUp, LuTrendingDown, LuImage, LuAward } from "react-icons/lu";
import Image from "next/image";
import { FaVolumeDown, FaVolumeUp } from "react-icons/fa";
import { useTextToSpeech } from "@/hooks/useTextToSpeech";

interface PropertySummaryProps {
  property: PropertyProps;
  setIsEnquiryModal: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AiPropertySummary = ({
  property,
  setIsEnquiryModal,
}: PropertySummaryProps) => {
  const [showFull, setShowFull] = useState(false);
  const { isSpeaking, speakText, stopSpeaking } = useTextToSpeech();

  const plainText = property?.property_description
    ? property.property_description.replace(/<[^>]+>/g, "")
    : "";

  const wordCount = plainText.trim().split(/\s+/).length;
  const shouldTruncate = wordCount > 50;

  const shortText = shouldTruncate
    ? plainText.split(/\s+/).slice(0, 50).join(" ") + "..."
    : plainText;

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl text-gray-800 sm:min-w-5xl flex flex-col justify-between">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
          <a
            href={property?.property_url}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 leading-snug hover:underline break-words"
          >
            {property.property_name}
          </a>

          {/* Listen button */}
          {property?.property_description && isSpeaking ? (
            <button
              className="bg-white hover:bg-gray-100 text-gray-700 p-2 rounded-full shadow-sm transition"
              onClick={stopSpeaking}
              title="Stop Speaking"
            >
              <FaVolumeDown className="w-5 h-5" />
            </button>
          ) : (
            <button
              className="bg-white hover:bg-gray-100 text-gray-700 p-2 rounded-full shadow-sm transition"
              onClick={() =>
                speakText(stripHtmlNoLimit(property?.property_description))
              }
              title="Speak Property Details"
            >
              <FaVolumeUp className="w-5 h-5" />
            </button>
          )}
        </div>

        <p className="mt-2 text-xs sm:text-sm text-gray-600 font-medium">
          {property.property_type || ""}
          {property.academic_type ? ` | ${property.academic_type}` : ""}
        </p>
        <p className="mt-1 text-xs sm:text-sm text-gray-700">
          {[
            property.property_city,
            property.property_state,
            property.property_country,
          ]
            .filter(Boolean)
            .join(", ")}
        </p>

        {/* Rank / Rating / Reviews */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 text-xs sm:text-sm items-center">
          <div className="flex items-center gap-1 bg-gray-50 px-2.5 py-1.5 rounded-lg text-gray-600">
            <h5>YP Rank:</h5>
            <div className="flex items-center gap-1">
              <p className="font-semibold">{property?.rank}</p>
              {(property?.rank || 0) < (property?.lastRank || 0) ? (
                <LuTrendingUp className="w-4 h-4 text-green-500" />
              ) : (
                <LuTrendingDown className="w-4 h-4 text-red-500" />
              )}
            </div>
          </div>

          {property.average_rating && (
            <a
              href={`/${generateSlug(
                property?.academic_type || "property"
              )}/${generateSlug(property.property_slug || "")}/reviews`}
              target="_blank"
              className="flex items-center gap-1 bg-gray-50 px-2.5 py-1.5 rounded-lg text-gray-600 hover:text-gray-800"
            >
              <FaStar className="text-yellow-500 w-4 h-4" />
              {property.average_rating.toFixed(1)}/5
            </a>
          )}

          {property?.total_reviews && (
            <a
              href={`/${generateSlug(
                property?.academic_type || "property"
              )}/${generateSlug(property.property_slug || "")}/reviews`}
              target="_blank"
              className="flex items-center gap-1 bg-gray-50 px-2.5 py-1.5 rounded-lg text-gray-600 hover:text-gray-800"
            >
              <FaCommentDots className="w-4 h-4" /> {property.total_reviews}{" "}
              reviews
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      {property?.property_description && (
        <div className="mt-4 min-h-[80px]">
          <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
            {showFull ? (
              <>
                <span
                  dangerouslySetInnerHTML={{
                    __html: property.property_description,
                  }}
                />
                {shouldTruncate && (
                  <button
                    onClick={() => setShowFull(false)}
                    className="text-blue-600 hover:text-blue-800 font-medium ml-1"
                  >
                    Read less
                  </button>
                )}
              </>
            ) : (
              <>
                <span
                  dangerouslySetInnerHTML={{
                    __html: shortText,
                  }}
                />
                {shouldTruncate && (
                  <button
                    onClick={() => setShowFull(true)}
                    className="text-blue-600 hover:text-blue-800 font-medium ml-1"
                  >
                    Read more
                  </button>
                )}
              </>
            )}
          </p>
        </div>
      )}

      {/* Courses Section */}
      {property?.courses?.length > 0 && (
        <div className="mt-10">
          <div className="flex items-center gap-2 mb-3">
            <LuAward className="text-gray-600 w-5 h-5" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-700">
              Courses Offered
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {property.courses.slice(0, 2).map((course, idx) => {
              // Detect featured image (support string or object)
              const featuredImage = course.image?.[0]
                ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/course/${course.image?.[0]}`
                : "/img/default-images/yp-yoga-courses.webp";

              return (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-200 shadow-sm bg-white hover:shadow-md transition-all overflow-hidden"
                >
                  {/* Featured Image */}
                  {featuredImage && (
                    <div className="w-full aspect-[2/1] relative">
                      <Image
                        src={featuredImage}
                        alt={course.course_name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Course Content */}
                  <div className="p-4">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
                      {course.course_name}
                    </h4>

                    <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                      {course.course_level && (
                        <p>
                          <span className="font-medium">Level:</span>{" "}
                          {course.course_level}
                        </p>
                      )}

                      {course.course_type && (
                        <p>
                          <span className="font-medium">Type:</span>{" "}
                          {course.course_type}
                        </p>
                      )}

                      {course.certification_type && (
                        <p>
                          <span className="font-medium">Certification:</span>{" "}
                          {course.certification_type}
                        </p>
                      )}

                      {course.duration && (
                        <p>
                          <span className="font-medium">Duration:</span>{" "}
                          {course.duration}
                        </p>
                      )}
                    </div>

                    {/* View Course Button */}
                    <a
                      href={`/course/${generateSlug(course.course_name)}`}
                      target="_blank"
                      className="mt-4 inline-flex items-center justify-center w-full px-3 py-2 text-xs sm:text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-all"
                    >
                      View Course
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Gallery & Certifications */}
      <div className="flex flex-col gap-8 sm:gap-10 mt-8">
        {/* Gallery */}
        {property?.gallery?.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <LuImage className="text-gray-600 w-5 h-5" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-700">
                Gallery
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
              {property.gallery.slice(0, 8).map((imgOrObj, idx) => {
                const imgSrc =
                  typeof imgOrObj === "string"
                    ? imgOrObj
                    : imgOrObj.gallery?.[0];
                if (!imgSrc) return null;

                return (
                  <a
                    key={idx}
                    href={`/${generateSlug(
                      property?.academic_type || "property"
                    )}/${generateSlug(property?.property_slug || "")}/gallery`}
                    target="_blank"
                    className="group relative w-full h-28 sm:h-36 block overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <Image
                      fill
                      src={imgSrc}
                      alt={`Gallery ${idx}`}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* Certifications */}
        {property?.certification?.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <LuAward className="text-gray-600 w-5 h-5" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-700">
                Certifications
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
              {property.certification.slice(0, 8).map((img, idx) => (
                <a
                  key={idx}
                  href={`/${generateSlug(
                    property?.academic_type || "property"
                  )}/${generateSlug(
                    property.property_slug || ""
                  )}/certifications`}
                  target="_blank"
                  className="group relative w-full h-28 sm:h-36 block overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <Image
                    src={img}
                    fill
                    alt={`Certification ${idx}`}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a
          href={property?.property_url}
          target="_blank"
          className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
        >
          <FaArrowUpRightFromSquare className="w-4 h-4" /> View Insitute
        </a>

        <button
          onClick={() => setIsEnquiryModal(property?.property_slug)}
          className="flex-1 flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 text-sm font-medium px-5 py-3 rounded-xl transition-colors"
        >
          <FaPaperPlane className="w-4 h-4" /> Enquiry
        </button>
      </div>
    </div>
  );
};
