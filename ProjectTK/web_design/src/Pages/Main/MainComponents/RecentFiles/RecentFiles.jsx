import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { noFileAPI } from "../../../../Services/API/API";

export default function RecentFiles() {
  const owlOptions = {
    loop: true,
    margin: 10,
    dots: true,
    items: 4,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
      1200: { items: 4 },
    },
  };

  const username = JSON.parse(localStorage.getItem("user"));

  const [data, setData] = useState([]);
  const [fileData, setFileData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await noFileAPI.get(`/storage/recent/${username}`);
        setData(response.data.recentFiles);
      } catch (error) {
        console.log(error.response.data.error);
      }
    };
    getData();
  }, [username]);

  useEffect(() => {
    const getFiles = async () => {
      try {
        if (data.length > 0) {
          const files = await Promise.all(
            data.map(async (element) => {
              const response = await noFileAPI.get(`/storage/file/single?username=${username}&folderId=${element.folderId}`);
              return response.data;
            })
          );
          setFileData(files);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getFiles();
  }, [data, username]);

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();

    const iconMap = {
      pdf: "fa-file-pdf",
      xlsx: "fa-file-excel",
      xls: "fa-file-excel",
      png: "fa-file-image",
      jpg: "fa-file-image",
      jpeg: "fa-file-image",
      gif: "fa-file-image",
      mp4: "fa-file-video",
      docx: "fa-file-word",
      doc: "fa-file-word",
      pptx: "fa-file-powerpoint",
      ppt: "fa-file-powerpoint",
      csv: "fa-file-csv",
      mp3: "fa-file-audio",
      html: "fa-file-code",
      css: "fa-file-code",
      js: "fa-file-code"
    };

    return iconMap[extension] || "fa-file-alt";
  };

  return (
    <>
      {fileData.length > 0 ? (
        <section>
          <div className="container py-5 mt-5 bg-white">
            <div className="row">
              <h2 className="text-center mb-4 mainHeading text-uppercase fw-bold" style={{ "--text": "'Recent Files'" }}>Recent Files</h2>
              <p className="px-5 text-center">
                Stay updated with the latest documents and resources in the Recent Files section, making it easy to access and manage your most relevant files.
              </p>
              <div className="col">
                <OwlCarousel className="owl-theme" {...owlOptions}>
                  {fileData.map((item, index) => (
                    <div className="item" key={index}>
                      <div className="cardCustom rounded-3 overflow-hidden bg-white">
                        <div className="cardCustomHead h-50 d-flex justify-content-center align-items-center">
                          <i className={`fa text-light fa-beat-fade ${getFileIcon(item.file?.root || 'default')}`}></i>
                        </div>
                        <div className="cardCustomBody h-50 d-flex justify-content-center align-items-center text-center p-4 flex-column">
                          <h2 className="fs-5 fw-bold text-break text-capitalize">{item.file?.root}</h2>
                          <button className="btn custom-btn btn-custom border-0 mt-3 overflow-hidden">View</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>
      ) : ""}
    </>
  );
}
