import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { useCallback } from "react";

interface ImagesProps {
  src: string;
}

interface ImageViewModalProp {
  images: ImagesProps[];
  selectedImage: number;
  closeLightbox: any;
  setSelectedImage?: any;
}

export default function ImageViewModal({
  images = [],
  selectedImage = 0,
  closeLightbox,
  setSelectedImage,
}: ImageViewModalProp) {
  const hasMultipleImages = images.length > 1;
  const isFirstImage = selectedImage === 0;
  const isLastImage = selectedImage === images.length - 1;

  const goToPrevious = useCallback(() => {
    if (!isFirstImage) {
      setSelectedImage(selectedImage - 1);
    }
  }, [selectedImage, isFirstImage, setSelectedImage]);

  const goToNext = useCallback(() => {
    if (!isLastImage) {
      setSelectedImage(selectedImage + 1);
    }
  }, [selectedImage, isLastImage, setSelectedImage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-90 flex items-center justify-center p-4"
      onClick={closeLightbox}
    >
      <div className="relative max-w-5xl max-h-full">
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          src={images[selectedImage]?.src}
          alt={images[selectedImage]?.src}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />

        <button
          onClick={closeLightbox}
          className="absolute top-4 right-4 w-10 h-10 bg-black/20 rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-colors backdrop-blur-sm"
        >
          <FaTimes />
        </button>

        {hasMultipleImages && !isFirstImage && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/20 rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-colors backdrop-blur-sm"
          >
            <FaChevronLeft />
          </button>
        )}

        {hasMultipleImages && !isLastImage && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/20 rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-colors backdrop-blur-sm"
          >
            <FaChevronRight />
          </button>
        )}

        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-white text-sm mt-2 bg-black/30 rounded-full px-4 py-2">
            {selectedImage + 1} of {images.length}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
