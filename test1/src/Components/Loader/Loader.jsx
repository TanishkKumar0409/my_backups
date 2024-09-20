import React, { useEffect, useState } from "react";

export default function Loader() {
  const text = "...";
  const [index, setIndex] = useState(0);
  const [Display, setDisplay] = useState("");

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplay((item) => item + text[index]);
        setIndex(index + 1);
      }, 400);

      return () => clearTimeout(timer);
    } else {
      const ResetTimer = setTimeout(() => {
        setDisplay("");
        setIndex(0);
      }, 500);

      return () => clearTimeout(ResetTimer);
    }
  }, [index, text]);
  return (
    <>
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <h1 className="MainHeading">Loading{Display}</h1>
      </div>
    </>
  );
}
