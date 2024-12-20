import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Extra.css";

export default function Extra({ folderData }) {
  const [currentFolder, setCurrentFolder] = useState(folderData);
  const [folderStack, setFolderStack] = useState([]);
  const navigate = useNavigate(); // For navigation

  const handleFolderClick = (folder) => {
    setFolderStack([...folderStack, currentFolder]);
    setCurrentFolder(folder);
  };

  const handleBack = () => {
    const previousFolder = folderStack.pop();
    setCurrentFolder(previousFolder);
    setFolderStack([...folderStack]);
  };

  const handleFileClick = (file) => {
    navigate("/file-preview", { state: { file } });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {currentFolder?.type === "folder" && currentFolder?.children?.length > 0 ? (
          currentFolder?.children?.map((childData, index) => (
            <div
              className="col-6 col-md-3 d-flex flex-column align-items-center mb-4"
              key={index}
            >
              <div
                className="icon-container"
                onClick={() =>
                  childData.type === "folder"
                    ? handleFolderClick(childData)
                    : handleFileClick(childData) // Handle file click
                }
                style={{ cursor: "pointer" }}
              >
                {childData.type === "folder" ? "📁" : "📄"}
              </div>
              <span className="folder-name">{childData.name}</span>
            </div>
          ))
        ) : (
          <h5>
            {currentFolder.type === "file" ? "📄" : "📁"}
            <span>{currentFolder.name}</span>
          </h5>
        )}
      </div>
      {folderStack.length > 0 && (
        <button onClick={handleBack} className="btn btn-secondary mt-2">
          Back
        </button>
      )}
    </div>
  );
}
