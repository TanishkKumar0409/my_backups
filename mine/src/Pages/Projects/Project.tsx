import { motion, AnimatePresence } from "framer-motion";
import {
  containerVariants,
  itemVariants,
} from "../../Contexts/framer-varients";
import MainHeadings from "../../UI/Headings/MainHeadings";
import UserData from "../../Data/UserData";
import ProjectCard from "../../UI/Cards/ProjectCard";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import ImageViewModal from "../../UI/Modal/ImageViewModal";
import PageBanner from "../../Components/PageBanner/PageBanner";
import { LuProjector } from "react-icons/lu";

export default function Project() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const allCategories = [
    ...new Set(UserData.gallery.map((item) => item.category)),
  ];

  const categories = [
    { id: "all", label: "All" },
    ...allCategories.map((cat) => ({
      id: cat,
      label: cat
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
    })),
  ];

  const images = UserData.gallery;

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <PageBanner
        title="My Projects & Portfolio"
        subtitle="Discover a curated selection of my past work, including detailed project highlights and a visual gallery showcasing the journey."
        icon={<LuProjector />}
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
      />
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <MainHeadings
            heading="Featured Projects"
            para="A showcase of my recent work and creative solutions"
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {UserData.projects.map((project: any, index: number) => (
              <ProjectCard project={project} key={index} />
            ))}
          </motion.div>
        </div>
      </section>
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <MainHeadings
              heading="Project Gallery"
              para="A showcase of my recent work and creative solutions"
            />
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 mb-5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 text-white shadow-lg"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                  } shadow`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                </motion.button>
              ))}
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {filteredImages.map((image, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative group cursor-pointer rounded-xl overflow-hidden shadow hover:shadow-md"
                      onClick={() => openLightbox(index)}
                    >
                      <div className="aspect-w-16 aspect-h-10">
                        <img
                          src={image.src}
                          alt={image.src}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <FaMagnifyingGlass className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
            {selectedImage && (
              <ImageViewModal
                images={filteredImages}
                selectedImage={selectedImage}
                closeLightbox={closeLightbox}
                setSelectedImage={setSelectedImage}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
