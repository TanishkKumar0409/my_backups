import React from "react";
import { useLocation } from "react-router-dom";
import img from "../../Image/Summary.docx"

export default function FilePreview() {
    const location = useLocation();
    const { file } = location.state;

    const renderPreview = () => {
        if (!file) return <h5>No file selected</h5>;

        const fileType = file.name.split(".").pop().toLowerCase();

        switch (fileType) {
            case "jpg":
            case "jpeg":
            case "png":
            case "gif":
                return <img src={file.path} alt={file.name} className="img-fluid" />;
            case "mp4":
            case "webm":
                return <video src={file.path} controls className="video-fluid" />;
            case "mp3":
            case "wav":
                return <audio src={file.path} controls />;
            case "pdf":
                return <iframe src={img} title={file.name} className="w-100" style={{ height: "80vh" }} />;
            case "doc":
            case "docx":
            case "xls":
            case "xlsx":
                return <p>Preview not supported for Word/Excel files. Download to view.</p>;
            default:
                return <p>Preview not available for this file type.</p>;
        }
    };

    return (
        <div className="container mt-4">
            <h4>File Preview: {file?.name}</h4>
            <div className="preview-container mt-4">{renderPreview()}</div>
        </div>
    );
}
