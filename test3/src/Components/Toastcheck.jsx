import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastCheck() {
  const [clickedClass, setClickedClass] = useState(false);

  const handleSide = () => {
    setClickedClass((prev) => !prev);

    toast("Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true, // Set to true for closing the toast when clicked
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <section className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col">
            <ToastContainer />
            <button
              className={`d-flex justify-content-start align-items-center border-0 outline-0 bg-secondary-subtle  rounded-pill px-3 py-2 ${
                clickedClass ? "clicked" : ""
              }`}
              onClick={handleSide}
            >
              Click Me
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
