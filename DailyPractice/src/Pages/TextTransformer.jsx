import React, { useState, useEffect } from "react";

export default function TextTransformer() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [spaceCount, setSpaceCount] = useState(0);

  // Update counts whenever text changes
  useEffect(() => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    setWordCount(words.length);
    setLetterCount(text.replace(/\s+/g, "").length);
    setSpaceCount((text.match(/\s/g) || []).length);
  }, [text]);

  return (
    <section className="view-container">
      <div className="view-card">
        <h2 className="view-card-title">Text Transformer</h2>
        <textarea
          name="text"
          id="text"
          className="text-area"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Enter your text here..."
        />
        <div className="button-container">
          <button
            className="view-button ms-3"
            onClick={() => {
              setText(text.toLowerCase());
            }}
          >
            Lowercase
          </button>
          <button
            className="view-button ms-3"
            onClick={() => {
              setText(text.toUpperCase());
            }}
          >
            Uppercase
          </button>
          <button
            className="view-button ms-3"
            onClick={() => {
              setText(
                text
                  .toLowerCase()
                  .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
              );
            }}
          >
            Capitalize
          </button>
          <button
            className="view-button ms-3"
            onClick={() => {
              setText("");
            }}
          >
            Reset
          </button>
        </div>
        <div className="text-info mt-3">
          <p>Word Count: {wordCount}</p>
          <p>Letter Count: {letterCount}</p>
          <p>Space Count: {spaceCount}</p>
        </div>
      </div>
    </section>
  );
}
