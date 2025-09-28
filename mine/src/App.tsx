import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip";
import "react-phone-input-2/lib/style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navigation/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./UI/Scroll/ScrollToTop";
import Skills from "./Pages/Skill/Skills";
import Experience from "./Pages/Experience/Experience";
import Project from "./Pages/Projects/Project";
import Blogs from "./Pages/Blogs/Blogs";
import BlogDetailPage from "./Pages/Blogs/BlogView";
import { motion } from "framer-motion";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <section className="bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 min-h-screen fixed flex items-center justify-center z-[-1] sdf w-screen overflow-hidden">
          <div className="relative  w-screen h-screen">
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-20 left-20 w-48 md:w-72 h-48 md:h-72 bg-indigo-400/50 rounded-full blur-3xl"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-20 right-20 w-64 md:w-96 h-64 md:h-96 bg-purple-400/50 rounded-full blur-3xl"
                animate={{
                  x: [0, -150, 0],
                  y: [0, 100, 0],
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-48 md:w-64 h-48 md:h-64 bg-violet-400/30 rounded-full blur-2xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </div>
        </section>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
