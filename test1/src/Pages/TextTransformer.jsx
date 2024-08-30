import React, { useState } from "react";

export default function TextTransformer() {
  const [text, setText] = useState("");

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  const handleCapitalize = () => {
    setText(text.toLowerCase().replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()));
  };

  const handleReset = () => {
    setText("");
  };

  const countWords = (str) => {
    return str
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  const countLetters = (str) => {
    return str.length; // Includes spaces
  };

  return (
    <>
      <section className="dark-theme">
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <h1 className="mb-5 text-center text-light">Text Transformer</h1>
              <div className="form-floating">
                <form>
                  <textarea
                    className="form-control dark-textarea"
                    placeholder="Please Enter any text"
                    id="floatingTextarea2"
                    value={text}
                    rows={"14"}
                    onChange={(e) => setText(e.target.value)}
                    name="text"
                  ></textarea>
                  <div className="my-3">
                    <button
                      className="btn btn-warning dark-btn"
                      type="button"
                      onClick={handleUppercase}
                    >
                      Uppercase
                    </button>
                    <button
                      className="btn btn-info ms-5 dark-btn"
                      type="button"
                      onClick={handleLowercase}
                    >
                      Lowercase
                    </button>
                    <button
                      className="btn btn-success ms-5 dark-btn"
                      type="button"
                      onClick={handleCapitalize}
                    >
                      Capitalize
                    </button>
                    <button
                      className="btn btn-danger ms-5 dark-btn"
                      type="button"
                      onClick={handleReset}
                    >
                      Reset
                    </button>
                  </div>
                  <div>
                    <p className="fw-bold fs-4 text-light">
                      There are {countWords(text)} Words and{" "}
                      {countLetters(text)} Characters
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
