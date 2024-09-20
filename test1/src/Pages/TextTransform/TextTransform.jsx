import React, { useState } from "react";

export default function TextTransform() {
  const [Text, setText] = useState();

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleCase = (InputCase) => {
    if (InputCase === "lowerCase") {
      setText(Text.toLowerCase());
    } else if (InputCase === "upperCase") {
      setText(Text.toUpperCase());
    } else if (InputCase === "capitalize") {
      setText(
        Text.toLowerCase().replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
      );
    } else if (InputCase === "") {
      setText("");
    }
  };
  const PrimaryWidth = {
    "--width": "60%",
    "--left": "20%",
  };
  const SecondaryWidth = {
    "--width": "100%",
    "--left": "0",
  };

  const [width, setwidth] = useState(PrimaryWidth);

  const MouseOver = () => {
    setwidth(SecondaryWidth);
  };

  const MouseOut = () => {
    setwidth(PrimaryWidth);
  };

  return (
    <>
      <div className="container vh-100 d-flex align-items-center justify-content-center text-center">
        <div className="row">
          <div className="col">
            <div className="text-box rounded p-3 shadow">
              <div className="mb-3">
                <textarea
                  className="form-control shadow p-3 text-light"
                  rows={"5"}
                  id="textArea"
                  onChange={handleText}
                  value={Text}
                  placeholder="Please Write Here For Tranform"
                ></textarea>
                <label htmlFor="textArea"></label>
              </div>
              <div className="btn-box p-3 rounded shadow " style={width}>
                <button
                  className="btn btn-custom"
                  onMouseOver={MouseOver}
                  onMouseOut={MouseOut}
                  onClick={() => handleCase("upperCase")}
                >
                  UpperCase
                </button>
                <button
                  className="btn btn-custom ms-2"
                  onMouseOver={MouseOver}
                  onMouseOut={MouseOut}
                  onClick={() => handleCase("lowerCase")}
                >
                  LoweCase
                </button>
                <button
                  className="btn btn-custom ms-2"
                  onMouseOver={MouseOver}
                  onMouseOut={MouseOut}
                  onClick={() => handleCase("capitalize")}
                >
                  Capitalize
                </button>
                <button
                  className="btn btn-custom ms-2"
                  onMouseOver={MouseOver}
                  onMouseOut={MouseOut}
                  onClick={() => handleCase("")}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
