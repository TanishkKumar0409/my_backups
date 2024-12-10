import React from "react";
import Banner from "../../Components/Banner/Banner";
import RecentFiles from "../../Components/RecentFiles/RecentFiles";
import FileHistory from "../../Components/FileHistory/FileHistory";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <RecentFiles />
      <FileHistory />
      <Footer/>
    </>
  );
}
